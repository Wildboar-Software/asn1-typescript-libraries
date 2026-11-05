import { MATCH_FLAG_APPROXIMATE } from "../../types/matching.mjs";
import { containsWord } from "./wordMatch.mjs";

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
