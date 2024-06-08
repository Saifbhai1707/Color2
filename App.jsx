import { useEffect, useState } from "react";
import "./App.css";
import CreatableSelect from "react-select/creatable";
import bdg from "./bdg.jpg";
import ReactPlayer from "react-player";
import tri from "./tiranga.jpg";
import n1 from "./91Club.jpg";
import tc from "./tcLottery.jpg";
import goa from "./Goa.jpg";
import lottery from "./Lottery.jpg";

function App() {
  const [values, setValue] = useState(null);

  const colourOptions = [
    { value: "bdg", label: "bdg" },
    { value: "tiranga", label: "Tiranga" },
    { value: "91", label: "91Club" },
    { value: "tc", label: "Tc" },
    { value: "Goa", label: "Goa" },
    { value: "Lottery", label: "Lottery" },
  ];

  const menu = [{ value: "bs", label: "Big Small" }];

  const changeHandler = (selected) => {
    setValue(selected);
    // console.log(selected);
  };

  const [bs, setBs] = useState(null);
  const [isVideo, setIsVideo] = useState(false);
  const clickHandler = () => {
    // console.log("loading");
    setTrigger(true);
    setIsVideo(true);
    setTimeout(() => {
      setIsVideo(false);
      setTrigger(false);
      setNumber(5);
      const num = Math.floor(Math.random() * 2);
      console.log(num);
      setBs(num);
      // console.log("printed");
    }, 5000);
  };

  const [number, setNumber] = useState(5);
  const [trigger, setTrigger] = useState(false);

  const [values2, setValues2] = useState(null);

  useEffect(() => {
    if (!trigger) return;

    if (number < 0) return;
    const timeout = setTimeout(() => {
      setNumber(number - 1);
    }, 1000);
    // console.log(number);
    return () => clearTimeout(timeout);
  }, [number, trigger]);

  const bsHandler = (s) => {
    setValues2(s);
    // console.log(s);
  };

  console.log(values);

  return (
    <div className="h-screen w-screen bg-gray-500 flex justify-center items-center">
      <div className="text-white border bg-gray-900 rounded-md pt-10 p-4 h-full w-1/4">
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl font-bold text-center uppercase text-yellow-500">
            COLOR TRADING ALL IN ONE HACK
          </h2>

          {/* <div className="w-full flex flex-col gap-3">
            <h3 className="text-center font-medium italic text-xl">
              Choose Hack
            </h3> */}
          <CreatableSelect
            isClearable
            placeholder="select hack"
            options={colourOptions}
            className="text-black"
            onChange={changeHandler}
            value={values}
          />
          {/* </div> */}
          <div className="w-full">
            {values?.value ? (
              <div className="text-white flex flex-col gap-5">
                {values?.value === "bdg" ? (
                  <img src={bdg} alt="" className="rounded-md w-1/3 mx-auto" />
                ) : values?.value === "tiranga" ? (
                  <img src={tri} alt="" className="rounded-md w-1/3 mx-auto" />
                ) : values?.value === "91" ? (
                  <img src={n1} alt="" className="rounded-md w-1/3 mx-auto" />
                ) : values?.value === "tc" ? (
                  <img src={tc} alt="" className="rounded-md w-1/3 mx-auto" />
                ) : values?.value === "Goa" ? (
                  <img src={goa} alt="" className="rounded-md w-1/3 mx-auto" />
                ) : values?.value === "Lottery" ? (
                  <img
                    src={lottery}
                    alt=""
                    className="rounded-md w-1/3 mx-auto"
                  />
                ) : null}

                <CreatableSelect
                  isClearable
                  className="text-black"
                  options={menu}
                  onChange={bsHandler}
                  value={values2}
                />

                {values2?.value === "bs" ? (
                  <div className="w-full mt-10">
                    {isVideo ? (
                      <div className="bg-black w-full h-[200px] flex justify-center items-center">
                        {values?.value === "bdg" || values.value === "tc" ? (
                          <span className="text-9xl text-yellow-500 flex gap-10 w-full justify-center">
                            <div className="bg-[#302d25] rounded-lg font-bold w-1/4 text-center">
                              0{" "}
                            </div>
                            <div className="bg-[#302d25] rounded-lg font-bold w-1/4 text-center">
                              {number}
                            </div>
                          </span>
                        ) : values?.value === "tiranga" ? (
                          <span className="text-9xl text-yellow-500 flex gap-10 w-full justify-center">
                            <div className="bg-cyan-500 rounded-lg font-bold w-1/4 text-center text-white">
                              0{" "}
                            </div>
                            <div className="bg-cyan-500 text-white rounded-lg font-bold w-1/4 text-center">
                              {number}
                            </div>
                          </span>
                        ) : values?.value === "91" ? (
                          <span className="text-9xl text-yellow-500 flex gap-10 w-full justify-center">
                            <div className="bg-red-600 rounded-lg font-bold w-1/4 text-center text-white">
                              0{" "}
                            </div>
                            <div className="bg-red-600 text-white rounded-lg font-bold w-1/4 text-center">
                              {number}
                            </div>
                          </span>
                        ) : null}
                      </div>
                    ) : (
                      <div className="mx-auto max-w-max flex flex-col gap-10">
                        <p className="text-center">
                          {bs !== null ? (
                            <span className="font-bold text-xl text-cyan-500">
                              {bs === 0 ? (
                                <span className="py-2 px-5 mx-auto bg-gradient-to-r from-cyan-500 tracking-widest to-blue-500 max-w-max rounded-md font-bold text-xl text-white">
                                  Small
                                </span>
                              ) : (
                                <span className="py-4 px-10 mx-auto bg-[#302d25] max-w-max rounded-md font-bold text-xl tracking-widest text-yellow-500">
                                  Big
                                </span>
                              )}
                            </span>
                          ) : (
                            "Click on Result"
                          )}
                        </p>

                        <button
                          className="py-4 px-10 mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 max-w-max rounded-md font-medium text-xl"
                          onClick={clickHandler}
                        >
                          {bs !== null ? "Next" : "Result"}
                        </button>
                      </div>
                    )}
                  </div>
                ) : null}
                {/* <div className="w-full">
                  {isVideo ? (
                    <div className="bg-black w-full h-[200px] flex justify-center items-center">
                      <span className="text-9xl text-yellow-500 flex gap-10 w-full justify-center">
                        <div className="bg-gray-500 rounded-lg font-bold w-1/4 text-center">0 </div>
                        <div className="bg-gray-500 rounded-lg font-bold w-1/4 text-center">{number}</div>
                      </span>
                    </div>
                  ) : (
                    <div className="mx-auto max-w-max">
                      <p className="text-center">
                        {bs !== null ? (
                          <span className="font-bold text-xl">{bs}</span>
                        ) : (
                          "Click on Result"
                        )}
                      </p>

                      <button
                        className="py-4 px-10 mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 max-w-max rounded-md font-medium text-xl"
                        onClick={clickHandler}
                      >
                        Result
                      </button>
                    </div>
                  )}
                </div> */}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
