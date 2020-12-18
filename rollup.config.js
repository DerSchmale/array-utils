import typescript from "rollup-plugin-typescript2";

export default [{
    input: ["./src/main.ts"],
    output: [
        {
            file: "build/array-utils.js",
            format: "iife",
            name: "TYMP" // the global which can be used in a browser
        },
        {
            file: "build/array-utils.module.js",
            format: "es"
        }
    ],
    plugins: [
        typescript({
            useTsconfigDeclarationDir: true,
            sourceMap: true,
            inlineSources: true
        })
    ]
}];
