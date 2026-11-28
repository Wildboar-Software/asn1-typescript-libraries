import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    ASN1UniversalType,
    BERElement,
    DERElement,
    ObjectIdentifier,
} from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue } from "@wildboar/x500/InformationFramework";
import {
    AddressCapabilities,
    Capability,
    _encode_AddressCapabilities,
    _encode_Capability,
} from "@wildboar/x400/MHSDirectoryObjectsAndAttributes";
import {
    BuiltInStandardAttributes,
    EncodedInformationTypesConstraints,
    ORAddress,
    SecurityCategory,
    SecurityLabel,
} from "@wildboar/x400/MTSAbstractService";
import capabilityMatch from "./capabilityMatch.mjs";
import addressCapabilitiesMatch from "./addressCapabilitiesMatch.mjs";

const testAttrType = ObjectIdentifier.fromString("2.6.5.2.3");
const oid1 = ObjectIdentifier.fromString("2.6.1.4.1");
const oid2 = ObjectIdentifier.fromString("2.6.1.4.2");
const policyOid = ObjectIdentifier.fromString("2.16.840.1.101.2.1.3.1");

function stored(el: ASN1Element): AttributeTypeAndValue {
    return new AttributeTypeAndValue(testAttrType, el);
}

function catVal(n: number): DERElement {
    const el = new DERElement();
    el.integer = n;
    return el;
}

describe("capabilityMatch and addressCapabilitiesMatch (ITU-T X.402 Annex A.3.4)", () => {
    const labelA = new SecurityLabel(policyOid, 3, "  In  Confidence ", [
        new SecurityCategory(oid1, catVal(10)),
        new SecurityCategory(oid2, catVal(20)),
    ]);
    const labelAReordered = new SecurityLabel(policyOid, 3, "IN CONFIDENCE", [
        new SecurityCategory(oid2, catVal(20)),
        new SecurityCategory(oid1, catVal(10)),
    ]);
    const labelB = new SecurityLabel(policyOid, 4, "SECRET");

    test("capabilityMatch is order- and duplicate-insensitive across all SET OF fields", () => {
        const cap1 = _encode_Capability(
            new Capability(
                [[2, 22, 0], [2, 20, 0]],
                1_048_576,
                new EncodedInformationTypesConstraints(undefined, [oid1, oid2]),
                [labelA, labelB],
            ),
            DER,
        );
        const cap2 = _encode_Capability(
            new Capability(
                [[2, 20, 0], [2, 22, 0], [2, 20, 0]],
                1_048_576,
                new EncodedInformationTypesConstraints(undefined, [oid2, oid1]),
                [labelB, labelAReordered],
            ),
            DER,
        );
        const capDifferentMax = _encode_Capability(
            new Capability(
                [[2, 22, 0], [2, 20, 0]],
                2_097_152,
                new EncodedInformationTypesConstraints(undefined, [oid1, oid2]),
                [labelA, labelB],
            ),
            DER,
        );

        expect(capabilityMatch(cap1, stored(cap2))).toBe(true);
        expect(capabilityMatch(cap2, stored(cap1))).toBe(true);
        expect(capabilityMatch(cap1, stored(capDifferentMax))).toBe(false);
    });

    test("addressCapabilitiesMatch compares description symmetrically and requires both present or both absent", () => {
        const addrX121 = new ORAddress(new BuiltInStandardAttributes({ x121_dcc_code: "310" }, undefined, undefined, undefined, undefined, "Acme"));
        const addrISO = new ORAddress(new BuiltInStandardAttributes({ iso_3166_alpha2_code: "US" }, undefined, undefined, undefined, undefined, "acme"));
        const cap = new Capability([[2, 22, 0]], 4096);

        const withPaddedDesc = _encode_AddressCapabilities(
            new AddressCapabilities("  Primary   Gateway  ", addrX121, [cap]),
            DER,
        );
        const withCleanDesc = _encode_AddressCapabilities(
            new AddressCapabilities("primary gateway", addrISO, [cap]),
            DER,
        );
        const withoutDesc = _encode_AddressCapabilities(
            new AddressCapabilities(undefined, addrISO, [cap]),
            DER,
        );

        // Reflexive even with leading/trailing spaces
        expect(addressCapabilitiesMatch(withPaddedDesc, stored(withPaddedDesc))).toBe(true);
        // Symmetric match across space/case/country-encoding differences
        expect(addressCapabilitiesMatch(withPaddedDesc, stored(withCleanDesc))).toBe(true);
        expect(addressCapabilitiesMatch(withCleanDesc, stored(withPaddedDesc))).toBe(true);
        // Symmetric non-match when description is omitted on one side only
        expect(addressCapabilitiesMatch(withoutDesc, stored(withCleanDesc))).toBe(false);
        expect(addressCapabilitiesMatch(withCleanDesc, stored(withoutDesc))).toBe(false);
    });

    test("addressCapabilitiesMatch checks SET OF Capability equivalence including capabilities without content-types and duplicate content-types", () => {
        const addr = new ORAddress(new BuiltInStandardAttributes({ iso_3166_alpha2_code: "US" }));
        const capNoContentType1000 = new Capability(undefined, 1000);
        const capNoContentType2000 = new Capability(undefined, 2000);
        const capSharedTypeA = new Capability([[2, 22, 0]], 1000, undefined, [labelA]);
        const capSharedTypeB = new Capability([[2, 22, 0]], 2000, undefined, [labelB]);

        // Capability without content_types must NOT match a different maximum_content_length or empty set
        const ac1000 = _encode_AddressCapabilities(
            new AddressCapabilities(undefined, addr, [capNoContentType1000]),
            DER,
        );
        const ac2000 = _encode_AddressCapabilities(
            new AddressCapabilities(undefined, addr, [capNoContentType2000]),
            DER,
        );
        const acEmptyCaps = _encode_AddressCapabilities(
            new AddressCapabilities(undefined, addr, []),
            DER,
        );
        expect(addressCapabilitiesMatch(ac1000, stored(ac2000))).toBe(false);
        expect(addressCapabilitiesMatch(ac2000, stored(ac1000))).toBe(false);
        expect(addressCapabilitiesMatch(ac1000, stored(acEmptyCaps))).toBe(false);

        // Multiple capabilities sharing a content-type must both be preserved and matched in any SET order
        const acBothAB = _encode_AddressCapabilities(
            new AddressCapabilities("Dual", addr, [capSharedTypeA, capSharedTypeB]),
            DER,
        );
        const acBothBA = _encode_AddressCapabilities(
            new AddressCapabilities("dual", addr, [capSharedTypeB, capSharedTypeA]),
            DER,
        );
        const acOnlyB = _encode_AddressCapabilities(
            new AddressCapabilities("dual", addr, [capSharedTypeB]),
            DER,
        );
        expect(addressCapabilitiesMatch(acBothAB, stored(acBothBA))).toBe(true);
        expect(addressCapabilitiesMatch(acBothAB, stored(acOnlyB))).toBe(false);
        expect(addressCapabilitiesMatch(acOnlyB, stored(acBothAB))).toBe(false);
    });

    test("addressCapabilitiesMatch throws on empty ORAddress assertion and returns undefined on empty stored ORAddress", () => {
        const emptyAddr = new ORAddress(new BuiltInStandardAttributes());
        const validAddr = new ORAddress(new BuiltInStandardAttributes({ iso_3166_alpha2_code: "GB" }));
        const invalidAC = _encode_AddressCapabilities(new AddressCapabilities(undefined, emptyAddr, []), DER);
        const validAC = _encode_AddressCapabilities(new AddressCapabilities(undefined, validAddr, []), DER);

        expect(() => addressCapabilitiesMatch(invalidAC, stored(validAC))).toThrow();
        expect(addressCapabilitiesMatch(validAC, stored(invalidAC))).toBeUndefined();
    });

    test("capabilityMatch normalizes constructed BER strings inside SecurityCategory", () => {
        const primPart1 = new BERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.octetString, new Uint8Array([0x4e, 0x41])); // "NA"
        const primPart2 = new BERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.octetString, new Uint8Array([0x54, 0x4f])); // "TO"
        const constructedPrintable = new BERElement(ASN1TagClass.universal, ASN1Construction.constructed, ASN1UniversalType.printableString);
        constructedPrintable.sequence = [primPart1, primPart2];
        const wrappedConstructed = BERElement.fromSequence([constructedPrintable]);

        const primitivePrintable = new DERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.printableString);
        primitivePrintable.printableString = "NATO";
        const wrappedPrimitive = DERElement.fromSequence([primitivePrintable]);

        const capBer = _encode_Capability(
            new Capability(undefined, undefined, undefined, [
                new SecurityLabel(policyOid, 4, undefined, [new SecurityCategory(oid1, wrappedConstructed)]),
            ]),
            DER,
        );
        const capDer = _encode_Capability(
            new Capability(undefined, undefined, undefined, [
                new SecurityLabel(policyOid, 4, undefined, [new SecurityCategory(oid1, wrappedPrimitive)]),
            ]),
            DER,
        );

        expect(capabilityMatch(capDer, stored(capBer))).toBe(true);
    });
});
