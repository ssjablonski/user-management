import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import { fetchUsers } from "../redux/userSlice";
import Search from "./Search";

const UserTable = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filteredUsers, loading, error } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-medium text-center mb-6 text-blue-300">
        User Management
      </h1>
      <Search />
      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full bg-white border border-gray-300 shadow-lg">
          <thead>
            <tr className="bg-blue-400 text-white uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left w-1/4 border-r border-blue-500">
                Name
              </th>
              <th className="py-3 px-6 text-left w-1/4 border-r border-blue-500">
                Username
              </th>
              <th className="py-3 px-6 text-left w-1/4 border-r border-blue-500">
                Email
              </th>
              <th className="py-3 px-6 text-left w-1/4 border-r border-blue-500">
                Phone
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                className="border-b border-gray-200 bg-blue-100 hover:bg-blue-200"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap border-r border-blue-200">
                  <div className="flex items-center">
                    <span className="font-medium">{user.name}</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-left border-r border-blue-200">
                  <div className="flex items-center">
                    <span>{user.username}</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-left border-r border-blue-200">
                  <span>{user.email}</span>
                </td>
                <td className="py-3 px-6 text-left">
                  <span>{user.phone}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
