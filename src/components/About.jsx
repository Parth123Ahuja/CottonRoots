import image from "../assets/about-bg.jpeg";

export function About() {
  return (
    <div className="relative isolate overflow-hidden py-24 mb-32 sm:py-32">
      <img
        src={image}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover  object-right md:object-center"
      />

      <div className="absolute inset-0 -z-10 bg-gray-900 opacity-50"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Who are we
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            From the cultural heart of India, The city of Jaipur. We bring you
            the finest quality of textile. We are the creators of all kinds of
            ladies, men’s , kids garments and home furnishing products. We our
            on a mission to build a business on a foundation of mutual trust and
            respect, we value our quality more than our profits
          </p>
        </div>
      </div>
    </div>
  );
}
