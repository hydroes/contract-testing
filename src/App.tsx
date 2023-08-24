import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import clone from "lodash.clone";

const checkVals: ReadonlyArray<{ colour: string; checked: boolean }> = [
  {
    colour: "red",
    checked: false,
  },
  {
    colour: "green",
    checked: false,
  },
  {
    colour: "blue",
    checked: false,
  },
];
function App() {
  console.log("-".repeat(20), "checkVals", checkVals);
  const [check, setCheck] = useState(() => {
    console.log("-".repeat(20), "init checkVals once");
    return checkVals.map((i) => clone(i));
    // return checkVals.map((i) => i);
  });

  const handleCheckboxChange = (colour: string) => {
    console.log("-".repeat(20), "handleCheckboxChange", colour);
    const newCheck = check.map((i) => {
      if (i.colour === colour) {
        i.checked = !i.checked;
      }
      return i;
    });

    console.log("-".repeat(20), "newCheck", newCheck);

    setCheck(newCheck);

    // getCheckboxResults && getCheckboxResults(checkedItems);
  };

  return (
    <>
      <div>
        <h1>Check vals</h1>
      </div>

      {check &&
        check.map((i) => {
          return (
            <div key={i.colour}>
              <label>
                {i.colour}
                <input
                  type="checkbox"
                  value={i.checked ? "checked" : "unchecked"}
                  onChange={() => {
                    handleCheckboxChange(i.colour);
                  }}
                  checked={i.checked}
                />
              </label>
            </div>
          );
        })}
    </>
  );
}

export default App;
