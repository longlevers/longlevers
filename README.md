Used npx create-react-app

Used https://jsonplaceholder.typicode.com, a free Fake Online REST API for Testing and Prototyping.
You can even POST to it and receive a response with your new object as though the new object was actually created on the server (it is just pretending though).

When to use redux? When you want to share state between components.
User interaction (click) causes an action that creates a dispatch action to redux. A reducer then kicks in, which receives the current state and returns a new state to the store. The component(s) re-render this new state.
