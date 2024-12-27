# Firebase onAuthStateChanged Listener Race Condition

This repository demonstrates a potential race condition with the Firebase `onAuthStateChanged` listener.  Under rapid changes in authentication state (login/logout), the listener can miss events, leading to inconsistent state within your application.

## Reproduction

1. Clone this repository.
2. Install the necessary Firebase dependencies: `npm install firebase`
3. Configure your Firebase project and replace placeholders in `firebaseBug.js`.
4. Run `npm start` to launch the application.
5. Rapidly log in and out using a Firebase-supported authentication method (e.g., email/password).
6. Observe the console logs to see that the authentication state may not reflect the actual state. This is the race condition in action.

## Solution

The provided `firebaseBugSolution.js` offers a solution implementing debouncing to mitigate the race condition, allowing time for the listener to catch up before reacting to further authentication changes.