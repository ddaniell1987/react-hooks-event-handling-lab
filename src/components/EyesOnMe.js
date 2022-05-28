import React from "react";

function EyesOnMe(){
    return(
        <button onFocus={() => console.log("Hey! Eyes on me")}
        onBlue={()=> console.log("Good!")}>Eyes on me</button>
    )
}
export default EyesOnMe;