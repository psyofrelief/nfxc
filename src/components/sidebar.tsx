import { categories } from "@/data/netflix-codes";
export default function Sidebar() {
  return (
    <div className="flex flex-col uppercase text-secondary gap-xs sticky top-[73px] h-fit">
      {categories.map((category) => (
        <p key={category} className="hover:bg-gray-200">
          {category}
        </p>
      ))}
    </div>
  );
}
