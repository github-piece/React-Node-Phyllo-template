import Header from "./Components/Header";
import UserView from "./Containers/UserView";
// import api from "./utils/api";

function App() {
  return (
    <div>
      <Header />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-4">
        <UserView />
      </div>
    </div>
  );
}

export default App;
