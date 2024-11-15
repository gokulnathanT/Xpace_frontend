import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'

function LoginPage({login}){
    const [userId,setUserId]=useState('');
    const [pass,setpass]=useState('');
    const navigate=useNavigate();
    function handleLogin(){
        if(userId==='user'&&pass==='pass'){
            login(userId,pass);
            navigate('/dashboard');
        }
        else{
            alert("Incorrect credentials")
        }
    }
    return(
        <div className="LoginContent">
            <div>
            <h2>
                LOGIN PAGE
            </h2>
            </div>
            <div>
                <input className="inputText" type="text " placeholder="User ID" value={userId} 
                onChange={(e)=>setUserId(e.target.value)}/>
            </div>
            <div>
                <input className="inputText" type="password" placeholder="Password" value={pass} 
                onChange={(e)=>setpass(e.target.value)} />
            </div>
            <div>
            <button onClick={handleLogin}> Login </button>
            </div>
        </div>
    )
}
export default LoginPage;