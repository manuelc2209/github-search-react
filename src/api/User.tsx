import { BASE_PATH, Data } from "./shared";

let githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
let githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

export interface userData {}

export async function getUserData(user?: string, url?: string) {
  try {
    const res = await fetch(
      url
        ? `${url}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
        : `${BASE_PATH}/search/users?q=${user}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    if (!res.ok) {
      const message = `An error has occured: ${res.status} - ${res.statusText}`;
      throw new Error(message);
    }

    const data = await res.json();

    const result = {
      status: res.status,
      headers: {
        "Content-Type": res.headers.get("Content-Type"),
        "Content-Length": res.headers.get("Content-Length"),
      },
      length: res.headers.get("Content-Length"),
      data: data,
    };
    return result;
  } catch (err: any) {
    return err.message;
  }
}

export async function buildUserProfile(data: Data) {
  const newData = data.items.map((item: any) =>
    getUserData(undefined, item.url).then((profileData) => {
      return {
        ...item,
        profileData: profileData.data,
      };
    })
  );

  return await Promise.all(newData).then(function (results) {
    return results;
  });
}
