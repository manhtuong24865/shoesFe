import React from 'react'
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import * as OrderServices from "../../services/OrderServices"
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { WrapperContainer, WrapperFooterItem, WrapperHeaderItem, WrapperItemOrder, WrapperListOrder, WrapperStatus } from './style';
import { convertPrice } from "../../utils";
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { useLocation } from 'react-router-dom';






const MyOderPage = () => {
    const location = useLocation()
    const { state } = location
    console.log('location', location)
    const fetchMyOrder = async () => {
        const res = await OrderServices.getOrderbyUserId(state?.id, state?.access_token)
        console.log('res', res)
        return res.data
    }

    const queryOrder = useQuery({ queryKey: ['orders'], queryFn: fetchMyOrder, config: { enabled: state?.id && state?.token } }
    )
    const { isPending, data } = queryOrder
    let dataKeys = Object.keys(data || {})
    console.log('data', data)
    const renderProduct = (dataKeys) => {
        return dataKeys?.map((order) => {
            return <WrapperHeaderItem>
                <img src={order?.image}
                    style={{
                        width: '70px',
                        height: '70px',
                        objectFit: 'cover',
                        border: '1px solid rgb(238, 238, 238)',
                        padding: '2px'
                    }} />
                <div style={{
                    width: 260,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    marginLeft: '10px'
                }}>
                    {data?.name}
                </div>
                <span style={{ fontSize: '13px', color: '#242424', marginLeft: 'auto' }}>{convertPrice(data?.price)}</span>
            </WrapperHeaderItem>

        })
    }

    return (

        <LoadingComponent isPending={isPending}>
            <WrapperContainer>
                <div style={{ width: '1270px', height: '100vh', margin: '0 auto' }}>
                    <h4>Đơn hàng của tôi</h4>
                    <WrapperListOrder>
                        {dataKeys?.map((order) => {
                            return (
                                <WrapperItemOrder
                                    key={order?._id}
                                >
                                    <WrapperStatus>
                                        <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Trạng thái</span>
                                        <div>
                                            <span style={{ color: 'rgb(255, 66, 78)' }}>Giao hàng: </span>
                                            <span style={{ color: 'rgb(90, 32, 193)', fontWeight: 'bold' }}>
                                                {/* {`${order.isDelivered ? 'Đã giao hàng' : 'Chưa giao hàng'}`} */}
                                                chưa giao hàng
                                            </span>
                                        </div>
                                        <div>
                                            <span style={{ color: 'rgb(255, 66, 78)' }}>Thanh toán: </span>
                                            <span style={{ color: 'rgb(90, 32, 193)', fontWeight: 'bold' }}>
                                                {/* {`${order.isPaid ? 'Đã thanh toán' : 'Chưa thanh toán'}`} */}
                                                chưa thanh toán
                                            </span>
                                        </div>
                                    </WrapperStatus>
                                    {renderProduct(order?.orderItems)}
                                    <WrapperFooterItem>
                                        <div>
                                            <span style={{ color: 'rgb(255,68,78)' }}>
                                                Tổng tiền :
                                            </span>
                                            <span style={{ fontSize: '13px', color: 'rgb(56,61,61)', fontWeight: '700' }}>
                                                {convertPrice(data?.totalPrice)}
                                            </span>
                                        </div>
                                        <div style={{ display: 'flex', gap: '10px' }}>
                                            <ButtonComponent
                                                // onClick={() => handleCanceOrder(order)}
                                                size={40}
                                                styleButton={{
                                                    height: '36px',
                                                    border: '1px solid rgb(11,116,229)',
                                                    borderRadius: '4px'
                                                }}
                                                textButton={'Hủy đơn hàng'}
                                                styleTextButton={{ color: 'rgb(11,116,229)', fontSize: '14px' }}
                                            >
                                            </ButtonComponent>
                                            <ButtonComponent
                                                // onClick={() => handleDetailsOrder()}
                                                size={40}
                                                styleButton={{
                                                    height: '36px',
                                                    border: '1px solid rgb(11,116,229)',
                                                    borderRadius: '4px'
                                                }}
                                                textButton={'Xem chi tiết'}
                                                styleTextButton={{ color: 'rgb(11,116,229)', fontSize: '14px' }}
                                            >
                                            </ButtonComponent>
                                        </div>
                                    </WrapperFooterItem>
                                </WrapperItemOrder>
                            )
                        })
                        }
                    </WrapperListOrder>
                </div >
            </WrapperContainer>
        </LoadingComponent >
    )
}
export default MyOderPage