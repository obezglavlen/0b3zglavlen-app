const breakPoints = {
    breakPoints: {
        phone: "(max-width: 460px)",
    },
};

const Themes = {
    dark: {
        colors: {
            primary: "rgb(23, 24, 25)",
            accent: "rgb(12, 13, 14)",
            secondary: "white",
        },
        ...breakPoints,
    },
    light: {
        colors: {
            primary: "rgb(236, 237, 238)",
            accent: "rgb(255, 255, 255)",
            secondary: "black",
        },
        ...breakPoints,
    },
};

export default Themes;
