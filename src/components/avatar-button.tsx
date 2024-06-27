import { Link, useLoaderData } from "react-router-dom";

export const AvatarButton = () => (
  <Link to="profile" className="border--round avatar--button block">
    <img alt="profile" src={useLoaderData().profile.image}></img>
  </Link>
);
