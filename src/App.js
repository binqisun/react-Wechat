import "./styles.css";
import MessageList from "./components/messageList";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>Wechat App</h1>
      </header>
      <div>
        <MessageList />
      </div>
    </div>
  );
}
