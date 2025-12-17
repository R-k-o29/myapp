// export default function Subscribe({userName, buttonName}) { //props destructuring 
//     return (
//         <div>
//             <p>Subscribe to our Netflix Channel! {userName}</p>
//             <input type="email" placeholder="Enter your email" />
//             <button style={{color: "white",background:"red"}}>{buttonName}</button>

//         </div>
//     )
// }

export default function Subscribe({userName,buttonName,children}) {
    return (
        <>
            <p>Ready to watch? Enter your email to create or restart your membership {userName}.</p>
            <input
                type="email"
                placeholder="Email address"
            />
            <button style={{ color: "white", backgroundColor: "red" }}>{buttonName}</button>
            {children}
        </>
    )
}