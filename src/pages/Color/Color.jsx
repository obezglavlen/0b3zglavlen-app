import { Flex } from "../../components";

const Color = () => {
    return (
        <Flex align="center" justify="center" height="100%">
            <div
                style={{
                    background: "transparent",
                    width: 980,
                    height: 640,
                    overflow: "hidden",
                    borderRadius: 8,
                }}
            >
                <iframe
                    seamless="seamless"
                    src="https://colorscheme.ru/#embed='+location.href+'"
                    style={{
                        border: "none",
                        width: 980,
                        height: 650,
                        marginTop: -6,
                    }}
                    scrolling="no"
                    title="Color circle"
                ></iframe>
            </div>
        </Flex>
    );
};

export default Color;
