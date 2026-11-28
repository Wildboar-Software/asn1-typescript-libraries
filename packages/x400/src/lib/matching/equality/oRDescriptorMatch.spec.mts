import { Buffer } from "node:buffer";
import {
    ASN1Construction,
    type ASN1Element,
    ASN1TagClass,
    DERElement,
    ObjectIdentifier,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DER } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue as DNAtav, type Name } from "@wildboar/dn";
import {
    MATCH_FLAG_ASSERTION_NORMALIZED,
    MATCH_FLAG_VALUE_NORMALIZED,
} from "@wildboar/x500";
import { AttributeTypeAndValue } from "@wildboar/x500/InformationFramework";
import { caseIgnoreMatch } from "@wildboar/x500/matching/equality";
import {
    BuiltInStandardAttributes,
    ExtensionAttribute,
    ORName,
    PersonalName,
    _encode_ORName,
} from "@wildboar/x400/MTSAbstractService";
import {
    ORDescriptor,
    RecipientSpecifier,
    _encode_ORDescriptor,
    _encode_RecipientSpecifier,
} from "@wildboar/x400/IPMSInformationObjects";
import {
    CirculationMember,
    _encode_CirculationMember,
} from "@wildboar/x400/IPMSHeadingExtensions";
import oRNameMatch from "./oRNameMatch.mjs";
import oRNameExactMatch from "./oRNameExactMatch.mjs";
import oRDescriptorMatch from "./oRDescriptorMatch.mjs";
import oRDescriptorElementsMatch from "./oRDescriptorElementsMatch.mjs";
import oRDescriptorSubstringElementsMatch from "./oRDescriptorSubstringElementsMatch.mjs";
import recipientSpecifierMatch from "./recipientSpecifierMatch.mjs";
import recipientSpecifierElementsMatch from "./recipientSpecifierElementsMatch.mjs";
import recipientSpecifierSubstringElementsMatch from "./recipientSpecifierSubstringElementsMatch.mjs";
import circulationMemberMatch from "./circulationMemberMatch.mjs";
import circulationMemberElementsMatch from "./circulationMemberElementsMatch.mjs";
import circulationMemberSubstringElementsMatch from "./circulationMemberSubstringElementsMatch.mjs";
import circulationMemberCheckmarkMatch from "./circulationMemberCheckmarkMatch.mjs";

const testAttrType = ObjectIdentifier.fromString("2.6.1.2.1");
const id_at_commonName = ObjectIdentifier.fromString("2.5.4.3");

function stored(el: ASN1Element): AttributeTypeAndValue {
    return new AttributeTypeAndValue(testAttrType, el);
}

describe("oRDescriptorMatch, oRDescriptorElementsMatch, and oRDescriptorSubstringElementsMatch (ITU-T Rec. X.420 §§19.7.3–19.7.5)", () => {
    const aliceFormal = new ORName(
        new BuiltInStandardAttributes(
            { iso_3166_alpha2_code: "US" },
            undefined,
            undefined,
            undefined,
            undefined,
            "Acme Corp",
            undefined,
            new PersonalName("Smith", "Alice"),
        ),
    );
    const bobFormal = new ORName(
        new BuiltInStandardAttributes(
            { iso_3166_alpha2_code: "US" },
            undefined,
            undefined,
            undefined,
            undefined,
            "Acme Corp",
            undefined,
            new PersonalName("Jones", "Bob"),
        ),
    );

    test("evaluates telephone-number (condition c) when free-form-name (condition b) does not match and formal-name is absent on at least one side", () => {
        const asserted = _encode_ORDescriptor(
            new ORDescriptor(undefined, Buffer.from("Alice", "ascii"), "+1 555 0199"),
            DER,
        );
        const storedSamePhoneDiffName = _encode_ORDescriptor(
            new ORDescriptor(bobFormal, Buffer.from("Robert", "ascii"), "+1  555  0199"),
            DER,
        );
        const storedDiffBoth = _encode_ORDescriptor(
            new ORDescriptor(bobFormal, Buffer.from("Robert", "ascii"), "+1 555 9999"),
            DER,
        );

        expect(oRDescriptorMatch(asserted, stored(storedSamePhoneDiffName))).toBe(true);
        expect(oRDescriptorElementsMatch(asserted, stored(storedSamePhoneDiffName))).toBe(true);
        expect(oRDescriptorMatch(asserted, stored(storedDiffBoth))).toBe(false);

        const subAsserted = _encode_ORDescriptor(
            new ORDescriptor(undefined, Buffer.from("Alice", "ascii"), "0199"),
            DER,
        );
        expect(oRDescriptorSubstringElementsMatch(subAsserted, stored(storedSamePhoneDiffName))).toBe(true);
        expect(oRDescriptorSubstringElementsMatch(subAsserted, stored(storedDiffBoth))).toBe(false);
    });

    test("does NOT fall back to free-form-name or telephone-number when formal-name is present in BOTH values", () => {
        const assertedWithFormal = _encode_ORDescriptor(
            new ORDescriptor(aliceFormal, Buffer.from("Shared Name", "ascii"), "+1 555 0199"),
            DER,
        );
        const storedWithOtherFormal = _encode_ORDescriptor(
            new ORDescriptor(bobFormal, Buffer.from("Shared Name", "ascii"), "+1 555 0199"),
            DER,
        );

        expect(oRDescriptorMatch(assertedWithFormal, stored(storedWithOtherFormal))).toBe(false);
        expect(oRDescriptorElementsMatch(assertedWithFormal, stored(storedWithOtherFormal))).toBe(false);
        expect(oRDescriptorSubstringElementsMatch(assertedWithFormal, stored(storedWithOtherFormal))).toBe(false);
    });

    test("oRDescriptorElementsMatch, recipientSpecifierElementsMatch, and circulationMemberElementsMatch match directory-name in formal-name and forward getEqualityMatcher", () => {
        const assertedDN: Name = {
            rdnSequence: [[new DNAtav(id_at_commonName, $._encodeUTF8String("alice smith", DER))]],
        };
        const storedDN: Name = {
            rdnSequence: [[new DNAtav(id_at_commonName, $._encodePrintableString("Alice  Smith", DER))]],
        };
        const getMatcher = (attrType: ObjectIdentifier) => (
            attrType.isEqualTo(id_at_commonName) ? caseIgnoreMatch : undefined
        );

        const assertedDNOnlyDesc = new ORDescriptor(
            new ORName(new BuiltInStandardAttributes(), undefined, undefined, assertedDN),
        );
        const storedBothDesc = new ORDescriptor(
            new ORName(
                new BuiltInStandardAttributes({ iso_3166_alpha2_code: "US" }, undefined, undefined, undefined, undefined, "Acme Corp"),
                undefined,
                undefined,
                storedDN,
            ),
        );

        expect(
            oRDescriptorElementsMatch(
                _encode_ORDescriptor(assertedDNOnlyDesc, DER),
                stored(_encode_ORDescriptor(storedBothDesc, DER)),
                getMatcher,
            ),
        ).toBe(true);

        expect(
            recipientSpecifierElementsMatch(
                _encode_RecipientSpecifier(new RecipientSpecifier(assertedDNOnlyDesc), DER),
                stored(_encode_RecipientSpecifier(new RecipientSpecifier(storedBothDesc), DER)),
                getMatcher,
            ),
        ).toBe(true);

        expect(
            circulationMemberElementsMatch(
                _encode_CirculationMember(new CirculationMember(new RecipientSpecifier(assertedDNOnlyDesc)), DER),
                stored(_encode_CirculationMember(new CirculationMember(new RecipientSpecifier(storedBothDesc)), DER)),
                getMatcher,
            ),
        ).toBe(true);
    });

    test("oRDescriptorSubstringElementsMatch matches formal-name substrings and rejects empty assertions", () => {
        const subFormal = _encode_ORDescriptor(
            new ORDescriptor(
                new ORName(
                    new BuiltInStandardAttributes(
                        { iso_3166_alpha2_code: "US" },
                        undefined,
                        undefined,
                        undefined,
                        undefined,
                        "acme",
                    ),
                ),
            ),
            DER,
        );
        const storedFormal = _encode_ORDescriptor(new ORDescriptor(aliceFormal), DER);
        expect(oRDescriptorSubstringElementsMatch(subFormal, stored(storedFormal))).toBe(true);

        const emptyDesc = _encode_ORDescriptor(new ORDescriptor(), DER);
        expect(() => oRDescriptorMatch(emptyDesc, stored(storedFormal))).toThrow();
        expect(() => oRDescriptorElementsMatch(emptyDesc, stored(storedFormal))).toThrow();
        expect(() => oRDescriptorSubstringElementsMatch(emptyDesc, stored(storedFormal))).toThrow();

        const emptyPhoneSub = _encode_ORDescriptor(new ORDescriptor(undefined, undefined, ""), DER);
        expect(() => oRDescriptorSubstringElementsMatch(emptyPhoneSub, stored(storedFormal))).toThrow();
    });

    test("malformed assertions throw and malformed/unrecognized stored values return undefined (Issue 2.5)", () => {
        // ORName with unrecognized extension-attribute-type 9999
        const unknownExtOrName = _encode_ORName(
            new ORName(
                new BuiltInStandardAttributes({ iso_3166_alpha2_code: "US" }),
                undefined,
                [new ExtensionAttribute(9999, $._encodePrintableString("x", DER))],
            ),
            DER,
        );
        const validOrName = _encode_ORName(aliceFormal, DER);
        const emptyOrName = _encode_ORName(new ORName(new BuiltInStandardAttributes()), DER);
        expect(() => oRNameMatch(emptyOrName, stored(validOrName))).toThrow();
        expect(() => oRNameExactMatch(emptyOrName, stored(validOrName))).toThrow();
        expect(oRNameMatch(unknownExtOrName, stored(validOrName))).toBeUndefined();
        expect(oRNameExactMatch(unknownExtOrName, stored(validOrName))).toBeUndefined();
        expect(oRNameMatch(validOrName, stored(unknownExtOrName))).toBeUndefined();
        expect(oRNameExactMatch(validOrName, stored(unknownExtOrName))).toBeUndefined();

        // RecipientSpecifier missing required [0] recipient -> undefined (not false)
        const emptySet = DERElement.fromSet([]);
        const validRecipSpec = _encode_RecipientSpecifier(
            new RecipientSpecifier(new ORDescriptor(aliceFormal)),
            DER,
        );
        expect(recipientSpecifierMatch(validRecipSpec, stored(emptySet))).toBeUndefined();
        expect(recipientSpecifierElementsMatch(validRecipSpec, stored(emptySet))).toBeUndefined();
        expect(recipientSpecifierSubstringElementsMatch(validRecipSpec, stored(emptySet))).toBeUndefined();

        // CirculationMember checkmark and malformed CirculationMember handling
        const checkedCirc = _encode_CirculationMember(
            new CirculationMember(new RecipientSpecifier(new ORDescriptor(aliceFormal)), { simple: null }),
            DER,
        );
        const uncheckedCirc = _encode_CirculationMember(
            new CirculationMember(new RecipientSpecifier(new ORDescriptor(aliceFormal))),
            DER,
        );
        const circMissingFormal = _encode_CirculationMember(
            new CirculationMember(new RecipientSpecifier(new ORDescriptor(undefined, Buffer.from("Alice")))),
            DER,
        );

        expect(circulationMemberCheckmarkMatch(uncheckedCirc, stored(checkedCirc))).toBe(true);
        expect(circulationMemberCheckmarkMatch(uncheckedCirc, stored(uncheckedCirc))).toBe(false);
        expect(circulationMemberCheckmarkMatch(uncheckedCirc, stored($._encodeBoolean(true, DER)))).toBeUndefined();
        expect(() => circulationMemberMatch(circMissingFormal, stored(uncheckedCirc))).toThrow();

        // Non-constructed primitive returns undefined
        const primitiveEl = $._encodeBoolean(true, DER);
        expect(recipientSpecifierMatch(validRecipSpec, stored(primitiveEl))).toBeUndefined();
        expect(circulationMemberMatch(uncheckedCirc, stored(primitiveEl))).toBeUndefined();
    });

    test("normalizes free-form-name, telephone-number, and formal-name unless the caller already did", () => {
        const messy = _encode_ORDescriptor(
            new ORDescriptor(undefined, Buffer.from("  alice  "), "  +1   555 "),
            DER,
        );
        const clean = _encode_ORDescriptor(
            new ORDescriptor(undefined, Buffer.from("ALICE"), "+1 555"),
            DER,
        );
        expect(oRDescriptorMatch(messy, stored(clean))).toBe(true);
        expect(oRDescriptorElementsMatch(messy, stored(clean))).toBe(true);
        expect(
            oRDescriptorMatch(messy, stored(clean), undefined, MATCH_FLAG_ASSERTION_NORMALIZED),
        ).toBe(false);
        expect(
            oRDescriptorMatch(clean, stored(messy), undefined, MATCH_FLAG_VALUE_NORMALIZED),
        ).toBe(false);
        expect(
            oRDescriptorMatch(
                clean,
                stored(clean),
                undefined,
                MATCH_FLAG_ASSERTION_NORMALIZED | MATCH_FLAG_VALUE_NORMALIZED,
            ),
        ).toBe(true);

        const lowerFormal = _encode_ORDescriptor(
            new ORDescriptor(new ORName(
                new BuiltInStandardAttributes(
                    { iso_3166_alpha2_code: "US" },
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    "acme",
                ),
            )),
            DER,
        );
        const upperFormal = _encode_ORDescriptor(
            new ORDescriptor(new ORName(
                new BuiltInStandardAttributes(
                    { iso_3166_alpha2_code: "US" },
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    "ACME",
                ),
            )),
            DER,
        );
        expect(oRDescriptorMatch(lowerFormal, stored(upperFormal))).toBe(true);
        expect(
            oRDescriptorMatch(lowerFormal, stored(upperFormal), undefined, MATCH_FLAG_ASSERTION_NORMALIZED),
        ).toBe(false);
    });

    test("a stored root directory-name is matchable, and elements matching ignores an undecodable checkmark", () => {
        const rootFormal = new ORName(
            new BuiltInStandardAttributes(),
            undefined,
            undefined,
            { rdnSequence: [] },
        );
        const rootDesc = _encode_ORDescriptor(new ORDescriptor(rootFormal), DER);
        expect(oRDescriptorMatch(rootDesc, stored(rootDesc))).toBe(true);
        expect(oRNameMatch(
            _encode_ORName(rootFormal, DER),
            stored(_encode_ORName(aliceFormal, DER)),
        )).toBe(false);

        const recip = _encode_RecipientSpecifier(
            new RecipientSpecifier(new ORDescriptor(aliceFormal)),
            DER,
        );
        const bogusCheck = new DERElement();
        bogusCheck.integer = 7;
        const partialAssertion = DERElement.fromSet([recip, bogusCheck]);
        const storedCirc = _encode_CirculationMember(
            new CirculationMember(new RecipientSpecifier(new ORDescriptor(aliceFormal))),
            DER,
        );
        expect(circulationMemberElementsMatch(partialAssertion, stored(storedCirc))).toBe(true);
        expect(() => circulationMemberMatch(partialAssertion, stored(storedCirc))).toThrow();
    });
});
