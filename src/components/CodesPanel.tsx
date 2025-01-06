import { netflixCodes } from "@/data/netflix-codes";
export default function CodesPanel() {
  return (
    <div className="flex-1 flex flex-col gap-md">
      {netflixCodes.map((code) => (
        <div key={Math.random()} className="flex justify-between ">
          <p className="text-md font-semibold uppercase">{code.category}</p>
          <ul className="flex flex-col flex-1 max-w-[400px]">
            {code.subcategories.map((item) => (
              <li
                key={Math.random()}
                className="flex justify-between items-center"
              >
                {item.name}
                <span className="text-primary">{item.code}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
