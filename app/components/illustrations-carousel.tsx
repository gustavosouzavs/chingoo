import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const illustrations = [
  "comic-illustration.png",
  "novel-illustration.png",
  "video-illustration.png",
];

const titles = ["Webtoon", "Novel", "Web Videos"];

export function IllustrationsCarousel() {
  return (
    <>
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {illustrations.map((illustration, index) => (
            <CarouselItem
              key={index}
              className="w-full flex flex-col items-center justify-center"
            >
              <img
                src={`/${illustration}`}
                className="w-auto h-[375px] shrink-0"
              />
              <h1
                className={
                  "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
                }
              >
                {titles[index]}
              </h1>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
