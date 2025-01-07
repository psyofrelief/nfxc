"use client";
import CodesPanel from "@/components/CodesPanel";
import ProgressBar from "@/components/ProgressBar";
import Sidebar from "@/components/Sidebar";
import TextFade from "@/components/TextFade";

export default function Home() {
  return (
    <div className="min-h-screen">
      <ProgressBar />

      <TextFade direction="down">
        <h1 className="text-md sm:text-[10.5vw] whitespace-nowrap font-semibold mb-sm mt-md  leading-none">
          NETFLIX CODES
        </h1>
        <p>
          Use these carefully chosen secret codes to find a more intelligent way
          to use Netflix. You can explore everything from cult classics to niche
          favourites. NFXC_ is your shortcut to obscure genres and
          difficult-to-find categories. Simply click a code to get right into
          the stuff you enjoy, eliminating the need for endless surfing.
        </p>
        <div className="flex mt-lg">
          <div className="hidden xl:block">
            <Sidebar />
          </div>
          <CodesPanel />
        </div>
      </TextFade>
    </div>
  );
}
