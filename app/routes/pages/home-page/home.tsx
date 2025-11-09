import { Button } from "~/components/ui/button";
import libraryLogo from "../../../assets/library-logo.jpg";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="flex w-full justify-center">
        <div className="w-full xl:w-4/5 2xl:3/5 flex flex-col lg:flex-row justify-around items-center">
          <img
            className="rounded-4xl p-3"
            src={libraryLogo}
            alt="library logo"
            height={600}
            width={600}
          />
          <div className="flex flex-col items-center lg:items-start">
            <h1>Our Library</h1>
            <h4>Get all the books you want</h4>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center gap-x-10">
        <Button size={"lg"} className="bg-library-skin">
          Login
        </Button>
        <Button size={"lg"} className="bg-library-skin">Register</Button>
      </div>
    </div>
  );
}
