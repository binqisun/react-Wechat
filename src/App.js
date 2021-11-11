import "./styles.css";
import MessageList from "./components/MessageList";
import Header from "./components/Header";
import { Container } from "@mui/material";

export default function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Header />
        <div>
          <MessageList />
        </div>
      </Container>
    </div>
  );
}
