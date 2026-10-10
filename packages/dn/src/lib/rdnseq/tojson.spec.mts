import { describe, expect, it } from "vitest";
import { ObjectIdentifier } from "@wildboar/asn1";
import { BER, _encodeUTF8String } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";
import {
    rdnSequenceFromJSON,
    rdnSequenceToJER,
    rdnSequenceToJSON,
} from "./tojson.mjs";

function atavOf (arcs: number[], value: string): AttributeTypeAndValue {
    return new AttributeTypeAndValue(
        ObjectIdentifier.fromParts(arcs),
        _encodeUTF8String(value, BER),
    );
}

const o = atavOf([2, 5, 4, 10], "Co");
const cn = atavOf([2, 5, 4, 3], "Bob");
const sn = atavOf([2, 5, 4, 4], "Smith");

describe("rdnSequenceToJSON()", () => {
    it("converts each RDN in order", () => {
        expect(rdnSequenceToJSON([[o], [cn, sn]])).toEqual([
            [{ type: "2.5.4.10", value: "#0c02436f" }],
            [
                { type: "2.5.4.3", value: "#0c03426f62" },
                { type: "2.5.4.4", value: "#0c05536d697468" },
            ],
        ]);
    });

    it("converts an empty sequence", () => {
        expect(rdnSequenceToJSON([])).toEqual([]);
    });
});

describe("rdnSequenceFromJSON()", () => {
    it("reverses rdnSequenceToJSON()", () => {
        const json = rdnSequenceToJSON([[o], [cn, sn]]);
        const rdns = rdnSequenceFromJSON(JSON.parse(JSON.stringify(json)));
        expect(rdns).toHaveLength(2);
        expect(rdns[1][0].value.utf8String).toBe("Bob");
        expect(rdnSequenceToJSON(rdns)).toEqual(json);
    });

    it("rejects input that is not an array", () => {
        expect(() => rdnSequenceFromJSON("x" as never)).toThrow(SyntaxError);
        expect(() => rdnSequenceFromJSON([{}] as never)).toThrow(SyntaxError);
    });
});

describe("rdnSequenceToJER()", () => {
    it("uses the value's own toJSON()", () => {
        expect(rdnSequenceToJER([[o], [cn]])).toEqual([
            [{ type: "2.5.4.10", value: o.value.toJSON() }],
            [{ type: "2.5.4.3", value: cn.value.toJSON() }],
        ]);
    });
});
