import * as UserServices from "./services/UserServices";
import React, { Fragment, useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import DefalutComponent from './components/DefaultComponent/DefaultComponent'
import LoadingComponent from "./components/LoadingComponent/LoadingComponent"
import { isJsonString } from './utils'
import { jwtDecode } from 'jwt-decode'
import { routes } from './routes'
import { updateUser } from './redux/slice/UserSlice'
import { resetUser } from './redux/slice/UserSlice'

function App() {
  const dispatch = useDispatch();
  const [isPending, setIsPending] = useState(false)
  const user = useSelector((state) => state.user)



  useEffect(() => {
    setIsPending(true)
    const { storageData, decoded } = handleDecoded()
    if (decoded?.id) {
      handleGetDetailsUser(decoded?.id, storageData)
    }
    setIsPending(false)
  }, [])




  const handleDecoded = () => {
    let storageData = user?.access_token || localStorage.getItem('access_token')
    let decoded = {}
    if (storageData && isJsonString(storageData) && !user?.access_token) {
      storageData = JSON.parse(storageData)
      decoded = jwtDecode(storageData)
    }
    return { decoded, storageData }

  }


  UserServices.axiosJWT.interceptors.request.use(async (config) => {
    // Do something before request is sent
    const currentTime = new Date()
    const { decoded } = handleDecoded()
    if (decoded?.exp < currentTime.getTime() / 1000) {
      const data = await UserServices.refreshToken()
      config.headers['token'] = `Bearer ${data?.access_token}`
    }
    return config;
  }, (err) => {
    return Promise.reject(err);
  });


  const handleGetDetailsUser = async (id, token) => {
    let storageRefreshToken = localStorage.getItem('refresh_token')
    const refreshToken = JSON.parse(storageRefreshToken)
    const res = await UserServices.getDetailsUser(id, token)
    dispatch(updateUser({ ...res?.data, access_token: token, refreshToken: refreshToken }))
  }
  return (
    <div>
      <LoadingComponent isPending={isPending}>
        <Router>
          <Routes>
            {routes.map((route) => {
              const Page = route.page
              // const isCheckAuth = !route.isPrivate || user.isAdmin
              const Layout = route.isShowHeader ? DefalutComponent : Fragment
              return (
                <Route path={route.path} key={route.path} element={
                  <Layout>
                    <Page />
                  </Layout>
                } />
              )
            }
            )}
          </Routes>
        </Router>
      </LoadingComponent>
    </div>
  )
}

export default App
