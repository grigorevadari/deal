1. **Difference between Component and PureComponent:**
    - regular component rerenders each time its props/state changes. 
    - and PureComponent performs a shallow comparison of properties and states to determine if rerendering is needed. 
    - if you mutate props, side effects may occur, since pure components should not change the input data, the mutation may cause unpredictable behavior
    - also u have to use useMemo/ react.memo ,or it would be rerendered even if props has not changed and PureComponents should not be used with state managers(just passing the props)
    - PureComponent will compare complicated props by reference, without deep comparing, so in case complex/large-scale objects in props, and the changes did not occur at the top level, the component will not be redrawn

2. **Danger of Context + ShouldComponentUpdate:**
    - shouldComponentUpdate does not include checking for context changes, this may cause updates due to changes in context to be lost
    - implementing shouldComponentUpdate with checking for context changes if the context has a complex structure, it can lead to unpredictable behavior in component because the checking can be very extensive
    - this can create circular dependencies, if the component is updated when the context changes, and the context is updated when the state of the component changes, this can lead to endless update loops

3. **Ways to pass information from a component to its parent:**
    - callback functions
    - context
    - state managers

4. **Ways to prevent components from re-rendering:**
    - useCallback, useMemo, react.memo, PureComponent(but you need to use it wisely, if the props are complex, comparison may be “more expensive” than re-rendering)

5. **What is a fragment and why do we need it:**
    - Fragment is a component in React that allows you to group child elements without creating additional layers of DOM nodes
    - fragments can create accessibility issues, especially if they contain information that must be accessible to users with disabilities

6. **Examples of the HOC pattern:**
    - components for handling authentication, logging, code splitting, loading

7. **Difference in handling exceptions in promises, callbacks, and async...await:**
    - Promises support chaining
    - Promises uses 'catch' to handle error cases and they are  caught by the nearess 'catch ' block
    - in callbacks error are typically handled as the 'err' argument 
    - (someAsyncFunction((err, result) => {
      if (err) {
      // handle error
      }).
    -  in async functions errors are handled with try...catch blocks, which gives a synchronous way to handle exceptions

8. **setState arguments and why it's async:**
    - setState function takes 2 arguments
    - first - can be an object containing the partial state that you want to update or a function that returns such an object
    - second argument - optional callback function that will be executed when setState has been successfully completed and the component has been rerendered
    - its async because of batching in react, so basically react batches state updates and performs them asynchronously to prevent unnesesary rerenders

9. **Steps needed to migrate a Class to Function Component:**
    - create a new function component with the same name
    - copy the logic from the render
    - remove the class declaration, constructor, lifecycle methods
    - convert state and lifecycle methods to hooks
    - refactor the usage of props to access them directly as arguments
    - 

10. **Ways styles can be used with components:**
    - inline 
    - modules
    - global styles css file
    - styled components
    - tailwind
    - SCSS
    - bootstrap, MUI...

11. **Rendering an HTML string coming from the server:**
    - there is a danger here - the XSS threat. HTML content must be stripped or escaped, otherwise an attacker could inject traditional JavaScript code into the text
    - injection can also occur, you can inject a script this way 
    - and if the HTML content includes sensitive data such as personal information or passwords, rendering that content may leak it
    - so we have to do
    - Sanitization - DOMPurify.sanitize(html)
    - Escaping - html.replace(/</g, '&lt;').replace(/>/g, '&gt;');\
    - check for script html.includes('<script>')
    - Content Security Policy
    - 
