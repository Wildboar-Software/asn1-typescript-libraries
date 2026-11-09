import {
    ASN1Construction,
    ASN1TagClass,
    ASN1UniversalType,
    BERElement,
    ObjectIdentifier,
} from "@wildboar/asn1";
import compareElements from "./compareElements.mjs";

function element (bytes: number[]): BERElement {
    const el = new BERElement();
    el.fromBytes(new Uint8Array(bytes));
    return el;
}

function primitiveUtf8 (str: string): BERElement {
    return new BERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.utf8String,
        str,
    );
}

function integerElement (value: Uint8Array): BERElement {
    const el = new BERElement();
    el.tagClass = ASN1TagClass.universal;
    el.construction = ASN1Construction.primitive;
    el.tagNumber = ASN1UniversalType.integer;
    el.value = value;
    return el;
}

function bitStringElement (bits: number[]): BERElement {
    const el = new BERElement();
    el.bitString = new Uint8ClampedArray(bits);
    el.tagNumber = ASN1UniversalType.bitString;
    return el;
}

function constructedBitString (fragments: number[][]): BERElement {
    const el = new BERElement();
    el.sequence = fragments.map((bits) => bitStringElement(bits));
    el.tagNumber = ASN1UniversalType.bitString;
    return el;
}

describe("compareElements", () => {
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

    it("does not case-fold, trim, or otherwise prepare strings", () => {
        expect(compareElements(primitiveUtf8("Hello"), primitiveUtf8("Hello"))).toBe(true);
        expect(compareElements(primitiveUtf8("Hello"), primitiveUtf8("hello"))).toBe(false);
        expect(compareElements(primitiveUtf8("Hello"), primitiveUtf8(" Hello"))).toBe(false);
        expect(compareElements(primitiveUtf8("Hello"), primitiveUtf8("Helo"))).toBe(false);
    });

    it("does not treat UTCTime and GeneralizedTime as the same type", () => {
        const utc = element([0x17, 0x0d, ...Buffer.from("240115123045Z")]);
        const gen = element([0x18, 0x0f, ...Buffer.from("20240115123045Z")]);
        expect(compareElements(utc, gen)).toBe(false);
        expect(compareElements(gen, utc)).toBe(false);
        expect(compareElements(gen, element([0x18, 0x0f, ...Buffer.from("20240115123045Z")]))).toBe(true);
    });

    it("compares INTEGER, OID, and NULL by contents octets", () => {
        expect(compareElements(
            integerElement(new Uint8Array([ 0x05 ])),
            integerElement(new Uint8Array([ 0x05 ])),
        )).toBe(true);
        expect(compareElements(
            integerElement(new Uint8Array([ 0x05 ])),
            integerElement(new Uint8Array([ 0x00, 0x05 ])),
        )).toBe(false);

        const oidA = new BERElement();
        oidA.objectIdentifier = ObjectIdentifier.fromParts([ 2, 5, 4, 3 ]);
        oidA.tagNumber = ASN1UniversalType.objectIdentifier;
        const oidB = new BERElement();
        oidB.objectIdentifier = ObjectIdentifier.fromParts([ 2, 5, 4, 3 ]);
        oidB.tagNumber = ASN1UniversalType.objectIdentifier;
        const oidC = new BERElement();
        oidC.objectIdentifier = ObjectIdentifier.fromParts([ 2, 5, 4, 4 ]);
        oidC.tagNumber = ASN1UniversalType.objectIdentifier;
        expect(compareElements(oidA, oidB)).toBe(true);
        expect(compareElements(oidA, oidC)).toBe(false);

        const nullA = new BERElement();
        nullA.tagNumber = ASN1UniversalType.nill;
        nullA.value = new Uint8Array();
        const nullB = new BERElement();
        nullB.tagNumber = ASN1UniversalType.nill;
        nullB.value = new Uint8Array();
        expect(compareElements(nullA, nullB)).toBe(true);
        expect(compareElements(nullA, integerElement(new Uint8Array([ 0x05 ])))).toBe(false);
    });

    it("does not deconstruct BIT STRING", () => {
        const primitive = bitStringElement([ 1, 0, 1, 1, 0, 1, 1, 1, 1, 0 ]);
        const constructed = constructedBitString([
            [ 1, 0, 1, 1, 0, 1, 1, 1 ],
            [ 1, 0 ],
        ]);
        expect(compareElements(primitive, constructed)).toBe(false);
        expect(compareElements(primitive, primitive)).toBe(true);
        expect(compareElements(
            bitStringElement([ 1, 0, 1 ]),
            bitStringElement([ 1, 0, 0 ]),
        )).toBe(false);
    });
});
