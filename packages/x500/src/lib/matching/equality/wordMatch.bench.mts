// Run with `npx vitest bench --run src/lib/matching` from packages/x500.
import { describe, expect, test } from "vitest";
import { MATCH_FLAG_APPROXIMATE, MATCH_FLAG_CONSTANT_TIME } from "../../types/matching.mjs";
import { approximatelyEqualStrings } from "../approximate.mjs";
import { containsWord } from "./wordMatch.mjs";

const localContainsWord = containsWord;
const localApprox = approximatelyEqualStrings;
const APPROXIMATE = MATCH_FLAG_APPROXIMATE;
const CONSTANT_TIME = MATCH_FLAG_CONSTANT_TIME;

function isWordCharRegex (c: string | undefined): boolean {
    return !!c && /[\p{L}\p{N}_]/u.test(c);
}

const NON_ASCII_WORD_CHAR = /[\p{L}\p{N}]/u;

function isWordCode (code: number): boolean {
    if (code <= 0x7F) {
        return (
            (code >= 0x30 && code <= 0x39)
            || (code >= 0x41 && code <= 0x5A)
            || (code >= 0x61 && code <= 0x7A)
            || code === 0x5F
        );
    }
    return NON_ASCII_WORD_CHAR.test(String.fromCharCode(code));
}

function containsWordRegex (haystack: string, needle: string): boolean {
    let i = haystack.indexOf(needle);
    while (i >= 0) {
        const before = haystack[i - 1];
        const after = haystack[i + needle.length];
        if (!isWordCharRegex(before) && !isWordCharRegex(after)) {
            return true;
        }
        i = haystack.indexOf(needle, i + 1);
    }
    return false;
}

function containsWordCodes (haystack: string, needle: string): boolean {
    const nLen = needle.length;
    let i = haystack.indexOf(needle);
    while (i >= 0) {
        if (
            (i === 0 || !isWordCode(haystack.charCodeAt(i - 1)))
            && (i + nLen >= haystack.length || !isWordCode(haystack.charCodeAt(i + nLen)))
        ) {
            return true;
        }
        i = haystack.indexOf(needle, i + 1);
    }
    return false;
}

function ctContainsWordRegex (haystack: string, needle: string): boolean {
    const nLen = needle.length;
    const hLen = haystack.length;
    let found = 0;
    for (let i = 0; i <= hLen; i++) {
        let mismatch = (i + nLen <= hLen) ? 0 : 1;
        for (let j = 0; j < nLen; j++) {
            const pos = i + j;
            const inPos = pos < hLen ? 1 : 0;
            const hc = hLen === 0 ? 0 : haystack.charCodeAt(inPos ? pos : 0);
            mismatch |= (hc ^ needle.charCodeAt(j)) | (inPos ^ 1);
        }
        const before = i > 0 ? haystack[i - 1] : undefined;
        const after = (i + nLen < hLen) ? haystack[i + nLen] : undefined;
        const boundary = (!isWordCharRegex(before) && !isWordCharRegex(after)) ? 1 : 0;
        found |= (mismatch === 0 ? 1 : 0) & boundary;
    }
    return found === 1;
}

function ctContainsWordCodes (haystack: string, needle: string): boolean {
    const nLen = needle.length;
    const hLen = haystack.length;
    let found = 0;
    for (let i = 0; i <= hLen; i++) {
        let mismatch = (i + nLen <= hLen) ? 0 : 1;
        for (let j = 0; j < nLen; j++) {
            const pos = i + j;
            const inPos = pos < hLen ? 1 : 0;
            const hc = hLen === 0 ? 0 : haystack.charCodeAt(inPos ? pos : 0);
            mismatch |= (hc ^ needle.charCodeAt(j)) | (inPos ^ 1);
        }
        const beforeOk = (i === 0 || !isWordCode(haystack.charCodeAt(i - 1))) ? 1 : 0;
        const afterIdx = i + nLen;
        const afterOk = (afterIdx >= hLen || !isWordCode(haystack.charCodeAt(afterIdx))) ? 1 : 0;
        found |= (mismatch === 0 ? 1 : 0) & beforeOk & afterOk;
    }
    return found === 1;
}

function approxRegex (haystack: string, needle: string): boolean {
    const words = haystack.match(/[\p{L}\p{N}_]+/gu);
    if (!words) {
        return false;
    }
    for (let i = 0; i < words.length; i++) {
        if (localApprox(words[i], needle)) {
            return true;
        }
    }
    return false;
}

function approxScan (haystack: string, needle: string): boolean {
    const hLen = haystack.length;
    let i = 0;
    while (i < hLen) {
        while (i < hLen && !isWordCode(haystack.charCodeAt(i))) {
            i++;
        }
        const start = i;
        while (i < hLen && isWordCode(haystack.charCodeAt(i))) {
            i++;
        }
        if (start === i) {
            break;
        }
        if (localApprox(haystack.slice(start, i), needle)) {
            return true;
        }
    }
    return false;
}

const description = "JONATHAN WILBUR, WILDBOAR SOFTWARE; DIRECTORY ADMINISTRATOR IN NEW YORK";
const manyHits = `${description} ${description} ${description}`;

let sink = 0;

describe("containsWord char-code boundaries vs Unicode regex", () => {
    test("many substring hits that are not whole words", async ({ bench }) => {
        expect(containsWordCodes(manyHits, "IN")).toBe(containsWordRegex(manyHits, "IN"));
        expect(localContainsWord(manyHits, "IN")).toBe(containsWordRegex(manyHits, "IN"));
        const result = await bench.compare(
            bench("Unicode regex", () => {
                sink += containsWordRegex(manyHits, "IN") ? 1 : 0;
            }),
            bench("char-code table", () => {
                sink += containsWordCodes(manyHits, "IN") ? 1 : 0;
            }),
        );
        expect(result.get("char-code table")).toBeFasterThan(result.get("Unicode regex"));
    });

    test("constant-time scan of a description", async ({ bench }) => {
        expect(ctContainsWordCodes(description, "WILBUR")).toBe(
            ctContainsWordRegex(description, "WILBUR"),
        );
        expect(localContainsWord(description, "WILBUR", CONSTANT_TIME)).toBe(true);
        const result = await bench.compare(
            bench("Unicode regex", () => {
                sink += ctContainsWordRegex(description, "WILBUR") ? 1 : 0;
            }),
            bench("char-code table", () => {
                sink += ctContainsWordCodes(description, "WILBUR") ? 1 : 0;
            }),
        );
        expect(result.get("char-code table")).toBeFasterThan(result.get("Unicode regex"));
    });

    test("approximate matching", async ({ bench }) => {
        expect(approxScan(description, "WILBU")).toBe(approxRegex(description, "WILBU"));
        expect(localContainsWord(description, "WILBU", APPROXIMATE)).toBe(true);
        const result = await bench.compare(
            bench("Unicode regex match()", () => {
                sink += approxRegex(description, "WILBU") ? 1 : 0;
            }),
            bench("char-code scan", () => {
                sink += approxScan(description, "WILBU") ? 1 : 0;
            }),
        );
        expect(result.get("char-code scan")).toBeFasterThan(result.get("Unicode regex match()"));
    });
});

export { sink };
