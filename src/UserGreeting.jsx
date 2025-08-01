// conditional rendering = allows you to control what gets rendered in your application
//                         based on certain defaultClientConditions
//                         (show,hide,or change components)


function UserGreeting(props) {
    
    if(props.isloggedIn){
        return <h2>Welcome {props.username}</h2>
    }
    else{
        return <h2>Please log in to continue</h2>
    }
}

export default UserGreeting