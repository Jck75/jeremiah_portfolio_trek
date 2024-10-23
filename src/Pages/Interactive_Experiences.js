import { Divider } from "antd";
import Tictactoe from "../Components/Tictactoe";
function Interactive_Experiences() {
  return (
    <div>
      <Divider children={"Interactive Experiences"} style={{ borderColor: '#7cb305', fontSize: 30 }} />
      <Tictactoe />
    </div>
  );
}

export default Interactive_Experiences;

