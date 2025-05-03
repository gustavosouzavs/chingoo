import type { Metadata } from "next";
import { BgAnimation } from "./components/bg-animation";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { VideoIcon } from "@radix-ui/react-icons";
import { h1, h2, h4, p } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { HomepageCarousel } from "@/components/carousel";
import { PackageCarousel } from "@/components/package-carousel";

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
            className="absolute bottom-[40px] right-[160px] w-[700px] h-auto z-10 opacity-50 rotate-12"
          />
          <img
            src="/main-0001.png"
            className="absolute bottom-0 right-[120px] w-[450px] h-auto z-20"
          />
          <div className="grid grid-cols-1 container pt-[200px] pb-[200px]">
            <div className="flex flex-col gap-2">
              <h1 className={h1()}>Like Talking to a Friend</h1>
              <h2 className={h4()}>
                Unlock your content’s global potential with friendly, localized
                translations
              </h2>
              <Button className="w-fit text-xl py-4" size={"lg"}>
                Get a quote now!{" "}
              </Button>
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
              <p className={"leading-7 [&:not(:first-child)]:mt-6 text-center"}>
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
          <div className="container grid grid-cols-1 lg:grid-cols-3 gap-4 py-20">
            <div className="flex flex-col gap-2 items-center">
              <img
                src="/comic-illustration.png"
                className="w-fit h-[500px] shrink-0"
              />
              <h1 className={h1()}>Webtoon</h1>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <img src="/novel-illustration.png" className="w-auto h-[500px]" />
              <h1 className={h1()}>Novel</h1>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <img src="/video-illustration.png" className="w-auto h-[500px]" />
              <h1 className={h1()}>Web Videos</h1>
            </div>
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
        <section className="w-full overflow-hidden h-fit relative bg-primary/30">
          <div className="container flex flex-col items-center gap-10 justify-center py-20 px-5 lg:px-0">
            <h1
              className={
                "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl uppercase text-center"
              }
            >
              Expertise across various genres
            </h1>
            <PackageCarousel />
            <p>
              {`We offer flexible project scaling, can accommodate special
              requirements, and provide express delivery options to meet tight
              deadlines—whatever your project needs, we’ve got you covered.`}
            </p>
            <p>
              {`We at chingoo are excited to help you bring your content to the global stage.`}
            </p>
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
