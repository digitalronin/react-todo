import auth0 from 'auth0-js';

const auth0client = new auth0.WebAuth({
  domain: 'digitalronin.eu.auth0.com',
  audience: 'https://digitalronin.eu.auth0.com/userinfo',
  clientID: 'cEyXk6RGvRvmKYZRc9puI5QaSXMwR0t2',
  redirectUri: 'http://localhost:3000/callback',
  responseType: 'id_token',
  scope: 'openid profile email'
});

export function handleAuthentication() {
  return new Promise ((resolve, reject) => {
    auth0client.parseHash((err, authResult) => {
      if (err) return reject(err);
      if (!authResult || !authResult.idToken) {
        return reject(err);
      }
      const { idToken } = authResult;
      const profile = authResult.idTokenPayload;
      const expiresAt = profile.exp * 1000;
      resolve({
        authenticated: true,
        idToken,
        profile,
        expiresAt
      });
    });
  });
}

export function signIn() {
  auth0client.authorize();
}

export function signOut() {
  auth0client.logout({
    returnTo: 'http://localhost:3000',
    clientId: 'cEyXk6RGvRvmKYZRc9puI5QaSXMwR0t2'
  });
}
