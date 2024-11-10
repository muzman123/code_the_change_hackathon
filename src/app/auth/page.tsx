"use client";

import React, { useState } from "react";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  googleLogout,
  CredentialResponse,
} from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";

const clientId =   "1013158826556-sl7ggkmc960eru1hv7fjdch52kunjfkt.apps.googleusercontent.com"; // Replace with your actual Google Client ID

// Define a type for the decoded token based on expected fields
interface DecodedToken {
  name?: string;
  email?: string;
}

function GoogleAuth() {
  const [user, setUser] = useState<CredentialResponse | null>(null);
  const [decodedToken, setDecodedToken] = useState<DecodedToken | null>(null);

  const onLoginSuccess = async (credentialResponse: CredentialResponse) => {
    console.log("LOGIN SUCCESS! Credential response:", credentialResponse);
    setUser(credentialResponse);

    try {
      // Decode the JWT token
      const decoded = jwtDecode<DecodedToken>(credentialResponse.credential || "");
      setDecodedToken(decoded);
      console.log("Decoded token:", decoded);

      // Check if the user exists in the database; if not, add them
      if (decoded.email && decoded.name) {
        const response = await fetch("/api/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: decoded.name, email: decoded.email }),
        });
      
        if (response.ok) {
          const data = await response.json();
          console.log("User saved or found:", data);
        } else {
          const errorData = await response.json();
          console.error("Failed to check/create user:", errorData);
        }
      }
    } catch (error) {
      console.error("Token decoding or API call failed:", error);
    }
  };

  const onLoginFailure = () => {
    console.log("LOGIN FAILED!");
  };

  const handleLogout = () => {
    googleLogout();
    setUser(null);
    setDecodedToken(null);
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
          </div>
        ) : (
          <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginFailure} />
        )}
      </div>
    </GoogleOAuthProvider>
  );
}

export default GoogleAuth;