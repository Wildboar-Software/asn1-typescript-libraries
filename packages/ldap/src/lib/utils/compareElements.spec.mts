import { BERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType } from "@wildboar/asn1";
import compareElements from "./compareElements.mjs";

function primitiveUtf8 (str: string): BERElement {
    return new BERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.utf8String,
        str,
    );
}

function constructedUtf8 (parts: string[]): BERElement {
    const el = new BERElement();
    el.tagClass = ASN1TagClass.universal;
    el.tagNumber = ASN1UniversalType.utf8String;
    el.sequence = parts.map((part) => primitiveUtf8(part));
    return el;
}

describe("compareElements", () => {
    it("matches two primitive encodings of the same string", () => {
        expect(compareElements(primitiveUtf8("Hello"), primitiveUtf8("Hello"))).toBe(true);
        expect(compareElements(primitiveUtf8("Hello"), primitiveUtf8("Helo"))).toBe(false);
    });

    it("matches a primitive string to a constructed encoding of the same value", () => {
        expect(compareElements(
            primitiveUtf8("Hello"),
            constructedUtf8([ "Hel", "lo" ]),
        )).toBe(true);
        expect(compareElements(
            constructedUtf8([ "Hel", "lo" ]),
            primitiveUtf8("Hello"),
        )).toBe(true);
    });

    it("matches constructed strings that use different substring partitions", () => {
        expect(compareElements(
            constructedUtf8([ "Hel", "lo" ]),
            constructedUtf8([ "H", "ello" ]),
        )).toBe(true);
        expect(compareElements(
            constructedUtf8([ "He", "l", "lo" ]),
            constructedUtf8([ "Hello" ]),
        )).toBe(true);
    });

    it("does not match constructed strings with different contents", () => {
        expect(compareElements(
            constructedUtf8([ "Hel", "lo" ]),
            constructedUtf8([ "Hel", "p" ]),
        )).toBe(false);
    });
});
