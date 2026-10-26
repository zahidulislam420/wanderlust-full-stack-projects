import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function Cta() {
  return (
    <section className="relative isolate flex min-h-[320px] flex-col items-center justify-center overflow-hidden px-4 py-16 text-center">
      <Image
        src="/images/CTA.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[#06242e]/70" />

      <h2 className="text-3xl font-medium tracking-tight text-white md:text-4xl">
        Ready To Start Your Journey?
      </h2>
      <p className="mt-3 text-sm text-white/80 md:text-base">
        Join thousands of travelers who have discovered the world with us
      </p>

      <Button
        className="mt-8 h-10 rounded-md bg-white px-6 text-xs font-semibold uppercase tracking-wider text-foreground shadow-sm hover:bg-white/90"
      >
        Book Your Trip Today
        <ArrowRight className="ml-1 size-4" />
      </Button>
    </section>
  );
}

export { Cta };
