import "./styles.css";
import MessageList from "./components/MessageList";
import Header from "./components/Header";
import { Container } from "@mui/material";

export default function App() {
  return (
    <div className="App">
      {/* set page in a container */}
      <Container maxWidth="sm" style={{ border: "solid" }}>
        {/* Display Header of the group page */}
        <Header />
        <div>
          {/* Display all the messages on the group page */}
          <MessageList />
        </div>
      </Container>
    </div>
  );
}
