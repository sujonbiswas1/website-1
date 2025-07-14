import React from 'react'
import {Link,Button, Navbar,NavbarBrand,NavbarContent, NavbarItem, link} from '@heroui/react'
import logo from '/logo.png'
const NavbarArea = () => {
    
  return (
    <>
    <Navbar  isBlurred={false} maxWidth='xl' className='bg-black-400 w-full'>
        <NavbarBrand>
            <div className='w-26'>
                 <img src={logo} className='' alt="" />
            </div>
           
        </NavbarBrand>
        <NavbarContent justify="end">
            <NavbarItem>
                <Button  as={Link} color='primary' className="text-white" variant='bordered' radius='40'>
                    contact
                </Button>
            </NavbarItem>

        </NavbarContent>

    </Navbar>

    </>
  )
}

export default NavbarArea
