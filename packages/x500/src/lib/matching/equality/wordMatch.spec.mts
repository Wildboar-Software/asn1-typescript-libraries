import { ASN1CharactersError } from "@wildboar/asn1";
import { DER, _encodeUTF8String } from "@wildboar/asn1/functional";
import { MATCH_FLAG_APPROXIMATE, MATCH_FLAG_CONSTANT_TIME } from "../../types/matching.mjs";
import { containsWord, decodeWordMatchAssertion, normalizeWordMatchAssertion, wordMatchTyped } from "./wordMatch.mjs";

describe("containsWord()", () => {
    it.each([false, true, 0, MATCH_FLAG_CONSTANT_TIME, MATCH_FLAG_APPROXIMATE, MATCH_FLAG_APPROXIMATE | MATCH_FLAG_CONSTANT_TIME])(
        "rejects empty needles consistently (M10), flags %s", (flags) => {
            for (const text of ["abc", "", "---", "a b"]) {
                expect(containsWord(text, "", flags)).toBe(false);
            }
            expect(containsWord("a b", "a", flags)).toBe(true);
            const typedFlags = typeof flags === "number" ? flags : (flags ? MATCH_FLAG_CONSTANT_TIME : 0);
            expect(wordMatchTyped("", "abc", undefined, typedFlags)).toBe(false);
        },
    );

    it("still rejects empty or preparation-empty word assertions (M10)", () => {
        expect(() => decodeWordMatchAssertion(_encodeUTF8String("", DER))).toThrow(ASN1CharactersError);
        expect(() => normalizeWordMatchAssertion("   ")).toThrow(ASN1CharactersError);
    });

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

    it("treats non-ASCII letters as word characters", () => {
        expect(containsWord("café latte", "café")).toBe(true);
        expect(containsWord("cafélatte", "café")).toBe(false);
        expect(containsWord("naïve", "naïve")).toBe(true);
        expect(containsWord("naïve", "naï")).toBe(false);
    });

    it("approximate matching still requires a complete word", () => {
        expect(containsWord("jekyll hyde", "hyd", MATCH_FLAG_APPROXIMATE)).toBe(true);
        expect(containsWord("hydejekyll", "hyde", MATCH_FLAG_APPROXIMATE)).toBe(false);
    });
});
