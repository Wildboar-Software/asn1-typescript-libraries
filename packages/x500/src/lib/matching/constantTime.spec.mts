import {
    ASN1Construction,
    ASN1TagClass,
    ASN1UniversalType,
    DERElement,
    ObjectIdentifier,
    TRUE_BIT,
    FALSE_BIT,
    type ASN1Element,
} from "@wildboar/asn1";
import {
    DER,
    _encodeBitString,
    _encodeIA5String,
    _encodeInteger,
    _encodeNumericString,
    _encodeObjectIdentifier,
    _encodeOctetString,
    _encodeUTF8String,
} from "@wildboar/asn1/functional";
import {
    AttributeTypeAndValue,
} from "../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import {
    _encode_UnboundedDirectoryString,
} from "../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import { _encode_PostalAddress } from "../modules/SelectedAttributeTypes/PostalAddress.ta.mjs";
import { _encode_TelephoneNumber } from "../modules/SelectedAttributeTypes/TelephoneNumber.ta.mjs";
import {
    UUIDPair,
    _encode_UUIDPair,
} from "../modules/SelectedAttributeTypes/UUIDPair.ta.mjs";
import {
    DualStringSyntax,
    _encode_DualStringSyntax,
} from "../modules/AttributeCertificateDefinitions/DualStringSyntax.ta.mjs";
import {
    NameAndOptionalUID,
    _encode_NameAndOptionalUID,
} from "../modules/SelectedAttributeTypes/NameAndOptionalUID.ta.mjs";
import { commonName } from "../modules/SelectedAttributeTypes/commonName.oa.mjs";
import { AlgorithmIdentifier } from "../modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import {
    UserPwd_encrypted,
} from "../modules/PasswordPolicy/UserPwd-encrypted.ta.mjs";
import {
    _encode_UserPwd,
} from "../modules/PasswordPolicy/UserPwd.ta.mjs";
import {
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_ORDERING_GREATER,
    MATCH_FLAG_ORDERING_OR_EQUAL,
    MATCH_FLAG_USED_FOR_NAME,
    type Matcher,
} from "../types/matching.mjs";
import {
    bytesEqual,
    ctBytesEqual,
    ctBytesEqualAt,
    ctBytesIndexOf,
    ctCompareBytes,
    ctCompareCodePoints,
    ctStringsEqual,
    stringsEqual,
} from "./constantTime.mjs";
import caseExactMatch from "./equality/caseExactMatch.mjs";
import caseIgnoreMatch from "./equality/caseIgnoreMatch.mjs";
import caseExactIA5Match from "./equality/caseExactIA5Match.mjs";
import caseIgnoreIA5Match from "./equality/caseIgnoreIA5Match.mjs";
import caseIgnoreListMatch from "./equality/caseIgnoreListMatch.mjs";
import numericStringMatch from "./equality/numericStringMatch.mjs";
import telephoneNumberMatch from "./equality/telephoneNumberMatch.mjs";
import bitStringMatch from "./equality/bitStringMatch.mjs";
import octetStringMatch from "./equality/octetStringMatch.mjs";
import integerMatch from "./equality/integerMatch.mjs";
import objectIdentifierMatch from "./equality/objectIdentifierMatch.mjs";
import uUIDPairMatch from "./equality/uUIDPairMatch.mjs";
import dualStringMatch from "./equality/dualStringMatch.mjs";
import wordMatch from "./equality/wordMatch.mjs";
import keywordMatch from "./equality/keywordMatch.mjs";
import dnsNameMatch from "./equality/dnsNameMatch.mjs";
import intEmailMatch from "./equality/intEmailMatch.mjs";
import jidMatch from "./equality/jidMatch.mjs";
import uriMatch from "./equality/uriMatch.mjs";
import uniqueMemberMatch from "./equality/uniqueMemberMatch.mjs";
import createUserPwdMatch from "./equality/userPwdMatch.mjs";
import distinguishedNameMatch from "./equality/distinguishedNameMatch.mjs";
import caseExactOrderingMatch from "./ordering/caseExactOrderingMatch.mjs";
import caseIgnoreOrderingMatch from "./ordering/caseIgnoreOrderingMatch.mjs";
import numericStringOrderingMatch from "./ordering/numericStringOrderingMatch.mjs";
import octetStringOrderingMatch from "./ordering/octetStringOrderingMatch.mjs";
import integerOrderingMatch from "./ordering/integerOrderingMatch.mjs";
import { evaluateLDAPAttributeOptionContextTyped } from "./context/ldapAttributeOptionContext.mjs";
import { evaluateLocaleContext } from "./context/localeContext.mjs";

const attrType = ObjectIdentifier.fromParts([ 1, 1, 1, 1 ]);

function atav (el: ASN1Element): AttributeTypeAndValue {
    return new AttributeTypeAndValue(attrType, el);
}

function uds (s: string): ASN1Element {
    return _encode_UnboundedDirectoryString({ uTF8String: s }, DER);
}

describe("constantTime primitives", () => {
    it("compares strings in constant time", () => {
        expect(ctStringsEqual("", "")).toBe(true);
        expect(ctStringsEqual("abc", "abc")).toBe(true);
        expect(ctStringsEqual("abc", "abd")).toBe(false);
        expect(ctStringsEqual("abc", "ab")).toBe(false);
        expect(ctStringsEqual("ab", "abc")).toBe(false);
        expect(ctStringsEqual("abc", "")).toBe(false);
        expect(ctStringsEqual("", "abc")).toBe(false);
        expect(stringsEqual("hello", "hello", MATCH_FLAG_CONSTANT_TIME)).toBe(true);
        expect(stringsEqual("hello", "world", MATCH_FLAG_CONSTANT_TIME)).toBe(false);
    });

    it("compares byte arrays in constant time", () => {
        const a = new Uint8Array([ 1, 2, 3 ]);
        const b = new Uint8Array([ 1, 2, 3 ]);
        const c = new Uint8Array([ 1, 2, 4 ]);
        const d = new Uint8Array([ 1, 2 ]);
        const empty = new Uint8Array(0);
        expect(ctBytesEqual(empty, empty)).toBe(true);
        expect(ctBytesEqual(empty, a)).toBe(false);
        expect(ctBytesEqual(a, empty)).toBe(false);
        expect(ctBytesEqual(a, b)).toBe(true);
        expect(ctBytesEqual(a, c)).toBe(false);
        expect(ctBytesEqual(a, d)).toBe(false);
        expect(bytesEqual(a, b, MATCH_FLAG_CONSTANT_TIME)).toBe(true);
        expect(bytesEqual(a, c, MATCH_FLAG_CONSTANT_TIME)).toBe(false);
    });

    it("orders strings and byte arrays in constant time", () => {
        expect(ctCompareCodePoints("abc", "abc")).toBe(0);
        expect(ctCompareCodePoints("abc", "abd")).toBeLessThan(0);
        expect(ctCompareCodePoints("abd", "abc")).toBeGreaterThan(0);
        expect(ctCompareCodePoints("ab", "abc")).toBeLessThan(0);
        expect(ctCompareCodePoints("abc", "ab")).toBeGreaterThan(0);

        expect(ctCompareBytes(new Uint8Array([1, 2]), new Uint8Array([1, 2]))).toBe(0);
        expect(ctCompareBytes(new Uint8Array([1, 2]), new Uint8Array([1, 3]))).toBeLessThan(0);
        expect(ctCompareBytes(new Uint8Array([1, 3]), new Uint8Array([1, 2]))).toBeGreaterThan(0);
        expect(ctCompareBytes(new Uint8Array([1]), new Uint8Array([1, 2]))).toBeLessThan(0);
        expect(ctCompareBytes(new Uint8Array([1, 2]), new Uint8Array([1]))).toBeGreaterThan(0);
    });

    it("finds byte substrings in constant time", () => {
        const hay = new Uint8Array([ 10, 20, 30, 40, 50 ]);
        expect(ctBytesEqualAt(hay, 1, new Uint8Array([ 20, 30 ]))).toBe(1);
        expect(ctBytesEqualAt(hay, 1, new Uint8Array([ 20, 31 ]))).toBe(0);
        expect(ctBytesEqualAt(hay, 4, new Uint8Array([ 50, 60 ]))).toBe(0);
        expect(ctBytesIndexOf(hay, new Uint8Array([ 30, 40 ]), 0, 5)).toBe(2);
        expect(ctBytesIndexOf(hay, new Uint8Array([ 30, 40 ]), 3, 5)).toBe(-1);
    });
});

describe("matching rules with MATCH_FLAG_CONSTANT_TIME", () => {
    it("evaluates string and IA5 equality matchers in constant time", () => {
        expect(caseExactMatch(uds("Dundee"), atav(uds("Dundee")), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(true);
        expect(caseExactMatch(uds("Dundee"), atav(uds("dundee")), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(false);
        expect(caseIgnoreMatch(uds("Dundee"), atav(uds("dundee")), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(true);
        expect(caseIgnoreMatch(uds("Dundee"), atav(uds("Perth")), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(false);

        const ia5A = _encodeIA5String("Hello", DER);
        const ia5B = _encodeIA5String("hello", DER);
        expect(caseExactIA5Match(ia5A, atav(ia5A), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(true);
        expect(caseExactIA5Match(ia5A, atav(ia5B), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(false);
        expect(caseIgnoreIA5Match(ia5A, atav(ia5B), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(true);
    });

    it("evaluates caseIgnoreListMatch in constant time, including UNDEFINED on later bad lines", () => {
        const listA = _encode_PostalAddress([ { uTF8String: "Main St" }, { uTF8String: "Tampa" } ], DER);
        const listB = _encode_PostalAddress([ { uTF8String: "main st" }, { uTF8String: "TAMPA" } ], DER);
        const listMismatch = _encode_PostalAddress([ { uTF8String: "Other St" }, { uTF8String: "Tampa" } ], DER);
        const listMismatchThenInvalid = _encode_PostalAddress([ { uTF8String: "Other St" }, { uTF8String: "\uFFFD" } ], DER);

        expect(caseIgnoreListMatch(listA, atav(listB), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(true);
        expect(caseIgnoreListMatch(listA, atav(listMismatch), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(false);
        expect(caseIgnoreListMatch(listA, atav(listMismatchThenInvalid), undefined, MATCH_FLAG_CONSTANT_TIME)).toBeUndefined();
    });

    it("evaluates numeric, telephone, bit string, octet string, integer, OID, and UUID pair matchers in constant time", () => {
        const numA = _encodeNumericString("12 34", DER);
        const numB = _encodeNumericString("1234", DER);
        const numC = _encodeNumericString("1235", DER);
        expect(numericStringMatch(numA, atav(numB), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(true);
        expect(numericStringMatch(numA, atav(numC), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(false);

        const telA = _encode_TelephoneNumber("+1 703-555-1212", DER);
        const telB = _encode_TelephoneNumber("+17035551212", DER);
        const telC = _encode_TelephoneNumber("+17035551213", DER);
        expect(telephoneNumberMatch(telA, atav(telB), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(true);
        expect(telephoneNumberMatch(telA, atav(telC), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(false);

        const bitsA = _encodeBitString(new Uint8ClampedArray([ TRUE_BIT, FALSE_BIT, TRUE_BIT ]), DER);
        const bitsB = _encodeBitString(new Uint8ClampedArray([ TRUE_BIT, FALSE_BIT, FALSE_BIT ]), DER);
        expect(bitStringMatch(bitsA, atav(bitsA), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(true);
        expect(bitStringMatch(bitsA, atav(bitsB), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(false);

        const octA = _encodeOctetString(new Uint8Array([ 1, 2, 3 ]), DER);
        const octB = _encodeOctetString(new Uint8Array([ 1, 2, 4 ]), DER);
        expect(octetStringMatch(octA, atav(octA), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(true);
        expect(octetStringMatch(octA, atav(octB), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(false);

        const intA = _encodeInteger(12345, DER);
        const intB = _encodeInteger(12346, DER);
        expect(integerMatch(intA, atav(intA), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(true);
        expect(integerMatch(intA, atav(intB), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(false);

        const oidA = _encodeObjectIdentifier(ObjectIdentifier.fromString("2.5.4.3"), DER);
        const oidB = _encodeObjectIdentifier(ObjectIdentifier.fromString("2.5.4.4"), DER);
        expect(objectIdentifierMatch(oidA, atav(oidA), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(true);
        expect(objectIdentifierMatch(oidA, atav(oidB), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(false);

        const u1 = new Uint8Array(16).fill(1);
        const u2 = new Uint8Array(16).fill(2);
        const pairA = _encode_UUIDPair(new UUIDPair(u1, u2), DER);
        const pairB = _encode_UUIDPair(new UUIDPair(u1, u1), DER);
        expect(uUIDPairMatch(pairA, atav(pairA), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(true);
        expect(uUIDPairMatch(pairA, atav(pairB), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(false);
    });

    it("evaluates dualStringMatch, wordMatch, keywordMatch, dnsNameMatch, intEmailMatch, jidMatch, and uriMatch in constant time", () => {
        const dualA = _encode_DualStringSyntax(new DualStringSyntax({ uTF8String: "read" }, { uTF8String: "file" }), DER);
        const dualB = _encode_DualStringSyntax(new DualStringSyntax({ uTF8String: "write" }, { uTF8String: "file" }), DER);
        expect(dualStringMatch(dualA, atav(dualA), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(true);
        expect(dualStringMatch(dualA, atav(dualB), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(false);

        expect(wordMatch(uds("hyde"), atav(uds("jekyll hyde")), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(true);
        expect(wordMatch(uds("hyde"), atav(uds("jekyllhyde")), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(false);
        expect(keywordMatch(uds("hyde"), atav(uds("jekyll-hyde")), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(true);
        expect(keywordMatch(uds("hyde"), atav(uds("jekyll")), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(false);

        const dnsA = _encodeUTF8String("*.Example.COM", DER);
        const dnsB = _encodeUTF8String("www.example.com", DER);
        const dnsC = _encodeUTF8String("a.b.example.com", DER);
        expect(dnsNameMatch(dnsA, atav(dnsB), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(true);
        expect(dnsNameMatch(dnsA, atav(dnsC), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(false);

        const emailA = _encodeUTF8String("Alice@Example.COM", DER);
        const emailB = _encodeUTF8String("alice@example.com", DER);
        const emailC = _encodeUTF8String("bob@example.com", DER);
        expect(intEmailMatch(emailA, atav(emailB), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(true);
        expect(intEmailMatch(emailA, atav(emailC), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(false);

        const jidA = _encodeUTF8String("RomeO@Example.COM/orchard", DER);
        const jidB = _encodeUTF8String("romeo@example.com/orchard", DER);
        const jidC = _encodeUTF8String("romeo@example.com/balcony", DER);
        expect(jidMatch(jidA, atav(jidB), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(true);
        expect(jidMatch(jidA, atav(jidC), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(false);

        const uriA = _encodeUTF8String("HTTP://Example.COM:80/a/./b/../c", DER);
        const uriB = _encodeUTF8String("http://example.com/a/c", DER);
        const uriC = _encodeUTF8String("http://example.com/a/d", DER);
        expect(uriMatch(uriA, atav(uriB), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(true);
        expect(uriMatch(uriA, atav(uriC), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(false);
    });

    it("evaluates userPwdMatch in constant time", () => {
        const alg = new AlgorithmIdentifier(ObjectIdentifier.fromParts([ 1, 2, 3 ]));
        const userPwdMatch = createUserPwdMatch((_alg, clear) => new Uint8Array(Buffer.from(clear, "utf8")));
        const clearA = _encode_UserPwd({ clear: "secret" }, DER);
        const clearB = _encode_UserPwd({ clear: "other" }, DER);
        const encA = _encode_UserPwd({
            encrypted: new UserPwd_encrypted(alg, new Uint8Array(Buffer.from("secret", "utf8"))),
        }, DER);
        expect(userPwdMatch(clearA, atav(clearA), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(true);
        expect(userPwdMatch(clearA, atav(clearB), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(false);
        expect(userPwdMatch(clearA, atav(encA), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(true);
        expect(userPwdMatch(encA, atav(encA), undefined, MATCH_FLAG_CONSTANT_TIME)).toBe(true);
    });

    it("forwards MATCH_FLAG_CONSTANT_TIME into nested name equality matchers", () => {
        let receivedFlags = 0;
        const spyMatcher: Matcher = (assertion, value, getMatcher, flags = 0) => {
            receivedFlags = flags;
            return caseIgnoreMatch(assertion, value, getMatcher, flags);
        };
        const rdn = [[
            new AttributeTypeAndValue(
                commonName["&id"],
                commonName.encoderFor["&Type"]!({ uTF8String: "Alice" }, DER),
            ),
        ]];
        const memberEl = _encode_NameAndOptionalUID(
            new NameAndOptionalUID(rdn, new Uint8ClampedArray([ TRUE_BIT, FALSE_BIT ])),
            DER,
        );
        expect(uniqueMemberMatch(
            memberEl,
            atav(memberEl),
            () => spyMatcher,
            MATCH_FLAG_CONSTANT_TIME,
        )).toBe(true);
        expect(receivedFlags & MATCH_FLAG_CONSTANT_TIME).toBeTruthy();
        expect(receivedFlags & MATCH_FLAG_USED_FOR_NAME).toBeTruthy();

        receivedFlags = 0;
        const dnEl = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.constructed,
            ASN1UniversalType.sequence,
            memberEl.sequence[0].value,
        );
        expect(distinguishedNameMatch(
            dnEl,
            atav(dnEl),
            () => spyMatcher,
            MATCH_FLAG_CONSTANT_TIME,
        )).toBe(true);
        expect(receivedFlags & MATCH_FLAG_CONSTANT_TIME).toBeTruthy();
    });

    it("evaluates ordering matchers in constant time", () => {
        expect(caseExactOrderingMatch(
            uds("b"),
            atav(uds("a")),
            undefined,
            MATCH_FLAG_CONSTANT_TIME,
        )).toBe(true);
        expect(caseIgnoreOrderingMatch(
            uds("B"),
            atav(uds("a")),
            undefined,
            MATCH_FLAG_CONSTANT_TIME,
        )).toBe(true);
        expect(numericStringOrderingMatch(
            _encodeNumericString("2 0", DER),
            atav(_encodeNumericString("1 0", DER)),
            undefined,
            MATCH_FLAG_CONSTANT_TIME,
        )).toBe(true);
        expect(octetStringOrderingMatch(
            _encodeOctetString(new Uint8Array([ 1, 3 ]), DER),
            atav(_encodeOctetString(new Uint8Array([ 1, 2 ]), DER)),
            undefined,
            MATCH_FLAG_CONSTANT_TIME,
        )).toBe(true);
        expect(integerOrderingMatch(
            _encodeInteger(300, DER),
            atav(_encodeInteger(200, DER)),
            undefined,
            MATCH_FLAG_CONSTANT_TIME,
        )).toBe(true);
        expect(integerOrderingMatch(
            _encodeInteger(200, DER),
            atav(_encodeInteger(300, DER)),
            undefined,
            MATCH_FLAG_CONSTANT_TIME | MATCH_FLAG_ORDERING_GREATER | MATCH_FLAG_ORDERING_OR_EQUAL,
        )).toBe(true);
    });

    it("evaluates context helpers in constant time", () => {
        expect(evaluateLDAPAttributeOptionContextTyped(
            [ "lang-en", "binary" ],
            [ "BINARY", "LANG-EN", "x-custom" ],
            MATCH_FLAG_CONSTANT_TIME,
        )).toBe(true);
        expect(evaluateLDAPAttributeOptionContextTyped(
            [ "lang-fr", "binary" ],
            [ "BINARY", "LANG-EN" ],
            MATCH_FLAG_CONSTANT_TIME,
        )).toBe(false);
        expect(evaluateLocaleContext(
            ObjectIdentifier.fromParts([ 1, 2, 3 ]),
            ObjectIdentifier.fromParts([ 1, 2, 3 ]),
            MATCH_FLAG_CONSTANT_TIME,
        )).toBe(true);
        expect(evaluateLocaleContext(
            "en_US",
            "en_GB",
            MATCH_FLAG_CONSTANT_TIME,
        )).toBe(false);
    });
});
