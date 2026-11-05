/**
 * Compare unconditional `replace` / `normalize` with `prepString`.
 *
 * The library scans printable ASCII, and any other string of at most
 * 64 code units, and calls `replace` only for mappings that scan
 * found. Longer strings that are not printable ASCII keep the
 * unconditional steps: a scan plus `replace` was slower there when
 * the mapped character was near the end.
 *
 * One run of this script (Node 22), ops/sec of `prepString` divided
 * by the unconditional copy. The copy is local to this file, so the
 * ratios understate the speedup of calling the old function:
 *
 *   exact clean short            8.0x
 *   exact clean internal spaces  3.8x
 *   exact clean long             3.3x
 *   exact dirty whitespace       1.2x
 *   exact dirty map / normalize  1.4x
 *   exact mixed batch            3.8x
 *   exact dns labels             9.1x
 *   exact soft hyphen at end     0.89x
 *   caseFold clean short        10.5x
 *   caseFold clean spaces        6.2x
 *   caseFold clean long          8.9x
 *   caseFold dirty whitespace    1.8x
 *   caseFold dirty map           1.5x
 *   caseFold mixed batch         5.6x
 *   caseFold dns labels         13.2x
 *   caseFold soft hyphen at end  3.1x
 *
 * Run from the repo root:
 *   node packages/dn/bench/prepString.mjs
 *
 * The unconditional copy is the previous algorithm. The script throws if
 * `prepString` disagrees with it.
 */
import Benchmark from "benchmark";
import { prepString } from "../src/lib/prepString.mts";

const controlsToSpace = /[\t\n\v\f\r\u0085]/g;
const mappedToNothing = /[\u00AD\u1806\u034F\u180B-\u180D\uFE00-\uFE0F\uFFFC\u200B\p{Cc}\p{Cf}]+/ug;
const prohibitedCharacters = /[\uD800-\uDFFF\uFFFD]+/;

const FULL_CASE_FOLD = new Map([
    [0x00DF, "ss"],
    [0x0130, "i\u0307"],
    [0x0149, "\u02BCn"],
    [0x017F, "s"],
    [0x01F0, "j\u030C"],
    [0x0390, "\u03B9\u0308\u0301"],
    [0x03B0, "\u03C5\u0308\u0301"],
    [0x0587, "\u0565\u0582"],
    [0x1E96, "h\u0331"],
    [0x1E97, "t\u0308"],
    [0x1E98, "w\u030A"],
    [0x1E99, "y\u030A"],
    [0x1E9A, "a\u02BE"],
    [0x1E9E, "ss"],
    [0xFB00, "ff"],
    [0xFB01, "fi"],
    [0xFB02, "fl"],
    [0xFB03, "ffi"],
    [0xFB04, "ffl"],
    [0xFB05, "st"],
    [0xFB06, "st"],
]);

function foldCase(str) {
    let out = "";
    for (const ch of str) {
        const mapped = FULL_CASE_FOLD.get(ch.codePointAt(0));
        out += mapped ?? ch.toLowerCase();
    }
    return out;
}

function prepStringUnconditional(str, options) {
    if (prohibitedCharacters.test(str)) {
        return undefined;
    }
    let mapped = str
        .replace(controlsToSpace, " ")
        .replace(mappedToNothing, "");
    if (options?.caseFold === true) {
        mapped = foldCase(mapped);
    }
    mapped = mapped.normalize("NFKC");
    if (mapped.length === 0) {
        return undefined;
    }
    const trimmed = mapped.replace(/\s+/g, " ").trim();
    return trimmed.length === 0 ? " " : trimmed;
}

function assertAgrees() {
    const optionSets = [undefined, { caseFold: true }];
    const samples = [
        "",
        " ",
        "   ",
        "\t\n",
        "F",
        "Wildboar Software",
        "John Smith",
        "  AbC  DeF ",
        "José García",
        "François Müller",
        "Straße",
        "STRASSE",
        "John\tSmith",
        "John\u00ADSmith",
        "a\u200Cb",
        "a\uFE00b",
        "\uFB01le",
        "\uFF21",
        "\u00A0\u00A0",
        "\u0001 \u0001 \u0001",
        "HEy there \uDFFF big oi",
        "\uFFFD",
        "  \r\n \t HEy there  big\r\nboi\u00AD, \x00\x01watchu up 2???",
        "Organizational Unit for the North American Sales Region covering enterprise accounts",
        `clean ${"x".repeat(200)}\u00AD`,
    ];
    for (let c = 0; c <= 0xFFFF; c++) {
        samples.push(String.fromCharCode(c));
        if ((c & 0x7F) === 0) {
            samples.push(`a${String.fromCharCode(c)}b`);
            samples.push(`  ${String.fromCharCode(c)}\t`);
        }
    }
    for (const cp of [0x110BD, 0xE0001, 0xE0020, 0x1F600, 0xE0100]) {
        samples.push(String.fromCodePoint(cp));
        samples.push(`a${String.fromCodePoint(cp)}b`);
    }
    let n = 0;
    for (const sample of samples) {
        for (const options of optionSets) {
            const expected = prepStringUnconditional(sample, options);
            const got = prepString(sample, options);
            if (got !== expected) {
                throw new Error(
                    `mismatch caseFold=${!!options?.caseFold} input=${JSON.stringify(sample)} `
                    + `expected=${JSON.stringify(expected)} got=${JSON.stringify(got)}`,
                );
            }
            n++;
        }
    }
    console.log(`prepString agrees with unconditional replace on ${n} cases`);
}

const cleanShort = ["F", "jsmith", "Engineering", "example.com", "People", "sales-west"];
const cleanSpaces = ["Wildboar Software", "John Smith", "Acme Widgets Inc", "José García"];
const cleanLong = ["Organizational Unit for the North American Sales Region covering enterprise accounts"];
const dirtySpace = ["  John  Smith  ", "a  b\t", "\t\n", "trailing "];
const dirtyMap = ["John\u00ADSmith", "a\u200Cb", "a\uFE00b", "\uFB01le", "e\u0301", "\uFF21"];
const mixed = [
    "jsmith", "Engineering", "example.com", "Acme Widgets Inc", "uid12345",
    "José García", "192.0.2.1", "People", "sales-west", "John\u00ADSmith",
];
const dns = ["www", "example", "com", "mail", "ns1", "wildboar", "software"];
const dirtyLate = [`${"a".repeat(80)}b\u00AD`];

let sink;

function runSuite(title, inputs, options) {
    return new Promise((resolve) => {
        console.log(`\n${title}`);
        const suite = new Benchmark.Suite(title);
        suite
            .add("unconditional replace", () => {
                for (let i = 0; i < inputs.length; i++) {
                    sink = prepStringUnconditional(inputs[i], options);
                }
            })
            .add("pre-check", () => {
                for (let i = 0; i < inputs.length; i++) {
                    sink = prepString(inputs[i], options);
                }
            })
            .on("cycle", (event) => {
                console.log(String(event.target));
            })
            .on("complete", function () {
                const fastest = this.filter("fastest").map("name");
                console.log(`Fastest: ${fastest}`);
                resolve(this);
            })
            .run({ async: true, maxTime: 1 });
    });
}

assertAgrees();

for (const options of [undefined, { caseFold: true }]) {
    const label = options ? "caseFold" : "exact";
    await runSuite(`${label}: clean short`, cleanShort, options);
    await runSuite(`${label}: clean internal spaces`, cleanSpaces, options);
    await runSuite(`${label}: clean long`, cleanLong, options);
    await runSuite(`${label}: dirty whitespace`, dirtySpace, options);
    await runSuite(`${label}: dirty map / normalize`, dirtyMap, options);
    await runSuite(`${label}: mixed batch`, mixed, options);
    await runSuite(`${label}: dns labels`, dns, options);
    await runSuite(`${label}: soft hyphen at end of 81 chars`, dirtyLate, options);
}

void sink;
