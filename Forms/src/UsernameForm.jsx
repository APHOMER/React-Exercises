import { useState } from "react";


function UsernameForm() {
    const [username, setUsername] = useState("MAercyAp");

    const editingMode = (event) => {
        // console.log(event.target.value)
        setUsername(event.target.value)
    }

    const signUpClick = () => {
        console.log("Welcome " + username);
    }

    return (
        <>
            <div>
                <label htmlFor="username">Enter Username</label>
                <input type="text" placeholder="username" id="username" value={username} onChange={editingMode} /> {/*The ID must match "htmlFor" in the Label */}
                {/* <button onClick={editingMode}>Submit</button> */}
                <button onClick={signUpClick}>Submit</button>
            </div>
        </>
    );

}

export default UsernameForm;