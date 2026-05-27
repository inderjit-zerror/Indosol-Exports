import PharmaProducts from '@/components/products/PharmaProducts'
import ProjectHome from '@/components/products/ProjectHome'
import ProjectLast from '@/components/products/ProjectLast'
import React from 'react'

const page = () => {
  return (
    <>
    <ProjectHome/>
      <PharmaProducts/>
      <ProjectLast/>
    </>
  )
}

export default page
