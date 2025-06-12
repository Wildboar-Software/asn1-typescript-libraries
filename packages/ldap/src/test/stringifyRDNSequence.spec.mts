import { ObjectIdentifier, BERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType, OBJECT_IDENTIFIER, ASN1Element } from "asn1-ts";
import stringifyRDNSequence from "../lib/stringifiers/RDNSequence";
import AttributeTypeAndValue from "../lib/types/AttributeTypeAndValue";
import { BER, _encodeUTF8String } from "asn1-ts/dist/functional.mjs";

function utf8Element (str: string): BERElement {
    return _encodeUTF8String(str, BER) as BERElement;
}

const COUNTRY_NAME = new ObjectIdentifier([ 2, 5, 4, 6 ]);
const STATE_NAME = new ObjectIdentifier([ 2, 5, 4, 8 ]);
const GIVEN_NAME = new ObjectIdentifier([ 2, 5, 4, 42 ]);
const SURNAME = new ObjectIdentifier([ 2, 5, 4, 4 ]);

const BASE_RDN: AttributeTypeAndValue[] = [
    [
        COUNTRY_NAME,
        utf8Element("US"),
    ],
];

const STATE_RDN: AttributeTypeAndValue[] = [
    [
        STATE_NAME,
        utf8Element("Florida"),
    ],
];

const NAME_RDN: AttributeTypeAndValue[] = [
    [
        GIVEN_NAME,
        utf8Element("Jonathan"),
    ],
    [
        SURNAME,
        utf8Element("Wilbur"),
    ],
];

describe("stringifyRDNSequence()", () => {

    it("stringifies a DN with no names or syntaxes recognized", () => {
        const dn = [NAME_RDN, STATE_RDN, BASE_RDN];
        const expected = "2.5.4.42=#0c084a6f6e617468616e+2.5.4.4=#0c0657696c627572,2.5.4.8=#0c07466c6f72696461,2.5.4.6=#0c025553";
        const valueEncoder = () => undefined;
        const typeNameGetter = () => undefined;
        expect(stringifyRDNSequence(dn, valueEncoder, typeNameGetter)).toBe(expected);
    });

    it("stringifies a DN with some names recognized", () => {
        const dn = [NAME_RDN, STATE_RDN, BASE_RDN];
        const expected = "2.5.4.42=#0c084a6f6e617468616e+sn=#0c0657696c627572,2.5.4.8=#0c07466c6f72696461,2.5.4.6=#0c025553";
        const valueEncoder = () => undefined;
        const typeNameGetter = (oid: OBJECT_IDENTIFIER): string | undefined => {
            if (oid.toString() === "2.5.4.4") {
                return "sn";
            } else {
                return undefined;
            }
        };
        expect(stringifyRDNSequence(dn, valueEncoder, typeNameGetter)).toBe(expected);
    });

    it("stringifies a DN with some syntaxes recognized", () => {
        const dn = [NAME_RDN, STATE_RDN, BASE_RDN];
        const expected = "2.5.4.42=#0c084a6f6e617468616e+2.5.4.4=Wilbur,2.5.4.8=#0c07466c6f72696461,2.5.4.6=#0c025553";
        const valueEncoder = (oid: OBJECT_IDENTIFIER) => {
            if (oid.toString() === "2.5.4.4") {
                return function (value: ASN1Element): string {
                    return value.utf8String;
                };
            } else {
                return undefined;
            }
        };
        const typeNameGetter = () => undefined;
        expect(stringifyRDNSequence(dn, valueEncoder, typeNameGetter)).toBe(expected);
    });

    it("stringifies a DN with escapes", () => {
        const dn: AttributeTypeAndValue[][] = [
            [
                [
                    SURNAME,
                    utf8Element("chunga+bunga=monkey\x00banana\\"),
                ],
            ],
            STATE_RDN,
            BASE_RDN,
        ];
        const expected = "2.5.4.4=chunga\\+bunga\\=monkey\\00banana\\\\,2.5.4.8=#0c07466c6f72696461,2.5.4.6=#0c025553";
        const valueEncoder = (oid: OBJECT_IDENTIFIER) => {
            if (oid.toString() === "2.5.4.4") {
                return function (value: ASN1Element): string {
                    return value.utf8String;
                };
            } else {
                return undefined;
            }
        };
        const typeNameGetter = () => undefined;
        expect(stringifyRDNSequence(dn, valueEncoder, typeNameGetter)).toBe(expected);
    });
});
