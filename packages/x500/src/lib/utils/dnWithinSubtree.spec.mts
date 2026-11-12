import {
    type RelativeDistinguishedName,
    AttributeTypeAndValue,
} from "../modules/InformationFramework/index.mjs";
import { commonName } from "../modules/SelectedAttributeTypes/index.mjs";
import { DER } from "@wildboar/asn1/functional";
import {
    asDITAscending,
    asDITDescending,
    type RDNSequence,
} from "@wildboar/dn";
import dnWithinSubtree from "./dnWithinSubtree.mjs";

function rdn(index: number): RelativeDistinguishedName {
    return [
        new AttributeTypeAndValue(
            commonName["&id"],
            commonName.encoderFor["&Type"]!({
                printableString: index.toString(),
            }, DER),
        ),
    ];
}

describe("dnWithinSubtree", () => {
    it("returns true if the distinguished name falls within a basic subtree", () => {
        const rdn0: RelativeDistinguishedName = [
            new AttributeTypeAndValue(
                commonName["&id"],
                commonName.encoderFor["&Type"]!({
                    printableString: "John Doe",
                }, DER),
            ),
        ];
        const dn = asDITDescending([
            rdn0,
        ]);
        const dit = asDITDescending([
            rdn0,
        ]);
        expect(dnWithinSubtree(dn, dit)).toBe(true);
        dn.pop(); // dn is now empty
        expect(dnWithinSubtree(dn, dit)).toBe(false);
        dn.push([
            new AttributeTypeAndValue(
                commonName["&id"],
                commonName.encoderFor["&Type"]!({
                    printableString: "Johanna Buck",
                }, DER),
            ),
        ]);
        // dn now contains a non-matching RDN
        expect(dnWithinSubtree(dn, dit)).toBe(false);
    });

    it("returns true if the distinguished name falls within a subtree with minimum and maximum", () => {
        const dn = asDITDescending([
            rdn(0),
        ]);
        const dit = asDITDescending([
            rdn(0),
        ]);
        expect(dnWithinSubtree(dn, dit, 1, 3)).toBe(false); // Minimum not met
        dn.push(rdn(1));
        expect(dnWithinSubtree(dn, dit, 1, 3)).toBe(true);
        dn.push(rdn(2));
        expect(dnWithinSubtree(dn, dit, 1, 3)).toBe(true);
        dn.push(rdn(3));
        expect(dnWithinSubtree(dn, dit, 1, 3)).toBe(true);
        dn.push(rdn(4));
        expect(dnWithinSubtree(dn, dit, 1, 3)).toBe(false); // Maximum exceeded
    });

    it("requires DIT-descending distinguished names", () => {
        const descending = asDITDescending([rdn(0)]);
        const ascending = asDITAscending([rdn(0)]);
        const unknown: RDNSequence = [rdn(0)];
        expect(dnWithinSubtree(descending, descending)).toBe(true);
        // @ts-expect-error LDAP order is ascending; the root-most RDN is last.
        dnWithinSubtree(ascending, descending);
        // @ts-expect-error The DIT order has not been asserted.
        dnWithinSubtree(unknown, descending);
    });
});