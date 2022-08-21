import { motion } from "framer-motion"
import Image from "next/image"
import SENF from "../../components/logo"
import { classes, variants } from "../../lib/utils"
import facebook from "../../public/logo-facebook.svg"
import instagram from "../../public/logo-instagram.svg"
import snapchat from "../../public/logo-snapchat.svg"
import twitter from "../../public/logo-twitter.svg"
import youtube from "../../public/logo-youtube.svg"

function OMQ() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 221.11 381.59"
      className={classes("w-8 fill-white")}>
      <path
        d={[
          "M159,44.37q-2.43-7-7.6-9.74t-12,.11q-5.78,2.43-7,6",
          "54a13.07,13.07,0,0,0,.82,9A25.68,25.68,0,0,0,139.3,59l-8,6.09,2",
          "13,5.06L160.5,51.92l1.32-.9Zm-13.8,10.08a17.57,17",
          "57,0,0,1-5.4-6.75q-2.07-4.92,2.84-7,5",
          "93-2.51,8.85,4.44a23.2,23.2,0,0,1,1.18,3.59Z"
        ].join(".")}
      />
      <path
        d={[
          "M192.89,187.46c-12.57-11.85-20.19-19.12-26.11-25.14a",
          "91.91,0,0,0,.05-.21V107.69c8.33,8.58,19,19.54,25.54,26.44v30l14",
          "93-12.61V125.4l-14.93-14.29c-6.09-5.88-16.32-15.87-24-24.7L138",
          "22,111v74.46h0s20.45,17.92,29.47,26l-6.85,6.14-17.17,15.39c-6.19-5",
          "54-18.37-16.43-18.37-16.63V116.94c0-.08,0-.13,0-.16l-44.62-40s-36",
          "14,30-36.14,31.21v80.65l0,0v4.93s0,0,0,0l46.24,41.4Q85.4,239",
          "94,80,244.74C57.89,225,50.68,216.17,28.61,196.41V126.63c0-.27-28.61,22",
          "63-28.61,23.89v69.53c0,.1,61,56.55,61,56.55s26.87-23.9,38.15-34c5",
          "64,5.05,9.59,9.07,16.92,15.15l-9.61,8.62L86.89,283.86l0,.05v15",
          "16h-.06v43.5c0,.08,0,.13,0,.16l43.39,38.85c.58.52,34.8-27.06,34.8-28",
          "33V252.17c0-.07,0-.13,0-.15v0h0c-5.31-4.76-10.61-7.66-15.92-12.41,",
          "94-5.33,65.24-59.36,71.75-65.21l.33-.29V161.2ZM96.7,190.88,73.15,169.8V119",
          "59L96.7,140.67Zm39.66,146.75-21-18.78V269.41l6-5.39c5,4.46,10,7.42,15,11.88Z"
        ].join(".")}
      />
      <polygon
        points={[
          "21.53 59.41 44.91 80.34 68.28 59.41 46.38 39.8 67.46",
          "20.93 44.08 0 20.7 20.93 42.61 40.54 21.53 59.41"
        ].join(" ")}
      />
    </svg>
  )
}

export default function Contact() {
  const links = [
    "الرئيسية",
    "تعرف علينا",
    "خدماتنا",
    "التقدم لوظيفة",
    "عملاؤنا",
    "تواصل معنا"
  ]

  const socials = [
    { name: "Instagram", icon: instagram },
    { name: "Facebook", icon: facebook },
    { name: "Twitter", icon: twitter },
    { name: "Snapchat", icon: snapchat },
    { name: "YouTube", icon: youtube }
  ]

  return (
    <footer
      id="تواصل-معنا"
      className={classes(
        "flex flex-col items-center justify-center",
        "my-4 py-8 lg:my-10 lg:py-10 xl:my-11 xl:py-12"
      )}>
      <motion.div
        variants={variants.container}
        viewport={{ once: true }}
        initial={"hidden"}
        whileInView={"visible"}
        className={classes(
          "container mx-auto px-5 xl-2:max-w-xl-7",
          "flex flex-col items-start justify-start",
          "gap-0 lg:items-center lg:justify-center",
          "space-y-10 divide-y divide-slate-800"
        )}>
        <div
          className={classes(
            "relative flex h-auto w-full flex-col",
            "items-start justify-start gap-10 p-0 lg:gap-20",
            "lg:flex-row lg:items-center lg:justify-between"
          )}>
          <SENF />
          <ul
            className={classes(
              "relative flex w-full flex-row flex-wrap",
              "items-center justify-start gap-5 p-0",
              "sm:justify-between lg:flex lg:w-max lg:gap-10"
            )}>
            {links.map(function (link) {
              return (
                <li key={link} className={classes("h-auto w-max")}>
                  <a
                    href={"#" + link.split(" ").join("-")}
                    className={classes(
                      "flex h-auto w-max cursor-pointer",
                      "text-base font-medium not-italic leading-none",
                      "text-slate-400 no-underline lg:text-lg"
                    )}>
                    {link}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        <div
          className={classes(
            "relative flex h-auto w-full flex-col",
            "items-start justify-start gap-10 pt-10 lg:gap-20",
            "lg:flex-row lg:items-center lg:justify-between"
          )}>
          <ul
            className={classes(
              "relative flex w-full flex-row flex-wrap",
              "items-center justify-start gap-5 p-0",
              "sm:justify-between lg:flex lg:w-max lg:gap-7"
            )}>
            {socials.map(function (social) {
              return (
                <li key={social.name} className={classes("relative h-6 w-6")}>
                  <Image src={social.icon} alt={social.name} layout="fill" />
                </li>
              )
            })}
          </ul>
          <div
            className={classes(
              "relative flex w-full flex-row flex-wrap",
              "items-center justify-start gap-5 p-0",
              "sm:justify-between lg:flex lg:w-max lg:gap-7"
            )}>
            <OMQ />
            <p
              className={classes(
                "flex h-auto w-max cursor-pointer",
                "text-base font-medium not-italic leading-none",
                "text-slate-400 no-underline lg:text-lg"
              )}>
              جميع الحقوق محفوظة 2022
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
