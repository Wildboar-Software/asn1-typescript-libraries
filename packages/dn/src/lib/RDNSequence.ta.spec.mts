import { describe, expect, it } from "vitest";
import { ObjectIdentifier } from "@wildboar/asn1";
import { BER, _encodePrintableString, _encodeUTF8String } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue } from "./AttributeTypeAndValue.ta.mjs";
import { rdnSequenceToKey } from "./RDNSequence.ta.mjs";
import type { RDNSequence } from "./RDNSequence.ta.mjs";

const countryName = ObjectIdentifier.fromParts([2, 5, 4, 6]);
const organizationName = ObjectIdentifier.fromParts([2, 5, 4, 10]);

describe("rdnSequenceToKey()", () => {
    it("produces identical, escaped keys for matching RDN sequences", () => {
        const a: RDNSequence = [
            [new AttributeTypeAndValue(countryName, _encodePrintableString("US", BER))],
            [new AttributeTypeAndValue(organizationName, _encodeUTF8String("Wildboar Software, LLC", BER))],
        ];
        const b: RDNSequence = [
            [new AttributeTypeAndValue(countryName, _encodePrintableString("us", BER))],
            [new AttributeTypeAndValue(organizationName, _encodeUTF8String("WILDBOAR  software, llc", BER))],
        ];
        expect(rdnSequenceToKey(a)).toBe("2.5.4.6=us,2.5.4.10=wildboar software\\, llc");
        expect(rdnSequenceToKey(a)).toBe(rdnSequenceToKey(b));
    });
});
