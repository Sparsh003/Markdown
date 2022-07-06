import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import translate from "./images/translate.png";
import book from "./images/open-book.png";
import list from "./images/list.png";
import git from "./images/git.png";
import question from "./images/question.png";
import flag from "./images/red-flag.png";
import link from "./images/link.png";
import view from "./images/view.png";
import alert from "./images/alert.png";
import comment from "./images/comment.png";

function App() {
  return (
    <div className="App">
      <Nav />
      <Dashboard />

      <div className="stickyIcons">
        <ul>
          <li>
            <img className="m-4 p-1" src={translate} alt="translate" />
          </li>
          <li>
            <img className="m-4 p-1" src={book} alt="book" />
          </li>

          <li>
            <img className="m-4 p-1" src={link} alt="link" />
          </li>
          <li>
            <img className="m-4 p-1" src={comment} alt="comment" />
          </li>
          <li>
            <img className="m-4 p-1" src={list} alt="list" />
          </li>
          <li>
            <img className="m-4 p-1" src={alert} alt="alert" />
          </li>
          <li>
            <img className="m-4 p-1" src={view} alt="view" />
          </li>
          <li>
            <img className="m-4 p-1" src={question} alt="question" />
          </li>
          <li>
            <img className="m-4 p-1" src={git} alt="git" />
          </li>
          <li>
            <img className="m-4 p-1 " src={flag} alt="flag" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
