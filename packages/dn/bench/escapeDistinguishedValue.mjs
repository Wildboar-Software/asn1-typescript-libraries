/**
 * Compare always escaping a distinguished value against gating that work
 * with a regex or indexOf pre-check.
 *
 * Run from the repo root:
 *   node packages/dn/bench/escapeDistinguishedValue.mjs
 *
 * The pre-checks must match escapeDistinguishedValue: leading '#' or space,
 * a trailing space, or any of `" + , ; < = > \ \0`. A space or '#' in the
 * middle does not need escaping. The script throws if a gate disagrees with
 * the real function.
 */
import Benchmark from "benchmark";
import { escapeDistinguishedValue } from "../src/lib/escapeDistinguishedValue.mts";

const NEEDS_ESCAPE = /^(?:#| )| $|["+,;<=>\\\0]/;

const backslashable = new Set(["\"", "+", ",", ";", "<", "=", ">", "\\"]);
const hexable = new Set(["\x00"]);

function escapeAlways(str) {
    let ret = "";
    let i = 0;
    if (str.startsWith("#")) {
        ret += "\\#";
        i++;
    }
    if (str.startsWith(" ")) {
        ret += "\\ ";
    }
    while (i < str.length) {
        const char = str[i];
        if (backslashable.has(char)) {
            ret += `\\${char}`;
        } else if (hexable.has(char)) {
            ret += `\\${char.charCodeAt(0).toString(16).padStart(2, "0")}`;
        } else if ((i === (str.length - 1)) && (char === " ")) {
            ret += "\\ ";
        } else {
            ret += char;
        }
        i++;
    }
    return ret;
}

const SPECIALS = ["\"", "+", ",", ";", "<", "=", ">", "\\", "\0"];

function needsEscapeIndexOf(str) {
    const len = str.length;
    if (len === 0) {
        return false;
    }
    const first = str.charCodeAt(0);
    if (first === 0x23 || first === 0x20) {
        return true;
    }
    if (str.charCodeAt(len - 1) === 0x20) {
        return true;
    }
    for (let i = 0; i < SPECIALS.length; i++) {
        if (str.indexOf(SPECIALS[i]) !== -1) {
            return true;
        }
    }
    return false;
}

function escapeWithIndexOf(str) {
    if (!needsEscapeIndexOf(str)) {
        return str;
    }
    return escapeAlways(str);
}

function assertGatesAgree() {
    const samples = [""];
    for (let code = 0; code < 128; code++) {
        samples.push(String.fromCharCode(code));
    }
    const alphabet = " abcDEF,+=\\<>;\"#\0é";
    for (const a of alphabet) {
        for (const b of alphabet) {
            samples.push(a + "mid" + b);
            samples.push(a + b);
        }
    }
    samples.push(
        "jsmith",
        "Acme Widgets Inc",
        "Smith, John",
        " #not-a-hex",
        "#04024869",
        "trail ",
        "a\0b",
    );
    for (const sample of samples) {
        const needs = escapeAlways(sample) !== sample;
        if (escapeDistinguishedValue(sample) !== escapeAlways(sample)) {
            throw new Error(`gated escape mismatch for ${JSON.stringify(sample)}`);
        }
        if (NEEDS_ESCAPE.test(sample) !== needs) {
            throw new Error(`regex gate mismatch for ${JSON.stringify(sample)}`);
        }
        if (needsEscapeIndexOf(sample) !== needs) {
            throw new Error(`indexOf gate mismatch for ${JSON.stringify(sample)}`);
        }
    }
}

const cleanShort = "Engineering";
const cleanSpaces = "Acme Widgets Inc";
const cleanLong = "Organizational Unit for the North American Sales Region covering enterprise accounts";
const dirtyComma = "Smith, John";
const dirtyEquals = "O=Example Corporation";
const dirtyLate = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\\";

const mixed = [
    "jsmith",
    "Engineering",
    "example.com",
    "Acme Widgets Inc",
    "uid12345",
    "José García",
    "192.0.2.1",
    "People",
    "sales-west",
    "Smith, John",
];

let sink = 0;

function runSuite(title, body) {
    return new Promise((resolve) => {
        console.log(`\n${title}`);
        const suite = new Benchmark.Suite(title);
        body(suite);
        suite
            .on("cycle", (event) => {
                console.log(String(event.target));
            })
            .on("complete", function () {
                const fastest = this.filter("fastest").map("name");
                console.log(`Fastest: ${fastest}`);
                resolve(this);
            })
            .run({ async: true });
    });
}

function addEscapeContenders(suite, value) {
    suite
        .add("always escape", () => {
            sink = escapeAlways(value);
        })
        .add("regex gate", () => {
            sink = escapeDistinguishedValue(value);
        })
        .add("indexOf gate", () => {
            sink = escapeWithIndexOf(value);
        });
}

assertGatesAgree();

await runSuite(`clean short (${JSON.stringify(cleanShort)})`, (suite) => {
    addEscapeContenders(suite, cleanShort);
});

await runSuite(`clean internal spaces (${JSON.stringify(cleanSpaces)})`, (suite) => {
    addEscapeContenders(suite, cleanSpaces);
});

await runSuite(`clean long (${cleanLong.length} chars)`, (suite) => {
    addEscapeContenders(suite, cleanLong);
});

await runSuite(`dirty comma (${JSON.stringify(dirtyComma)})`, (suite) => {
    addEscapeContenders(suite, dirtyComma);
});

await runSuite(`dirty equals (${JSON.stringify(dirtyEquals)})`, (suite) => {
    addEscapeContenders(suite, dirtyEquals);
});

await runSuite("dirty backslash at end (52 chars)", (suite) => {
    addEscapeContenders(suite, dirtyLate);
});

await runSuite("mixed batch (9 clean, 1 dirty)", (suite) => {
    suite
        .add("always escape", () => {
            for (let i = 0; i < mixed.length; i++) {
                sink = escapeAlways(mixed[i]);
            }
        })
        .add("regex gate", () => {
            for (let i = 0; i < mixed.length; i++) {
                sink = escapeDistinguishedValue(mixed[i]);
            }
        })
        .add("indexOf gate", () => {
            for (let i = 0; i < mixed.length; i++) {
                sink = escapeWithIndexOf(mixed[i]);
            }
        });
});

await runSuite("pre-check only, clean long", (suite) => {
    suite
        .add("regex", () => {
            sink = NEEDS_ESCAPE.test(cleanLong) ? 1 : 0;
        })
        .add("indexOf", () => {
            sink = needsEscapeIndexOf(cleanLong) ? 1 : 0;
        });
});

await runSuite("pre-check only, dirty comma", (suite) => {
    suite
        .add("regex", () => {
            sink = NEEDS_ESCAPE.test(dirtyComma) ? 1 : 0;
        })
        .add("indexOf", () => {
            sink = needsEscapeIndexOf(dirtyComma) ? 1 : 0;
        });
});

void sink;
