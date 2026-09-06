import {
    BERElement,
    ASN1TagClass,
    ASN1Construction,
    ASN1UniversalType,
    ObjectIdentifier,
} from "@wildboar/asn1";
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
    // X.690 constructed character strings concatenate OCTET STRING fragments.
    el.sequence = parts.map((part) => new BERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.octetString,
        Buffer.from(part),
    ));
    return el;
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

function octetStringElement (bytes: Uint8Array): BERElement {
    const el = new BERElement();
    el.octetString = bytes;
    el.tagNumber = ASN1UniversalType.octetString;
    return el;
}

function constructedOctetString (parts: Uint8Array[]): BERElement {
    const el = new BERElement();
    el.sequence = parts.map((part) => octetStringElement(part));
    el.tagNumber = ASN1UniversalType.octetString;
    return el;
}

function generalizedTimeFromText (text: string): BERElement {
    const el = new BERElement();
    el.tagClass = ASN1TagClass.universal;
    el.construction = ASN1Construction.primitive;
    el.tagNumber = ASN1UniversalType.generalizedTime;
    el.value = Buffer.from(text);
    return el;
}

function utcTimeFromText (text: string): BERElement {
    const el = new BERElement();
    el.tagClass = ASN1TagClass.universal;
    el.construction = ASN1Construction.primitive;
    el.tagNumber = ASN1UniversalType.utcTime;
    el.value = Buffer.from(text);
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

    it("approximates caseIgnoreMatch by trimming and case-folding strings", () => {
        expect(compareElements(primitiveUtf8("Hello"), primitiveUtf8("hello"))).toBe(true);
        expect(compareElements(primitiveUtf8("  Hello  "), primitiveUtf8("hello"))).toBe(true);
        expect(compareElements(
            primitiveUtf8("Hello   World"),
            primitiveUtf8("hello world"),
        )).toBe(true);
        expect(compareElements(
            constructedUtf8([ "Hel", "lo" ]),
            primitiveUtf8("HELLO"),
        )).toBe(true);
        expect(compareElements(primitiveUtf8("Hello"), primitiveUtf8("Help"))).toBe(false);
    });

    it("does not case-fold octet strings", () => {
        const a = octetStringElement(Buffer.from("Hello"));
        const b = octetStringElement(Buffer.from("hello"));
        expect(compareElements(a, b)).toBe(false);
        expect(compareElements(a, a)).toBe(true);
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

    it("compares BIT STRING values bit-by-bit after deconstruction", () => {
        const primitive = bitStringElement([ 1, 0, 1, 1, 0, 1, 1, 1, 1, 0 ]);
        const constructed = constructedBitString([
            [ 1, 0, 1, 1, 0, 1, 1, 1 ],
            [ 1, 0 ],
        ]);
        expect(compareElements(primitive, constructed)).toBe(true);
        expect(compareElements(
            bitStringElement([ 1, 0, 1 ]),
            bitStringElement([ 1, 0, 0 ]),
        )).toBe(false);
        expect(compareElements(
            bitStringElement([ 1, 0, 1 ]),
            bitStringElement([ 1, 0, 1, 0 ]),
        )).toBe(false);
    });

    it("compares OCTET STRING values byte-for-byte after deconstruction", () => {
        const primitive = octetStringElement(Buffer.from("Hello"));
        const constructed = constructedOctetString([
            Buffer.from("Hel"),
            Buffer.from("lo"),
        ]);
        expect(compareElements(primitive, constructed)).toBe(true);
        expect(compareElements(
            constructedOctetString([ Buffer.from("He"), Buffer.from("llo") ]),
            constructedOctetString([ Buffer.from("H"), Buffer.from("ello") ]),
        )).toBe(true);
        expect(compareElements(
            octetStringElement(Buffer.from("Hello")),
            octetStringElement(Buffer.from("Help")),
        )).toBe(false);
    });

    it("compares UTCTime and GeneralizedTime to the second, including mixed types", () => {
        const utc = utcTimeFromText("240115123045Z");
        const gen = generalizedTimeFromText("20240115123045Z");
        const genFrac = generalizedTimeFromText("20240115123045.999Z");
        const nextSecond = generalizedTimeFromText("20240115123046Z");
        expect(compareElements(utc, gen)).toBe(true);
        expect(compareElements(gen, utc)).toBe(true);
        expect(compareElements(gen, genFrac)).toBe(true);
        expect(compareElements(utc, genFrac)).toBe(true);
        expect(compareElements(gen, nextSecond)).toBe(false);
        expect(compareElements(utc, nextSecond)).toBe(false);
    });

    it("trims and lowercases OID-IRI and RELATIVE-OID-IRI", () => {
        const oidA = new BERElement();
        oidA.oidIRI = "/ISO/Example";
        oidA.tagNumber = ASN1UniversalType.oidIRI;
        const oidB = new BERElement();
        oidB.oidIRI = "  /iso/example  ";
        oidB.tagNumber = ASN1UniversalType.oidIRI;
        const oidC = new BERElement();
        oidC.oidIRI = "/ISO/Other";
        oidC.tagNumber = ASN1UniversalType.oidIRI;
        expect(compareElements(oidA, oidB)).toBe(true);
        expect(compareElements(oidA, oidC)).toBe(false);

        const relA = new BERElement();
        relA.relativeOIDIRI = "Example";
        relA.tagNumber = ASN1UniversalType.roidIRI;
        const relB = new BERElement();
        relB.relativeOIDIRI = "  example  ";
        relB.tagNumber = ASN1UniversalType.roidIRI;
        expect(compareElements(relA, relB)).toBe(true);
        expect(compareElements(oidA, relA)).toBe(false);
    });
});
