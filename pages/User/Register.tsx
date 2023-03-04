import React from 'react'
import styles from '@/styles/Home.module.css'
import Layout from '@/Components/Layout'
import Link from 'next/link'
function Register() {
  return (
    <Layout>
            <div className={styles.Register}>
              <h1>REGISTER</h1>
                    <form action='/api/Register' method='post'>
                        <label>Email</label>
                        <input type="email" placeholder='Enter Email' name='userName'></input>
                        <label>User Name</label>
                        <input type="text" placeholder='Enter Email' name='email'></input>
                        <label>Mobile</label>
                        <input type="number" placeholder='Mobile' name='mobile'></input>
                        <label>Password</label>
                        <input type="Password" placeholder='Enter Email nam' name='password'></input>
                        <input type="submit"></input>
                    </form>
                    <span>Already have an account ? <Link href="/User/Login">Login</Link> </span>
            </div>
    </Layout>
    
  )
}

export default Register