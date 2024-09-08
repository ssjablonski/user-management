import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { setFilter } from "../redux/userSlice";

const Search = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { filteredUsers, loading, error, filters } = useSelector(
    (state: RootState) => state.users
  );

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setFilter({ [name]: value }));
  };

  return (
    <div className="grid grid-cols-4 gap-4 mb-4">
      <input
        type="text"
        name="name"
        value={filters.name}
        onChange={handleFilterChange}
        placeholder="Search by name"
        className="p-3 rounded-lg bg-blue-100 focus:bg-blue-200"
      />
      <input
        type="text"
        name="username"
        value={filters.username}
        onChange={handleFilterChange}
        placeholder="Search by username"
        className="p-3 rounded-lg bg-blue-100 focus:bg-blue-200"
      />
      <input
        type="text"
        name="email"
        value={filters.email}
        onChange={handleFilterChange}
        placeholder="Search by email"
        className="p-3 rounded-lg bg-blue-100 focus:bg-blue-200"
      />
      <input
        type="text"
        name="phone"
        value={filters.phone}
        onChange={handleFilterChange}
        placeholder="Search by phone"
        className="p-3 rounded-lg bg-blue-100 focus:bg-blue-200"
      />
    </div>
  );
};

export default Search;
