import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
//import "./component/ui/index.jsx"

function App() {
  const [data, setData] = useState([]);
  const [loader,setLoader]=useState(true);
  const [err,setError] = useState("");
  const [input,setChange]= useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products");

       const result = await res.json();
      // const formattedObject = {
      //   data:array,
      //   status:array.lenghth>0?
      //   200 : 400
      // }
      setError(res.status)
      setChange()
      setData(result.products);
      setLoader(false);
    };

    fetchData();
  }, []);

  return (
    loader?<><h1>Page Loading.....</h1></>:
    err!=200?<><h1>Api is failed</h1></>:
    <div>
    <div className="head">
      <h1 >PRODUCT GALLERY</h1><br/>
     </div>
     <input id="in" value={input} onChange={(e)=> setChange(e.target.value)}/>
     <label>{input}</label>
    <div className="container">
      
      {data.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.thumbnail} alt={product.title} width="200" />
          <h2>{product.title}</h2>
          <p id ="des">{product.description}</p>
          <p id ="price">PRICE ${product.price}</p>
          <a
               href={
                  "https://razorpay.com/payment-pages/"
                }
                target="_blank"
                rel="noreferrer"
              >
                BUY NOW
              </a>
              
        </div>
      ))}
    </div></div>
  );
}

export default App;

// import {useState} from "react";
// import Title from "./Title.jsx";

// function App()
// {
//   const [count,setCount] = useState(0);
//   return(
//     <>
//     <Title count={count}/>
//     <button onClick={()=>setCount(count+1)}>Click Me</button>
//     </>
//   );
// }
// export default App;

// import React from "react";
// import { useState,useEffect } from "react";
// function App()
// {
//      const [form, setForm] = useState({
//   firstName: "", email: "", age: "",
// });
// const [submitted, setSubmitted] = useState(null);
 
//   function handle(event) {
//     const { name, value } = event.target;
//     setForm((previous) => ({ ...previous, [name]: value }));
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     setSubmitted({ ...form });
//   }


//   return (
//     <div style={{ display: "flex", gap: "40px", alignItems: "flex-start" }}>
//       <form onSubmit={handleSubmit}>
//         <input
//           name="firstName"
//           value={form.firstName}
//           onChange={handle}
//           placeholder="First name"
//         />
//         <br /><br />

//         <input
//           name="email"
//           type="email"
//           value={form.email}
//           onChange={handle}
//           placeholder="Email"
//         />
//         <br /><br />

//         <input
//           name="age"
//           type="number"
//           value={form.age}
//           onChange={handle}
//           placeholder="Age"
//         />
//         <br /><br />

//         <button type="submit">Submit</button>
//       </form>

//       <div>
//         <h3>Submitted values</h3>
//         {submitted ? (
//           <>
//             <p>First name: {submitted.firstName}</p>
//             <p>Email: {submitted.email}</p>
//             <p>Age: {submitted.age}</p>
//           </>
//         ) : (
//           <p>Submit the form to see the values.</p>
//         )}
//         </div>
//         </div>
// )

// }
// export default App