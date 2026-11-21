import { Buffer } from "node:buffer";
import { type ASN1Element, ObjectIdentifier } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DER } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue as DNAtav, type Name } from "@wildboar/dn";
import { AttributeTypeAndValue } from "@wildboar/x500/InformationFramework";
import { caseIgnoreMatch } from "@wildboar/x500/matching/equality";
import {
    BuiltInStandardAttributes,
    ORName,
    PersonalName,
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
import oRDescriptorMatch from "./oRDescriptorMatch.js";
import oRDescriptorElementsMatch from "./oRDescriptorElementsMatch.js";
import oRDescriptorSubstringElementsMatch from "./oRDescriptorSubstringElementsMatch.js";
import recipientSpecifierElementsMatch from "./recipientSpecifierElementsMatch.js";
import circulationMemberElementsMatch from "./circulationMemberElementsMatch.js";

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
});
