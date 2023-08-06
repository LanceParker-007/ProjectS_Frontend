import "./App.scss";
import Landingpage from "./landingpage/Landingpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Signupform from "./signupform/Signupform";
// import Signinform from "./signinform/Signinform";

// //Importing components
// import Explore from "./AppScreens/Explore/Explore";
// import Profile from "./AppScreens/Profile/Profile";
// import Subscription from "./AppScreens/Subsriptions/Subscription";
// import Chats from "./AppScreens/Chats/Chats";
// import FullChat from "./AppScreens/Chats/LastChat/FullChat/FullChat";

//Suspense Loader
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Suspense } from "react";

//Immporting theme from MaterialUi

const Variants = () => {
  return (
    <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>
  );
};

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={Variants}>
          <Routes>
            <Route path="/" element={<Landingpage />} />
            {/* <Route path="/signup" element={<Signupform />} />
            <Route path="/signin" element={<Signinform />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/subscriptions" element={<Subscription />} />
            <Route path="/chats" element={<Chats />} />
            <Route path="/chats/:chatId" element={<FullChat />} /> */}
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
