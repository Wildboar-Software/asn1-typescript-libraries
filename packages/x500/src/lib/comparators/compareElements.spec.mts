import { BERElement } from "@wildboar/asn1";
import { compareElements } from "./compareElements.mjs";

function element (bytes: number[]): BERElement {
    const el = new BERElement();
    el.fromBytes(new Uint8Array(bytes));
    return el;
}

describe("compareElements (M19)", () => {
    it.each([
        {
            description: "fragmented OCTET STRING",
            primitive: [0x04, 0x03, 1, 2, 3],
            // Two OCTET STRING fragments: [1] and [2, 3]. Their TLV headers
            // make the constructed content longer than the primitive content.
            constructed: [0x24, 0x07, 0x04, 0x01, 1, 0x04, 0x02, 2, 3],
        },
        {
            description: "nested constructed OCTET STRING",
            primitive: [0x04, 0x03, 1, 2, 3],
            constructed: [0x24, 0x09, 0x04, 0x01, 1, 0x24, 0x04, 0x04, 0x02, 2, 3],
        },
        {
            description: "empty OCTET STRING",
            primitive: [0x04, 0x00],
            constructed: [0x24, 0x00],
        },
        {
            description: "UTF8String with the codec's OCTET STRING fragments",
            primitive: [0x0c, 0x02, 0x68, 0x69], // "hi"
            constructed: [0x2c, 0x04, 0x04, 0x02, 0x68, 0x69],
        },
    ])("compares normalized contents of a $description", ({ primitive, constructed }) => {
        const a = element(primitive);
        const b = element(constructed);
        expect(compareElements(a, b)).toBe(true);
        expect(compareElements(b, a)).toBe(true);
    });

    it.each([
        {
            description: "different deconstructed contents",
            a: [0x04, 0x03, 1, 2, 4],
            b: [0x24, 0x07, 0x04, 0x01, 1, 0x04, 0x02, 2, 3],
        },
        { description: "different primitive lengths", a: [0x04, 0x01, 1], b: [0x04, 0x02, 1, 2] },
        { description: "different universal tags", a: [0x04, 0x01, 1], b: [0x0c, 0x01, 1] },
        { description: "different tag classes", a: [0x04, 0x01, 1], b: [0x84, 0x01, 1] },
        {
            description: "mixed construction of an unknown context-specific type",
            a: [0x80, 0x01, 1],
            b: [0xa0, 0x03, 0x04, 0x01, 1],
        },
        {
            description: "a non-string type that cannot be deconstructed",
            a: [0x02, 0x01, 1],
            b: [0x22, 0x03, 0x02, 0x01, 1],
        },
        {
            description: "constructed OCTET STRINGs that differ only by fragmentation",
            a: [0x24, 0x07, 0x04, 0x01, 1, 0x04, 0x02, 2, 3],
            b: [0x24, 0x07, 0x04, 0x02, 1, 2, 0x04, 0x01, 3],
        },
    ])("still rejects $description", ({ a, b }) => {
        expect(compareElements(element(a), element(b))).toBe(false);
        expect(compareElements(element(b), element(a))).toBe(false);
    });

    it("preserves exact comparisons when both constructions are the same", () => {
        expect(compareElements(element([0x04, 0x02, 1, 2]), element([0x04, 0x02, 1, 2]))).toBe(true);
        const constructed = [0x24, 0x04, 0x04, 0x02, 1, 2];
        expect(compareElements(element(constructed), element(constructed))).toBe(true);
    });
});
