"use client"
import React from 'react'
import Image from 'next/image'
import { Avatar } from '@radix-ui/react-avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'
const Navbar = () => {
  return (
 <div className="border-b">
          <div className="flex h-16 items-center px-4 container mx-auto">
            <Image
              src="/album.png"
              width="50"
              height="50"
              alt="icon of this photo album app"
            />
            
            <h2 className="text-2xl font-bold tracking-tight">Photo Gallary</h2>
            <div className="ml-auto flex items-center space-x-4">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                  width={50}
                  height={60}
                  className='rounded-full'
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div> 

  )
}

export default Navbar