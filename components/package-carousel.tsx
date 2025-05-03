import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const PackageCarousel = () => {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        <CarouselItem className="basis-full lg:basis-1/5 flex flex-col">
          <img
            src="/medical.avif"
            className="w-full h-full object-cover rounded shadow"
          />
        </CarouselItem>
        <CarouselItem className="basis-full lg:basis-1/5 flex flex-col">
          <img
            src="/legal.jpg"
            className="w-full h-full object-cover rounded shadow"
          />
        </CarouselItem>
        <CarouselItem className="basis-full lg:basis-1/5 flex flex-col">
          <img
            src="/gaming.jpg"
            className="w-full h-full object-cover rounded shadow"
          />
        </CarouselItem>
        <CarouselItem className="basis-full lg:basis-1/5 flex flex-col">
          <img
            src="/business.jpg"
            className="w-full h-full object-cover rounded shadow"
          />
        </CarouselItem>
        <CarouselItem className="basis-full lg:basis-1/5 flex flex-col">
          <img
            src="/romance_fantasy.jpg"
            className="w-full h-full object-cover rounded shadow"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};
