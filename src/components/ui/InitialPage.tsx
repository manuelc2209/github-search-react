import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "..";
import { getUserData, buildUserProfile } from "../../api/User";

const ENTER_EVENT_CODE = 13;

export const UIComponent: React.FC = () => {
  const [userData, setUserData] = useState<any[]>();
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event?.target) {
      setValue(event.target.value);
    }
  };

  const handleOnKeyPress = async (
    key: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (key?.nativeEvent?.keyCode === ENTER_EVENT_CODE) {
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
      navigate("/search", { state: userData });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  const findUser = (
    <div>
      <h1>Search for GitHub Users</h1>
      <Input
        value={value}
        onChange={handleOnChange}
        onKeyPress={handleOnKeyPress}
      ></Input>
    </div>
  );

  return (
    <div>
      {loading ? (
        "Loading"
      ) : (
        <>
          {findUser}
          <>{hasError && <div>Failed to fetch profile</div>}</>
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
