import { Link, useLoaderData } from "react-router-dom";

export const AvatarButton = () => (
  <Link to="profile" className="border--round avatar--button block tappable">
    <img
      alt="profile"
      className="border--round"
      src={useLoaderData().profile.image}
    ></img>
  </Link>
);
