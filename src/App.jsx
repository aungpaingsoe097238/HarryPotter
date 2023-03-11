import yoga from "./assets/images/pngwing.com.png";
import computer from "./assets/images/computer3.png";

function App() {
  return (
    <div className=" h-screen flex justify-center items-center">
      <div className=" relative">
        <img src={yoga} className=" h-[400px] w-full " alt="" />
        <div className=" absolute bottom-[30%] left-[30%]">
          <img src={computer} className=" h-[100px] " alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
