import { useState } from "react";

export default function temp1() {
    const [ state, setState ] = useState("shahid");
    const handelChenge = (e) => {
        setState(e.target.value)
    }
    return (
        <>
            <input type="text" value={"shahid"} onChange={handelChenge} />
            <p>{state}</p>
        </>
    )
}