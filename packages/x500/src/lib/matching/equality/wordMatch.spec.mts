import { DER } from "@wildboar/asn1/functional";
import { _encode_UnboundedDirectoryString } from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import wordMatch, { containsWord } from "./wordMatch.mjs";
import keywordMatch from "./keywordMatch.mjs";

function ds (s: string) {
    return _encode_UnboundedDirectoryString({ uTF8String: s }, DER);
}

describe("containsWord()", () => {
    it("works with a basic example", () => {
        const assertion = "hyde";
        const value = "jekyll jekyll hyde jekyll hyde jekyll jekyll";
        expect(containsWord(value, assertion)).toBe(true);
    });

    it("ignores substrings within words", () => {
        const assertion = "hyde";
        const value = "jekyll jekyll hydejekyll jekyllhyde jekyll jekyll";
        expect(containsWord(value, assertion)).toBe(false);
    });

    it("returns false if a searched word is missing", () => {
        const assertion = "hyde";
        const value = "jekyll jekyll jekyll";
        expect(containsWord(value, assertion)).toBe(false);
    });

    it("finds a word if there is punctuation surrounding it", () => {
        const assertion = "hyde";
        const value = "jekyll jekyll-hyde, jekyll jekyll jekyll";
        expect(containsWord(value, assertion)).toBe(true);
    });
});

describe("wordMatch()", () => {
    it("matches a presented word inside a DirectoryString case-insensitively", () => {
        expect(wordMatch(ds("HYDE"), ds("jekyll hyde jekyll"))).toBe(true);
        expect(wordMatch(ds("hyde"), ds("jekyllhyde"))).toBe(false);
    });

    it("returns false rather than undefined when preparation fails", () => {
        const bad = ds("\uFFFD");
        expect(wordMatch(bad, ds("ok"))).toBe(false);
        expect(wordMatch(ds("ok"), bad)).toBe(false);
    });
});

describe("keywordMatch()", () => {
    it("matches a presented keyword inside a longer stored string", () => {
        expect(keywordMatch(ds("hyde"), ds("jekyll hyde jekyll"))).toBe(true);
        expect(keywordMatch(ds("hyde"), ds("hyde"))).toBe(true);
        expect(keywordMatch(ds("hyde"), ds("jekyllhyde"))).toBe(false);
    });
});
