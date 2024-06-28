import { Link, useLoaderData } from "react-router-dom";
import { Loader } from "../routes";

export const AvatarButton = () => (
  <Link to="profile" className="border--round avatar--button block tappable">
    <img
      alt="profile"
      className="border--round"
      src={(useLoaderData() as Loader).profile.image}
    ></img>
  </Link>
);
