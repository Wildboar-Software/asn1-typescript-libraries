import { Buffer } from "node:buffer";
import { ASN1Element, DERElement, ObjectIdentifier } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import {
    MATCH_FLAG_ASSERTION_NORMALIZED,
    MATCH_FLAG_USED_FOR_NAME,
} from "@wildboar/x500";
import { AttributeTypeAndValue } from "@wildboar/x500/InformationFramework";
import {
    BuiltInStandardAttributes,
    ORName,
    PersonalName,
} from "@wildboar/x400/MTSAbstractService";
import { _encode_MSString } from "@wildboar/x400/MSMatchingRules";
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
import oRDescriptorSingleElementMatch from "./oRDescriptorSingleElementMatch.js";
import recipientSpecifierSingleElementMatch from "./recipientSpecifierSingleElementMatch.js";
import circulationMemberSingleElementMatch from "./circulationMemberSingleElementMatch.js";

const testAttrType = ObjectIdentifier.fromString("2.6.1.2.1");

function stored(el: ASN1Element): AttributeTypeAndValue {
    return new AttributeTypeAndValue(testAttrType, el);
}

function ms(printable: string): ASN1Element {
    return _encode_MSString({ printable }, DER);
}

describe("oRDescriptorSingleElementMatch, recipientSpecifierSingleElementMatch, and circulationMemberSingleElementMatch", () => {
    const formalName = new ORName(
        new BuiltInStandardAttributes(
            { iso_3166_alpha2_code: "US" },
            undefined,
            undefined,
            undefined,
            undefined,
            "Acme Corp",
            undefined,
            new PersonalName("McArthur", "Douglas"),
        ),
    );
    const fullDescriptor = new ORDescriptor(
        formalName,
        Buffer.from("John  Smith", "ascii"),
        "+1 555 0199",
    );
    const encodedFullDescriptor = _encode_ORDescriptor(fullDescriptor, DER);

    test("matches free-form-name, telephone-number, and formal-name elements for equality (case- and space-insensitive)", () => {
        expect(oRDescriptorSingleElementMatch(ms("  john smith "), stored(encodedFullDescriptor))).toBe(true);
        expect(oRDescriptorSingleElementMatch(ms("+1  555  0199"), stored(encodedFullDescriptor))).toBe(true);
        expect(oRDescriptorSingleElementMatch(ms("acme corp"), stored(encodedFullDescriptor))).toBe(true);
        expect(oRDescriptorSingleElementMatch(ms("mcarthur"), stored(encodedFullDescriptor))).toBe(true);
        expect(oRDescriptorSingleElementMatch(ms("douglas"), stored(encodedFullDescriptor))).toBe(true);
    });

    test("uses equality (MS-string-match), not substring matching, and does not short-circuit across fields", () => {
        // Substrings of free-form-name, telephone-number, or formal-name must NOT match
        expect(oRDescriptorSingleElementMatch(ms("smith"), stored(encodedFullDescriptor))).toBe(false);
        expect(oRDescriptorSingleElementMatch(ms("555"), stored(encodedFullDescriptor))).toBe(false);
        expect(oRDescriptorSingleElementMatch(ms("arthur"), stored(encodedFullDescriptor))).toBe(false);
    });

    test("matches formal-name when free-form-name and telephone-number are absent", () => {
        const formalOnly = _encode_ORDescriptor(new ORDescriptor(formalName), DER);
        expect(oRDescriptorSingleElementMatch(ms("mcarthur"), stored(formalOnly))).toBe(true);
        expect(oRDescriptorSingleElementMatch(ms("nobody"), stored(formalOnly))).toBe(false);
    });

    test("recipientSpecifierSingleElementMatch and circulationMemberSingleElementMatch delegate accurately", () => {
        const recipSpec = new RecipientSpecifier(fullDescriptor);
        const encodedRecipSpec = _encode_RecipientSpecifier(recipSpec, DER);
        const encodedCircMember = _encode_CirculationMember(
            new CirculationMember(recipSpec, { simple: null }),
            DER,
        );

        expect(recipientSpecifierSingleElementMatch(ms("mcarthur"), stored(encodedRecipSpec))).toBe(true);
        expect(recipientSpecifierSingleElementMatch(ms("john smith"), stored(encodedRecipSpec))).toBe(true);
        expect(recipientSpecifierSingleElementMatch(ms("+1 555 0199"), stored(encodedRecipSpec))).toBe(true);
        expect(recipientSpecifierSingleElementMatch(ms("smith"), stored(encodedRecipSpec))).toBe(false);

        expect(circulationMemberSingleElementMatch(ms("mcarthur"), stored(encodedCircMember))).toBe(true);
        expect(circulationMemberSingleElementMatch(ms("john smith"), stored(encodedCircMember))).toBe(true);
        expect(circulationMemberSingleElementMatch(ms("smith"), stored(encodedCircMember))).toBe(false);
    });

    test("handles malformed/empty inputs, MATCH_FLAG_ASSERTION_NORMALIZED, and MATCH_FLAG_USED_FOR_NAME", () => {
        const emptySet = DERElement.fromSet([]);
        expect(oRDescriptorSingleElementMatch(ms("mcarthur"), stored(emptySet))).toBeUndefined();
        expect(recipientSpecifierSingleElementMatch(ms("mcarthur"), stored(emptySet))).toBeUndefined();
        expect(circulationMemberSingleElementMatch(ms("mcarthur"), stored(emptySet))).toBeUndefined();

        // Lowercase assertion fails when caller claims MATCH_FLAG_ASSERTION_NORMALIZED
        expect(
            oRDescriptorSingleElementMatch(
                ms("mcarthur"),
                stored(encodedFullDescriptor),
                undefined,
                MATCH_FLAG_ASSERTION_NORMALIZED,
            ),
        ).toBe(false);
        expect(
            oRDescriptorSingleElementMatch(
                ms("MCARTHUR"),
                stored(encodedFullDescriptor),
                undefined,
                MATCH_FLAG_ASSERTION_NORMALIZED,
            ),
        ).toBe(true);

        for (const matcher of [
            oRDescriptorSingleElementMatch,
            recipientSpecifierSingleElementMatch,
            circulationMemberSingleElementMatch,
        ]) {
            expect(() => matcher(ms(""), stored(encodedFullDescriptor))).toThrow();
            expect(
                matcher(ms("MCARTHUR"), stored(encodedFullDescriptor), undefined, MATCH_FLAG_USED_FOR_NAME),
            ).toBeUndefined();
        }
    });
});
