import { Button } from "~/components/ui/button";
import libraryLogo from "../../../assets/library-logo.jpg";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex w-full justify-center items-center">
        <div className="w-full xl:w-4/5 2xl:3/5 flex flex-col lg:flex-row justify-around items-center">
          <img
            className="rounded-4xl p-3"
            src={libraryLogo}
            alt="library logo"
            height={400}
            width={400}
          />
          <div className="flex flex-col items-center lg:items-center mt-5">
            <h1>Welcome to Kamar Taj Library</h1>
            <h4>Rent, manage and track your books with us</h4>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center gap-5 mt-5">
        <Button size={"lg"} className="bg-library-skin">
          Login
        </Button>
        <Button size={"lg"} className="bg-library-skin">Register</Button>
      </div>
    </div>
  );
}
