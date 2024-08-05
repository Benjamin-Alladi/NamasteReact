import { useState } from "react";


function Form()
{
    let [text, setText]= useState("");
    let [status, setStatus]= useState("empty");
    
    function handleInput(e)
    {
        setText(e.target.value);
    }

    if(status==="success")
    {
        return <h1>Success!</h1>
    }
    return(
        <div className="container">

            <h1>Contact Us</h1>
            
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="ta">
                    <textarea name="" id="" cols="50" rows="5" onInput={handleInput} placeholder="Enter your message here..." value={text}>
                    </textarea>
                </label>

                <input type="submit" value="Submit" disabled={text.length===0}/>
            </form>
            {status==="error" && "Please enter even number of Characters!"}
            {status==="pending" && "Sending"}
        </div>
    );

    async function handleSubmit(e)
    {
        e.preventDefault();
        setStatus("pending");
        console.log(1,status);

        let response=await new Promise((resolve, reject) => {
            setTimeout(()=>{
                if(text.length%2===0)
                {
                    setStatus("success");
                }
                else
                {
                    setStatus("error");
                }
                console.log(2,status);
            },5000);
        })

        console.log("async function completed", status);
    }
}

export default Form;