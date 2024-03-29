'use client'
import { useEffect, useState } from "react"
import { usePathname } from 'next/navigation'

const ShowFooter = ({children} : {
    children: React.ReactNode
  }) => {

    const noNav = ['/account' , '/account/Overview', '/account/People', '/account/People/NewTenant','/account/Communication/Compose', '/account/Residentials', '/account/Accounting', '/sign-in', '/sign-up', '/account/Communication', '/account/Communication/Inbox'] 
    const pathname = usePathname()

  return (
    <div>
        {noNav.includes(pathname)  ? null : (
            <>{children}</>)}
    </div>
  )
}

export default ShowFooter