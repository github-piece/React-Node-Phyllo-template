import { useEffect, useState } from "react";
import Pagination from "../Components/Pagination";
import Table from "../Components/UserTable";
import api from "../utils/api";

const UserView = () => {
  const [users, setUsers] = useState([]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);

  const fetchUsers = async () => {
    const { data } = await api.get("phyllo/users?page=" + currentPage);
    if (data.success) {
      setUsers(data.users);
      setCurrentPage(data.metadata.offset + 1);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  return (
    <div>
      <Table data={users} page={currentPage} />
      {!!users.length && (
        <Pagination
          className="mx-auto justify-center"
          currentPage={currentPage}
          totalCount={500}
          pageSize={10}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
};

export default UserView;
