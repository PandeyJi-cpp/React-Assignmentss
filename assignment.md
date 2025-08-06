Assignment-03 all questions solutions 😊.
sign for question '=>' for answer '->' ok👍

=>what is JSX

->JSX stands for JAVASCRIPT XML.
basically it is a syntax extension of JS used in React.
>it allows you to write HTML-like syntax in JS
>it looks like HTML but it works like JS.

=>superpowers of JSX

->here are its superpowers
>Improves code Readability.
>looks like HTML so beginner friendly.
>automatically converted by babel.
>allows to embed dynamic logic by directly using '{JS code}'.
>component friendly
>prevent Cross-Site Scripting (XSS).

=>Role of type attribute in script tag? What options can I use there?                         
-> To specify the scripting language or script format the browser should expect.

| Type               | Description                                                                       |
| ------------------ | --------------------------------------------------------------------------------- |
| `text/javascript`  | Default value. JS execute hota hai. Even if na likho, ye maana jata hai.          |
| `module`           | JavaScript module system ke liye. Supports `import`/`export`.                     |
| `text/jsx`         | JSX code ke liye (usually handled by tools like Babel)                            |
| `application/json` | JavaScript nahi — sirf JSON data ke liye (like config)                            |
| `text/babel`       | Babel ke through JSX ya ES6 JS transpile karne ke liye                            |
| `text/typescript`  | TypeScript code ke liye (only with bundlers like Parcel, not directly in browser) |

=>{TitleComponent} vs {<TitleComponent/>} vs
{<TitleComponent></TitleComponent>} in JSX

-> first one can be a normal js expression or can be a react element it depends on its way of defining it.if it is component then it will not render its just giving a refrence of a function.
  second one it is just equals to <TitleComponent/> bcoz jsx supports <component_name/> so,wrapping it in "{}" is unecessary.definately it will also work properly but there is no need to wrap it.
third is just equal to second one.It is just the expanded form of second one.

🧑‍💻CODING ASSIGNMENT🧑‍💻

=>Pass attributes into the tag in JSX

-> const lala=<h1 style={{ color: 'blue' , fontFamily:'italic' }}>Hello baby what's up</h1>;
outer {}->for js expression
inner {}->JS object for inline CSS.

=>Composition of Component(Add a component inside another)

->const lala=()=>(
    <p>kaun ho bhai</p>
);

const baby=()=>(
    <>
    <lala/>
    <p>Aapke father aae hain 😎 😂</p>
</>
    );