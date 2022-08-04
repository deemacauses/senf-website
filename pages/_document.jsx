import Document, { Head, Html, Main, NextScript } from "next/document"
import { classes } from "../lib/utils"

const font = [
  "https://fonts.googleapis.com/css",
  [
    ["family", "Tajawal:200,300,400,500,700,800,900"].join("="),
    ["display", "swap"].join("=")
  ].join("&")
].join("?")

export default class MyDocument extends Document {
  render() {
    return (
      <Html dir="rtl" className={classes("scroll-smooth")}>
        <Head>
          <link href={font} rel="stylesheet" />
        </Head>
        <body
          className={classes(
            "overflow-y-auto overflow-x-hidden",
            "bg-slate-900 font-tajawal text-white"
          )}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
