import {
    ASN1Construction,
    ASN1TagClass,
    ASN1UniversalType,
    DERElement,
    FALSE_BIT,
    ObjectIdentifier,
    TRUE_BIT,
    type ASN1Element,
} from "@wildboar/asn1";
import {
    DER,
    _encodeBitString,
    _encodeGeneralizedTime,
    _encodeIA5String,
    _encodeInteger,
    _encodeNumericString,
    _encodeOctetString,
    _encodePrintableString,
    _encodeSequenceOf,
    _encodeUTCTime,
    _encodeUTF8String,
} from "@wildboar/asn1/functional";
import {
    AttributeTypeAndValue,
} from "../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import { _encode_UnboundedDirectoryString } from "../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import { _encode_TelephoneNumber } from "../modules/SelectedAttributeTypes/TelephoneNumber.ta.mjs";
import {
    FacsimileTelephoneNumber,
    _encode_FacsimileTelephoneNumber,
} from "../modules/SelectedAttributeTypes/FacsimileTelephoneNumber.ta.mjs";
import {
    NameAndOptionalUID,
    _encode_NameAndOptionalUID,
} from "../modules/SelectedAttributeTypes/NameAndOptionalUID.ta.mjs";
import { commonName } from "../modules/SelectedAttributeTypes/commonName.oa.mjs";
import {
    TimeSpecification,
} from "../modules/SelectedAttributeTypes/TimeSpecification.ta.mjs";
import {
    DualStringSyntax,
} from "../modules/AttributeCertificateDefinitions/DualStringSyntax.ta.mjs";
import {
    MATCH_FLAG_APPROXIMATE,
    type Matcher,
} from "../types/matching.mjs";
import bitStringMatch, { bitStringMatchTyped } from "./equality/bitStringMatch.mjs";
import caseExactIA5Match, { caseExactIA5MatchTyped } from "./equality/caseExactIA5Match.mjs";
import caseExactMatch, { caseExactMatchTyped } from "./equality/caseExactMatch.mjs";
import caseIgnoreIA5Match, { caseIgnoreIA5MatchTyped } from "./equality/caseIgnoreIA5Match.mjs";
import caseIgnoreListMatch, { caseIgnoreListMatchTyped } from "./equality/caseIgnoreListMatch.mjs";
import caseIgnoreMatch, { caseIgnoreMatchTyped } from "./equality/caseIgnoreMatch.mjs";
import directoryStringFirstComponentMatch, {
    directoryStringFirstComponentMatchTyped,
} from "./equality/directoryStringFirstComponentMatch.mjs";
import distinguishedNameMatch from "./equality/distinguishedNameMatch.mjs";
import dnsNameMatch from "./equality/dnsNameMatch.mjs";
import { dualStringMatchTyped } from "./equality/dualStringMatch.mjs";
import facsimileNumberMatch from "./equality/facsimileNumberMatch.mjs";
import generalizedTimeMatch, { generalizedTimeMatchTyped } from "./equality/generalizedTimeMatch.mjs";
import intEmailMatch from "./equality/intEmailMatch.mjs";
import integerFirstComponentMatch, {
    integerFirstComponentMatchTyped,
} from "./equality/integerFirstComponentMatch.mjs";
import integerMatch, { integerMatchTyped } from "./equality/integerMatch.mjs";
import jidMatch from "./equality/jidMatch.mjs";
import keywordMatch from "./equality/keywordMatch.mjs";
import numericStringMatch, { numericStringMatchTyped } from "./equality/numericStringMatch.mjs";
import octetStringMatch, { octetStringMatchTyped } from "./equality/octetStringMatch.mjs";
import telephoneNumberMatch, { telephoneNumberMatchTyped } from "./equality/telephoneNumberMatch.mjs";
import { timeSpecificationMatchTyped } from "./equality/timeSpecificationMatch.mjs";
import uniqueMemberMatch from "./equality/uniqueMemberMatch.mjs";
import uriMatch, { uriMatchTyped } from "./equality/uriMatch.mjs";
import uTCTimeMatch, { uTCTimeMatchTyped } from "./equality/uTCTimeMatch.mjs";
import { wordMatch, wordMatchTyped } from "./equality/wordMatch.mjs";

const attrType = ObjectIdentifier.fromParts([ 2, 5, 4, 3 ]);

function atav (el: ASN1Element): AttributeTypeAndValue {
    return new AttributeTypeAndValue(attrType, el);
}

function utf8 (value: string): ASN1Element {
    return _encode_UnboundedDirectoryString({ uTF8String: value }, DER);
}

describe("MATCH_FLAG_APPROXIMATE", () => {
    describe("integerMatch and integerFirstComponentMatch", () => {
        it("tolerates a difference of 1 on integers", () => {
            const five = _encodeInteger(5, DER);
            const six = _encodeInteger(6, DER);
            const four = _encodeInteger(4, DER);
            const seven = _encodeInteger(7, DER);

            expect(integerMatch(five, atav(six))).toBe(false);
            expect(integerMatch(five, atav(six), undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);
            expect(integerMatch(five, atav(four), undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);
            expect(integerMatch(five, atav(seven), undefined, MATCH_FLAG_APPROXIMATE)).toBe(false);

            expect(integerMatch(_encodeInteger(127, DER), atav(_encodeInteger(128, DER)), undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);
            expect(integerMatch(_encodeInteger(0, DER), atav(_encodeInteger(-1, DER)), undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);
            expect(integerMatch(_encodeInteger(1, DER), atav(_encodeInteger(-1, DER)), undefined, MATCH_FLAG_APPROXIMATE)).toBe(false);

            expect(integerMatchTyped(100, 101n, undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);
            expect(integerMatchTyped(100, 99n, undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);
            expect(integerMatchTyped(100, 102n, undefined, MATCH_FLAG_APPROXIMATE)).toBe(false);
        });

        it("tolerates a difference of 1 on integerFirstComponentMatch", () => {
            const seq = _encodeSequenceOf<ASN1Element>(() => (el) => el, DER)([ _encodeInteger(10, DER) ]);
            expect(integerFirstComponentMatch(_encodeInteger(11, DER), atav(seq))).toBe(false);
            expect(integerFirstComponentMatch(_encodeInteger(11, DER), atav(seq), undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);
            expect(integerFirstComponentMatch(_encodeInteger(12, DER), atav(seq), undefined, MATCH_FLAG_APPROXIMATE)).toBe(false);
            expect(integerFirstComponentMatchTyped(10, 9, undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);
        });
    });

    describe("generalizedTimeMatch and uTCTimeMatch", () => {
        it("tolerates a difference of 1 second on generalizedTimeMatch", () => {
            const t0 = new Date("2026-01-01T12:00:00Z");
            const t1 = new Date("2026-01-01T12:00:01Z");
            const t2 = new Date("2026-01-01T12:00:02Z");

            expect(generalizedTimeMatchTyped(t0, t1)).toBe(false);
            expect(generalizedTimeMatchTyped(t0, t1, undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);
            expect(generalizedTimeMatchTyped(t1, t0, undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);
            expect(generalizedTimeMatchTyped(t0, t2, undefined, MATCH_FLAG_APPROXIMATE)).toBe(false);
            expect(generalizedTimeMatch(
                _encodeGeneralizedTime(t0, DER),
                atav(_encodeGeneralizedTime(t1, DER)),
                undefined,
                MATCH_FLAG_APPROXIMATE,
            )).toBe(true);
        });

        it("tolerates a difference of 1 second on uTCTimeMatch", () => {
            const t0 = new Date("2026-01-01T12:00:00Z");
            const t1 = new Date("2026-01-01T12:00:01Z");
            const t2 = new Date("2026-01-01T12:00:02Z");

            expect(uTCTimeMatchTyped(t0, t1)).toBe(false);
            expect(uTCTimeMatchTyped(t0, t1, undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);
            expect(uTCTimeMatchTyped(t0, t2, undefined, MATCH_FLAG_APPROXIMATE)).toBe(false);
            expect(uTCTimeMatch(
                _encodeUTCTime(t0, DER),
                atav(_encodeUTCTime(t1, DER)),
                undefined,
                MATCH_FLAG_APPROXIMATE,
            )).toBe(true);
        });
    });

    describe("bitStringMatch and octetStringMatch", () => {
        it("tolerates 1 bit difference (substitution, insertion, deletion) on bitStringMatch", () => {
            const a = new Uint8ClampedArray([ TRUE_BIT, FALSE_BIT, TRUE_BIT ]);
            const sub = new Uint8ClampedArray([ TRUE_BIT, TRUE_BIT, TRUE_BIT ]);
            const ins = new Uint8ClampedArray([ TRUE_BIT, FALSE_BIT, TRUE_BIT, FALSE_BIT ]);
            const del = new Uint8ClampedArray([ TRUE_BIT, FALSE_BIT ]);
            const twoDiff = new Uint8ClampedArray([ FALSE_BIT, TRUE_BIT, TRUE_BIT ]);

            expect(bitStringMatchTyped(a, sub)).toBe(false);
            expect(bitStringMatchTyped(a, sub, undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);
            expect(bitStringMatchTyped(a, ins, undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);
            expect(bitStringMatchTyped(a, del, undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);
            expect(bitStringMatchTyped(a, twoDiff, undefined, MATCH_FLAG_APPROXIMATE)).toBe(false);

            expect(bitStringMatch(
                _encodeBitString(a, DER),
                atav(_encodeBitString(sub, DER)),
                undefined,
                MATCH_FLAG_APPROXIMATE,
            )).toBe(true);
        });

        it("tolerates 1 octet difference on octetStringMatch", () => {
            const a = new Uint8Array([ 1, 2, 3 ]);
            const sub = new Uint8Array([ 1, 9, 3 ]);
            const ins = new Uint8Array([ 1, 2, 3, 4 ]);
            const del = new Uint8Array([ 1, 3 ]);
            const twoDiff = new Uint8Array([ 9, 9, 3 ]);

            expect(octetStringMatchTyped(a, sub)).toBe(false);
            expect(octetStringMatchTyped(a, sub, undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);
            expect(octetStringMatchTyped(a, ins, undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);
            expect(octetStringMatchTyped(a, del, undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);
            expect(octetStringMatchTyped(a, twoDiff, undefined, MATCH_FLAG_APPROXIMATE)).toBe(false);

            expect(octetStringMatch(
                _encodeOctetString(a, DER),
                atav(_encodeOctetString(sub, DER)),
                undefined,
                MATCH_FLAG_APPROXIMATE,
            )).toBe(true);
        });
    });

    describe("string equality matchers", () => {
        it("tolerates 1 character edit on caseExactMatch and caseIgnoreMatch", () => {
            expect(caseIgnoreMatchTyped("dundee", "dunde")).toBe(false);
            expect(caseIgnoreMatchTyped("dundee", "dunde", undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);
            expect(caseIgnoreMatchTyped("dundee", "dundees", undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);
            expect(caseIgnoreMatchTyped("dundee", "dundex", undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);
            expect(caseIgnoreMatchTyped("dundee", "dundxx", undefined, MATCH_FLAG_APPROXIMATE)).toBe(false);

            expect(caseExactMatchTyped("Dundee", "dundee")).toBe(false);
            expect(caseExactMatchTyped("Dundee", "dundee", undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);
            expect(caseExactMatchTyped("Dundee", "dUNDEE", undefined, MATCH_FLAG_APPROXIMATE)).toBe(false);

            expect(caseIgnoreMatch(utf8("Dundee"), atav(utf8("Dunde")), undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);
            expect(caseExactMatch(utf8("Dundee"), atav(utf8("Dundex")), undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);
        });

        it("tolerates 1 character edit on IA5, numeric, telephone, facsimile, list, first component, and dualString", () => {
            expect(caseExactIA5MatchTyped("hello", "hellx", undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);
            expect(caseExactIA5MatchTyped("hello", "helxx", undefined, MATCH_FLAG_APPROXIMATE)).toBe(false);
            expect(caseExactIA5Match(_encodeIA5String("hello", DER), atav(_encodeIA5String("hell", DER)), undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);

            expect(caseIgnoreIA5MatchTyped("hello", "HELLX", undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);
            expect(caseIgnoreIA5Match(_encodeIA5String("hello", DER), atav(_encodeIA5String("HELXX", DER)), undefined, MATCH_FLAG_APPROXIMATE)).toBe(false);

            expect(numericStringMatchTyped("1234", "1235", undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);
            expect(numericStringMatchTyped("1234", "1255", undefined, MATCH_FLAG_APPROXIMATE)).toBe(false);
            expect(numericStringMatch(_encodeNumericString("12 34", DER), atav(_encodeNumericString("123", DER)), undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);

            expect(telephoneNumberMatchTyped("+17035551212", "+1-703-555-1213", undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);
            expect(telephoneNumberMatchTyped("+17035551212", "17035551212", undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);
            expect(telephoneNumberMatch(_encode_TelephoneNumber("1234", DER), atav(_encode_TelephoneNumber("1299", DER)), undefined, MATCH_FLAG_APPROXIMATE)).toBe(false);

            expect(facsimileNumberMatch(
                _encode_TelephoneNumber("+17035551212", DER),
                atav(_encode_FacsimileTelephoneNumber(new FacsimileTelephoneNumber("+1-703-555-1213"), DER)),
                undefined,
                MATCH_FLAG_APPROXIMATE,
            )).toBe(true);

            expect(caseIgnoreListMatchTyped(
                [ "main street", "springfield" ],
                [ "main stree", "springfielx" ],
                undefined,
                MATCH_FLAG_APPROXIMATE,
            )).toBe(true);
            expect(caseIgnoreListMatchTyped(
                [ "main street" ],
                [ "main strxx" ],
                undefined,
                MATCH_FLAG_APPROXIMATE,
            )).toBe(false);
            expect(caseIgnoreListMatch(
                _encodeSequenceOf(() => _encode_UnboundedDirectoryString, DER)([ { uTF8String: "Main Street" } ]),
                atav(_encodeSequenceOf(() => _encode_UnboundedDirectoryString, DER)([ { uTF8String: "Main Stree" } ])),
                undefined,
                MATCH_FLAG_APPROXIMATE,
            )).toBe(true);

            const seq = _encodeSequenceOf<ASN1Element>(() => (el) => el, DER)([ utf8("Dundex") ]);
            expect(directoryStringFirstComponentMatch(utf8("Dundee"), atav(seq), undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);
            expect(directoryStringFirstComponentMatchTyped("dundee", "dundxx", undefined, MATCH_FLAG_APPROXIMATE)).toBe(false);

            expect(dualStringMatchTyped(
                { operation: "read", object: "file" },
                new DualStringSyntax({ uTF8String: "reax" }, { uTF8String: "fil" }),
                undefined,
                MATCH_FLAG_APPROXIMATE,
            )).toBe(true);
            expect(dualStringMatchTyped(
                { operation: "read", object: "file" },
                new DualStringSyntax({ uTF8String: "rxxx" }, { uTF8String: "file" }),
                undefined,
                MATCH_FLAG_APPROXIMATE,
            )).toBe(false);
        });

        it("tolerates 1 character edit in wordMatch, keywordMatch, dnsNameMatch, intEmailMatch, jidMatch, and uriMatch", () => {
            expect(wordMatchTyped("HYDE", "jekyll hydx jekyll", undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);
            expect(wordMatchTyped("HYDE", "jekyll hyxx jekyll", undefined, MATCH_FLAG_APPROXIMATE)).toBe(false);
            expect(wordMatch(utf8("hyde"), atav(utf8("jekyll hyd jekyll")), undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);
            expect(keywordMatch(utf8("hyde"), atav(utf8("jekyll hydx")), undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);

            expect(dnsNameMatch(
                _encodeUTF8String("examplx.com", DER),
                atav(_encodeUTF8String("example.com", DER)),
                undefined,
                MATCH_FLAG_APPROXIMATE,
            )).toBe(true);
            expect(dnsNameMatch(
                _encodeUTF8String("exampXX.com", DER),
                atav(_encodeUTF8String("example.com", DER)),
                undefined,
                MATCH_FLAG_APPROXIMATE,
            )).toBe(false);

            expect(intEmailMatch(
                _encodeUTF8String("alicy@examplx.com", DER),
                atav(_encodeUTF8String("alice@example.com", DER)),
                undefined,
                MATCH_FLAG_APPROXIMATE,
            )).toBe(true);

            // X.511 7.8.2 permits a local approximateMatch algorithm. This
            // does not assert that these JIDs are equal under X.520 8.9.4.
            expect(jidMatch(
                _encodeUTF8String("alicy@examplx.com/res1", DER),
                atav(_encodeUTF8String("alice@example.com/res2", DER)),
            )).toBe(false);
            expect(jidMatch(
                _encodeUTF8String("alicy@examplx.com/res1", DER),
                atav(_encodeUTF8String("alice@example.com/res2", DER)),
                undefined,
                MATCH_FLAG_APPROXIMATE,
            )).toBe(true);

            expect(uriMatchTyped("http://example.com/foo", "http://example.com/fox", undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);
            expect(uriMatch(_encodeUTF8String("http://example.com/foo", DER), atav(_encodeUTF8String("http://example.com/fxx", DER)), undefined, MATCH_FLAG_APPROXIMATE)).toBe(false);
        });

        it("propagates MATCH_FLAG_APPROXIMATE into distinguishedNameMatch and uniqueMemberMatch", () => {
            const getMatcher = (type: ObjectIdentifier): Matcher | undefined => (
                type.isEqualTo(commonName["&id"]) ? caseIgnoreMatch : undefined
            );
            const dnA = [[ new AttributeTypeAndValue(commonName["&id"], utf8("Alice")) ]];
            const dnB = [[ new AttributeTypeAndValue(commonName["&id"], utf8("Alicx")) ]];
            const uidA = new Uint8ClampedArray([ TRUE_BIT, FALSE_BIT ]);
            const uidB = new Uint8ClampedArray([ TRUE_BIT, TRUE_BIT ]);

            const memA = _encode_NameAndOptionalUID(new NameAndOptionalUID(dnA, uidA), DER);
            const memB = _encode_NameAndOptionalUID(new NameAndOptionalUID(dnB, uidB), DER);

            expect(uniqueMemberMatch(memA, atav(memB), getMatcher)).toBe(false);
            expect(uniqueMemberMatch(memA, atav(memB), getMatcher, MATCH_FLAG_APPROXIMATE)).toBe(true);
            expect(distinguishedNameMatch(
                _encodeSequenceOf(() => (el) => el, DER)([]),
                atav(_encodeSequenceOf(() => (el) => el, DER)([])),
                getMatcher,
                MATCH_FLAG_APPROXIMATE,
            )).toBe(true);
        });

        it("tolerates 1 unit difference in timeSpecificationMatch", () => {
            const specA = new TimeSpecification(
                {
                    absolute: {
                        startTime: new Date("2026-01-01T00:00:00Z"),
                        endTime: new Date("2026-01-01T01:00:00Z"),
                    },
                },
                undefined,
                2,
            );
            const specB = new TimeSpecification(
                {
                    absolute: {
                        startTime: new Date("2026-01-01T00:00:01Z"),
                        endTime: new Date("2026-01-01T00:59:59Z"),
                    },
                },
                undefined,
                3,
            );
            expect(timeSpecificationMatchTyped(specA, specB)).toBe(false);
            expect(timeSpecificationMatchTyped(specA, specB, undefined, MATCH_FLAG_APPROXIMATE)).toBe(true);
        });
    });
});
