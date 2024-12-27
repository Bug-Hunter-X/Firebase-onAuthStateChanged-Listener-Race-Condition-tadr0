The solution involves debouncing the authentication state updates to prevent multiple rapid calls. This allows the listener to process each authentication change before handling the next one.

```javascript
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
let debounceTimeout;

onAuthStateChanged(auth, (user) => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    // Process user authentication state here.
    if (user) {
      console.log('User signed in:', user);
    } else {
      console.log('User signed out');
    }
  }, 100); // Adjust debounce delay as needed
});
```