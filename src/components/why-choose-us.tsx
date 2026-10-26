import Image from "next/image";

const features = [
  {
    icon: "/images/ShieldCheck.png",
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: "/images/MapTrifold.png",
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: "/images/Headset.png",
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-[#e6f7f9] px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Why Choose Wanderlust
        </h2>
        <p className="mt-3 text-center text-sm text-muted-foreground">
          Your trusted partner for exceptional travel experiences
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg bg-white p-6 shadow-sm"
            >
              <Image
                src={feature.icon}
                alt=""
                width={48}
                height={48}
                className="size-8"
              />
              <h3 className="mt-5 text-xl font-normal text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { WhyChooseUs };
