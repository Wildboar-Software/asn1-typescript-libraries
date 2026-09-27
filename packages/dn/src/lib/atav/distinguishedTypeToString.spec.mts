import { ObjectIdentifier } from "@wildboar/asn1";
import { describe, expect, it } from "vitest";
import distinguishedTypeToString from "./distinguishedTypeToString.mjs";

const SHORT_NAMES: ReadonlyArray<readonly [number, string]> = [
    [3, "cn"],
    [4, "sn"],
    [5, "serialNumber"],
    [6, "c"],
    [7, "l"],
    [8, "st"],
    [10, "o"],
    [11, "ou"],
    [9, "street"],
    [12, "title"],
    [17, "postalCode"],
    [18, "postOfficeBox"],
    [20, "telephoneNumber"],
    [42, "gn"],
    [43, "initials"],
    [44, "generationQualifier"],
    [46, "dnQualifier"],
    [51, "houseIdentifier"],
    [54, "dmdName"],
    [65, "pseudonym"],
    [89, "urnC"],
    [97, "organizationIdentifier"],
    [98, "c3"],
    [99, "n3"],
    [100, "dnsName"],
    [104, "intEmail"],
    [105, "jid"],
    [106, "objectIdentifier"],
];

describe("distinguishedTypeToString()", () => {
    it.each(SHORT_NAMES)("maps 2.5.4.%i to %s", (arc, shortName) => {
        const oid = ObjectIdentifier.fromParts([2, 5, 4, arc]);
        expect(distinguishedTypeToString(oid)).toBe(shortName);
    });

    it("maps pilot and PKCS #9 attribute OIDs to their short names", () => {
        const pilot = [0, 9, 2342, 19200300, 100, 1] as const;
        const cases: ReadonlyArray<readonly [number[], string]> = [
            [[...pilot, 25], "dc"],
            [[...pilot, 1], "uid"],
            [[...pilot, 3], "mail"],
            [[...pilot, 6], "roomNumber"],
            [[...pilot, 11], "documentIdentifier"],
            [[...pilot, 20], "homePhone"],
            [[...pilot, 41], "mobile"],
            [[...pilot, 42], "pager"],
            [[...pilot, 44], "uniqueIdentifier"],
            [[...pilot, 48], "buildingName"],
            [[1, 2, 840, 113549, 1, 9, 1], "emailAddress"],
            [[2, 17, 1, 2, 2], "oidC"],
            [[2, 6, 10, 3, 9], "mHSADMDName"],
            [[2, 6, 10, 3, 10], "mHSCommonNameAttribute"],
            [[2, 6, 10, 3, 11], "mHSCountryName"],
            [[2, 6, 10, 3, 13], "mHSExtendedNetworkAddressAttribute"],
            [[2, 6, 10, 3, 14], "mHSGenerationQualifierAttribute"],
            [[2, 6, 10, 3, 15], "mHSGivenNameAttribute"],
            [[2, 6, 10, 3, 16], "mHSInitialsAttribute"],
            [[2, 6, 10, 3, 18], "mHSNetworkAddressAttribute"],
            [[2, 6, 10, 3, 20], "mHSNumericUserIdentifierAttribute"],
            [[2, 6, 10, 3, 21], "mHSOrganizationName"],
            [[2, 6, 10, 3, 22], "mHSOrganizationalUnitName"],
            [[2, 6, 10, 3, 23], "mHSPDSNameAttribute"],
            [[2, 6, 10, 3, 24], "mHSPostalCodeAttribute"],
            [[2, 6, 10, 3, 25], "mHSPRMDName"],
            [[2, 6, 10, 3, 27], "mHSSurnameAttribute"],
            [[2, 6, 10, 3, 28], "mHSTerminalIdentifierAttribute"],
            [[2, 6, 10, 3, 29], "mHSTerminalTypeAttribute"],
        ];
        for (const [arcs, shortName] of cases) {
            expect(distinguishedTypeToString(ObjectIdentifier.fromParts(arcs))).toBe(shortName);
        }
    });

    it("returns null when the type is not a known short name", () => {
        expect(distinguishedTypeToString(ObjectIdentifier.fromParts([2, 5, 4, 15]))).toBeNull();
        expect(distinguishedTypeToString(ObjectIdentifier.fromParts([2, 5, 4, 128]))).toBeNull();
        expect(distinguishedTypeToString(ObjectIdentifier.fromParts([2, 5, 5, 3]))).toBeNull();
        expect(distinguishedTypeToString(ObjectIdentifier.fromParts([1, 2, 250]))).toBeNull();
        expect(distinguishedTypeToString(ObjectIdentifier.fromParts([0, 9, 2342, 19200300, 100, 1, 99]))).toBeNull();
        expect(distinguishedTypeToString(ObjectIdentifier.fromParts([1, 2, 840, 113549, 1, 9, 2]))).toBeNull();
        expect(distinguishedTypeToString(ObjectIdentifier.fromParts([2, 17, 1, 2, 3]))).toBeNull();
        expect(distinguishedTypeToString(ObjectIdentifier.fromParts([2, 6, 10, 3, 12]))).toBeNull();
    });
});
