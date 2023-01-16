import {Data} from "./Data";

function App() {
  return (
    <div>
      <Data option={'data'} title={'Загрузка'} />
      <Data option={'error'} title={'Ошибка'} />
      <Data option={'loading'} title={'Задержка'} />
    </div>
  )
  }


export default App;
