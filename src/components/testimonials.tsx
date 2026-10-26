"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "“The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable.”",
    name: "Michael Chen",
    location: "Singapore",
    image: "/images/person2.png",
  },
  {
    quote: "“Swiss Alps Adventure Exceeded All Expectations! The Mountain Views Were Breathtaking, And Our Guide Was Incredibly Knowledgeable. Highly Recommend!”",
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "/images/person1.png",
  },
];

function TestimonialNav() {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } =
    useCarousel();

  return (
    <div className="flex gap-3">
      <Button
        type="button"
        variant="outline"
        size="icon-sm"
        aria-label="Previous testimonial"
        className="size-10 rounded-full"
        disabled={!canScrollPrev}
        onClick={scrollPrev}
      >
        <ArrowLeft />
      </Button>
      <Button
        type="button"
        variant="outline"
        size="icon-sm"
        aria-label="Next testimonial"
        className="size-10 rounded-full"
        disabled={!canScrollNext}
        onClick={scrollNext}
      >
        <ArrowRight />
      </Button>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="bg-background px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <Carousel opts={{ align: "start", loop: false }}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                What Travelers Say
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Real experiences from our happy travelers
              </p>
            </div>
            <TestimonialNav />
          </div>

          <CarouselContent className="mt-8">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.name}
                className="md:basis-1/2 [&>figure]:h-full"
              >
                <figure className="flex items-start gap-6 rounded-lg border border-border bg-background p-6">
                  <div className="flex min-w-0 flex-1 flex-col justify-between gap-8">
                    <blockquote className="text-base font-medium leading-snug text-foreground">
                      {testimonial.quote}
                    </blockquote>
                    <figcaption className="text-sm">
                      <span className="text-brand">— {testimonial.name}</span>
                      <span className="mt-0.5 block text-xs text-muted-foreground">
                        {testimonial.location}
                      </span>
                    </figcaption>
                  </div>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={218}
                    height={264}
                    className="size-36 shrink-0 rounded-md object-cover"
                  />
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

export { Testimonials };
