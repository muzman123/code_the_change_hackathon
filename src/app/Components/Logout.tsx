import React from "react";
import { GoogleOAuthProvider, googleLogout } from "@react-oauth/google";

const clientId =
  "1013158826556-sl7ggkmc960eru1hv7fjdch52kunjfkt.apps.googleusercontent.com";

function Logout() {
  const handleLogout = () => {
    googleLogout();
    console.log("Logout successful!");
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div id="signOutButton">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Logout;
