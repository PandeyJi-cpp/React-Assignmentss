Assignment-03 all questions solutions 😊.
sign for question '=>' for answer '->' ok👍

=>What is a MicroService

->It is an application architecture style->it splits our app in multiple independent services each services like(db,payment,etc) each doing its own tash taling to each other via APIs,and finally mapping under one domain to form an app.in simple words it is an seperation of concerns based on single responsibility principle.

=>What is Monolith architecture?

->it is an old application architecture style it builds and project as single,unifed project, all components UI,BE,DB are tightly coupled and together.agar button ka color bhi change krte the to poora project firse deploy krna padta tha isme HMR wgrh bhi nhi hota tha.

=>What is the difference between Monolith and Microservice?

-># Monolithic vs Microservices

| Feature / Aspect            | Monolithic | Microservices |
|-----------------------------|------------|---------------|
| **Speed of Development**     | Slower – small changes require redeploying the entire app | Faster – each service can be developed, tested, and deployed independently|
|**Engineering Workflow**     | All engineers work on the same codebase → higher chance of conflicts | Engineers can work on their own services/projects → independent development |
| **Scalability & Maintenance**   | Hard to scale & maintain | Easier to scale & maintain |
| **Device / Platform Friendliness** | Less flexible | More flexible & device-friendly |
| **Debugging / Testing**         | Harder – bugs in one part can affect the whole system | Easier – services can be tested/debugged individually |
| **Time Consumption**            | More time-consuming due to rebuild/redeploy | Less time-consuming due to independent deploys |
| **Local Development Setup**     | All engineers work on same system / laptop | Engineers work on their own systems independently |

=>Why do we need a useEffect Hook?

->it is used to perform side tasks like:-
👉fetching APIs.
👉subscribing to events.
👉updating the DOM mannualy.
👉setting timers like (setTimeout,setIntervals).
⭐**If we dont use useEffect then our UI reppresents in this way**
Initial Render
      ↓
  useEffect runs
      ↓
   Fetch API
      ↓
  Data received
      ↓
    setState
      ↓
  Component Re-render
      ↓
 Actual data displayed

=>What is Optional Chaining?

->Optional chaining is  a safe way to access nested object properties or values returned from APIs without causing runtime errors.
👉if propterty exists->it returns value.
👉if property doesn't exits->it returns undefined.

=>What is Shimmer UI?

->Shimmer UI is a placeholder or a skeleton of the real UI that is displayed while the actual data if being fetched from an API.
key points->
>shows loading placeholders instead of blank space.
>improves the user experience by giving the impression that content is loading.
>once the data arrives->placeholders are replaced by actual UI.

=>What is the difference between JS expression and JS statement

->Expression = produces a value.
Statement = performs an action                                                                                                                                              
=>What is Conditional Rendering, explain with a code example

->Conditional rendering is a technique in React where a component renders different UI depending on a condition.

Agar condition true hai → ek component render
Agar condition false hai → dusra component render ya nothing

=>What is CORS?

->CORS stands for (course origin resource sharing) it is  an browser security policy that prevents fetching data from another domain without the server's permission.

=>What is async and await?

->async and await are the special js features that make working with promise easier and more readable
async->makes a function asynchronous,which always returns a promise.
await->pauses execution of a async function until the promise resolves or reject.

=> What is the use of `const json = await data.json();` in getRestaurants()

->use of `const json = await data.json();` in getRestaurents() is to get data from json bcoz whatever data come from backend through API stored in const json so if we want to access that data we habve to use `const json = await data.json();` in getRestaurent().
                                                                   /*Assignment-03 Completed*/