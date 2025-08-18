Assignment-03 all questions solutions 😊.
sign for question '=>' for answer '->' ok👍

=>Is JSX mandatory for React

->No,JSX is not mandatory for React.We can also write React without JSX,by eg. React.CreateElement();.

=>Is ES6 is mandatory for React

->No,is is not mandatory for React,it is just a version of JS React can also be written in ES5 version of JS.

=>{TitleComponent} vs {<TitleComponent/>} vs
{<TitleComponent></TitleComponent>} in JSX

->first one is just taking ref odf title component it will not render it, second one calling react component other curly bracess are useless bcoz <TitleComponent/> is already a jsx so there is no need of '{}' it is for JS.Third one is same as second.

=>How can I write comments in JSX?

->way to write comment in JSX => /*xyz*/.

=>What is <React.Fragment></React.Fragment> and <></> ?

->it is basically a kind of wrapper which is used to wrap multiple statements.in simple words it works like div but it is not div,div attached as new node in DOM but <></> will not attached to DOM as new node.

=>What is Virtual DOM?

->Virtual DOM is a lightweight JavaScript representation of the Real DOM. Whenever we update anything in our code, React first updates the Virtual DOM and then uses the diffing algorithm to check which parts need to be updated in the Real DOM. ✅

=>What is Reconciliation in React?

->It is  a process used to update real DOM efficiently whenever sonething changed in UI.In shortreconciliation=Virtual DOM diffing + real DOM efficient update.

=>What is React Fiber

->React Fiber,It is an new engine that makes app faster,smoother,and more responsive by allowing asynchornous rendering of and priotizing tasks.

=>🔹 Why we need keys in React?

->React uses a process called Reconciliation (deciding what to update in the DOM).

When we render a list of elements (e.g., using .map()), React needs a way to identify each item uniquely.

If no keys are provided: React assumes all elements might have changed, so it may re-render the entire list, which is slow.

If keys are provided: React uses the key to track which item is new, changed, or removed, so it updates only the necessary parts of the DOM.

🔹 When do we need keys in React?

Mostly when rendering lists of components/elements (using .map()).

Example: Rendering 10 restaurant cards, a list of todos, comments, or products.

Keys help React differentiate each element.

=>Can we use index as keys in React?

->Yes,But it does not considered as good practice.why not reasons are given below:-
👉Reordering Issue->suppose if we take index as key and after it we changed any component order then the order of whole list gets changed.
👉Performance->if we take index as key then our React unecessarily re-render whole list instead of updating only single item.
👉UI Bugs->by eg. agar input de rhe ho form main to type khin kroge values fill khin hongi.
kahan use kr skte hain=>
👉List static hai, kabhi reorder ya update nahi hoti.
👉Small temporary list hai jisme performance ya bugs ka risk nahi hai.

=>What is props in React? Ways to 

->props,basically they are properties transfer from parents to children.
ways to do it->
👉direct "props" as a argument pass krke props.property_name; krke use krlo.
👉destructuring in function parameter har property ka name as a parameter pass krdo 
👉destrcturing in function body.
👉default props argument ki jgh pe hi prop define kro.ki agar kuch nhi kiya hai to by default yhi hoga.
👉children prop ->kai cheezon ko ek main wrap krlo aur use props.children krke use krlo.isse us wrapper ke andar jo bhi hoga wo render kr jaega.

=>What is config driven UI?

->"Config Driven UI is a design approach where the structure and behavior of the UI are dynamically generated from a configuration (JSON or object). Instead of hard-coding components, the UI adapts based on the config, making it reusable, scalable, and easy to update without changing the core code." ✅
🔹 Benefits

Dynamic UI – Change config → UI changes automatically.

Reusable Components – Ek hi Card component 100 jagah kaam aayega.

Separation of Concerns – Data (config) alag, UI rendering logic alag.

Scalability – Large UIs ko easily maintain aur update kar sakte ho.

                                                                   /*Assignment-02 Completed*/