import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";

const items = [
  {
    title: "Translation",
    image: "/slider-1.jpg",
  },
  {
    title: "Proofreading & Copy Editing",
    image: "/slider-2.jpg",
  },
  {
    title: "Lettering & Typesetting",
    image: "/slider-3.jpg",
  },
];

export function HomepageCarousel() {
  return (
    <Carousel
      className="w-full max-w-sm"
      opts={{
        loop: true,
        container: "w-full",
      }}
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col gap-3 aspect-square items-center justify-center p-6">
                  <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl">
                    {item.title}
                  </h1>
                  <img
                    src={item.image}
                    className="object-cover w-[262px] h-[292px]"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
