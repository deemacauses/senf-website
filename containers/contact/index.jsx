import { motion } from "framer-motion"
import Logo from "../../components/logo"
import { classes, variants } from "../../lib/utils"

export default function Contact() {
  const links = [
    "الرئيسية",
    "تعرف علينا",
    "خدماتنا",
    "التقدم لوظيفة",
    "عملاؤنا",
    "تواصل معنا"
  ]

  const social = [
    { name: "Instagram", icon: "" },
    { name: "Facebook", icon: "" },
    { name: "Twitter", icon: "" },
    { name: "Snapchat", icon: "" },
    { name: "YouTube", icon: "" }
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
          "flex flex-col items-start justify-start gap-0",
          "lg:items-center lg:justify-center"
        )}>
        <div
          className={classes(
            "relative flex h-auto w-full flex-col",
            "items-start justify-start gap-10 p-0",
            "lg:flex-row lg:items-center lg:justify-between"
          )}>
          <Logo />
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
      </motion.div>
    </footer>
  )
}
