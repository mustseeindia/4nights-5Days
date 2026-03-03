import { Phone, MessageCircle } from "lucide-react";
import { Car, BedDouble, UtensilsCrossed, Camera } from "lucide-react";

interface RelatedPackagesProps {
  onOpenLeadForm: (packageInterest: string) => void;
}

const packageSections = [

  {
    title: "Kerala Family Packages – Safe, Comfortable & Value-Packed",
    packages: [
      {
        image: "./assets/honeymoon-kerala.dim_600x400.jpg",
        name: "God’s Own Country: Beach & Backwaters (5N / 6D)",
        duration: "5N/6D",
        itinerary: "2N Munnar 1N Allapey/Kumarakom  2N Kovalam",
        price: "₹15,099",
        oldPrice: "₹22,475",
        cities: "5 Nights",
        days: "6 days",
        rating: "4.9",
        reviews: "538",
        featuresLeft: [
          "4 Star Resort Stay",
          "Houseboat Experience",
          "Sightseeing & Activities",
        ],
        featuresRight: [
          "Private cab transfers",
          "Airport Transfers",
          "Breakfast Included",
        ],
      },
      {
        image: "./assets/alleppey-houseboat.dim_800x600.jpg",
        name: "Kerala Dream Escape with Houseboat (4N / 5D)",
        duration: "4N/5D",
        itinerary: "2N Munnar 1N Thekkady 1N Alleppey/Kumarakom",
        price: "₹11,999",
        oldPrice: "₹19,999",
        cities: "4 Nights",
        days: "5 days",
        rating: "4.9",
        reviews: "1102",
        featuresLeft: [
          "Flower Decor Room",
          "Candle Light Dinner",
          "Private Sightseeing",
        ],
        featuresRight: [
          "Private cab transfers",
          "Airport Transfers",
          "Breakfast Included",
        ],
      },
      {
        image: "./assets/munnar-tea.dim_800x600.jpg",
        name: "Backwater Bliss Mini Holiday (3N / 4D)",
        duration: "3N/4D",
        itinerary: "2N Munnar 1N Alleppey/Kumarakom",
        price: "₹9,999",
        oldPrice: "₹12,999",
        cities: "3 Nights",
        days: "4 days",
        rating: "4.7",
        reviews: "384",
        featuresLeft: [
          "Standard Hotel Stay",
          "Backwater Ride",
          "Sightseeing",
        ],
        featuresRight: [
          "Private cab transfers",
          "Airport Transfers",
          "Breakfast Included",
        ],
      },
    ],
  },
  {
    title: "Complete Kerala Experience – Premium 6–8 Day Tours with Trusted Travel Support",
    packages: [
      {
        image: "./assets/luxury-kerala.dim_600x400.jpg",
        name: "Kerala Family Favourite Tour (5N / 6D)",
        duration: "4N/5D",
        itinerary: "2N Munnar 1N Alleppey/Kumarakom 2N Kovalam",
        price: "₹16,999",
        oldPrice: "₹21,475",
        cities: "4 Nights",
        days: "5 days",
        rating: "4.9",
        reviews: "724",
        featuresLeft: [
          "4 Star Hotel/ Resort",
          "Trusted Luxury. Complete Comfort.",
          "Activities & sightseeing",
        ],
        featuresRight: [
          "Private cab transfers",
          "Airport Transfers",
          "Selected Meals",
        ],
      },
      {
        image: "./assets/4n5dheader.jpg",
        name: "Kerala Grand Experience (7N / 8D)",
        duration: "7N/8D",
        itinerary: "1N Cochin 2N Munnar 1N Thekkady 1N Alleppey/Kumarakom 2N Kovalam",
        price: "₹18,999",
        oldPrice: "₹22,370",
        cities: "7 Nights",
        days: "8 days",
        rating: "4.8",
        reviews: "912",
        featuresLeft: [
          "3 Star Hotel/ Resort",
          "Safe & Seamless",
          "Activities & sightseeing",
        ],
        featuresRight: [
          "Private cab transfers",
          "Airport Transfers",
          "Selected Meals",
        ],
      },
      {
        image: "./assets/keralacomplete.jpg",
        name: "Kerala Complete Comfort Tour (6N / 7D)",
        duration: "6N/7D",
        itinerary: "2N Munnar 1N Thekkady 1N Alleppey 2N Kovalam",
        price: "₹16,999",
        oldPrice: "₹22,690",
        cities: "6 Nights",
        days: "7 days",
        rating: "4.8",
        reviews: "644",
        featuresLeft: [
          "3 Star Hotel/ Resort",
          "Complete Kerala Experience.",
          "Activities & sightseeing",
        ],
        featuresRight: [
          "Private cab transfers",
          "Airport Transfers",
          "Selected Meals",
        ],
      },
    ],
  },
];

export default function RelatedPackages({
  onOpenLeadForm,
}: RelatedPackagesProps) {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">

        {packageSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-20">

            {/* Section Title */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="h-[2px] w-16 bg-indigo-600"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
                {section.title}
              </h2>
              <div className="h-[2px] w-16 bg-indigo-600"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {section.packages.map((pkg, i) => (

                <div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border"
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />

                    <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                      Limited Offer Kerala Trip
                    </div>

                    <div className="absolute top-3 right-3 bg-white text-black text-xs px-2 py-1 rounded-md font-semibold shadow">
                      {pkg.duration}
                    </div>
                  </div>

                  <div className="p-5">

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {pkg.name}
                    </h3>

                    <div className="inline-block bg-yellow-100 text-gray-800 text-sm px-3 py-1 rounded-full mb-4">
                      {pkg.itinerary}
                    </div>

                    <hr className="mb-4" />

                    <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-700 mb-4">
                      {pkg.featuresLeft.map((f, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span>•</span> {f}
                        </div>
                      ))}
                      {pkg.featuresRight.map((f, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span>•</span> {f}
                        </div>
                      ))}
                    </div>

                    <hr className="mb-4" />

                    <div className="flex items-center gap-3 text-sm text-gray-700 mb-4">
                      <span>{pkg.cities} | {pkg.days}</span>
                      <span className="text-yellow-500 font-semibold">
                        {pkg.rating} ★★★★★
                      </span>
                      <span>({pkg.reviews})</span>
                    </div>

                    <div className="flex items-center gap-10 text-indigo-700 mb-4">
                      <Car size={28} strokeWidth={1.8} />
                      <BedDouble size={28} strokeWidth={1.8} />
                      <UtensilsCrossed size={28} strokeWidth={1.8} />
                      <Camera size={28} strokeWidth={1.8} />
                    </div>

                    <div className="text-[16px] text-gray-600 font-medium mb-4">
                      Starts from{" "}
                      <span className="text-green-700 font-bold text-[22px]">
                        {pkg.price}
                      </span>{" "}
                      <span className="text-red-500 line-through font-semibold">
                        {pkg.oldPrice}
                      </span>{" "}
                      <span className="text-gray-900 font-semibold">
                        per adult* 
                      </span>
                    </div>

                    {/* DO NOT TOUCH BUTTONS */}
                    <div className="flex gap-2 mt-2">
                      <a
                        href="tel:+918197417772"
                        className="flex-1 h-9 flex items-center justify-center gap-1.5 px-3 rounded-md text-white text-[13.5px] font-medium whitespace-nowrap"
                        style={{ backgroundColor: "#2E3192" }}
                      >
                        <Phone size={15} strokeWidth={2.2} />
                        Call Now
                      </a>

                      <a
                        href={`https://wa.me/918197417772?text=${encodeURIComponent(
                          `Hi IndiaTourPackages, I want to Enquire about the ${pkg.name}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 h-9 flex items-center justify-center gap-1.5 px-3 rounded-md text-white text-[13.5px] font-medium whitespace-nowrap"
                        style={{ backgroundColor: "#25D366" }}
                      >
                        <svg viewBox="0 0 24 24" width="15" height="15" fill="white">
                          <path d="M20.52 3.48A11.94 11.94 0 0012.06 0C5.49 0 .14 5.35.14 11.92c0 2.1.55 4.15 1.6 5.95L0 24l6.3-1.65a11.9 11.9 0 005.76 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.47-8.42zM12.07 21.6a9.67 9.67 0 01-4.93-1.35l-.35-.21-3.74.98 1-3.64-.23-.37a9.66 9.66 0 01-1.5-5.09c0-5.34 4.35-9.69 9.7-9.69 2.59 0 5.03 1.01 6.86 2.83a9.63 9.63 0 012.83 6.86c0 5.35-4.35 9.7-9.69 9.7zm5.33-7.25c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.18.29-.73.93-.9 1.12-.17.2-.33.22-.62.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.6-2.01-.17-.29-.02-.45.13-.6.14-.14.29-.37.44-.55.15-.18.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.64-1.54-.88-2.1-.23-.55-.47-.48-.64-.49l-.55-.01c-.18 0-.49.07-.75.37-.26.29-1 1-1 2.44 0 1.44 1.03 2.83 1.18 3.03.15.2 2.03 3.1 4.93 4.35.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34z"/>
                        </svg>
                        WhatsApp Now
                      </a>
                    </div>

                  </div>
                </div>

              ))}

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
