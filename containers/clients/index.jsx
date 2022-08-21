import { motion } from "framer-motion"
import { classes, variants } from "../../lib/utils"
import {
  MicrophoneIcon,
  PresentationChartLineIcon,
  QrcodeIcon,
  RssIcon,
  ScaleIcon
} from "@heroicons/react/outline"

export default function Clients() {
  const clients = [
    {
      company: "company-01",
      logo: (
        <RssIcon
          strokeWidth={1}
          className={classes(
            "h-12 w-12 fill-transparent",
            "stroke-current sm:h-14 sm:w-14"
          )}
        />
      )
    },
    {
      company: "company-02",
      logo: (
        <PresentationChartLineIcon
          strokeWidth={1}
          className={classes(
            "h-12 w-12 fill-transparent",
            "stroke-current sm:h-14 sm:w-14"
          )}
        />
      )
    },
    {
      company: "company-03",
      logo: (
        <QrcodeIcon
          strokeWidth={1}
          className={classes(
            "h-12 w-12 fill-transparent",
            "stroke-current sm:h-14 sm:w-14"
          )}
        />
      )
    },
    {
      company: "company-04",
      logo: (
        <ScaleIcon
          strokeWidth={1}
          className={classes(
            "h-12 w-12 fill-transparent",
            "stroke-current sm:h-14 sm:w-14"
          )}
        />
      )
    },
    {
      company: "company-05",
      logo: (
        <MicrophoneIcon
          strokeWidth={1}
          className={classes(
            "h-12 w-12 fill-transparent",
            "stroke-current sm:h-14 sm:w-14"
          )}
        />
      )
    }
  ]

  return (
    <section
      id="عملاؤنا"
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
        <ul
          className={classes(
            "grid h-full w-full grid-cols-2 gap-10",
            "items-center justify-items-center lg:gap-20",
            "sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          )}>
          {clients.map(({ company, logo }) => (
            <motion.li
              key={company}
              variants={variants.item}
              className={classes(
                "flex h-full w-full items-center justify-center",
                "border-0 bg-transparent text-slate-500"
              )}>
              {logo}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
