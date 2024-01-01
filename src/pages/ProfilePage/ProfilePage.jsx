import React, { useEffect, useState } from "react";
import InPutForm from "../../components/InPutForm/InPutForm";
import { WrapperContentProfile, WrapperHeader, WrapperInput, WrappperLabel } from "./style";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import * as UserServices from "../../services/UserServices";
import { useMutationHooks } from "../../hooks/useMutationHook";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";
import * as message from "../../components/Message/Message"
import { updateUser } from "../../redux/slice/UserSlice";


const ProfilePage = () => {
    const user = useSelector((state) => state.user)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [avatar, setAvatar] = useState('')
    const dispatch = useDispatch()
    const mutation = useMutationHooks(
        (data) => {
            const { id, access_token, ...rests } = data
            UserServices.updateUser(id, rests, access_token)
        }
    )
    const { data, isPending, isSuccess, isError } = mutation


    useEffect(() => {
        setEmail(user?.email)
        setName(user?.name)
        setPhone(user?.phone)
        setAddress(user?.address)
        setAvatar(user?.avatar)

    }, [user])
    useEffect(() => {
        if (isSuccess) {
            message.success()
            handleGetDetailsUser(user?.id, user?.access_token)
        } else if (isError) {
            message.error()
        }
    }, [isSuccess, isError])
    const handleGetDetailsUser = async (id, token) => {
        const res = await UserServices.getDetailsUser(id, token)
        dispatch(updateUser({ ...res?.data, access_token: token }))
    }

    const handleOnchangeEmail = (value) => {
        setEmail(value)
    }
    const handleOnchangeName = (value) => {
        setName(value)
    }
    const handleOnchangePhone = (value) => {
        setPhone(value)
    }
    const handleOnchangeAddress = (value) => {
        setAddress(value)
    }
    const handleOnchangeAvatar = (value) => {
        setAvatar(value)
    }
    const handleUpdate = () => {
        mutation.mutate({ id: user?.id, email, name, phone, address, avatar, access_token: user?.access_token })

    }
    return (
        <div style={{ width: '1170px', margin: '0 auto', height: '500px' }}>
            <WrapperHeader>Thông tin người dùng</WrapperHeader>
            <LoadingComponent isPending={isPending}>
                <WrapperContentProfile>
                    <WrapperInput>
                        <WrappperLabel htmlFor="name">Name</WrappperLabel>
                        <InPutForm style={{ width: '300px' }} id="name" value={name} onChange={handleOnchangeName} />
                        <ButtonComponent
                            onClick={handleUpdate}
                            size={40}
                            styleButton={{
                                height: '30px',
                                width: 'fit-content',
                                border: '1px solid rgb(26, 148, 255)',
                                BorderRadius: '4px',
                                padding: '2px 6px 6px',
                            }}
                            textButton={'Cập nhật'}
                            styleTextButton={{ color: 'rgb(26, 148, 255)', fontSize: '15px', fontWeight: '700' }}
                        >
                        </ButtonComponent>
                    </WrapperInput>
                    <WrapperInput>
                        <WrappperLabel htmlFor="email">Email</WrappperLabel>
                        <InPutForm style={{ width: '300px' }} id="email" value={email} onChange={handleOnchangeEmail} />
                        <ButtonComponent
                            onClick={handleUpdate}
                            size={40}
                            styleButton={{
                                height: '30px',
                                width: 'fit-content',
                                border: '1px solid rgb(26, 148, 255)',
                                BorderRadius: '4px',
                                padding: '2px 6px 6px',
                            }}
                            textButton={'Cập nhật'}
                            styleTextButton={{ color: 'rgb(26, 148, 255)', fontSize: '15px', fontWeight: '700' }}
                        >
                        </ButtonComponent>
                    </WrapperInput>
                    <WrapperInput>
                        <WrappperLabel htmlFor="phone">Phone</WrappperLabel>
                        <InPutForm style={{ width: '300px' }} id="phone" value={phone} onChange={handleOnchangePhone} />
                        <ButtonComponent
                            onClick={handleUpdate}
                            size={40}
                            styleButton={{
                                height: '30px',
                                width: 'fit-content',
                                border: '1px solid rgb(26, 148, 255)',
                                BorderRadius: '4px',
                                padding: '2px 6px 6px',
                            }}
                            textButton={'Cập nhật'}
                            styleTextButton={{ color: 'rgb(26, 148, 255)', fontSize: '15px', fontWeight: '700' }}
                        >
                        </ButtonComponent>
                    </WrapperInput>
                    <WrapperInput>
                        <WrappperLabel htmlFor="address">Address</WrappperLabel>
                        <InPutForm style={{ width: '300px' }} id="address" value={address} onChange={handleOnchangeAddress} />
                        <ButtonComponent
                            onClick={handleUpdate}
                            size={40}
                            styleButton={{
                                height: '30px',
                                width: 'fit-content',
                                border: '1px solid rgb(26, 148, 255)',
                                BorderRadius: '4px',
                                padding: '2px 6px 6px',
                            }}
                            textButton={'Cập nhật'}
                            styleTextButton={{ color: 'rgb(26, 148, 255)', fontSize: '15px', fontWeight: '700' }}
                        >
                        </ButtonComponent>
                    </WrapperInput>
                    {/* <WrapperInput>
                        <WrappperLabel htmlFor="avatar"></WrappperLabel>
                        <InPutForm style={{ width: '300px' }} id="avatar" value={avatar} onChange={handleOnchangeAvatar} />
                        <ButtonComponent
                            onClick={handleUpdate}
                            size={40}
                            styleButton={{
                                height: '30px',
                                width: 'fit-content',
                                border: '1px solid rgb(26, 148, 255)',
                                BorderRadius: '4px',
                                padding: '2px 6px 6px',
                            }}
                            textButton={'Cập nhật'}
                            styleTextButton={{ color: 'rgb(26, 148, 255)', fontSize: '15px', fontWeight: '700' }}
                        >
                        </ButtonComponent>
                    </WrapperInput> */}

                </WrapperContentProfile>
            </LoadingComponent>
        </div>
    )
}
export default ProfilePage