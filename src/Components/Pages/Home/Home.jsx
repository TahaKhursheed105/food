import React from 'react'
import Layout from "../../Layouts/Layout"
import Section1 from "./Section1"
import "../../../styles/Homestyle.css"
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'


const Home = () => {
  return (
    <>
      <Layout>

        {/* Home Section Hero Banner */}
        <Section1 />

        {/* Home Section About */}
          <Section2 />

          {/* Home Menu Section */}
          <Section3 />

          {/* Home Promotion Section */}
          <Section4 />

          {/* Home Section Shop */}
          <Section5 />

          {/* Home Section Blog */}
          <Section6 />

          {/* Home Section Contact */}
          <Section7 />
      </Layout>
    </>
  )
}

export default Home;