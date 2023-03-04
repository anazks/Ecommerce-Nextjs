import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import {useSession,signOut} from 'next-auth/react'

function Nav() {
  const session = useSession();

  let {data}= useSession()
  console.log(data)
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
                  
                  <Link href="/" className={styles.userName}>
                    <div className={styles.dropdown}>
                        <span>{ data?.user?.email[3]}</span>
                        <div className={styles.dropdowncontent}>
                          
                        <Link href="/" onClick={()=>signOut()}  >Logout</Link>
                        </div>
                    </div>        
                  </Link>
                  </li> 
                    <li> 
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