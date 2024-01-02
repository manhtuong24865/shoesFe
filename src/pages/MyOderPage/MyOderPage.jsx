import * as OrderServices from "../../services/OrderServices";

import {
    WrapperContainer,
    WrapperFooterItem,
    WrapperHeaderItem,
    WrapperItemOrder,
    WrapperListOrder,
    WrapperStatus,
} from "./style";

import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";
import React, { useEffect } from "react";
import { convertPrice } from "../../utils";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useMutationHooks } from "../../hooks/useMutationHook";
import { message } from "antd";

const MyOderPage = () => {
    const location = useLocation();
    const { state } = location;
    const navigate = useNavigate()
    const fetchMyOrder = async () => {
        const res = await OrderServices.getOrderbyUserId(
            state?.id,
            state?.token
        );

        return res.data;
    };


    const queryOrder = useQuery(
        { queryKey: ["orders"], queryFn: fetchMyOrder, enabled: !!(state?.id && state?.token) },
    );

    const { isPending, data } = queryOrder;


    const mutation = useMutationHooks(
        (data) => {
            const { id, token, orderItems } = data
            const res = OrderServices.cancelOrder(id, token, orderItems)
            console.log('res', data)
            return res
        }
    )

    const handleCancelOrder = (order) => {
        console.log('order', order)
        mutation.mutate({ id: order._id, token: state?.token, orderItems: order?.orderItems }, {
            onSuccess: () => {
                queryOrder.refetch()
            }
        })
    }


    const { isPending: isPendingCancel, isSuccess: isSuccessCancel, isError: isErrorCancel, data: dataCancel } = mutation
    useEffect(() => {
        if (isSuccessCancel && dataCancel?.status === 'OK') {
            message.success()
        } else if (isErrorCancel) {
            message.error()
        }
    }, [isErrorCancel, isSuccessCancel])







    const renderProduct = (data) => {
        return data?.map((order) => {
            return (
                <WrapperHeaderItem>
                    <img
                        src={order?.image}
                        alt="order"
                        style={{
                            width: "70px",
                            height: "70px",
                            objectFit: "cover",
                            border: "1px solid rgb(238, 238, 238)",
                            padding: "2px",
                        }}
                    />
                    <div
                        style={{
                            width: 260,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            marginLeft: "10px",
                        }}
                    >
                        {order?.name}
                    </div>
                    <span
                        style={{ fontSize: "13px", color: "#242424", marginLeft: "auto" }}
                    >
                        {convertPrice(order?.price)}
                    </span>
                </WrapperHeaderItem>
            );
        });
    };

    const handleDetailsOrder = (id) => {
        navigate(`/details-order/${id}`, {
            state: {
                token: state?.token
            }
        })
    }

    return (
        <LoadingComponent isPending={isPending || isPendingCancel}>
            <WrapperContainer>
                <div style={{ width: "1270px", margin: "0 auto" }}>
                    <h4>Đơn hàng của tôi</h4>
                    <WrapperListOrder>
                        {data?.data?.map((order) => {
                            return (
                                <WrapperItemOrder key={order?._id}>
                                    <WrapperStatus>
                                        <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                                            Trạng thái
                                        </span>
                                        <div>
                                            <span style={{ color: "rgb(255, 66, 78)" }}>
                                                Giao hàng:{" "}
                                            </span>
                                            <span
                                                style={{
                                                    color: "rgb(90, 32, 193)",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                {`${order.isDelivered ? 'Đã giao hàng' : 'Chưa giao hàng'}`}
                                            </span>
                                        </div>
                                        <div>
                                            <span style={{ color: "rgb(255, 66, 78)" }}>
                                                Thanh toán:{" "}
                                            </span>
                                            <span
                                                style={{
                                                    color: "rgb(90, 32, 193)",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                {`${order.isPaid ? 'Đã thanh toán' : 'Chưa thanh toán'}`}

                                            </span>
                                        </div>
                                    </WrapperStatus>
                                    {renderProduct(order?.orderItems)}
                                    <WrapperFooterItem>
                                        <div>
                                            <span style={{ color: "rgb(255,68,78)" }}>
                                                Tổng tiền :
                                            </span>
                                            <span
                                                style={{
                                                    fontSize: "13px",
                                                    color: "rgb(56,61,61)",
                                                    fontWeight: "700",
                                                }}
                                            >
                                                {convertPrice(order?.totalPrice)}
                                            </span>
                                        </div>
                                        <div style={{ display: "flex", gap: "10px" }}>
                                            <ButtonComponent
                                                onClick={() => handleCancelOrder(order)}
                                                size={40}
                                                styleButton={{
                                                    height: "36px",
                                                    border: "1px solid rgb(11,116,229)",
                                                    borderRadius: "4px",
                                                }}
                                                textButton={"Hủy đơn hàng"}
                                                styleTextButton={{
                                                    color: "rgb(11,116,229)",
                                                    fontSize: "14px",
                                                }}
                                            ></ButtonComponent>
                                            <ButtonComponent
                                                onClick={() => handleDetailsOrder(order)}
                                                size={40}
                                                styleButton={{
                                                    height: "36px",
                                                    border: "1px solid rgb(11,116,229)",
                                                    borderRadius: "4px",
                                                }}
                                                textButton={"Xem chi tiết"}
                                                styleTextButton={{
                                                    color: "rgb(11,116,229)",
                                                    fontSize: "14px",
                                                }}
                                            ></ButtonComponent>
                                        </div>
                                    </WrapperFooterItem>
                                </WrapperItemOrder>
                            );
                        })}
                    </WrapperListOrder>
                </div>
            </WrapperContainer>
        </LoadingComponent>
    );
};
export default MyOderPage;
