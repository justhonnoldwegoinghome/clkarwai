import clsx from "clsx";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Source_Sans_Pro } from "next/font/google";
import { Great_Vibes } from "next/font/google";
import Link from "next/link";
import { ReactElement } from "react";

const logoFont = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

const font = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export default function Home() {
  return (
    <div className={font.className}>
      <HorizontalLayout>
        <Nav />
      </HorizontalLayout>
      <HorizontalLayout>
        <Hero />
      </HorizontalLayout>

      <HorizontalLayout>
        <Reviews />
      </HorizontalLayout>
      <div className="bg-gradient-to-t from-white via-slate-200">
        <HorizontalLayout>
          <Listings />
        </HorizontalLayout>
      </div>
      <div className="h-[400px]"></div>
    </div>
  );
}

function HorizontalLayout({ children }: { children: ReactElement }) {
  return <div className="max-w-screen-laptop px-[5vw] mx-auto">{children}</div>;
}

function Nav() {
  return (
    <nav className="h-[100px] flex items-center justify-between">
      <Link
        href="/"
        className={clsx(logoFont.className, "text-3xl font-semibold")}
      >
        Louis Chan
      </Link>
      <div className="flex gap-2">
        <Link
          href="https://wa.me/6582282262"
          rel="noopener noreferrer"
          target="_blank"
          className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2"
        >
          <WhatsAppIcon />
          Contact me
        </Link>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <div className="laptop:flex">
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold mb-2">
          Your Trusted Guide to Success in Singapore's Property Market
        </h1>
        <p className="text-gray-500 leading-8 text-lg">
          With a background in investment banking, I bring a unique analytical
          perspective to help you navigate the ever-changing real estate
          landscape. Whether you're looking to buy, sell, or invest, trust me to
          guide you towards success with a keen eye for detail and a commitment
          to delivering exceptional service.
        </p>
        <button className="mt-8 bg-black text-white p-4 rounded-full">
          Book consultation
        </button>
      </div>
      <div className="">
        <img src="/dp.png" className="max-w-[380px]" />
      </div>
    </div>
  );
}

function Reviews() {
  const reviews = [
    {
      name: "Trina",
      photoURL:
        "https://images.pexels.com/photos/1877913/pexels-photo-1877913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      review:
        "Louis made my property search a breeze! His attention to detail and deep market knowledge impressed me. He understood my preferences and showcased relevant properties. Highly recommended for his reliability and trustworthiness.",
    },
    {
      name: "David",
      photoURL:
        "https://images.pexels.com/photos/1325752/pexels-photo-1325752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      review:
        "Working with Louis was a pleasure! His professionalism and commitment stood out. With his investment banking background, Louis provided well-researched options and guided me to a profitable investment. Look no further for a property agent with expertise and integrity.",
    },
    {
      name: "Moses",
      photoURL:
        "https://images.pexels.com/photos/3778899/pexels-photo-3778899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      review:
        "I had a fantastic experience with Louis as my property agent. His unparalleled knowledge and attention to detail ensured no stone was left unturned. Thanks to his guidance, I found the perfect property. Highly recommended for his dedication and trustworthiness.",
    },
  ];
  return (
    <div className="py-24">
      <h2 className="text-2xl font-semibold mb-8 mx-auto w-fit">
        Client Reviews
      </h2>
      <div className="flex flex-col laptop:flex-row gap-8 ">
        {reviews.map((r, i) => (
          <div
            className="flex-1 p-8 bg-white rounded-xl relative flex flex-col justify-between shadow-[0px_0px_15px_15px_#f1f5f9]"
            key={i}
          >
            <p className="text-gray-600 mb-8 text-wide leading-8">{r.review}</p>
            <div className="flex gap-4 items-center">
              <img
                src={r.photoURL}
                className="w-16 h-16 object-cover rounded-full shadow"
              />
              <p className="font-semibold">{r.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Listings() {
  const listings = [
    {
      name: "Hi",
      photoURL:
        "https://cdn.pixabay.com/photo/2014/08/08/21/22/interior-design-413718_1280.jpg",
    },
    {
      name: "David",
      photoURL:
        "https://cdn.pixabay.com/photo/2018/01/26/08/15/dining-room-3108037_1280.jpg",
    },
    {
      name: "Moses",
      photoURL:
        "https://cdn.pixabay.com/photo/2019/12/26/16/51/luxury-suite-4720815_1280.jpg",
    },
  ];
  return (
    <div className="py-24">
      <h2 className="text-2xl font-semibold mb-8 mx-auto w-fit">
        Past Listings
      </h2>
      <div className="flex flex-col laptop:flex-row gap-8 ">
        {listings.map((l, i) => (
          <div key={i} className="flex-1">
            <img src={l.photoURL} className="object-cover h-[300px] w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
