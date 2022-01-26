import React from "react";
import { render } from "@testing-library/react";
import { Card } from "./";

const userData = {
  login: "ads",
  id: 131052,
  node_id: "1313VXNlcjEzMTA1Mg==",
  avatar_url: "https://avatars.githubusercontent.com/u/131052?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/ads",
  html_url: "https://github.com/ads",
  followers_url: "https://api.github.com/users/ads/followers",
  following_url: "https://api.github.com/users/ads/following{/other_user}",
  gists_url: "https://api.github.com/users/ads/gists{/gist_id}",
  starred_url: "https://api.github.com/users/ads/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/ads/subscriptions",
  organizations_url: "https://api.github.com/users/ads/orgs",
  repos_url: "https://api.github.com/users/ads/repos",
  events_url: "https://api.github.com/users/ads/events{/privacy}",
  received_events_url: "https://api.github.com/users/ads/received_events",
  type: "User",
  site_admin: false,
  profileData: {
    name: "asd",
    id: 123123123123,
    company: "home",
    email: "a@email.com",
    username: "asdUsername",
    avatar_url: "http://www.google.com",
  },
  score: 1,
};

test("render a card with dummy data", () => {
  const view = render(<Card user={userData} />);
  expect(view).toMatchSnapshot();
});
