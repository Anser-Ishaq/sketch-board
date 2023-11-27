import Board from "./components/client/Board/Board";
import Menu from "./components/client/Menu/Menu";
import Toolbox from "./components/server/Toolbox/Toolbox";

export default function Home() {
  return (
    <main className="flex h-screen flex-col">
      <Menu />
      <Board />
      <Toolbox />
    </main>
  );
}
