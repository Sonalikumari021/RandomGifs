import Random from "./components/Random"
import Tag from "./components/Tag"

export default function App() {
  return (
    <div className=" w-full h-screen flex flex-col background overflow-x-hidden items-center">
      <h1 className="text-center w-11/12 mt-[40px] px-10 py-2 text-3xl bg-white rounded-md font-bold "> RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>

  )}
