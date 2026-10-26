import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const searchFields = [
  { label: "Location", hint: "Address, City Or Zip" },
  { label: "Date/Duration", hint: "Anytime/3 Days" },
  { label: "Budget", hint: "$0-$3000" },
  { label: "People", hint: "5-10" },
];

function Banner() {
  return (
    <section className="relative isolate flex min-h-[600px] flex-col items-center justify-center overflow-hidden px-4 pt-12 pb-28 text-center">
      <Image
        src="/images/Banner.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-black/20" />

      <h1 className="text-4xl font-medium tracking-tight text-white md:text-6xl lg:text-7xl">
        Discover Your
        <br />
        Next Adventure
      </h1>

      <p className="mt-5 max-w-2xl text-sm text-white/80 md:text-base">
        Explore breathtaking destinations and create unforgettable memories with
        our curated travel experiences.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button
          size="lg"
          className="h-11 rounded-md bg-brand px-6 text-sm font-semibold uppercase tracking-wider text-white hover:bg-brand/90"
        >
          Explore Now
          <ArrowRight className="ml-1 size-4" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="h-11 rounded-md border-white/30 bg-white/20 px-6 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-sm hover:bg-white/30 hover:text-white"
        >
          View Destination
        </Button>
      </div>

      <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 border-t border-white/25 bg-white/10 backdrop-blur-sm md:grid-cols-5">
        {searchFields.map((field) => (
          <div
            key={field.label}
            className="flex flex-col justify-center border-r border-white/20 px-5 py-3 text-left"
          >
            <span className="text-sm font-semibold text-white">
              {field.label}
            </span>
            <span className="text-xs text-white/70">{field.hint}</span>
          </div>
        ))}
        <button
          type="button"
          className="col-span-2 bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand/90 md:col-span-1"
        >
          Search
        </button>
      </div>
    </section>
  );
}

export { Banner };
