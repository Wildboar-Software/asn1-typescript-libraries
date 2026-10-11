import { describe, expect, it } from "vitest";
import { ASN1Error, ObjectIdentifier } from "@wildboar/asn1";
import { BER, _encodeUTF8String } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";
import { _encode_Name, nameToKey, type Name } from "../Name.ta.mjs";
import { rdnSequenceToKey } from "../RDNSequence.ta.mjs";
import rdnSequenceToInteropString from "../rdnseq/tointerop.mjs";
import { rdnSequenceToJER, rdnSequenceToJSON } from "../rdnseq/tojson.mjs";
import nameToInteropString from "./tointerop.mjs";
import { nameFromJSON, nameToJER, nameToJSON } from "./tojson.mjs";
import validateNameBER, { isNameBER, validateNameElement } from "./validateBER.mjs";

function atav (arcs: number[], value: string): AttributeTypeAndValue {
    return new AttributeTypeAndValue(
        ObjectIdentifier.fromParts(arcs),
        _encodeUTF8String(value, BER),
    );
}

const name: Name = {
    rdnSequence: [
        [atav([2, 5, 4, 6], "US")],
        [atav([2, 5, 4, 3], "Bob"), atav([2, 5, 4, 4], "Smith")],
    ],
};

describe("nameToKey()", () => {
    it("is the key of the RDN sequence", () => {
        expect(nameToKey(name)).toBe("rdnSequence:" + rdnSequenceToKey(name.rdnSequence));
        expect(nameToKey({ rdnSequence: [] })).toBe("rdnSequence:");
        expect(() => nameToKey({} as Name)).toThrow(TypeError);
    });
});

describe("nameToInteropString()", () => {
    it("prefixes the interop string of the RDN sequence with its alternative", () => {
        expect(nameToInteropString(name))
            .toBe("rdnSequence:" + rdnSequenceToInteropString(name.rdnSequence));
        expect(nameToInteropString(name)).toContain("rdnSequence:2.5.4.6=#0c025553");
        expect(nameToInteropString({ rdnSequence: [] })).toBe("rdnSequence:");
        expect(() => nameToInteropString({} as Name)).toThrow(TypeError);
    });
});

describe("nameToJSON() / nameToJER() / nameFromJSON()", () => {
    it("wraps the RDN sequence conversions in the alternative", () => {
        expect(nameToJSON(name)).toEqual({ rdnSequence: rdnSequenceToJSON(name.rdnSequence) });
        expect(nameToJER(name)).toEqual({ rdnSequence: rdnSequenceToJER(name.rdnSequence) });
    });

    it("round-trips through JSON", () => {
        const json = nameToJSON(name);
        const back = nameFromJSON(JSON.parse(JSON.stringify(json)));
        expect(nameToJSON(back)).toEqual(json);
        expect(back.rdnSequence[1][0].value.utf8String).toBe("Bob");
    });

    it("rejects malformed input", () => {
        expect(() => nameFromJSON(null as never)).toThrow(SyntaxError);
        expect(() => nameFromJSON("x" as never)).toThrow(SyntaxError);
        expect(() => nameFromJSON({} as never)).toThrow(SyntaxError);
        expect(() => nameFromJSON({ rdnSequence: "x" } as never)).toThrow(SyntaxError);
    });
});

describe("validateNameBER()", () => {
    const bytes = _encode_Name(name, BER).toBytes();

    it("accepts the encoding of a Name", () => {
        expect(() => validateNameBER(bytes)).not.toThrow();
        expect(isNameBER(bytes)).toBe(true);
        expect(isNameBER(_encode_Name({ rdnSequence: [] }, BER).toBytes())).toBe(true);
        expect(() => validateNameElement(_encode_Name(name, BER))).not.toThrow();
    });

    it("rejects other encodings", () => {
        expect(isNameBER(Uint8Array.from([0x04, 0x00]))).toBe(false);
        expect(isNameBER(new Uint8Array(0))).toBe(false);
        expect(() => validateNameBER(Uint8Array.from([0x04, 0x00]))).toThrow(ASN1Error);
    });
});
