import React, { ChangeEvent, useEffect, useState } from "react";
import { Input, List, UserCard } from "..";
import { UserProps } from "../../api/shared";
import { getUserData, buildUserProfile } from "../../api/User";

const ENTER_EVENT_CODE = "ENTER";

export const UIComponent: React.FC = () => {
  const [userData, setUserData] = useState<any[]>();
  const [selectedUser, setSelectedUser] = useState<UserProps | undefined>();
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [value, setValue] = useState("");

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event?.target) {
      setValue(event.target.value);
    }
  };

  const handleOnKeyPress = async (
    key: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (key?.code?.toUpperCase() === ENTER_EVENT_CODE) {
      setLoading(true);
      const target = key.target as HTMLInputElement;
      const res = await getUserData(target.value);
      if (res && (res.status === 404 || res.status === 403)) {
        setHasError(true);
        setLoading(false);
      }
      if (res && res.data && res.status === 200) {
        const userData = await buildUserProfile(res.data);
        setUserData(userData);
        setLoading(false);
      }
    }
    return;
  };

  useEffect(() => {
    if (userData && userData.length > 0) {
      setLoading(false);
    }
  }, [userData]);

  return (
    <div>
      {loading ? (
        "Loading"
      ) : (
        <>
          {!selectedUser && (
            <div>
              <h1>Search for GitHub Users</h1>
              <Input
                value={value}
                onChange={handleOnChange}
                onKeyPress={handleOnKeyPress}
              ></Input>
            </div>
          )}
          <>
            {hasError ? (
              <div>Failed to fetch profile</div>
            ) : userData && !selectedUser ? (
              <List
                data={userData}
                setSelectedUser={(user: UserProps) => setSelectedUser(user)}
              />
            ) : (
              selectedUser && (
                <UserCard
                  user={selectedUser}
                  onClick={() => setSelectedUser(undefined)}
                />
              )
            )}
          </>
          {userData && userData.length === 0 && !hasError && (
            <div>User not found</div>
          )}
          {!userData && !hasError && (
            <div>Enter a login, name or company you are looking for</div>
          )}
        </>
      )}
    </div>
  );
};
