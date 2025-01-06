import CodesPanel from "@/components/CodesPanel";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="min-h-screen mt-[57px] relative">
      <h1 className="text-[9rem] font-semibold">NETFLIX CODES</h1>
      <p>
        Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Tempore,
        rerum omnis, illo porro consequatur possimus, ea veritatis earum
        aperiam, et eligendi fuga. An there was, harum. Repudiandae quam illo
        ipsum ipsa sunt. Voluptates consectetur adipisci assumenda tempora earum
        veniam? Mollitia soluta ipsam animi unde commodi vero necessitatibus
        nulla libero praesentium perspiciatis magnam, iste eaque quidem,
        reprehenderit dolorem quod labore omnis placeat quas?
      </p>
      <section className="flex gap-lg mt-md relative">
        <Sidebar />
        <CodesPanel />
      </section>
    </div>
  );
}
