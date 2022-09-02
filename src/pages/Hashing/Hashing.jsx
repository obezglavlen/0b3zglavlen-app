import { useRef, useState } from "react";
import PasswordArea from "../../components/InputPassword";
import Flex from "../../components/Flex";
import { shake_256, sha3_256, keccak256 } from "js-sha3";
import Select from "../../components/Select";
import CopyButton from "../../components/CopyButton";
import CheckBox from "../../components/CheckBox";

const passwordLength = {
  small: 8,
  normal: 12,
  big: 16,
};

const Hashing = () => {
  const inputPassRef = useRef();
  const outputPassRef = useRef();
  const selectRef = useRef();
  const isLeadingEnabledRef = useRef();
  const isSpecialsEnabledRef = useRef();

  const handleWrite = () => {
    const passwordL = Number(selectRef.current.value);
    const inputPass = inputPassRef.current.value;
    const isLeadingEnabled = isLeadingEnabledRef.current.checked;
    const isSpecialsEnabled = isSpecialsEnabledRef.current.checked;

    if (inputPass === "") {
      outputPassRef.current.value = "";
      return;
    }

    let resultHash = shake_256(inputPass, passwordL * 4).split("");

    if (isLeadingEnabled) {
      if (passwordL === passwordLength.big) {
        isSpecialsEnabled
          ? (resultHash[resultHash.length - 2] = "A")
          : (resultHash[resultHash.length - 1] = "A");
      } else {
        resultHash.push("A");
      }
    }

    if (isSpecialsEnabled) {
      if (passwordL === passwordLength.big) {
        resultHash[resultHash.length - 1] = ".";
      } else {
        resultHash.push(".");
      }
    }

    outputPassRef.current.value = resultHash.join("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputPassRef.current.value);
  };

  return (
    <>
      <Flex align="center" justify="center" height="100vh">
        <Select
          options={Object.values(passwordLength)}
          ref={selectRef}
          onChange={handleWrite}
          Default={1}
        />
        <Flex align="left" justify="center" gap="10px">
          <CheckBox
            id="leading"
            title="Enable leading letters?"
            ref={isLeadingEnabledRef}
            onChange={handleWrite}
          />
          <CheckBox
            id="specials"
            title="Enable special symbols?"
            ref={isSpecialsEnabledRef}
            onChange={handleWrite}
          />
        </Flex>
        <PasswordArea
          margin="20px 0 0 0"
          ref={inputPassRef}
          onChange={handleWrite}
          type="password"
          autoFocus
          rows={1}
        />
        <PasswordArea
          margin="10px"
          readOnly
          ref={outputPassRef}
          height="8rem"
        />
        <CopyButton onClick={handleCopy}>📑</CopyButton>
      </Flex>
    </>
  );
};

export default Hashing;
