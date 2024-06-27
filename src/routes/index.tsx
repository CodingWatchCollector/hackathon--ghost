import { Link, useLoaderData } from "react-router-dom";
import { SettingsButton } from "../components/settings-button";
import { AvatarButton } from "../components/avatar-button";
import { Timer } from "../components/timer";

type SetType = {
  name: string;
  slug: string;
  active: boolean;
  background: string;
};

type Loader = {
  sets: SetType[];
};

export const loader = () => {
  return {
    sets: [
      {
        name: "Animals",
        slug: "animals",
        active: true,
        background: "/sets/animals.jpg",
      },
      {
        name: "Colors",
        slug: "colors",
        active: false,
        background: "/sets/colors.jpg",
      },
      {
        name: "Fruits",
        slug: "fruits",
        active: false,
        background: "/sets/fruits.jpg",
      },
    ] satisfies Loader["sets"],
    profile: {
      image: "/profile.jpg",
    },
  };
};

export const Index = () => {
  const { sets } = useLoaderData() as Loader;
  return (
    <section className="index-page stack">
      <header>
        <SettingsButton />
        <Timer />
        <AvatarButton />
      </header>
      <section className="stack-small">
        <Link to="analytics" className="button-style analytics">
          Analytics
        </Link>
        <ul role="list" className="stack-small sets">
          {sets.map(({ slug, name, active, background }) => (
            <li key={slug} className={active ? "" : "disabled"}>
              <Link to={`sets/${slug}`}>
                <div className="image-wrapper">
                  <img src={background} alt="" />
                </div>
                <div className="text--centered">{name}</div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};
