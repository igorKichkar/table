import React from "react";
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

function TableFilter({ filter, setFilter, error, loadFindResults }) {
  return (
    <div>
      <MyInput
        disabled={filter.field && filter.type ? false : true}
        placeholder={"Filtration"}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        value={filter.query}
      />
      <button
        onClick={loadFindResults}
        disabled={filter.field && filter.type ? false : true}
        className="btn btn-primary"
      >
        Find
      </button>

      <MySelect
        error={error}
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue={"Sorting"}
        options={[
          { value: "title", name: "Title" },
          { value: "amount", name: "Amount" },
          { value: "distance", name: "Distance" },
        ]}
      />
      <MySelect
        value={filter.field}
        onChange={(selectedSort) =>
          setFilter({ ...filter, field: selectedSort })
        }
        defaultValue={"Select a field to filter"}
        options={[
          { value: "title", name: "Title" },
          { value: "amount", name: "Amount" },
          { value: "distance", name: "Distance" },
        ]}
      />
      <MySelect
        value={filter.type}
        onChange={(selectedSort) =>
          setFilter({ ...filter, type: selectedSort })
        }
        disabled={filter.field ? false : true}
        defaultValue={"Select the type of filtration"}
        options={[
          { value: "equals", name: "Equals" },
          { value: "contains", name: "Contains" },
          { value: "more", name: "More" },
          { value: "less", name: "Less" },
        ]}
      />
    </div>
  );
}

export default TableFilter;
