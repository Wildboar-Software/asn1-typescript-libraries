import { ObjectIdentifier } from "@wildboar/asn1";
import { BER, _encodeUTF8String } from "@wildboar/asn1/functional";
import { describe, expect, it } from "vitest";
import { AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";
import type { Name } from "../Name.ta.mjs";
import { stringifyName } from "./tostr.mjs";

const COUNTRY_NAME = ObjectIdentifier.fromParts([2, 5, 4, 6]);

describe("stringifyName()", () => {
    it("prefixes an RDN sequence", () => {
        const name: Name = {
            rdnSequence: [
                [new AttributeTypeAndValue(COUNTRY_NAME, _encodeUTF8String("US", BER))],
            ],
        };
        expect(stringifyName(name)).toBe("rdnSequence:c=US");
    });

    it("returns an empty string for an unsupported alternative", () => {
        expect(stringifyName({} as Name)).toBe("");
    });
});
