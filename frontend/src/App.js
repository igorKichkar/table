import React, { useState, useEffect } from "react";
import MyTable from "./components/table/MyTable";
import TableFilter from "./components/table/TableFilter";
import TableService from "./components/table/API/TableService";
import { getPageCount } from "./components/table/utils/pages";
import { useFetching } from "./components/table/hooks/UseFetching";
import Loader from "./components/table/UI/loader/Loader";
import Pagination from "./components/table/UI/pagination/Pagination";
import checkField from "./components/table/utils/checkField";
import "./styles/App.css";

function App() {
  const [rows, setTable] = useState([]);
  const [filter, setFilter] = useState({
    sort: "",
    query: "",
    field: "",
    type: "",
  });

  const [totalPages, setTotalPages] = useState(1); //состояние кол-ва страниц
  const [limit, setLimit] = useState(10); //состояние кол-ва постов на странице
  const [page, setPage] = useState(1); // состояние номера страницы
  const [queryError, setQueryError] = useState("");
  const [fetchPosts, isPostsLoading, tableError] = useFetching(async () => {
    const responce = await TableService.getAll(
      limit,
      page,
      filter.query,
      filter.field,
      filter.type,
      filter.sort
    );
    setTable(responce.results);

    const totalCount = responce.count; // получаем кол-во всех постов
    setTotalPages(getPageCount(totalCount, limit));
  });

  const [finder, setFinder] = useState(false);
  const loadFindResults = () => {
    if (!checkField(filter.field, filter.query)) {
      setTable([]);
      setTotalPages(0);
      setQueryError("You entered incorrect data");
    } else {
      setPage(1);
      setQueryError("");
      if (finder) {
        setFinder(false);
      } else {
        setFinder(true);
      }
    }
  };

  useEffect(() => {
    //загружаем посты при отрисовке
    fetchPosts();
  }, [page, finder, filter.sort]); //при выборе номера страницы подгружаются нужные посты
  const changePage = (page) => {
    setPage(page); // при нажатии на номер страницы, меням состояние страниц
  };
  return (
    <div className="App">
      {queryError && (
        <div className="alert alert-warning">{queryError}.</div>
      )}
      {tableError && (
        <div className="alert alert-danger">Error. {tableError}.</div>
      )}
      <TableFilter
        filter={filter}
        setFilter={setFilter}
        error={queryError}
        loadFindResults={loadFindResults}
      />
      {isPostsLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <MyTable data={rows} />
      )}
      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
    </div>
  );
}

export default App;
