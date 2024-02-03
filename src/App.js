import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Pages/Root";
import LoginPage from "./Pages/Login/Login";
import RegisterPage from "./Pages/Register/Register";
import AccountDetails from "./Pages/AccountDetails/AccountDetails";
const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      { path: "", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/account_details", element: <AccountDetails /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
