<script lang="ts">
  import * as OTPAuth from 'otpauth'
  import { initializeApp } from "firebase/app";

  // TODO: move api key out of file being put on repository
  // like seriously this is very dangerous
  const firebaseConfig = {
    apiKey: "AIzaSyBiUP1mz_aaOomVD9-tCaVHuO0IZ9_wIpg",
    authDomain: "authenticator-95365.firebaseapp.com",
    projectId: "authenticator-95365",
    storageBucket: "authenticator-95365.appspot.com",
    messagingSenderId: "87407968965",
    appId: "1:87407968965:web:5125d61b2cb8d1c4db66ac"
  };

  initializeApp(firebaseConfig);

  let secret: string;
  let token: string;

  function genToken() {
    token = new OTPAuth.TOTP({secret: secret}).generate()
  }
</script>

<!--
{token}
<input type="password" bind:value={secret} />
<button on:click={genToken}>Submit</button>
-->