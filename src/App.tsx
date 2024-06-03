import { Route, Routes } from "react-router-dom";
import styles from "./app.module.scss";
import SideBar from "./components/SideBar/SideBar";
import AllThemes from "./pages/AllThemes";
import LogicAndThinking from "./pages/LogicAndThinking";
import Riddles from "./pages/Riddles";
import Puzzles from "./pages/Puzzles";
import Globetrotting from "./pages/Globetrotting";
import TheWorldAroundUs from "./pages/TheWorldAroundUs";
import useGetData from "./hooks/useGetData";
import { Item } from "./ts/types";
function App() {
  const { data, loading, error } = useGetData(
    `${process.env.REACT_APP_API_URL}`
  );

  function filterData(filter: string) {
    const filteredData = data.filter((item: Item) =>
      item.tags.includes(filter)
    );
    return filteredData;
  }

  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.cards}>
      <Routes>
        <Route
          path="/"
          element={<AllThemes data={data} loading={loading} error={error} />}
        />
        <Route
          path="/logicandthinking"
          element={
            <LogicAndThinking
              data={filterData("Логика и мышление")}
              loading={loading}
              error={error}
            />
          }
        />
        <Route
          path="/riddles"
          element={
            <Riddles
              data={filterData("Загадки")}
              loading={loading}
              error={error}
            />
          }
        />
        <Route
          path="/puzzles"
          element={
            <Puzzles
              data={filterData("Головоломки")}
              loading={loading}
              error={error}
            />
          }
        />
        <Route
          path="/globetrotting"
          element={
            <Globetrotting
              data={filterData("Страны и столицы")}
              loading={loading}
              error={error}
            />
          }
        />
        <Route
          path="/Theworldaroundus"
          element={
            <TheWorldAroundUs
              data={filterData("Окружающий мир")}
              loading={loading}
              error={error}
            />
          }
        />
      </Routes>
    </div>
    </div>
  );
}

export default App;
