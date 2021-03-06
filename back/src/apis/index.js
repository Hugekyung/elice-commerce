import { userRouter } from "./user/userRouter";
import { productRouter } from "./product/productRouter";
import { likeRouter } from "./like/likeRouter"
import { orderRouter } from "./order/orderRouter"
import { cartRouter } from "./cart/cartRouter";
import { paymentRouter } from "./payment/paymentRouter"

const indexRouter = (app) => {
    app.use("/auth", userRouter);
    app.use("/products", productRouter);
    app.use("/orders", orderRouter);
    app.use("/liked", likeRouter);
    app.use("/carts", cartRouter);
    app.use("/payments", paymentRouter)
};

export { indexRouter };
