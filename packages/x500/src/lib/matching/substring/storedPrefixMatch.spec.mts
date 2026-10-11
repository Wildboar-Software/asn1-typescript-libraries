import { DERElement, type ASN1Element } from "@wildboar/asn1";
import { _encode_UnboundedDirectoryString } from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import storedPrefixMatch from "./storedPrefixMatch.mjs";

function uds (value: string): ASN1Element {
    return _encode_UnboundedDirectoryString(
        { uTF8String: value },
        () => new DERElement(),
    );
}

describe("storedPrefixMatch", () => {
    it("matches when the stored value is a prefix of the assertion", () => {
        expect(storedPrefixMatch(uds("7035551212"), uds("703"))).toBe(true);
        expect(storedPrefixMatch(uds("703"), uds("703"))).toBe(true);
    });

    it("does not match when the stored value is longer than the assertion", () => {
        expect(storedPrefixMatch(uds("703"), uds("7035551212"))).toBe(false);
        expect(storedPrefixMatch(uds("7045551212"), uds("703"))).toBe(false);
    });

    it("ignores case", () => {
        expect(storedPrefixMatch(uds("aBcdef"), uds("AbC"))).toBe(true);
        expect(storedPrefixMatch(uds("aBcdef"), uds("AbX"))).toBe(false);
    });

    it("ignores leading and trailing spaces", () => {
        expect(storedPrefixMatch(uds("  7035551212  "), uds(" 703 "))).toBe(true);
        expect(storedPrefixMatch(uds("703555"), uds("\t703\n"))).toBe(true);
    });

    it("treats consecutive inner whitespace as one space", () => {
        expect(storedPrefixMatch(uds("70   3555"), uds("70  3"))).toBe(true);
        expect(storedPrefixMatch(uds("70 3555"), uds("70\t3"))).toBe(true);
        expect(storedPrefixMatch(uds("a\nbcd"), uds("a b"))).toBe(true);
    });

    it("keeps a single inner space as significant", () => {
        expect(storedPrefixMatch(uds("703555"), uds("70 3"))).toBe(false);
        expect(storedPrefixMatch(uds("70 3555"), uds("703"))).toBe(false);
    });

    it("treats a string of only spaces as a single space", () => {
        expect(storedPrefixMatch(uds("   "), uds(" "))).toBe(true);
        expect(storedPrefixMatch(uds("\t\n"), uds("  "))).toBe(true);
        expect(storedPrefixMatch(uds("703"), uds("   "))).toBe(false);
        expect(storedPrefixMatch(uds("   "), uds("703"))).toBe(false);
    });

    it("returns false when preparation prohibits a character", () => {
        expect(storedPrefixMatch(uds("703\uFFFD"), uds("703"))).toBe(false);
        expect(storedPrefixMatch(uds("703555"), uds("703\uFFFD"))).toBe(false);
    });
});
