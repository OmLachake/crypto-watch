import AppBar from "./AppBar";
import Settings from "../Settings";
import { Layout } from "../../designs";
import Content from "../Shared/Content";
import Dashboard from "../Dashboard";
function App() {
  return (
    <Layout>
      <AppBar />
      <Content>
        <Dashboard />
        <Settings />
      </Content>
    </Layout>
  );
}
export default App;
