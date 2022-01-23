import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { List } from "./";
import { DataProps } from "../../api/shared";

const userData = {
  login: "ads",
  id: 131052,
  node_id: "MDQ6VXNlcjEzMTA1Mg==",
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

const orgData = {
  ...userData,
  type: "Organization",
};

const pushNumber = 5;
const organizations: Array<DataProps> = [];
const users: Array<DataProps> = [];
for (let i = 0; i < pushNumber; i++) {
  organizations.push(orgData);
  users.push(userData);
}

test("render a List with dummy data", () => {
  const component = render(<List data={users} />);
  expect(component).toMatchSnapshot();
});

test("render a List an empty data", () => {
  const component = render(<List data={[]} />);
  expect(component).toMatchSnapshot();
});

test("render a List and click on Show More", async () => {
  const component = render(<List data={organizations} />);
  const button = await component.findByTestId("StyledButton");
  button.focus();
  fireEvent.click(button);
  expect(component).toMatchSnapshot();
});
