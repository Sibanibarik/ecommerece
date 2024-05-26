function LoginPage(){
    return(
        <div>
        <form action="">
            <lebel for="username"><b>Username :</b></lebel>
            <input type="text" name="username" /><br/>
    
            <lebel for="Password"><b>Password :</b></lebel>
            <input type="password" name="Password" /><br />
    
            <button type="submit">Log in</button>
        </form>
       </div>
    )
}
export default LoginPage;