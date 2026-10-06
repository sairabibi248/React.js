import React, { useState, useCallback, useEffect, useRef } from "react";

function PasswordStrength() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charallowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const PasswordGenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "1234567890";
    if (charallowed) str += "!@#$%^&*()_+{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      password += str.charAt(char);
    }

    setPassword(password);
  }, [length, numberAllowed, charallowed, setPassword]);

  const copyPasswordToClipboard = () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 5);
    window.navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    PasswordGenerator();
  }, [length, numberAllowed, charallowed, PasswordGenerator]);

  return (
    <>
      <h3>Password Generator</h3>
      <div>
        <input
          type="text"
          value={password}
          readOnly
          placeholder="Password"
          ref={passwordRef}
        />
        <button className="copy" onClick={copyPasswordToClipboard}>
          copy
        </button>
      </div>

      <div>
        <input
          type="range"
          min={6}
          max={30}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <label>Length: {length}</label>
      </div>

      <div>
        <input
          type="checkbox"
          defaultChecked={numberAllowed}
          onChange={() => setNumberAllowed((prev) => !prev)}
        />
        <label>Numbers</label>
      </div>

      <div>
        <input
          type="checkbox"
          defaultChecked={charallowed}
          onChange={() => setcharAllowed((prev) => !prev)}
        />
        <label>Characters</label>
      </div>
    </>
  );
}

export default PasswordStrength;
