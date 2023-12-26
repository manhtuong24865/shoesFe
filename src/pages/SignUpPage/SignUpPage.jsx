import React, { useEffect, useState } from "react";
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextContainerRight, WrapperTextLight } from "./style";
import InPutForm from "../../components/InPutForm/InPutForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import * as UserServices from "../../services/UserServices";
import { useMutationHooks } from "../../hooks/useMutationHook";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";
import * as message from "../../components/Message/Message"


const SignUpPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [isShowConfilmPassword, setIsShowConfilmPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const mutation = useMutationHooks(
        data => UserServices.SignUpUser(data)
    )
    const { data, isPending, isSuccess, isError } = mutation
    useEffect(() => {
        if (isSuccess) {
            message.success()
            handleNavigateSignIn()
        } else if (isError) {
            message.error()
        }

    }, [isSuccess, isError])
    const handleOnchangeEmail = (value) => {
        setEmail(value)
    }
    const handleOnchangePassword = (value) => {
        setPassword(value)
    }
    const handleOnchangeConfirmPassword = (value) => {
        setConfirmPassword(value)
    }
    const navigate = useNavigate()
    const handleNavigateSignIn = () => {
        navigate('/sign-in')
    }
    const handleSignUp = () => {
        mutation.mutate({
            email,
            password,
            confirmPassword
        })
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.53)', height: '100vh' }}>
            <div style={{ display: 'flex', width: '800px', height: '350px', borderRadius: '6px', background: '#fff' }}>

                <WrapperContainerLeft>
                    <h2 style={{ textAlign: 'center' }}>ĐĂNG KÍ</h2>
                    <InPutForm style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" value={email} onChange={handleOnchangeEmail} />
                    <div style={{ position: 'relative' }}>
                        <span
                            onClick={() => setIsShowPassword(!isShowPassword)}

                            style={{
                                zIndex: 10,
                                position: 'absolute',
                                top: '4px',
                                right: '8px',
                            }}
                        >{
                                isShowPassword ? (
                                    <EyeFilled />
                                ) : (
                                    <EyeInvisibleFilled />
                                )
                            }
                        </span>
                        <InPutForm style={{ marginBottom: '10px' }} placeholder="Mật khẩu" type={isShowPassword ? "text" : "password"} value={password} onChange={handleOnchangePassword} />

                    </div>
                    <div style={{ position: 'relative' }}>
                        <span
                            onClick={() => setIsShowConfilmPassword(!isShowConfilmPassword)}

                            style={{
                                zIndex: 10,
                                position: 'absolute',
                                top: '4px',
                                right: '8px',
                            }}
                        >{
                                isShowConfilmPassword ? (
                                    <EyeFilled />
                                ) : (
                                    <EyeInvisibleFilled />
                                )
                            }
                        </span>
                        <InPutForm placeholder="Nhập lại Mật khẩu" type={isShowConfilmPassword ? "text" : "password"} value={confirmPassword} onChange={handleOnchangeConfirmPassword} />

                    </div>
                    {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message}</span>}
                    <LoadingComponent isPending={isPending}>
                        <ButtonComponent
                            disabled={!email.length || !password.length || !confirmPassword.length}
                            onClick={handleSignUp}
                            size={40}
                            styleButton={{
                                background: 'rgb(255, 57, 69)',
                                height: '48px',
                                width: '100%',
                                border: 'none',
                                BorderRadius: '4px',
                                margin: '26px 0 10px'
                            }}
                            textButton={'ĐĂNG KÍ'}
                            styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                        >
                        </ButtonComponent>
                    </LoadingComponent>
                    <p>Bạn đã có tài khoản ? <WrapperTextLight onClick={handleNavigateSignIn}>ĐĂNG NHẬP</WrapperTextLight></p>
                </WrapperContainerLeft>
                <WrapperContainerRight>
                    <div>
                        <h2 style={{ paddingTop: '30px' }}>KHÁCH HÀNG MỚI</h2>
                        <WrapperTextContainerRight>
                            Bằng cách tạo tài khoản bạn có thể mua sắm nhanh hơn và nhiều chương trình mua sắm ưu đãi hơn dành riêng cho khách hàng thân thiết.
                        </WrapperTextContainerRight>
                        <WrapperTextContainerRight>
                            Hỗ Trợ khách hàng tốt hơn, khi bạn đăng kí thành viên, bạn có thể nhận được hỗ trợ khách hàng tốt hơn từ website.
                        </WrapperTextContainerRight>

                    </div>
                </WrapperContainerRight>
            </div>
        </div>
    )
}
export default SignUpPage