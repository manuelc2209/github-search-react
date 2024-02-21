import { BASE_PATH, Data } from './shared';

let githubClientId = import.meta.env.REACT_APP_GITHUB_CLIENT_ID;
let githubClientSecret = import.meta.env.REACT_APP_GITHUB_CLIENT_SECRET;

export interface userData {}

export async function getUserData(user?: string, url?: string) {
    const res = await fetch(
        url
            ? `${url}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
            : `${BASE_PATH}/search/users?q=${user}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    const data = await res.json();

    const result = {
        status: res.status,
        headers: {
            'Content-Type': res.headers.get('Content-Type'),
            'Content-Length': res.headers.get('Content-Length')
        },
        length: res.headers.get('Content-Length'),
        data: data
    };
    return result;
}

export async function buildUserProfile(data: Data) {
    const newData = data.items.map((item: any) =>
        getUserData(undefined, item.url).then((profileData) => {
            return {
                ...item,
                profileData: profileData.data,
                rateLimited: profileData.status === 403
            };
        })
    );

    return await Promise.all(newData).then(function (results) {
        return results;
    });
}
