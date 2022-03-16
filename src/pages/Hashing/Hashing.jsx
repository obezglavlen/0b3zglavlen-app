import { useRef, useState } from "react";
import PasswordArea from "../../components/InputPassword";
import Flex from "../../components/Flex";
import { shake_256, sha3_256, keccak256 } from "js-sha3";
import Select from "../../components/Select";
import CopyButton from "../../components/CopyButton";
import LinkAd from "../../components/LinkAd";

const Hashing = () => {
    const [selected, setSelected] = useState("shake 256");
    const hashTypeRef = useRef("sha 256");
    const inputPassRef = useRef();
    const outputPassRef = useRef();

    const handleWrite = () => {
        const hashType = hashTypeRef.current.value;
        const inputPass = inputPassRef.current.value;

        if (inputPass === "") {
            outputPassRef.current.value = "";
            return;
        }

        switch (hashType) {
            case "shake 256":
                outputPassRef.current.value = shake_256(inputPass, 64);
                break;
            case "sha3 256":
                outputPassRef.current.value = sha3_256(inputPass);
                break;
            case "keccak 256":
                outputPassRef.current.value = keccak256(inputPass);
                break;
            default:
                outputPassRef.current.value = "";
                break;
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(outputPassRef.current.value);
    };

    return (
        <>
            <Flex align="center" justify="center" height="100%">
                <Select
                    options={["shake 256", "sha3 256", "keccak 256"]}
                    setter={setSelected}
                    ref={hashTypeRef}
                    onChange={handleWrite}
                />
                <PasswordArea
                    margin="60px 0 0 0"
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
            <LinkAd>
                <LinkAd.Header color="orange">Social Links</LinkAd.Header>
                <LinkAd.Item
                    color="#F0F6FC"
                    href="https://github.com/obezglavlen"
                    img="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    bg="white"
                    radius="50%"
                >
                    Github
                </LinkAd.Item>
                <LinkAd.Item
                    color="#2aa2de"
                    href="https://t.me/obezglavlen"
                    img="https://hashtelegraph.com/wp-content/uploads/2018/01/Logo1.png"
                >
                    Telegram
                </LinkAd.Item>
                <LinkAd.Item
                    color="#b1361e"
                    href="https://www.codewars.com/users/obezglavlen"
                    img="https://docs.codewars.com/logo.svg"
                >
                    Codewars
                </LinkAd.Item>
            </LinkAd>
        </>
    );
};

export default Hashing;
