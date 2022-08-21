import { Fragment, useEffect, useState } from "react"
import { MoonLoader } from "react-spinners"
import { Logo as SENF, Navbar } from "../components/components"
import Contact from "../containers/contact"
import {
  About,
  Clients,
  Header,
  Hiring,
  Services
} from "../containers/containers"
import { classes } from "../lib/utils"

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
        <div
          className={classes(
            "h-screen min-h-full w-screen min-w-full",
            "flex flex-col items-center justify-center gap-5",
            "transform overflow-hidden transition"
          )}>
          <SENF />
          <MoonLoader color={"rgb(239 68 68)"} loading={loading} size={40} />
        </div>
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
