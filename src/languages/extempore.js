/*
Language: extempore
*/

function (hljs) {

    // Could probably merge a few of these together, but it
    // would be harder to understand
    let A = "[\\+\\-]?\\d+(\\.\\d+)?"; // 1.0, +1, -3.57
    let B = "[\\+\\-]?\\.\\d+"; // .1, .123, -.0
    let C = "[\\+\\-]\\d+/\\d+"; // 1/2, +5/3, -1/9
    let D = "(" + A + "|" + B + ")[eE]\\d+"; // 1e10, -.0e10, 5.5e16

    let E = "#o[0-7]+";
    let F = "#d\\d+";
    let G = "#x[0-9A-F]+";
    let H = "#b[01]+";

    var NUMBER = {
        className: 'number',
        variants: [
            // ordered so that rationals and exponents match first,
            // otherwise they'll be highlighted incorrectly.
            { begin: D }, // 1e10, -.0e10, 5.5e16
            { begin: C }, // 1/2, +5/3, -1/9
            { begin: A }, // 1.0, +1, -3.57
            { begin: B }, // .1, .123, -.0
            { begin: E }, // octal
            { begin: F }, // decimal
            { begin: G }, // hex
            { begin: H }  // binary
        ]
    };

    return {keywords: 'bind-func',
            contains: [NUMBER]};
}
