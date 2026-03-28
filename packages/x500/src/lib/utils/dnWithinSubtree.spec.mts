import type EqualityMatcher from "../types/EqualityMatcher.mjs";
import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import {
    type DistinguishedName,
    type RelativeDistinguishedName,
    AttributeTypeAndValue,
} from "../modules/InformationFramework/index.mjs";
import compareDistinguishedName from "../comparators/compareDistinguishedName.mjs";
import { commonName } from "../modules/SelectedAttributeTypes/index.mjs";
import { DER } from "@wildboar/asn1/functional";
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
        const dn: DistinguishedName = [
            rdn0,
        ];
        const dit: DistinguishedName = [
            rdn0,
        ];
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
        const dn: DistinguishedName = [
            rdn(0),
        ];
        const dit: DistinguishedName = [
            rdn(0),
        ];
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
});