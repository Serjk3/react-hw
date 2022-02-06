import React, { useEffect, useState } from "react";
import { getApiResource } from "../../../utils/API";
import styles from "./GitPage.module.css";

interface ISearch {
  login: string;
  id: number;
}

interface IUsers {
  login: string;
  name: string;
  id: number;
  avatar_url: string;
  followers: number;
  html_url: string;
}

export const GitPage = () => {
  const [selectedUser, setSelectedUser] = useState<ISearch | null>(null);
  const [userInfo, setUserInfo] = useState<IUsers | null>(null);
  const [usersList, setUsersList] = useState<ISearch[]>([]);
  const [inputSearch, setInputSearch] = useState("Введите имя пользователя");
  const [searchRes, setSearchRes] = useState("");
  const SEARCH_RESULT: string = `https://api.github.com/search/users?q=${inputSearch}`;

  const getUsersList = async (url: string) => {
    const res = await getApiResource(url);
    setUsersList(res.items);
  };

  const getUserData = async (url: string) => {
    const res = await getApiResource(url);
    setUserInfo(res);
  };

  useEffect(() => {
    getUsersList(SEARCH_RESULT);
    if (!!selectedUser)
      getUserData(`https://api.github.com/users/${selectedUser.login}`);
  }, [searchRes, selectedUser]);

  return (
    <div className={styles.container}>
      {userInfo && (
        <div className={styles.user__detail}>
          <h2>{userInfo.login}</h2>
          <div>
            <div className={styles.user__avatar}>
              <img src={userInfo.avatar_url} alt="Img" />
            </div>
            <div className={styles.user__name}>Name: {userInfo.name}</div>
            <div className={styles.user__followers}>
              Followers: {userInfo.followers}
            </div>
            <a href={userInfo.html_url} className={styles.user__url}>
              User Url
            </a>
          </div>
        </div>
      )}
      <div className={styles.section__search}>
        <div className={styles.form__search}>
          <input
            value={inputSearch}
            onClick={(e) => setInputSearch("")}
            onChange={(e) => setInputSearch(e.currentTarget.value)}
            type="text"
            placeholder="Введите имя пользователя"
          />
          <button
            onClick={() => {
              setSearchRes(inputSearch);
            }}
          >
            Find
          </button>
        </div>
        <ul className={styles.users__list}>
          {usersList.length === 0 ? (
            <div className={styles.search__error}>
              Имя пользователя не введено, либо введено некорректно
            </div>
          ) : (
            usersList.map((item) => (
              <li
                key={item.id}
                className={styles.users__item}
                onClick={() => {
                  setSelectedUser(item);
                }}
              >
                {item.login}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};
