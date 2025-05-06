"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useCallback, useEffect, useRef, useState } from "react";
import { EmblaEventType } from "embla-carousel";

const TWEEN_FACTOR_BASE = 0.39;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

export const PackageCarousel = () => {
  const [emblaApi, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);

  const tweenFactor = useRef(0);

  const setTweenFactor = useCallback((emblaApi: CarouselApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi!.scrollSnapList().length;
  }, []);

  const tweenOpacity = useCallback(
    (emblaApi: CarouselApi, eventName?: EmblaEventType) => {
      const engine = emblaApi!.internalEngine();
      const scrollProgress = emblaApi!.scrollProgress();
      const slidesInView = emblaApi!.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi!.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const opacity = numberWithinRange(tweenValue, 0.3, 1);

          emblaApi!.slideNodes()[slideIndex].style.opacity = `${opacity}`;

          if (opacity < 0.9)
            emblaApi!.slideNodes()[slideIndex].style.filter = `saturate(0)`;
          else {
            setCurrent(slideIndex);
            emblaApi!.slideNodes()[slideIndex].style.filter = `saturate(1)`;
          }
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenFactor(emblaApi);
    tweenOpacity(emblaApi);
    emblaApi
      .on("reInit", setTweenFactor)
      .on("reInit", tweenOpacity)
      .on("scroll", tweenOpacity)
      .on("slideFocus", tweenOpacity);
  }, [emblaApi, tweenOpacity]);

  return (
    <Carousel
      opts={{
        loop: true,
      }}
      setApi={setApi}
    >
      <CarouselContent>
        <CarouselItem
          className="basis-full lg:basis-[30%] group relative"
          data-current={current == 0}
        >
          <img
            src="/medical.avif"
            className="w-full h-full object-cover rounded-lg shadow z-0"
          />
          <div
            style={{
              textShadow: "0 0 5px #000",
            }}
            className={
              'absolute bottom-3 right-0 left-0 z-[100] text-foreground flex flex-col px-4 group-data-[current="true"]:fade-in group-data-[current=false]:opacity-0 opacity-100 transition-all ease-in'
            }
          >
            <h1
              className={
                "font-semibold text-center text-white text-sm lg:text-5xl"
              }
            >
              Medical
            </h1>
          </div>
        </CarouselItem>
        <CarouselItem
          className="basis-full lg:basis-[30%] flex flex-col group relative"
          data-current={current == 1}
        >
          <div className="absolute w-full h-full bg-gradient-radial to-[#000000] from-transparent z-10 top-0 opacity-50"></div>
          <img
            src="/legal.jpg"
            className="w-full h-full object-cover rounded-lg shadow z-20"
          />
          <div
            style={{
              textShadow: "0 0 5px #000",
            }}
            className={
              'absolute bottom-3 right-0 left-0 z-[100] text-foreground flex flex-col px-4 group-data-[current="true"]:fade-in group-data-[current="false"]:opacity-0 opacity-100 transition-all ease-in'
            }
          >
            <h1
              className={
                "font-semibold text-center text-white text-sm lg:text-5xl"
              }
            >
              Legal
            </h1>
          </div>
        </CarouselItem>
        <CarouselItem
          className="basis-full lg:basis-[30%] flex flex-col group relative"
          data-current={current === 2}
        >
          <img
            src="/gaming.jpg"
            className="w-full h-full object-cover rounded-lg shadow"
          />
          <div
            style={{
              textShadow: "0 0 5px #000",
            }}
            className={
              'absolute bottom-3 right-0 left-0 z-[100] text-foreground flex flex-col px-4 group-data-[current="true"]:fade-in group-data-[current=false]:opacity-0 opacity-100 transition-all ease-in'
            }
          >
            <h1
              className={
                "font-semibold text-center text-white text-sm lg:text-5xl"
              }
            >
              Gaming
            </h1>
          </div>
        </CarouselItem>
        <CarouselItem
          className="basis-full lg:basis-[30%] flex flex-col group relative"
          data-current={current === 3}
        >
          <img
            src="/business.jpg"
            className="w-full h-full object-cover rounded-lg shadow"
          />
          <div
            style={{
              textShadow: "0 0 5px #000",
            }}
            className={
              'absolute bottom-3 right-0 left-0 z-[100] text-foreground flex flex-col px-4 group-data-[current="true"]:fade-in group-data-[current=false]:opacity-0 opacity-100 transition-all ease-in'
            }
          >
            <h1
              className={
                "font-semibold text-center text-white text-sm lg:text-5xl"
              }
            >
              Business
            </h1>
          </div>
        </CarouselItem>
        <CarouselItem
          className="basis-full lg:basis-[30%] flex flex-col group relative"
          data-current={current === 4}
        >
          <img
            src="/romance_fantasy.jpg"
            className="w-full h-full object-cover rounded-lg shadow"
          />
          <div
            style={{
              textShadow: "0 0 5px #000",
            }}
            className={
              'absolute bottom-3 right-0 left-0 z-[100] text-foreground flex flex-col px-4 group-data-[current="true"]:fade-in group-data-[current=false]:opacity-0 opacity-100 transition-all ease-in'
            }
          >
            <h1
              className={
                "font-semibold text-center text-white text-sm lg:text-5xl"
              }
            >
              Fantasy Romance
            </h1>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};
