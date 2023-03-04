import React, { useRef } from 'react'
import styles from '@/styles/Home.module.css'
import Layout from '@/Components/Layout'
import {signIn} from 'next-auth/react'

function Login() {
    const EmailRef = useRef();
    const passwordRef = useRef();
    async function handlesubmit(e){
        e.preventDefault()
        let email = EmailRef.current.value;
        let password = passwordRef.current.value;
        try {
            const data = await  signIn('credentials',{
                redirect:false,
                email,
                password
            }) 
            console.log(data,"authenticateing");
            
        } catch (error) {
                console.log(error)
        }
    }
  return (
    <Layout>
                <div className={styles.login}>
                        <h1>LOGIN</h1>
                                <form className={styles.loginform} onSubmit={handlesubmit}>
                                    <label>Email</label>
                                    <input type="email" placeholder='Enter Email'  ref={EmailRef}></input>
                                    <label>Password</label>
                                    <input type="Password" placeholder='Enter Email nam'  ref={passwordRef}></input>
                                    <input type="submit" className={styles.submitLogin}></input>
                                </form>
                </div>
    </Layout>
  )
}

export default Login