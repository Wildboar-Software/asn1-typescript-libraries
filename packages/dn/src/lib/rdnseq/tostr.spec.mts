import { ObjectIdentifier, BERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType, OBJECT_IDENTIFIER, ASN1Element } from "@wildboar/asn1";
import stringifyRDNSequence from "./tostr.mjs";
import { AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";
import { BER, _encodeUTF8String } from "@wildboar/asn1/functional";
import { describe, it, expect } from "vitest";

function utf8Element (str: string): BERElement {
    return _encodeUTF8String(str, BER) as BERElement;
}

const COUNTRY_NAME = ObjectIdentifier.fromParts([ 2, 5, 4, 6 ]);
const STATE_NAME = ObjectIdentifier.fromParts([ 2, 5, 4, 8 ]);
const GIVEN_NAME = ObjectIdentifier.fromParts([ 2, 5, 4, 42 ]);
const SURNAME = ObjectIdentifier.fromParts([ 2, 5, 4, 4 ]);

const BASE_RDN: AttributeTypeAndValue[] = [
    new AttributeTypeAndValue(COUNTRY_NAME, utf8Element("US")),
];

const STATE_RDN: AttributeTypeAndValue[] = [
    new AttributeTypeAndValue(STATE_NAME, utf8Element("Florida")),
];

const NAME_RDN: AttributeTypeAndValue[] = [
    new AttributeTypeAndValue(GIVEN_NAME, utf8Element("Jonathan")),
    new AttributeTypeAndValue(SURNAME, utf8Element("Wilbur")),
];

describe("stringifyRDNSequence()", () => {
    it("returns an empty string for an empty sequence", () => {
        expect(stringifyRDNSequence([])).toBe("");
    });

    it("stringifies a single RDN without a comma", () => {
        expect(stringifyRDNSequence([BASE_RDN])).toBe("c=US");
    });

    it("sorts a multi-valued RDN and separates RDNs with commas", () => {
        const dn: AttributeTypeAndValue[][] = [
            NAME_RDN,
            STATE_RDN,
            BASE_RDN,
        ];
        expect(stringifyRDNSequence(dn)).toBe("gn=Jonathan+sn=Wilbur,st=Florida,c=US");
    });

    it("stringifies a DN with escapes", () => {
        const dn: AttributeTypeAndValue[][] = [
            [
                new AttributeTypeAndValue(SURNAME, utf8Element("chunga+bunga=monkey\x00banana\\")),
            ],
            STATE_RDN,
            BASE_RDN,
        ];
        const expected = "sn=chunga\\+bunga\\=monkey\\00banana\\\\,st=Florida,c=US";
        expect(stringifyRDNSequence(dn)).toBe(expected);
    });
});
