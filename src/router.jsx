import { createBrowserRouter } from 'react-router-dom';

import BaseLayout from './routes/layouts/base-layout/BaseLayout';
import Home from './routes/home/Home';
import HotelsSearch from './routes/listings/HotelsSearch';
import AboutUs from './routes/about-us/AboutUs';
import UserProfile from './routes/user-profile/UserProfile';
import Login from './routes/login/Login';
import Register from './routes/register/Register';
import HotelDetails from './routes/hotel-details/HotelDetails';
import ForgotPassword from './routes/forgot-password/ForgotPassword';
import Checkout from './routes/checkout/Checkout';
import BookingConfirmation from './routes/booking-confimation/BookingConifrmation';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'hotels', element: <HotelsSearch /> },
      { path: 'about-us', element: <AboutUs /> },
      { path: 'user-profile', element: <UserProfile /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'hotel/:hotelId', element: <HotelDetails /> },
      { path: 'forgot-password', element: <ForgotPassword /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'booking-confirmation', element: <BookingConfirmation /> },
    ],
  },
]);
