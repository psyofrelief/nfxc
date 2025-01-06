import { categories } from "@/data/netflix-codes";
export default function Sidebar() {
  return (
    <aside className="flex flex-col uppercase text-secondary gap-xs">
      {categories.map((category) => (
        <p key={category} className=" hover:bg-gray-200">
          {category}
        </p>
      ))}
    </aside>
  );
}
