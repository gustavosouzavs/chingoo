import type { Metadata } from "next";
import { h1, h4 } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { HomepageCarousel } from "@/components/carousel";
import { PackageCarousel } from "@/components/package-carousel";
import Link from "next/link";
import ContactPage from "./components/contact-me-form";
import { IllustrationsCarousel } from "./components/illustrations-carousel";

export const metadata: Metadata = {
  title: "Chingoo - Like Talking to a Friend",
  description:
    "Transforming stories through heart and creativity. Our expert translators go beyond word-for-word translation, capturing the nuances of your content to ensure your message resonates deeply with audiences, creating truly human connections.",
};

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center sm:items-start">
        <section
          id="intro"
          className="bg-primary/30 w-full overflow-hidden h-fit relative"
        >
          <img
            src="/image.png"
            className="absolute bottom-0 right-0  w-[300px] lg:w-[700px] h-auto z-10"
          />

          <div className="grid grid-cols-1 container px-5 lg:px-0 pt-[80px] lg:pt-[200px] pb-[200px] z-[100] relative">
            <div className="flex flex-col gap-2">
              <h1 className={h1()}>Like Talking to a Friend</h1>
              <h2 className={h4()}>
                Unlock your content’s global potential with friendly, localized
                translations
              </h2>
              <Link href="mailto:business@chingoo.io">
                <Button className="w-fit text-xl py-4" size={"lg"}>
                  Get a quote now!{" "}
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section id="info" className="w-full overflow-hidden h-fit relative">
          <div className="container flex items-center justify-center py-20">
            <div className="flex flex-col gap-2 max-w-2xl">
              <h1
                className={
                  "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl uppercase text-center"
                }
              >
                Translation with a human touch:
              </h1>
              <p className="leading-7 [&:not(:first-child)]:mt-6 text-center">
                {`At Chingoo, we believe that great storytelling deserves more
                than just word-for-word translation—it requires heart and
                creativity. That’s why every project is managed by experienced
                translators who understand the nuances of your content to ensure
                your story connects with audiences on a truly human level.
                  `}
              </p>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="w-full bg-primary/40 overflow-hidden h-fit relative"
        >
          <div className="hidden lg:grid container grid-cols-1 lg:grid-cols-3 gap-4 py-20">
            <div className="flex flex-col gap-2 items-center">
              <img
                src="/comic-illustration.png"
                className="w-fit h-[375px] shrink-0"
              />
              <h1
                className={
                  "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
                }
              >
                Webtoon
              </h1>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <img src="/novel-illustration.png" className="w-auto h-[375px]" />
              <h1 className={h1()}>Novel</h1>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <img src="/video-illustration.png" className="w-auto h-[375px]" />
              <h1 className={h1()}>Web Videos</h1>
            </div>
          </div>
          <div className="lg:hidden py-14">
            <IllustrationsCarousel />
          </div>
        </section>
        <section className="w-full overflow-hidden h-fit relative">
          <div className="container flex flex-col items-center gap-10 justify-center py-20">
            <h1
              className={
                "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center"
              }
            >
              Start to Finish Localization Packages
            </h1>
            <HomepageCarousel />
          </div>
        </section>
        <section className="w-full overflow-hidden h-fit relative bg-primary/30 shadow-md">
          <div className="container grid grid-cols-1 lg:grid-cols-2 items-center gap-10 justify-center py-10 lg:py-4 px-5 lg:px-0">
            <div className="flex flex-col">
              <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">
                Localization Philosophy
              </h1>
              <p className="leading-7 [&:not(:first-child)]:mt-6 lg:mr-36">
                At Chingoo, our mission is to honor the culture of the source
                material and help share it globally through mindful localization
                practices. We believe that great stories deserve to be told with
                care, clarity, and cultural respect—no matter the language.
              </p>
            </div>
            <img src="./tteok.png" />
          </div>
        </section>
        <section className="w-full overflow-hidden h-fit relative">
          <div className="flex flex-col items-center gap-10 justify-center py-20 px-5 lg:px-0">
            <h1
              className={
                "scroll-m-20 text-4xl font-extrabold tracking-widest lg:text-5xl uppercase text-center"
              }
            >
              Expertise across various genres
            </h1>
            <PackageCarousel />
          </div>
        </section>
        <section className="bg-primary/30 w-full py-20">
          <div className="container px-5 lg:px-0 flex flex-col lg:flex-row gap-12 justify-center items-center">
            <img
              src="/express-delivery.png"
              className="h-full w-[50%] lg:w-[20%]"
            />
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-left text-xl font-extrabold lg:text-2xl">
              {`We offer flexible project scaling, can accommodate special
              requirements, and provide express delivery options to meet tight
              deadlines—whatever your project needs, we’ve got you covered.`}
            </p>
          </div>
        </section>
        <section className="w-full">
          <ContactPage />
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
