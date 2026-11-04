import { ArrowRight } from 'lucide-react';

interface CategoryShowcaseProps {
  onSelectCategory: (categoryId: string) => void;
  onExploreAll: () => void;
  selectedCategory?: string | null;
}

interface ShowcaseItem {
  id: string;
  categoryId: string;
  title: string;
  image: string;
  subtitle: string;
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: 'nuts',
    categoryId: 'almonds',
    title: 'Premium Nuts',
    image: '/mockup_crops/cat_nuts_hd.jpg',
    subtitle: 'Almonds, Cashews & Walnuts',
  },
  {
    id: 'dates',
    categoryId: 'dates',
    title: 'Dates & Figs',
    image: '/mockup_crops/cat_dates_hd.jpg',
    subtitle: 'Royal Medjool & Afghan Anjeer',
  },
  {
    id: 'dried-fruits',
    categoryId: 'raisins',
    title: 'Dried Fruits',
    image: '/mockup_crops/cat_dried_fruits_hd.jpg',
    subtitle: 'Golden Raisins & Sun-Dried Fruits',
  },
  {
    id: 'seeds',
    categoryId: 'berries-seeds',
    title: 'Seeds & Trail Mixes',
    image: '/mockup_crops/cat_seeds_hd.jpg',
    subtitle: 'Super Seeds & Roasted Pistachios',
  },
  {
    id: 'hampers',
    categoryId: 'gift-boxes',
    title: 'Gift Hampers',
    image: '/mockup_crops/cat_hampers_hd.jpg',
    subtitle: 'Festive Boxes & Keepsake Trays',
  },
];

export default function CategoryShowcase({
  onSelectCategory,
  onExploreAll,
  selectedCategory,
}: CategoryShowcaseProps) {
  const handleCardClick = (catId: string) => {
    onSelectCategory(catId);
    setTimeout(() => {
      const el = document.getElementById('products-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section className="bg-[#FAF7F2] py-5 sm:py-7 border-b border-[#EEDBCA]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 5-Column Grid on Desktop, 2/3 cols on tablet, swipe/2-cols on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
          {SHOWCASE_ITEMS.map((item, index) => {
            const isSelected = selectedCategory === item.categoryId;
            const isLastOnMobileOdd = index === 4;

            return (
              <button
                key={item.id}
                onClick={() => handleCardClick(item.categoryId)}
                className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden border transition-all duration-300 text-left p-0 cursor-pointer shadow-xs hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#8C6339] ${
                  isSelected
                    ? 'border-[#8C6339] ring-2 ring-[#8C6339]/40 shadow-md'
                    : 'border-[#E7DEC8]/90 hover:border-[#D9C8B5] bg-[#F5EBE1]'
                } ${isLastOnMobileOdd ? 'col-span-2 sm:col-span-1' : ''}`}
                aria-label={`Explore ${item.title}`}
              >
                {/* Mockup HD card visual matching reference design 100% */}
                <div className="relative w-full aspect-[2.35/1] overflow-hidden bg-[#F5EBE1]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  {/* Subtle hover sheen */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
