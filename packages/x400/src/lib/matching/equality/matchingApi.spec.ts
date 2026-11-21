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
    ExtensionAttribute,
    GlobalDomainIdentifier,
    MTSIdentifier,
    ORName,
    UniversalOrBMPString,
    _encode_ContentCorrelator,
    _encode_ContentIdentifier,
    _encode_MTSIdentifier,
    _encode_ORName,
    _encode_UniversalOrBMPString,
    teletex_common_name,
} from "@wildboar/x400/MTSAbstractService";
import {
    IPMIdentifier,
    ORDescriptor,
    _encode_IPMIdentifier,
    _encode_ORDescriptor,
} from "@wildboar/x400/IPMSInformationObjects";
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
import mSStringMatch from "./mSStringMatch.js";
import mSStringCaseSensitiveMatch from "./msStringCaseSensitiveMatch.js";
import mSSubstringsMatch from "./mSSubstringsMatch.js";
import mTSIdentifierMatch from "./mTSIdentifierMatch.js";
import oRDescriptorMatch from "./oRDescriptorMatch.js";
import oRDescriptorSubstringElementsMatch from "./oRDescriptorSubstringElementsMatch.js";
import oRNameMatch from "./oRNameMatch.js";
import valueCountMatch from "./valueCountMatch.js";
import mSStringOrderingMatch from "../ordering/mSStringOrderingMatch.js";
import mSSingleSubstringMatch from "../substring/mSSingleSubstringMatch.js";
import {
    MATCH_FLAG_ASSERTION_NORMALIZED,
    MATCH_FLAG_ORDERING_OR_EQUAL,
    MATCH_FLAG_USED_FOR_NAME,
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
});
