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
} from "./pages/Index";

//Layouts
import RootLayout from "./Layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element= {<Home />} />
      <Route path="/about" element= {<About />} />
      <Route path="/business" element= {<Business />} />
      <Route path="/personal" element= {<Personal />} />
      <Route path="/faq" element= {<Faq />} />
      <Route path="/complaints" element= {<Complaint />} />
      <Route path="/contact_us" element= {<Contact />} />
      <Route path="/login" element= {<Login />} />
      <Route path="/register" element= {<Register />} />
      <Route path="/profile" element= {<Profile />} />
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
