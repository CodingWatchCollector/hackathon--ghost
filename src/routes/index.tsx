import { Link, useLoaderData } from "react-router-dom";
import { SettingsButton } from "../components/settings-button";
import { AvatarButton } from "../components/avatar-button";

type SetType = {
  name: string;
  slug: string;
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
        background: "https://picsum.photos/400/200?random=1",
      },
      {
        name: "Body",
        slug: "body",
        background: "https://picsum.photos/400/200?random=2",
      },
      {
        name: "Colors",
        slug: "colors",
        background: "https://picsum.photos/400/200?random=3",
      },
      {
        name: "Family",
        slug: "family",
        background: "https://picsum.photos/400/200?random=4",
      },
      {
        name: "Fruits",
        slug: "fruits",
        background: "https://picsum.photos/400/200?random=5",
      },
    ] satisfies Loader["sets"],
    profile: {
      image: "https://picsum.photos/id/40/100/100",
    },
  };
};

export const Index = () => {
  const { sets } = useLoaderData() as Loader;
  return (
    <section className="index-page">
      <header>
        <SettingsButton />
        <AvatarButton />
      </header>
      <ul role="list">
        {sets.map(({ slug, name, background }) => (
          <li key={slug}>
            <Link to={`sets/${slug}`}>
              <div>{name}</div>
              <img src={background} alt="" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
