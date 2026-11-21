import { ASN1Element, DERElement, ObjectIdentifier } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DER } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue } from "@wildboar/x500/InformationFramework";
import {
    GlobalDomainIdentifier,
    MTSIdentifier,
    UniversalOrBMPString,
    _encode_ContentCorrelator,
    _encode_ContentIdentifier,
    _encode_MTSIdentifier,
    _encode_UniversalOrBMPString,
} from "@wildboar/x400/MTSAbstractService";
import {
    ORDescriptor,
    _encode_ORDescriptor,
} from "@wildboar/x400/IPMSInformationObjects";
import {
    _encode_MSString,
    _encode_SubstringAssertion,
} from "@wildboar/x400/MSMatchingRules";
import contentCorrelatorMatch from "./contentCorrelatorMatch.js";
import contentIdentifierMatch from "./contentIdentifierMatch.js";
import mSSingleSubstringListMatch from "./mSSingleSubstringListMatch.js";
import mSStringMatch from "./mSStringMatch.js";
import mSStringCaseSensitiveMatch from "./msStringCaseSensitiveMatch.js";
import mSSubstringsMatch from "./mSSubstringsMatch.js";
import mTSIdentifierMatch from "./mTSIdentifierMatch.js";
import oRDescriptorSubstringElementsMatch from "./oRDescriptorSubstringElementsMatch.js";
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
});
