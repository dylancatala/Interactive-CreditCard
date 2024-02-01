import { useEffect, useState } from "react";
import CreditCard from "./components/CreditCard/CreditCard";
import Form from "./components/Form/Form";


function App() {

  const [data, setData] = useState({})

  const handleChange = (holder, numbers, month, year, cvc) => {
    setData({ holder, numbers, month, year, cvc })
  }

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <div className="w-screen h-screen flex flex-row relative">
      <div className="bg-gradient-to-b from-[#23092E] to-[#552238] w-[35%]">

      </div>

      <div>
        <CreditCard data={data} />
      </div>

      <div className="flex justify-center items-center bg-white w-full">
        <div className="w-[30%]">
          <Form onChange={handleChange} />
        </div>
      </div>
    </div>
  );
}

export default App;
