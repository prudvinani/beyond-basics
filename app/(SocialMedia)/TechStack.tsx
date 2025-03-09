"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import mongodb from "@/public/SocialMedia/mongo.svg"
import react from "@/public/SocialMedia/react.svg"
import express from "@/public/SocialMedia/express.svg"
import linux from "@/public/SocialMedia/linux.svg"
import apache from "@/public/SocialMedia/apache.svg"
import mysql from "@/public/SocialMedia/mysql.svg"
import php from "@/public/SocialMedia/php.svg"
import net from "@/public/SocialMedia/net.svg"
import django from "@/public/SocialMedia/django.svg"
import python from "@/public/SocialMedia/python.svg"
import flutter from "@/public/SocialMedia/flutter.svg"
import figma from "@/public/SocialMedia/figma.svg"
import ruby from "@/public/SocialMedia/reby.svg"
import angular from "@/public/SocialMedia/angular.svg"

export const TechStack = () => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div 
      className='flex justify-center items-center -space-x-10 mt-12 '
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      {/* First Group - Moves Up */}
      <motion.div animate={{ y: hover ? -10 : 0 }} className='-space-y-4'>
        <Image src={mongodb} alt='MongoDB' width={90} />
        <Image src={react} alt='React' className='ml-3'  width={100}/>
        <Image src={express} alt='Express' className='ml-9' width={100}/>
      </motion.div>

      {/* Second Group - Moves Down */}
      <motion.div animate={{ y: hover ? 10 : 0 }} className='-space-y-3'>
        <Image src={linux} alt='Linux'  className='' width={100}/>
        <Image src={apache} alt='Apache' className='ml-4'width={100} />
        <Image src={mysql} alt='MySQL' className='ml-9  ' width={100}/>
        <Image src={php} alt='PHP' className='ml-14' width={100} />
      </motion.div>

      {/* Third Group - Moves Up */}
      <motion.div className='-space-y-3' animate={{ y: hover ? -10 : 0 }}>
        <Image src={net} alt='.NET' className='ml-4'  width={100}/>
        <Image src={django} alt='Django' className='ml-8' width={100} />
        <Image src={python} alt='Python' className='ml-12'width={100} />
        <Image src={flutter} alt='Flutter' className='ml-16' width={100}/>
      </motion.div>

      {/* Fourth Group - Moves Down */}
      <motion.div animate={{ y: hover ? 10 : 0 }} className='-space-y-3'>
        <Image src={figma} alt='Figma' width={100} className='ml-3' />
        <Image src={ruby} alt='Ruby' className='ml-7' width={100} />
        <Image src={angular} alt='Angular' className='ml-12' width={90} />
      </motion.div>
    </motion.div>
  )
}
