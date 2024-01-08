import { useState } from "react";


function BetterSignupForm() {
    const [formData, setFormData] = useState({ 
        firstName: "", 
        lastName: "", 
        password: "", 
        nickname: "" 
    });

    const onHandleChange = (event) => {
        const changedField = event.target.name;
        const newValue = event.target.value;
        // setFormData((currData) => {
        //     currData[changedField] = newValue;
        //     return { ...currData };
        // });

        setFormData((currData) => {
            return { 
                ...currData ,
                [changedField]: newValue,
            };
        });
    };

    const onSubmit = () => {
        // console.log(firstName, lastName);
        console.log(formData);
    };

    return (
        <div>
            <label htmlFor="firstname">First Name</label>
            <input 
                type="text" 
                placeholder="firstname" 
                value={formData.firstName} 
                onChange={onHandleChange}
                id="firstname"
                name="firstName"
            />
            <label htmlFor="lastname">Last Name</label>
            <input 
                type="text" 
                placeholder="lastname" 
                value={formData.lastName} 
                onChange={onHandleChange}
                id="lastname"
                name="lastName"
            />
            <label htmlFor="nickname">Nick Name</label>
            <input 
                type="text" 
                placeholder="nickname" 
                value={formData.nickname} 
                onChange={onHandleChange}
                id="nickname"
                name="nickname"
            />
            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                placeholder="password" 
                value={formData.password} 
                name="password"
                id="password"
                onChange={onHandleChange}
            />
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}






export default BetterSignupForm;

