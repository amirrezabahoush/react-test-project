import MainLayout from 'layouts/Main';
import AuthLayout from 'layouts/Auth';
import Login from 'pages/Login';
import Dashboard from 'pages/Users';
import Profile from 'pages/Profile';

export const PrivateRoutes = {
  element: <MainLayout />,
  children: [
    { path: '/dashboard', element: <Dashboard/> },
    { path: '/profile', element: <Profile/> },
  ]
};

export const AuthRoutes = {
  element: <AuthLayout />,
  children: [
    { path: '/', element: <Login /> },
  ],
};
