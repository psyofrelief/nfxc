import { netflixCodes } from "@/data/netflix-codes";
import Footer from "./Footer";

export default function CodesPanel() {
  return (
    <div className="flex-1 flex flex-col gap-md py-sm">
      {netflixCodes.map((item) => (
        <div
          key={Math.random()}
          id={item.category.toLowerCase()} // Add unique id for each category
          className="flex justify-end gap-md"
        >
          <a
            href={`https://www.netflix.com/browse/genre/${item.code}`}
            className="text-md font-semibold uppercase h-fit hover:underline transition-all"
          >
            {item.category}{" "}
            <span className="text-primary font-normal">{item.code}</span>
          </a>
          <div className="flex flex-col flex-1 max-w-[400px]">
            {item.subcategories.map((itm) => (
              <a
                href={`https://www.netflix.com/browse/genre/${itm.code}`}
                key={itm.code}
                className="flex justify-between items-center hover:underline hover:text-secondary"
              >
                {itm.name}
                <span className="text-primary">{itm.code}</span>
              </a>
            ))}
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
}
