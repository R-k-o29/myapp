import Subscribe from "./Subscribe";

// export default function NetflixParent() { //default keyword is used here so that we dont use {} while importing
//     return (
//         <div>
//             <h1>This is Netflix Parent Component</h1>
//             <Subscribe userName="John" buttonName="Subscribe Now" />
//             <Subscribe userName="Jane" buttonName="Join Today" />
//         </div>
//     )

// }

export function Netflixparent(){
    return(
        <>
            <h2> NetFlix Parent components</h2>
            <Subscribe buttonName="Subscribe" userName="Surya">
                <h2>I'm children Prop</h2>
            </Subscribe>
            <Subscribe buttonName="Get Started" userName="Pritam"/>
 
           
           
        </>
    )
}