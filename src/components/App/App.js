import AppBar from "./AppBar";
import Settings from "../Settings";
import { Layout } from "../../designs";
import Content from "../Shared/Content";
function App() {
  return (
    <Layout>
      <AppBar />
      <Content>
        <Settings />
      </Content>
    </Layout>
  );
}
export default App;
