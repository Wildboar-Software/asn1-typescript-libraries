import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    ObjectIdentifier,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DER } from "@wildboar/asn1/functional";
import {
    Attribute,
    AttributeTypeAndValue,
    Attribute_valuesWithContext_Item,
} from "@wildboar/x500/InformationFramework";
import {
    BuiltInStandardAttributes,
    DLExpansion,
    ExtensionAttribute,
    GlobalDomainIdentifier,
    MTSIdentifier,
    ORAddress,
    ORName,
    PDSParameter,
    TeletexPersonalName,
    UniversalOrBMPString,
    _encode_ContentCorrelator,
    _encode_ContentIdentifier,
    _encode_DLExpansion,
    _encode_MTSIdentifier,
    _encode_ORAddress,
    _encode_ORName,
    _encode_PDSParameter,
    _encode_TeletexPersonalName,
    _encode_UniversalOrBMPString,
    street_address,
    teletex_common_name,
    teletex_personal_name,
} from "@wildboar/x400/MTSAbstractService";
import {
    IPMIdentifier,
    ORDescriptor,
    RecipientSpecifier,
    _encode_IPMIdentifier,
    _encode_ORDescriptor,
    _encode_RecipientSpecifier,
} from "@wildboar/x400/IPMSInformationObjects";
import {
    CirculationMember,
    _encode_CirculationMember,
} from "@wildboar/x400/IPMSHeadingExtensions";
import { AttributeTypeAndValue as DNAtav } from "@wildboar/dn";
import {
    _encode_MSString,
    _encode_SubstringAssertion,
} from "@wildboar/x400/MSMatchingRules";
import {
    _encode_IPMLocation,
} from "@wildboar/x400/IPMSMessageStoreAttributes";
import contentCorrelatorMatch from "./contentCorrelatorMatch.js";
import contentIdentifierMatch from "./contentIdentifierMatch.js";
import iPMIdentifierMatch from "./iPMIdentifierMatch.js";
import iPMLocationMatch from "./iPMLocationMatch.js";
import mSSingleSubstringListMatch from "./mSSingleSubstringListMatch.js";
import mSSingleSubstringListElementsMatch from "./mSSingleSubstringListElementsMatch.js";
import mSStringListMatch from "./mSStringListMatch.js";
import mSStringMatch from "./mSStringMatch.js";
import mSStringCaseSensitiveMatch from "./msStringCaseSensitiveMatch.js";
import mSSubstringsMatch from "./mSSubstringsMatch.js";
import mTSIdentifierMatch from "./mTSIdentifierMatch.js";
import oRAddressMatch from "./oRAddressMatch.js";
import oRAddressElementsMatch from "./oRAddressElementsMatch.js";
import oRAddressSubstringElementsMatch from "./oRAddressSubstringElementsMatch.js";
import oRDescriptorMatch from "./oRDescriptorMatch.js";
import oRDescriptorElementsMatch from "./oRDescriptorElementsMatch.js";
import oRDescriptorSubstringElementsMatch from "./oRDescriptorSubstringElementsMatch.js";
import oRDescriptorSingleElementMatch from "./oRDescriptorSingleElementMatch.js";
import oRNameMatch from "./oRNameMatch.js";
import oRNameExactMatch from "./oRNameExactMatch.js";
import oRNameElementsMatch from "./oRNameElementsMatch.js";
import oRNameSubstringElementsMatch from "./oRNameSubstringElementsMatch.js";
import recipientSpecifierMatch from "./recipientSpecifierMatch.js";
import recipientSpecifierElementsMatch from "./recipientSpecifierElementsMatch.js";
import recipientSpecifierSubstringElementsMatch from "./recipientSpecifierSubstringElementsMatch.js";
import circulationMemberMatch from "./circulationMemberMatch.js";
import circulationMemberElementsMatch from "./circulationMemberElementsMatch.js";
import circulationMemberSubstringElementsMatch from "./circulationMemberSubstringElementsMatch.js";
import circulationMemberCheckmarkMatch from "./circulationMemberCheckmarkMatch.js";
import capabilityMatch from "./capabilityMatch.js";
import { recursivelyNormalize } from "./orAddressUtilities.js";
import { extractStrings } from "./oRNameSingleElementMatch.js";
import {
    Capability,
    _encode_Capability,
} from "@wildboar/x400/MHSDirectoryObjectsAndAttributes";
import { SecurityLabel } from "@wildboar/x400/MTSAbstractService";
import redirectionOrDLExpansionMatch from "./redirectionOrDLExpansionMatch.js";
import redirectionOrDLExpansionElementsMatch from "./redirectionOrDLExpansionElementsMatch.js";
import redirectionOrDLExpansionSubstringElementsMatch from "./redirectionOrDLExpansionSubstringElementsMatch.js";
import valueCountMatch from "./valueCountMatch.js";
import mSStringOrderingMatch from "../ordering/mSStringOrderingMatch.js";
import mSSingleSubstringMatch from "../substring/mSSingleSubstringMatch.js";
import {
    MATCH_FLAG_ASSERTION_NORMALIZED,
    MATCH_FLAG_ORDERING_OR_EQUAL,
    MATCH_FLAG_USED_FOR_NAME,
    MATCH_FLAG_VALUE_NORMALIZED,
} from "@wildboar/x500";
import oRNameSingleElementMatch from "./oRNameSingleElementMatch.js";

const type_ = ObjectIdentifier.fromString("2.5.4.3");

function stored (value: ASN1Element): AttributeTypeAndValue {
    return new AttributeTypeAndValue(type_, value);
}

function ms (text: string): ASN1Element {
    return _encode_MSString({ printable: text }, DER);
}

describe("X.400 matchers decode the assertion", () => {
    test("contentIdentifierMatch uses the ContentIdentifier decoder", () => {
        const assertion = _encode_ContentIdentifier("Hello  World", DER);
        const value = _encode_ContentIdentifier("Hello World", DER);
        expect(contentIdentifierMatch(assertion, stored(value))).toBe(true);
        const otherCase = _encode_ContentIdentifier("hello world", DER);
        expect(contentIdentifierMatch(otherCase, stored(value))).toBe(false);
    });

    test("MATCH_FLAG_ASSERTION_NORMALIZED skips content-identifier whitespace normalization", () => {
        const assertion = _encode_ContentIdentifier("Hello  World", DER);
        const value = _encode_ContentIdentifier("Hello World", DER);
        expect(contentIdentifierMatch(
            assertion,
            stored(value),
            undefined,
            MATCH_FLAG_ASSERTION_NORMALIZED,
        )).toBe(false);
    });

    test("a malformed ContentIdentifier assertion throws", () => {
        const raw = new DERElement();
        raw.boolean = true;
        const value = _encode_ContentIdentifier("Hello World", DER);
        expect(() => contentIdentifierMatch(raw, stored(value))).toThrow();
    });

    test("mSStringMatch folds case after decoding MSString", () => {
        expect(mSStringMatch(ms("Hello"), stored(ms("hello")))).toBe(true);
        expect(mSStringMatch(ms("Hello"), stored(ms("world")))).toBe(false);
    });

    test("mSStringOrderingMatch decodes MSString and orders stored against presented", () => {
        expect(mSStringOrderingMatch(ms("b"), stored(ms("a")))).toBe(true);
        expect(mSStringOrderingMatch(ms("a"), stored(ms("a")), undefined, MATCH_FLAG_ORDERING_OR_EQUAL)).toBe(true);
    });

    test("mSStringOrderingMatch uses code points, not localeCompare", () => {
        // Uppercased U+00C9 É follows U+0046 F. localeCompare orders É before F.
        const eAcute = _encode_MSString({ bmp: "é" }, DER);
        const f = _encode_MSString({ bmp: "f" }, DER);
        expect(mSStringOrderingMatch(eAcute, stored(f))).toBe(true);
        expect(mSStringOrderingMatch(f, stored(eAcute))).toBe(false);
    });

    test("name matching is refused when the assertion syntax differs from the value syntax", () => {
        expect(oRNameSingleElementMatch(
            ms("smith"),
            stored(ms("smith")),
            undefined,
            MATCH_FLAG_USED_FOR_NAME,
        )).toBeUndefined();
    });

    test("mSSingleSubstringMatch treats an encoded MSString as any", () => {
        expect(mSSingleSubstringMatch(ms("ell"), stored(ms("Hello")))).toBe(true);
        expect(mSSingleSubstringMatch(ms("xyz"), stored(ms("Hello")))).toBe(false);
    });

    test("mSString*, mSStringOrderingMatch, and mSSubstringsMatch decode UniversalOrBMPString (e.g. ExtendedSubject)", () => {
        const storedExtendedSubject = _encode_UniversalOrBMPString(
            new UniversalOrBMPString({ two_octets: "Quarterly  Budget — Café" }, "en US"),
            DER,
        );
        const assertedUnivOrBmp = _encode_UniversalOrBMPString(
            new UniversalOrBMPString({ four_octets: "quarterly budget — café" }, "fr"),
            DER,
        );

        // MSString assertion vs UniversalOrBMPString stored value
        expect(
            mSStringMatch(
                _encode_MSString({ bmp: "quarterly budget — café" }, DER),
                stored(storedExtendedSubject),
            ),
        ).toBe(true);
        // Generic FilterItem.equality (UniversalOrBMPString assertion vs UniversalOrBMPString stored value)
        expect(mSStringMatch(assertedUnivOrBmp, stored(storedExtendedSubject))).toBe(true);

        // Case-sensitive variant
        expect(
            mSStringCaseSensitiveMatch(
                _encode_MSString({ bmp: "Quarterly Budget — Café" }, DER),
                stored(storedExtendedSubject),
            ),
        ).toBe(true);
        expect(
            mSStringCaseSensitiveMatch(assertedUnivOrBmp, stored(storedExtendedSubject)),
        ).toBe(false);

        // Ordering
        expect(
            mSStringOrderingMatch(
                _encode_MSString({ printable: "Z" }, DER),
                stored(storedExtendedSubject),
            ),
        ).toBe(true);

        // SubstringAssertion and FilterItem.substrings against UniversalOrBMPString stored value
        const subAssertion = _encode_SubstringAssertion(
            [
                { initial: { printable: "quarterly" } },
                { final: { bmp: "café" } },
            ],
            DER,
        );
        expect(mSSubstringsMatch(subAssertion, stored(storedExtendedSubject))).toBe(true);
        expect(
            mSSubstringsMatch(
                [
                    {
                        any_: _encode_UniversalOrBMPString(
                            new UniversalOrBMPString({ two_octets: "budget" }),
                            DER,
                        ),
                    },
                ],
                stored(storedExtendedSubject),
            ),
        ).toBe(true);
        expect(
            mSSingleSubstringMatch(
                _encode_MSString({ bmp: "café" }, DER),
                stored(storedExtendedSubject),
            ),
        ).toBe(true);
    });

    test("whitespace-only strings normalize to a single significant space per X.413 §12.2 / X.402 §18.3.1", () => {
        // oRDescriptorSubstringElementsMatch: space-only assertion must NOT match spaceless string
        const spaceDesc = _encode_ORDescriptor(new ORDescriptor(undefined, undefined, "   "), DER);
        const spacelessDesc = _encode_ORDescriptor(new ORDescriptor(undefined, undefined, "18005551212"), DER);
        const spacedDesc = _encode_ORDescriptor(new ORDescriptor(undefined, undefined, "1 800 555 1212"), DER);
        expect(oRDescriptorSubstringElementsMatch(spaceDesc, stored(spacelessDesc))).toBe(false);
        expect(oRDescriptorSubstringElementsMatch(spaceDesc, stored(spacedDesc))).toBe(true);

        // mSSingleSubstringListMatch: space-only element must NOT match spaceless element
        const encodeList = $._encodeSequenceOf<ASN1Element>(() => (el) => el, DER);
        const spaceList = encodeList([ms("   ")], DER);
        const spacelessList = encodeList([ms("Hello")], DER);
        const spacedList = encodeList([ms("Hello World")], DER);
        expect(mSSingleSubstringListMatch(spaceList, stored(spacelessList))).toBe(false);
        expect(mSSingleSubstringListMatch(spaceList, stored(spacedList))).toBe(true);

        // mTSIdentifierMatch: single-space ADMD (" ") must remain distinct from empty ADMD ("")
        const mtsSpaceAdmd = _encode_MTSIdentifier(
            new MTSIdentifier(
                new GlobalDomainIdentifier({ iso_3166_alpha2_code: "US" }, { numeric: " " }),
                "msg-1",
            ),
            DER,
        );
        const mtsEmptyAdmd = _encode_MTSIdentifier(
            new MTSIdentifier(
                new GlobalDomainIdentifier({ iso_3166_alpha2_code: "US" }, { numeric: "" }),
                "msg-1",
            ),
            DER,
        );
        expect(mTSIdentifierMatch(mtsSpaceAdmd, stored(mtsEmptyAdmd))).toBe(false);
        expect(mTSIdentifierMatch(mtsSpaceAdmd, stored(mtsSpaceAdmd))).toBe(true);

        // contentCorrelatorMatch & contentIdentifierMatch: "   " == " ", and != ""
        const ccSpaces = _encode_ContentCorrelator({ ia5text: "   " }, DER);
        const ccSingleSpace = _encode_ContentCorrelator({ ia5text: " " }, DER);
        const ccEmpty = _encode_ContentCorrelator({ ia5text: "" }, DER);
        expect(contentCorrelatorMatch(ccSpaces, stored(ccSingleSpace))).toBe(true);
        expect(contentCorrelatorMatch(ccSpaces, stored(ccEmpty))).toBe(false);

        const ciSpaces = _encode_ContentIdentifier("   ", DER);
        const ciSingleSpace = _encode_ContentIdentifier(" ", DER);
        expect(contentIdentifierMatch(ciSpaces, stored(ciSingleSpace))).toBe(true);
    });

    test("cross-repertoire NFC normalization and T.61 underline/control stripping (X.402 §18.4, X.413 §12.2)", () => {
        // T.61 underlined + accented "Café" with C0/C1 controls: 0xCC 'C', 0xCC 'a', 0x07, 0xCC 'f', 0xCC 0xC2 'e'
        const t61UnderlinedCafe = _encode_MSString(
            { teletex: new Uint8Array([0xcc, 0x43, 0xcc, 0x61, 0x07, 0xcc, 0x66, 0xcc, 0xc2, 0x65]) },
            DER,
        );
        const bmpCafe = _encode_MSString({ bmp: "Café" }, DER);
        const bmpCafeUpper = _encode_MSString({ bmp: "CAFÉ" }, DER);
        expect(mSStringMatch(t61UnderlinedCafe, stored(bmpCafeUpper))).toBe(true);
        expect(mSStringCaseSensitiveMatch(t61UnderlinedCafe, stored(bmpCafe))).toBe(true);

        // Teletex e-acute (0xC2 0x65 -> decomposed "e\u0301") orders identically to BMP "é" (after "f")
        const t61EAcute = _encode_MSString({ teletex: new Uint8Array([0xc2, 0x65]) }, DER);
        const f = _encode_MSString({ printable: "f" }, DER);
        expect(mSStringOrderingMatch(t61EAcute, stored(f))).toBe(true);
        expect(mSStringOrderingMatch(f, stored(t61EAcute))).toBe(false);

        // Reordered combining marks (X.402 §18.4(j)) and post-uppercase NFC ("\u0390" vs "\u03AA\u0301")
        const combOrder1 = _encode_MSString({ universal: "o\u0323\u0302" }, DER);
        const combOrder2 = _encode_MSString({ universal: "o\u0302\u0323" }, DER);
        expect(mSStringMatch(combOrder1, stored(combOrder2))).toBe(true);
        expect(mSStringCaseSensitiveMatch(combOrder1, stored(combOrder2))).toBe(true);
        expect(
            mSStringMatch(
                _encode_MSString({ bmp: "\u0390" }, DER),
                stored(_encode_MSString({ bmp: "\u03AA\u0301" }, DER)),
            ),
        ).toBe(true);

        // ORDescriptor free-form-name with T.61 underline + accent
        const ordUnderlined = _encode_ORDescriptor(
            new ORDescriptor(undefined, new Uint8Array([0xcc, 0xc2, 0x65])),
            DER,
        );
        const ordPlain = _encode_ORDescriptor(
            new ORDescriptor(undefined, new Uint8Array([0xc2, 0x45])),
            DER,
        );
        expect(oRDescriptorMatch(ordUnderlined, stored(ordPlain))).toBe(true);

        // Underline-only substring assertion reduces to empty and must throw
        const encodeList = $._encodeSequenceOf<ASN1Element>(() => (el) => el, DER);
        const underlineOnlyList = encodeList(
            [_encode_MSString({ teletex: new Uint8Array([0xcc]) }, DER)],
            DER,
        );
        const validList = encodeList([ms("Hello")], DER);
        expect(() => mSSingleSubstringListMatch(underlineOnlyList, stored(validList))).toThrow();
        expect(() => mSSingleSubstringListElementsMatch(underlineOnlyList, stored(validList))).toThrow();
    });

    test("mTSIdentifierMatch trims printable domains, case-folds/maps country-name, and equates numeric/printable domain spaces (X.413 §12.4.13)", () => {
        const asserted = _encode_MTSIdentifier(
            new MTSIdentifier(
                new GlobalDomainIdentifier(
                    { iso_3166_alpha2_code: " us " },
                    { printable: "  123  45  " },
                    { printable: "  Acme   Corp " },
                ),
                "  msg   001 ",
            ),
            DER,
        );
        const storedEquiv = _encode_MTSIdentifier(
            new MTSIdentifier(
                new GlobalDomainIdentifier(
                    { x121_dcc_code: " 31 0 " },
                    { numeric: "123 45" },
                    { printable: "ACME CORP" },
                ),
                "MSG 001",
            ),
            DER,
        );
        const storedNumericPrmdA = _encode_MTSIdentifier(
            new MTSIdentifier(
                new GlobalDomainIdentifier(
                    { iso_3166_alpha2_code: "GB" },
                    { printable: "  BT  " },
                    { numeric: "98 76" },
                ),
                "id-1",
            ),
            DER,
        );
        const storedNumericPrmdB = _encode_MTSIdentifier(
            new MTSIdentifier(
                new GlobalDomainIdentifier(
                    { x121_dcc_code: "234" },
                    { printable: "bt" },
                    { printable: " 98  76 " },
                ),
                "ID-1",
            ),
            DER,
        );
        const storedDifferentLocal = _encode_MTSIdentifier(
            new MTSIdentifier(
                new GlobalDomainIdentifier(
                    { iso_3166_alpha2_code: "US" },
                    { numeric: "12345" },
                    { printable: "ACME CORP" },
                ),
                "MSG 002",
            ),
            DER,
        );

        expect(mTSIdentifierMatch(asserted, stored(storedEquiv))).toBe(true);
        expect(mTSIdentifierMatch(storedNumericPrmdA, stored(storedNumericPrmdB))).toBe(true);
        expect(mTSIdentifierMatch(asserted, stored(storedDifferentLocal))).toBe(false);

        const emptyCountry = _encode_MTSIdentifier(
            new MTSIdentifier(
                new GlobalDomainIdentifier({ iso_3166_alpha2_code: "  " }, { printable: "ATT" }),
                "id-1",
            ),
            DER,
        );
        expect(() => mTSIdentifierMatch(emptyCountry, stored(storedEquiv))).toThrow();
        expect(mTSIdentifierMatch(storedEquiv, stored(emptyCountry))).toBeUndefined();
    });

    test("iPMLocationMatch returns false for absent and undefined for unrecognized CHOICE extension (Issue 2.5)", () => {
        const snAssertion = $._encodeInteger(42, DER);
        const locStored = _encode_IPMLocation({ stored: [10, 42] }, DER);
        const locAbsent = _encode_IPMLocation({ absent: null }, DER);
        const locFutureExt = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.primitive,
            99,
            new Uint8Array([0x01]),
        );

        expect(iPMLocationMatch(snAssertion, stored(locStored))).toBe(true);
        expect(iPMLocationMatch($._encodeInteger(99, DER), stored(locStored))).toBe(false);
        expect(iPMLocationMatch(snAssertion, stored(locAbsent))).toBe(false);
        expect(iPMLocationMatch(snAssertion, stored(locFutureExt))).toBeUndefined();
    });

    test("valueCountMatch compares total attribute value count and rejects invalid assertions (X.413 §12.3)", () => {
        const v1 = ms("group-a");
        const v2 = ms("group-b");
        const v3 = ms("group-c");
        const multiAttr = new Attribute(
            type_,
            [v1, v2],
            [new Attribute_valuesWithContext_Item(v3, [])],
        );

        expect(valueCountMatch($._encodeInteger(3, DER), multiAttr)).toBe(true);
        expect(valueCountMatch($._encodeInteger(2, DER), multiAttr)).toBe(false);
        expect(valueCountMatch($._encodeInteger(4, DER), multiAttr)).toBe(false);

        // Single AttributeTypeAndValue has count 1
        expect(valueCountMatch($._encodeInteger(1, DER), stored(v1))).toBe(true);
        expect(valueCountMatch($._encodeInteger(2, DER), stored(v1))).toBe(false);

        // matchedValues out-parameter population
        const outValuesOnly = new Attribute(type_, []);
        expect(valueCountMatch($._encodeInteger(3, DER), multiAttr, undefined, 0, outValuesOnly)).toBe(true);
        expect(outValuesOnly.values).toHaveLength(3);

        const outWithContext = new Attribute(type_, [], []);
        expect(valueCountMatch($._encodeInteger(3, DER), multiAttr, undefined, 0, outWithContext)).toBe(true);
        expect(outWithContext.values).toHaveLength(2);
        expect(outWithContext.valuesWithContext).toHaveLength(1);

        // Name matching is refused; assertions < 1 or non-INTEGER throw
        expect(valueCountMatch($._encodeInteger(1, DER), stored(v1), undefined, MATCH_FLAG_USED_FOR_NAME)).toBeUndefined();
        expect(() => valueCountMatch($._encodeInteger(0, DER), multiAttr)).toThrow();
        expect(() => valueCountMatch($._encodeInteger(-1, DER), multiAttr)).toThrow();
        expect(() => valueCountMatch(ms("3"), multiAttr)).toThrow();
    });

    test("up-front assertion preparation throws on malformed T.61 accents and honors MATCH_FLAG_ASSERTION_NORMALIZED (Issues 3.1 & 3.2)", () => {
        // Two consecutive T.61 accent bytes (0xC1 0xC1) must throw in assertionDecoder, not return undefined
        const badT61Desc = _encode_ORDescriptor(
            new ORDescriptor(undefined, new Uint8Array([0xc1, 0xc1, 0x61])),
            DER,
        );
        const goodDesc = _encode_ORDescriptor(
            new ORDescriptor(undefined, new Uint8Array([0x61])),
            DER,
        );
        expect(() => oRDescriptorMatch(badT61Desc, stored(goodDesc))).toThrow();

        // contentCorrelatorMatch & iPMIdentifierMatch respect MATCH_FLAG_ASSERTION_NORMALIZED
        const ccUnnormalized = _encode_ContentCorrelator({ ia5text: "  ref  1 " }, DER);
        const ccClean = _encode_ContentCorrelator({ ia5text: "ref 1" }, DER);
        expect(contentCorrelatorMatch(ccUnnormalized, stored(ccClean))).toBe(true);
        expect(
            contentCorrelatorMatch(ccUnnormalized, stored(ccClean), undefined, MATCH_FLAG_ASSERTION_NORMALIZED),
        ).toBe(false);

        const ipmUnnormalized = _encode_IPMIdentifier(new IPMIdentifier(undefined, "  id  1 "), DER);
        const ipmClean = _encode_IPMIdentifier(new IPMIdentifier(undefined, "ID 1"), DER);
        expect(iPMIdentifierMatch(ipmUnnormalized, stored(ipmClean))).toBe(true);
        expect(
            iPMIdentifierMatch(ipmUnnormalized, stored(ipmClean), undefined, MATCH_FLAG_ASSERTION_NORMALIZED),
        ).toBe(false);
    });

    test("honors MATCH_FLAG_VALUE_NORMALIZED, MATCH_FLAG_ASSERTION_NORMALIZED, and MATCH_FLAG_USED_FOR_NAME (Issue 4.2)", () => {
        expect(mSStringMatch(ms("HELLO"), stored(ms("hello")), undefined, MATCH_FLAG_VALUE_NORMALIZED)).toBe(false);
        expect(mSStringMatch(ms("HELLO"), stored(ms("HELLO")), undefined, MATCH_FLAG_VALUE_NORMALIZED)).toBe(true);

        const addrLower = _encode_ORAddress(
            new ORAddress(new BuiltInStandardAttributes({ iso_3166_alpha2_code: "US" }, undefined, undefined, undefined, undefined, "acme")),
            DER,
        );
        const addrUpper = _encode_ORAddress(
            new ORAddress(new BuiltInStandardAttributes({ iso_3166_alpha2_code: "US" }, undefined, undefined, undefined, undefined, "ACME")),
            DER,
        );
        expect(oRAddressMatch(addrLower, stored(addrUpper), undefined, MATCH_FLAG_ASSERTION_NORMALIZED)).toBe(false);
        expect(oRAddressMatch(addrUpper, stored(addrLower), undefined, MATCH_FLAG_VALUE_NORMALIZED)).toBe(false);
        expect(
            oRAddressMatch(addrUpper, stored(addrUpper), undefined, MATCH_FLAG_ASSERTION_NORMALIZED | MATCH_FLAG_VALUE_NORMALIZED),
        ).toBe(true);

        const nameLower = _encode_ORName(
            new ORName(new BuiltInStandardAttributes({ iso_3166_alpha2_code: "US" }, undefined, undefined, undefined, undefined, "acme")),
            DER,
        );
        const nameUpper = _encode_ORName(
            new ORName(new BuiltInStandardAttributes({ iso_3166_alpha2_code: "US" }, undefined, undefined, undefined, undefined, "ACME")),
            DER,
        );
        expect(oRNameMatch(nameLower, stored(nameUpper), undefined, MATCH_FLAG_ASSERTION_NORMALIZED)).toBe(false);
        expect(oRNameMatch(nameUpper, stored(nameLower), undefined, MATCH_FLAG_VALUE_NORMALIZED)).toBe(false);
        expect(
            oRNameMatch(nameUpper, stored(nameUpper), undefined, MATCH_FLAG_ASSERTION_NORMALIZED | MATCH_FLAG_VALUE_NORMALIZED),
        ).toBe(true);

        const encodeList = $._encodeSequenceOf<ASN1Element>(() => (el) => el, DER);
        const singleList = encodeList([ms("A")], DER);
        expect(mSStringMatch(ms("A"), stored(ms("a")), undefined, MATCH_FLAG_USED_FOR_NAME)).toBe(true);
        expect(mSStringCaseSensitiveMatch(ms("A"), stored(ms("A")), undefined, MATCH_FLAG_USED_FOR_NAME)).toBe(true);
        expect(mSStringListMatch(singleList, stored(singleList), undefined, MATCH_FLAG_USED_FOR_NAME)).toBe(true);
        expect(mSSingleSubstringListMatch(singleList, stored(singleList), undefined, MATCH_FLAG_USED_FOR_NAME)).toBeUndefined();
    });

    test("handles 200 KB TeletexString inputs without stack overflow and rejects malformed T.61 accents across all ORName/ORDescriptor matchers (Issue 3.1)", () => {
        // 200,000 octets exceeds V8's ~100–130 KB call-stack argument spread limit.
        const largeLower = new Uint8Array(200_000).fill(0x61); // 'a' * 200,000
        const largeUpper = new Uint8Array(200_000).fill(0x41); // 'A' * 200,000
        const msLargeLower = _encode_MSString({ teletex: largeLower }, DER);
        const msLargeUpper = _encode_MSString({ teletex: largeUpper }, DER);
        expect(mSStringMatch(msLargeLower, stored(msLargeUpper))).toBe(true);

        const largeDescLower = _encode_ORDescriptor(new ORDescriptor(undefined, largeLower), DER);
        const largeDescUpper = _encode_ORDescriptor(new ORDescriptor(undefined, largeUpper), DER);
        expect(oRDescriptorMatch(largeDescLower, stored(largeDescUpper))).toBe(true);
        expect(oRDescriptorSingleElementMatch(msLargeLower, stored(largeDescUpper))).toBe(true);

        const largeORName = _encode_ORName(
            new ORName(
                new BuiltInStandardAttributes({ iso_3166_alpha2_code: "US" }),
                undefined,
                [
                    new ExtensionAttribute(
                        Number(teletex_common_name["&id"]!),
                        $._encodeTeletexString(largeLower, DER),
                    ),
                ],
            ),
            DER,
        );
        expect(oRNameMatch(largeORName, stored(largeORName))).toBe(true);

        // Underlined accented T.61 (`0xCC 0xC2 0x65` -> "É") in TeletexPersonalName & PDSParameter
        const underlinedEAcute = new Uint8Array([0xcc, 0xc2, 0x65]);
        const plainEAcute = new Uint8Array([0xc2, 0x45]);
        const addrUnderlined = _encode_ORAddress(
            new ORAddress(
                new BuiltInStandardAttributes({ iso_3166_alpha2_code: "US" }),
                undefined,
                [
                    new ExtensionAttribute(
                        Number(teletex_personal_name["&id"]!),
                        _encode_TeletexPersonalName(new TeletexPersonalName(underlinedEAcute), DER),
                    ),
                    new ExtensionAttribute(
                        Number(street_address["&id"]!),
                        _encode_PDSParameter(new PDSParameter(undefined, underlinedEAcute), DER),
                    ),
                ],
            ),
            DER,
        );
        const addrPlain = _encode_ORAddress(
            new ORAddress(
                new BuiltInStandardAttributes({ iso_3166_alpha2_code: "US" }),
                undefined,
                [
                    new ExtensionAttribute(
                        Number(teletex_personal_name["&id"]!),
                        _encode_TeletexPersonalName(new TeletexPersonalName(plainEAcute), DER),
                    ),
                    new ExtensionAttribute(
                        Number(street_address["&id"]!),
                        _encode_PDSParameter(new PDSParameter(undefined, plainEAcute), DER),
                    ),
                ],
            ),
            DER,
        );
        expect(oRAddressMatch(addrUnderlined, stored(addrPlain))).toBe(true);

        // Malformed T.61 double accent (`0xC1 0xC1 0x61`) in assertions must throw up-front,
        // even when compared against a DN-only stored value that would otherwise skip ORAddress comparison.
        const badT61 = new Uint8Array([0xc1, 0xc1, 0x61]);
        const dnOnlyStoredValue = _encode_ORName(
            new ORName(new BuiltInStandardAttributes(), undefined, undefined, { rdnSequence: [] }),
            DER,
        );
        const badORAddressObj = new ORAddress(
            new BuiltInStandardAttributes({ iso_3166_alpha2_code: "US" }),
            undefined,
            [
                new ExtensionAttribute(
                    Number(teletex_common_name["&id"]!),
                    $._encodeTeletexString(badT61, DER),
                ),
            ],
        );
        const badORAddressEl = _encode_ORAddress(badORAddressObj, DER);
        for (const matcher of [oRAddressMatch, oRAddressElementsMatch, oRAddressSubstringElementsMatch]) {
            expect(() => matcher(badORAddressEl, stored(addrPlain))).toThrow();
        }

        const badORNameObj = new ORName(
            badORAddressObj.built_in_standard_attributes,
            undefined,
            badORAddressObj.extension_attributes,
        );
        const badORNameEl = _encode_ORName(badORNameObj, DER);

        const badDNVal = $._encodeTeletexString(badT61, DER);
        const badDNORNameEl = _encode_ORName(
            new ORName(new BuiltInStandardAttributes(), undefined, undefined, {
                rdnSequence: [[new DNAtav(type_, badDNVal)]],
            }),
            DER,
        );

        for (const matcher of [
            oRNameMatch,
            oRNameExactMatch,
            oRNameElementsMatch,
            oRNameSubstringElementsMatch,
        ]) {
            expect(() => matcher(badORNameEl, stored(dnOnlyStoredValue))).toThrow();
            expect(() => matcher(badDNORNameEl, stored(dnOnlyStoredValue))).toThrow();
        }

        const goodDLExpansion = _encode_DLExpansion(
            new DLExpansion(
                new ORName(new BuiltInStandardAttributes({ iso_3166_alpha2_code: "US" })),
                new Date("2026-01-01T00:00:00Z"),
            ),
            DER,
        );
        for (const matcher of [
            redirectionOrDLExpansionMatch,
            redirectionOrDLExpansionElementsMatch,
            redirectionOrDLExpansionSubstringElementsMatch,
        ]) {
            expect(() => matcher(badORNameEl, stored(goodDLExpansion))).toThrow();
        }

        const badIPMId = _encode_IPMIdentifier(new IPMIdentifier(badORNameObj, "id-1"), DER);
        const goodIPMId = _encode_IPMIdentifier(new IPMIdentifier(undefined, "id-1"), DER);
        expect(() => iPMIdentifierMatch(badIPMId, stored(goodIPMId))).toThrow();

        const badFormalDescObj = new ORDescriptor(badORNameObj);
        const badFormalDescEl = _encode_ORDescriptor(badFormalDescObj, DER);
        const goodDescEl = _encode_ORDescriptor(new ORDescriptor(undefined, new Uint8Array([0x61])), DER);
        for (const matcher of [
            oRDescriptorMatch,
            oRDescriptorElementsMatch,
            oRDescriptorSubstringElementsMatch,
        ]) {
            expect(() => matcher(badFormalDescEl, stored(goodDescEl))).toThrow();
        }

        const badRS = _encode_RecipientSpecifier(new RecipientSpecifier(badFormalDescObj), DER);
        const goodRS = _encode_RecipientSpecifier(
            new RecipientSpecifier(new ORDescriptor(undefined, new Uint8Array([0x61]))),
            DER,
        );
        for (const matcher of [
            recipientSpecifierMatch,
            recipientSpecifierElementsMatch,
            recipientSpecifierSubstringElementsMatch,
        ]) {
            expect(() => matcher(badRS, stored(goodRS))).toThrow();
        }

        const badCM = _encode_CirculationMember(
            new CirculationMember(new RecipientSpecifier(badFormalDescObj)),
            DER,
        );
        const goodCM = _encode_CirculationMember(
            new CirculationMember(
                new RecipientSpecifier(
                    new ORDescriptor(new ORName(new BuiltInStandardAttributes({ iso_3166_alpha2_code: "US" }))),
                ),
            ),
            DER,
        );
        for (const matcher of [
            circulationMemberMatch,
            circulationMemberElementsMatch,
            circulationMemberSubstringElementsMatch,
        ]) {
            expect(() => matcher(badCM, stored(goodCM))).toThrow();
        }
    });

    test("bounds SET element scans, preserves typed arrays, and prepares assertions once across multi-valued attributes (Issue 3.2)", () => {
        // Typed arrays (e.g. PresentationAddress selectors/nAddresses) are preserved without per-byte expansion
        const bytes = new Uint8Array([1, 2, 3, 4, 5]);
        const normalizedObj = recursivelyNormalize({ label: "  hello   world ", raw: bytes });
        expect(normalizedObj.label).toBe("HELLO WORLD");
        expect(normalizedObj.raw).toBe(bytes);
        expect([...extractStrings({ label: "ok", raw: bytes })]).toEqual(["ok"]);

        // Oversized SET payloads (> DoS cap) and bare `{ NULL }` SETs return undefined
        const validCM = _encode_CirculationMember(
            new CirculationMember(
                new RecipientSpecifier(
                    new ORDescriptor(new ORName(new BuiltInStandardAttributes({ iso_3166_alpha2_code: "US" }))),
                ),
            ),
            DER,
        );
        const validRS = _encode_RecipientSpecifier(
            new RecipientSpecifier(new ORDescriptor(undefined, new Uint8Array([0x41]))),
            DER,
        );
        const dummyElements = Array.from({ length: 120 }, () => $._encodeNull(null, DER));
        const oversizedSet = DERElement.fromSet(dummyElements);
        expect(recipientSpecifierMatch(validRS, stored(oversizedSet))).toBeUndefined();
        expect(circulationMemberMatch(validCM, stored(oversizedSet))).toBeUndefined();
        expect(circulationMemberCheckmarkMatch(validCM, stored(oversizedSet))).toBeUndefined();

        // `SET { NULL }` missing required `circulation-recipient` returns undefined, not true
        const bareNullSet = DERElement.fromSet([$._encodeNull(null, DER)]);
        expect(circulationMemberCheckmarkMatch(validCM, stored(bareNullSet))).toBeUndefined();

        // Sequence tag instead of SET tag returns undefined
        const wrongTagSeq = DERElement.fromSequence([$._encodeNull(null, DER)]);
        expect(recipientSpecifierMatch(validRS, stored(wrongTagSeq))).toBeUndefined();
        expect(circulationMemberMatch(validCM, stored(wrongTagSeq))).toBeUndefined();
        expect(circulationMemberCheckmarkMatch(validCM, stored(wrongTagSeq))).toBeUndefined();

        // `recipientSpecifier*`, `circulationMember*`, and `capabilityMatch` prepare assertions once and respect MATCH_FLAG_ASSERTION_NORMALIZED
        const rsLower = _encode_RecipientSpecifier(
            new RecipientSpecifier(new ORDescriptor(undefined, new Uint8Array([0x61, 0x62]))),
            DER,
        );
        const rsUpper = _encode_RecipientSpecifier(
            new RecipientSpecifier(new ORDescriptor(undefined, new Uint8Array([0x41, 0x42]))),
            DER,
        );
        expect(recipientSpecifierMatch(rsLower, stored(rsUpper))).toBe(true);
        expect(recipientSpecifierMatch(rsLower, stored(rsUpper), undefined, MATCH_FLAG_ASSERTION_NORMALIZED)).toBe(false);

        const capLower = _encode_Capability(
            new Capability(undefined, undefined, undefined, [new SecurityLabel(undefined, undefined, "  secret ")]),
            DER,
        );
        const capUpper = _encode_Capability(
            new Capability(undefined, undefined, undefined, [new SecurityLabel(undefined, undefined, "SECRET")]),
            DER,
        );
        const multiCapAttr = new Attribute(type_, [capLower, capUpper]);
        expect(capabilityMatch(capLower, multiCapAttr)).toBe(true);
        expect(capabilityMatch(capUpper, multiCapAttr, undefined, MATCH_FLAG_ASSERTION_NORMALIZED)).toBe(true);
        expect(capabilityMatch(capLower, stored(capUpper), undefined, MATCH_FLAG_ASSERTION_NORMALIZED)).toBe(false);
    });
});
