"use client";
import React, { useState } from "react";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  googleLogout,
  CredentialResponse,
} from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"; // Import jwt-decode correctly for TypeScript

const clientId =
  "1013158826556-sl7ggkmc960eru1hv7fjdch52kunjfkt.apps.googleusercontent.com";

// Define a type for the decoded token based on expected fields
interface DecodedToken {
  name?: string;
  email?: string;
  // Add any additional fields here as needed
}

function GoogleAuth() {
  const [user, setUser] = useState<CredentialResponse | null>(null); // State for the user response
  const [decodedToken, setDecodedToken] = useState<DecodedToken | null>(null); // State for decoded token

  const onLoginSuccess = (credentialResponse: CredentialResponse) => {
    console.log("LOGIN SUCCESS! Credential response: ", credentialResponse);
    setUser(credentialResponse);

    try {
      const decoded = jwtDecode<DecodedToken>(
        credentialResponse.credential || ""
      ); // Decode JWT token
      setDecodedToken(decoded); // Set decoded token state
      console.log("Decoded token: ", decoded); // Log decoded token for reference
    } catch (error) {
      console.error("Token decoding failed: ", error);
    }
  };

  const onLoginFailure = () => {
    console.log("LOGIN FAILED!");
  };

  const handleLogout = () => {
    googleLogout();
    setUser(null); // Clear user state on logout
    setDecodedToken(null); // Clear decoded token state on logout
    console.log("Logout successful!");
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div>
        <h1>Google Auth with React</h1>
        {user ? (
          <div>
            <p>Welcome, {decodedToken?.name || decodedToken?.email}</p>
            <button onClick={handleLogout}>Logout</button>
            {/* Display decoded token */}
          </div>
        ) : (
          <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginFailure} />
        )}
      </div>
    </GoogleOAuthProvider>
  );
}

export default GoogleAuth;
