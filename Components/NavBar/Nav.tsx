import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import {useSession,signOut} from 'next-auth/react'

function Nav() {
  const session = useSession();
  console.log(session)
  let {data}= useSession()
  return (
    <div className={styles.navBar}>
            <ul>
                <li> 
                     <Link href="/">Amazona</Link>
                 </li> 
                
                 
                 <li> 
                     <Link href="/">Accounts</Link>
                 </li> 
                 
                 <li>
                      <input type="text" placeholder='Search items' className={styles.navSearch}/>
                 </li>
                 
                 { data?.user?(
                 <>
                  <li> 
                  <Link href="/" className={styles.Login}>{ data?.user?.email}</Link>
                  </li> 
                    <li> 
                    <Link href="/" className={styles.Login} onClick={()=>signOut()}  >Logout</Link>
                    </li> 
                    </>
                 ):(

                    <li> 
                    <Link href="/User/Register" className={styles.Login}>Login</Link>
                    </li> 
                 )}
                 
                 <li> 
                     <Link href="/" className={styles.NavCart}>Wish List</Link>
                 </li> 
                 
            </ul>    
    </div>
  )
}

export default Nav