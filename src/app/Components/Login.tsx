import React from "react";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  CredentialResponse,
} from "@react-oauth/google";

const clientId =
  "1013158826556-sl7ggkmc960eru1hv7fjdch52kunjfkt.apps.googleusercontent.com";

function Login() {
  // Specify types for the responses
  const onSuccess = (credentialResponse: CredentialResponse) => {
    console.log("LOGIN SUCCESS! Credential response: ", credentialResponse);
  };

  // Remove the parameter for onFailure or ensure it aligns with the expected signature
  const onFailure = () => {
    console.log("LOGIN FAILED!");
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div id="signInButton">
        <GoogleLogin onSuccess={onSuccess} onError={onFailure} />
      </div>
    </GoogleOAuthProvider>
  );
}

export default Login;
