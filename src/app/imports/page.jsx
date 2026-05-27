import InternationalHealthcareNetwork from '@/components/exports/InternationalHealthcareNetwork'
import ImportAbout from '@/components/imports/ImportAbout'
import ImportCapabilities from '@/components/imports/ImportCapabilities'
import ImportHero from '@/components/imports/ImportHero'
import InternationalMarkets from '@/components/imports/InternationalMarkets'
import SupplyChainSection from '@/components/imports/SupplyChainSection'
import React from 'react'

const page = () => {
  return (
    <>
      <ImportHero />
      <ImportAbout />
      <ImportCapabilities/>
      <SupplyChainSection/>
     <InternationalMarkets/>
    </>
  )
}

export default page
