import { DER } from "@wildboar/asn1/functional";
import { expectTypeOf } from "vitest";
import {
    asDITAscending,
    asDITDescending,
    commonNameOID,
    isRDNSequenceEndingWith,
    isRDNSequenceOf,
    isRDNSequenceOfLength,
    type CommonNameRDN,
    type RDNSequence,
    type RDNSequenceAscending,
    type RDNSequenceDescending,
    type RDNSequenceEndingWith,
    type RDNSequenceOf,
    type RDNSequenceOfLength,
    type RelativeDistinguishedName,
} from "@wildboar/dn";
import { AttributeTypeAndValue } from "../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import { commonName } from "../modules/SelectedAttributeTypes/commonName.oa.mjs";
import { getRDN, type RDNFromDN } from "./getRDN.mjs";

function cn (text: string): RelativeDistinguishedName {
    return [
        new AttributeTypeAndValue(
            commonName["&id"],
            commonName.encoderFor["&Type"]!({ printableString: text }, DER),
        ),
    ];
}

describe("getRDN", () => {
    it("returns the last RDN of a DIT-descending name", () => {
        const leaf = cn("Bob");
        const dn = asDITDescending([cn("US"), cn("Acme"), leaf]);
        expect(getRDN(dn)).toBe(leaf);
        expect(dn).toHaveLength(3);
    });

    it("returns undefined for the root", () => {
        expect(getRDN(asDITDescending([]))).toBeUndefined();
    });

    it("narrows the RDN when the name's shape is known", () => {
        const plain = asDITDescending([]);
        const empty = plain as RDNSequenceDescending & RDNSequenceOfLength<0>;
        const pair = asDITDescending([cn("US"), cn("Bob")]) as
            RDNSequenceDescending & RDNSequenceOfLength<2>;
        const ending = asDITDescending([cn("Bob")]) as
            RDNSequenceDescending & RDNSequenceEndingWith<CommonNameRDN>;
        const onlyCn = asDITDescending([cn("Bob")]) as
            RDNSequenceDescending & RDNSequenceOf<typeof commonNameOID>;

        expectTypeOf<RDNFromDN<typeof plain>>()
            .toEqualTypeOf<RelativeDistinguishedName | undefined>();
        expectTypeOf<RDNFromDN<typeof empty>>()
            .toEqualTypeOf<undefined>();
        expectTypeOf<RDNFromDN<typeof pair>>()
            .toEqualTypeOf<RelativeDistinguishedName>();
        expectTypeOf<RDNFromDN<typeof ending>>()
            .toEqualTypeOf<CommonNameRDN>();
        expectTypeOf<RDNFromDN<typeof onlyCn>>()
            .toEqualTypeOf<CommonNameRDN | undefined>();

        expectTypeOf(getRDN(plain))
            .toEqualTypeOf<RelativeDistinguishedName | undefined>();
        expectTypeOf(getRDN(ending))
            .toEqualTypeOf<CommonNameRDN>();
        expect(getRDN(ending)).toBe(ending[0]);
        expect(getRDN(empty)).toBeUndefined();

        const built = asDITDescending([cn("US"), cn("Bob")]);
        if (isRDNSequenceOf(built, commonNameOID) && isRDNSequenceOfLength(built, 2)) {
            const rdn = getRDN(built);
            expectTypeOf(rdn).toEqualTypeOf<CommonNameRDN>();
            expect(rdn[0].type_.toString()).toBe(commonNameOID);
        } else {
            expect.unreachable();
        }
        if (isRDNSequenceEndingWith(built, commonNameOID)) {
            expectTypeOf(getRDN(built)).toEqualTypeOf<CommonNameRDN>();
        } else {
            expect.unreachable();
        }
        const root = asDITDescending([]);
        if (isRDNSequenceOfLength(root, 0)) {
            expectTypeOf(getRDN(root)).toEqualTypeOf<undefined>();
        } else {
            expect.unreachable();
        }
    });

    it("rejects a name whose DIT order is unknown or ascending", () => {
        const unknown: RDNSequence = [];
        const ascending: RDNSequenceAscending = asDITAscending([]);
        const descending: RDNSequenceDescending = asDITDescending([]);
        // @ts-expect-error The DIT order has not been asserted.
        getRDN(unknown);
        // @ts-expect-error LDAP order is ascending; the entry's RDN is first.
        getRDN(ascending);
        getRDN(descending);
    });
});
