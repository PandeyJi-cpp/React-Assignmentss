Assignment-03 all questions solutions 😊.
sign for question '=>' for answer '->' ok👍

=>What is the difference between Named Export, Default export and * as export?

->
>Named export->can be used multiple times in a file,to import it we use '{}'.
>Default export->can only be used once in a file,no need of '{}' to import it.
>*as->it exports multiple named file in a single object,by eg. ||import *as math from "./file1"||;,ab isme file 1 main jitne bhi named export hain unhe ye math name ke ek obj. main store krke export kr dega.

=>What is the importance of config.js file

->it is important bcoz:
>centralized configuration->saara data ek hi jagah mil jaega to kabhi future main agar kuch change krne honge to problem nhi hogi.
>config driven UI->we can change our UI just by changing Data.
>mock data for development->API ready nahi hai tab tak tum dummy/mock data config file me store karke UI test kar sakte ho.
Later jab API ready ho jaaye, sirf config ya data source change karna hota hai.
>Easier Maintenance & Scalability
👉Jab project bada ho jaata hai, sab config ek file (ya multiple config files) me rakhna code ko clean banata hai.
👉Har component me hard-coded cheezein likhne ki zaroorat nahi.

=>What are React Hooks?

->special functions which allows us to manage state,handling lifecycle events,allows context consuming,forming refs,and many more utilities functions,etc.
>in simple words they are just an js utility function.

=>Why do we need a useState Hook?

->use to update our UI.
some function which it performs:-
👉To make UI dynamic.
👉supports auto re-rendering.function call hote hi,React component ko dobara render karega aur UI update ho jayegi.
👉functional component main state management.phele sirf class component main hi state mnage ho pata tha hooks ne functional components main bhi ye feature add kr diya.
👉component specific data.

                                                                   /*Assignment-03 Completed*/