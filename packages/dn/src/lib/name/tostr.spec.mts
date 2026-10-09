import { ObjectIdentifier } from "@wildboar/asn1";
import { BER, _encodeUTF8String } from "@wildboar/asn1/functional";
import { describe, expect, it } from "vitest";
import { AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";
import type { Name } from "../Name.ta.mjs";
import { nameToString } from "./tostr.mjs";

const COUNTRY_NAME = ObjectIdentifier.fromParts([2, 5, 4, 6]);

describe("nameToString()", () => {
    it("prefixes the RDN sequence with its alternative", () => {
        const name: Name = {
            rdnSequence: [
                [new AttributeTypeAndValue(COUNTRY_NAME, _encodeUTF8String("US", BER))],
            ],
        };
        expect(nameToString(name)).toBe("rdnSequence:c=US");
    });

    it("prefixes the root DSE too", () => {
        expect(nameToString({ rdnSequence: [] })).toBe("rdnSequence:");
    });

    it("throws for an unsupported alternative", () => {
        expect(() => nameToString({} as Name)).toThrow(TypeError);
    });
});
