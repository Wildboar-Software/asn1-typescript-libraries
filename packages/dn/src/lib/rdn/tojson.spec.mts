import { describe, expect, it } from "vitest";
import { ObjectIdentifier } from "@wildboar/asn1";
import { BER, _encodeUTF8String } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";
import {
    relativeDistinguishedNameFromJSON,
    relativeDistinguishedNameToJER,
    relativeDistinguishedNameToJSON,
} from "./tojson.mjs";

function atavOf (arcs: number[], value: string): AttributeTypeAndValue {
    return new AttributeTypeAndValue(
        ObjectIdentifier.fromParts(arcs),
        _encodeUTF8String(value, BER),
    );
}

const cn = atavOf([2, 5, 4, 3], "Bob");
const sn = atavOf([2, 5, 4, 4], "Smith");

describe("relativeDistinguishedNameToJSON()", () => {
    it("converts each pair in order", () => {
        expect(relativeDistinguishedNameToJSON([cn, sn])).toEqual([
            { type: "2.5.4.3", value: "#0c03426f62" },
            { type: "2.5.4.4", value: "#0c05536d697468" },
        ]);
    });

    it("converts an empty RDN", () => {
        expect(relativeDistinguishedNameToJSON([])).toEqual([]);
    });
});

describe("relativeDistinguishedNameFromJSON()", () => {
    it("reverses relativeDistinguishedNameToJSON()", () => {
        const json = relativeDistinguishedNameToJSON([cn, sn]);
        const rdn = relativeDistinguishedNameFromJSON(json);
        expect(rdn).toHaveLength(2);
        expect(rdn[0].type_.toString()).toBe("2.5.4.3");
        expect(rdn[0].value.utf8String).toBe("Bob");
        expect(rdn[1].value.utf8String).toBe("Smith");
        expect(relativeDistinguishedNameToJSON(rdn)).toEqual(json);
    });

    it("rejects input that is not an array", () => {
        expect(() => relativeDistinguishedNameFromJSON({} as never)).toThrow(SyntaxError);
    });

    it("rejects a malformed pair", () => {
        expect(() => relativeDistinguishedNameFromJSON([{ type: "x", value: "#00" }]))
            .toThrow(SyntaxError);
    });
});

describe("relativeDistinguishedNameToJER()", () => {
    it("uses the value's own toJSON()", () => {
        expect(relativeDistinguishedNameToJER([cn, sn])).toEqual([
            { type: "2.5.4.3", value: cn.value.toJSON() },
            { type: "2.5.4.4", value: sn.value.toJSON() },
        ]);
    });
});
