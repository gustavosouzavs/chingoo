import type { Metadata } from "next";
import { BgAnimation } from "./components/bg-animation";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { VideoIcon } from '@radix-ui/react-icons'

export const metadata: Metadata = {
  title: 'Chingoo - Like Talking to a Friend',
  description: 'Transforming stories through heart and creativity. Our expert translators go beyond word-for-word translation, capturing the nuances of your content to ensure your message resonates deeply with audiences, creating truly human connections.'
}

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center sm:items-start">
        <section id='intro' className='container py-[200px] overflow-hidden h-fit'>
          <BgAnimation />
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div />
            <div className='flex flex-col gap-2'>
              <h1 className='font-bold text-3xl'>CHINGOO</h1>
              <h1 className="text-4xl font-bold text-center sm:text-left">Like Talking to a Friend</h1>
              <p className="text-xl text-center sm:text-left">Transforming stories through heart and creativity. Our expert translators go beyond word-for-word translation, capturing the nuances of your content to ensure your message resonates deeply with audiences, creating truly human connections
              </p>
            </div>
          </div>
        </section>
        <section id='info' className='w-full h-full bg-background shadow-lg relative z-[100]'>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between container items-center px-8 py-12">
            <div className="flex flex-col gap-2 text-left shrink-0">
              <h1 className='font-bold text-5xl text-primary shrink-0'>Translation With</h1>
              <h1 className='font-bold text-5xl text-primary shrink-0'>Human Touch</h1>
            </div>
            <p className='text-xl'>
              At Chingoo, we believe that great storytelling deserves more than just word-for-word translation—it requires heart and creativity. That’s why every project is managed by experienced translators who understand the nuances of your content to ensure your story connect with audiences on a truly human level.
            </p>
          </div>
        </section>
        <section id='about' className='w-full h-full bg-primary shadow-lg relative z-[100]'>
          <div className="container flex flex-col gap-8 px-8 py-16">
            <h1 className='text-white font-bold text-5xl text-center'>Full Package Localization</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className='text-center text-3xl uppercase tracking-widest'>Webtoons</CardTitle>
                </CardHeader>
                <CardDescription className='px-4 flex flex-col gap-2'>
                  <img alt='' src='https://media.reaperscans.net/file/7BSHk1m/y0rsqzin4kecjtqwdk31bmwb.webp' className='w-[300px] border-b h-auto self-center' />
                </CardDescription>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className='text-center text-3xl uppercase tracking-widest'>WEBNOVELS</CardTitle>
                </CardHeader>
                <CardDescription className='px-4 flex flex-col gap-2'>
                  <img
                    alt="Overgeared"
                    className='w-[200px] border-b h-auto self-center shadow-lg rounded'
                    src="https://cdn.wuxiaworld.com/images/covers/og.webp?v=ee043d947587ae919ee3df561ba5890ff1bfa2d8"
                    style={{ display: "inline-block" }}
                  />


                </CardDescription>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className='text-center text-3xl uppercase tracking-widest'>WEBVIDEOS</CardTitle>
                </CardHeader>
                <CardDescription className='px-4 flex flex-col gap-2'>
                  <VideoIcon className='h-32 w-32 self-center' />


                </CardDescription>
              </Card>

            </div>
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
