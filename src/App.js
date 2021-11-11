import "./styles.css";
import MessageList from "./components/messageList";
import { Container } from "@mui/material";

export default function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <header>
          <h1>吃货群</h1>
        </header>
        <div>
          <MessageList />
        </div>
      </Container>
    </div>
  );
}
