import { Fragment, useEffect, useState } from "react"
import { MoonLoader } from "react-spinners"
import { Navbar } from "../components/components"
import Contact from "../containers/contact"
import {
  Header,
  About,
  Services,
  Hiring,
  Clients
} from "../containers/containers"

export default function Home() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <Fragment>
      {loading ? (
        <MoonLoader color={"#EF4444"} loading={loading} size={40} />
      ) : (
        <Fragment>
          <Navbar />
          <Header />
          <Clients />
          <About />
          <Services />
          <Hiring />
          <Contact />
        </Fragment>
      )}
    </Fragment>
  )
}
