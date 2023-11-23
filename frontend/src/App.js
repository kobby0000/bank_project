import React from "react";
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";

//Pages
import {
  Home,
  About,
  Business,
  Personal,
  Faq,
  Complaint,
  Contact,
  Login,
  Register,
  Profile,
  AnnualReport,
  PaypalScam
} from "./pages/Index";

//Layouts
import RootLayout from "./Layouts/RootLayout";
import ProfileLayout from "./Layouts/ProfileLayout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" >
      <Route element={<RootLayout/>}>

      <Route index element= {<Home />} />
      <Route path="/about" element= {<About />} />
      <Route path="/business" element= {<Business />} />
      <Route path="/personal" element= {<Personal />} />
      <Route path="/faq" element= {<Faq />} />
      <Route path="/complaints" element= {<Complaint />} />
      <Route path="/contact_us" element= {<Contact />} />
      <Route path="/login" element= {<Login />} />
      <Route path="/register" element= {<Register />} />
      <Route path="/annual-report" element= {<AnnualReport />} />
      <Route path="/paypal-scam" element= {<PaypalScam />} />
      </Route>
      <Route element={<ProfileLayout />}>
      <Route path="/profile" element= {<Profile />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
