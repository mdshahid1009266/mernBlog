import { useState } from "react";



export default () => {
    const [cata, setcatagory] = useState(0);
    const handelClick = (e) => {
        setcatagory(e);
        console.log(e);
    }
    return (
        <div className="text">
            <button onClick={(e) => setcatagory(cata + 1)}>Submit</button>
            <h1>
                {cata}
            </h1>
        </div>
    )
}


