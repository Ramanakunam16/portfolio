import { RiReactjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { DiLinux } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiJavascript1 className="text-7xl text-yellow-300" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsFill className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-600" />
        </div>{" "}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiNodejsSmall className="text-7xl text-green-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiMysql className="text-7xl text-cyan-300" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiLinux className="text-white-200 text-7xl" />
        </div>
      </div>
    </div>
  );
}

export default Technologies;
