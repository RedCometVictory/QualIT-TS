import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import Spinner from '../UI/Spinner';

const AdminRoutes = () => {
// const AdminRoutes = ({ component: Component, ...rest}) => {
  // const userAuth = useSelector(state => state.auth);
  // const { isAuthenticated, userInfo, loading } = userAuth;
  // if (loading) return <main className='container'><Spinner /></main>

  // return isAuthenticated && userInfo && userInfo.role === 'admin' ? <main className='container'><Component {...rest} /></main> : <Navigate to="/login" />;
  return (
    <div className="">Admin</div>
  )
};
export default AdminRoutes;

// {/* <Route path="/" element={<Landing />} />
//             <Route element={<MainRoutes />}>
//               <Route path="/register" element={<Register />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/shop" element={<Product />} />
//               <Route path="/product/:prod_id" element={<ProductDetail />} />
//               <Route path="/cart" element={<Cart />} />
//               <Route path="/forgot-password" element={<ForgotPassword />} />
//               <Route path="/reset-password" element={<ResetPassword />} />
//               <Route path="/shipping-address" element={<Shipping />} />
//               <Route path="/confirm-order" element={<ConfirmOrder />} />
//               <Route path="/payment" element={<PaymentContainer />} />
//               <Route path="/success" element={<OrderSuccess />} />
//               <Route path="/*" element={<NotFound />} />
//             <Route
//               path="/orders"
//               element={<PrivateRoute component={Orders} />}
//             />
//             <Route
//               path="/order/:order_id/detail"
//               element={<PrivateRoute component={OrderDetail} />}
//             />
//             <Route
//               path="/profile"
//               element={<PrivateRoute component={Profile} />}
//             />
//             <Route
//               path="/map"
//               element={<PrivateRoute component={Map} />}
//             />

//             {/* ADMIN /}
//             <Route
//               path="/admin/slide/list"
//               element={<AdminRoute component={AdminSlideList} />}
//             />
//             <Route
//               path="/admin/slide/create"
//               element={<AdminRoute component={AdminSlideCreate} />}
//             />
//             <Route
//               path="/admin/slide/:slide_id/detail"
//               element={<AdminRoute component={AdminSlideDetail} />}
//             />
//             <Route
//               path="/admin/image/list"
//               element={<AdminRoute component={AdminImageList} />}
//             />
//             <Route
//               path="/admin/image/:image_id/detail"
//               element={<AdminRoute component={AdminImageDetail} />}
//             />
//             <Route
//               path="/admin/product-list"
//               element={<AdminRoute component={AdminProductList} />}
//             />
//             <Route
//               path="/admin/product/create"
//               element={<AdminRoute component={AdminProductCreate} />}
//             />
//             <Route
//               path="/admin/product/:prod_id/detail"
//               element={<AdminRoute component={AdminProductDetail} />}
//             />
//             <Route
//               path="/admin/user-list"
//               element={<AdminRoute component={AdminUserList} />}
//             />
//             <Route
//               path="/admin/user/:user_id"
//               element={<AdminRoute component={AdminUserDetail} />}
//             />
//             <Route
//               path="/admin/order-list"
//               element={<AdminRoute component={AdminOrders} />}
//             />
//             <Route
//               path="/admin/order/:order_id/detail"
//               element={<AdminRoute component={AdminOrderDetail} />}
//             /> */}