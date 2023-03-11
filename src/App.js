import { Provider } from "react-redux";
import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import TodoList from "./component/TodoList";
import store from "./Redux/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
        {/* <!-- navbar --> */}
        <Navbar />
        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          {/* <!-- header --> */}
          <Header />
          <hr className="mt-4" />

          {/* <!-- todo list --> */}
          <TodoList />

          <hr className="mt-4" />

          {/* <!-- footer --> */}
          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
