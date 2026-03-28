import {
    type DistinguishedName,
    type RelativeDistinguishedName,
    type OBJECT_CLASS,
    AttributeTypeAndValue,
    SubtreeSpecification,
} from "../modules/InformationFramework/index.mjs";
import compareElements from "../comparators/compareElements.mjs";
import { dnWithinSubtreeSpecification as withinSubtree } from "./dnWithinSubtreeSpecification.mjs";
import { commonName } from "../modules/SelectedAttributeTypes/index.mjs";
import { DER } from "@wildboar/asn1/functional";

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

const baseTest = (use_scope: boolean) => () => {
    const sts = new SubtreeSpecification([]);
    const dn: DistinguishedName = use_scope
        ? [rdn(9)]
        : [];
    const ocs: OBJECT_CLASS["&id"][] = [];
    const scope: DistinguishedName = use_scope
        ? [rdn(9)]
        : [];
    const getMatcher = () => compareElements;
    let result = withinSubtree(dn, ocs, sts, scope, getMatcher);
    expect(result).toBe(true);

    // Subtree is still empty, so the DN falls within the base
    dn.push(rdn(0));
    result = withinSubtree(dn, ocs, sts, scope, getMatcher);
    expect(result).toBe(true);

    // Now subtree has a differing base. Non-matching.
    sts.base!.push(rdn(1));
    result = withinSubtree(dn, ocs, sts, scope, getMatcher);
    expect(result).toBe(false);

    dn.pop();
    dn.push(rdn(1));

    // Now the subtree's base is the dn. Matching.
    result = withinSubtree(dn, ocs, sts, scope, getMatcher);
    expect(result).toBe(true);

    sts.base!.push(rdn(2));
    dn.push(rdn(2));
    dn.push(rdn(3));

    // Subtree's base is now a prefix of the dn. Matching.
    result = withinSubtree(dn, ocs, sts, scope, getMatcher);
    expect(result).toBe(true);

    sts.base!.push(rdn(3));
    sts.base!.push(rdn(4));

    // Subtree's base is now longer than the dn. Non-matching
    result = withinSubtree(dn, ocs, sts, scope, getMatcher);
    expect(result).toBe(false);
};

const minimumAndMaximumTest = (use_scope: boolean) => () => {
    const sts = new SubtreeSpecification([], undefined, 1, 3);
    const dn: DistinguishedName = use_scope
        ? [rdn(9)]
        : [];
    const ocs: OBJECT_CLASS["&id"][] = [];
    const scope: DistinguishedName = use_scope
        ? [rdn(9)]
        : [];
    const getMatcher = () => compareElements;

    // DN matches the base, but the minimum is not met
    let result = withinSubtree(dn, ocs, sts, scope, getMatcher);
    expect(result).toBe(false);

    // Now the minimum is met
    dn.push(rdn(0));
    result = withinSubtree(dn, ocs, sts, scope, getMatcher);
    expect(result).toBe(true);
    dn.push(rdn(1));
    result = withinSubtree(dn, ocs, sts, scope, getMatcher);
    expect(result).toBe(true);
    dn.push(rdn(2));
    result = withinSubtree(dn, ocs, sts, scope, getMatcher);
    expect(result).toBe(true);
    dn.push(rdn(3));
    result = withinSubtree(dn, ocs, sts, scope, getMatcher);
    expect(result).toBe(false); // Maximum exceeded
};

const specificExclusionsTest = (use_scope: boolean, before: boolean) => () => {
    const sts = new SubtreeSpecification([], [
        before
            ? {
                chopBefore: [rdn(0), rdn(1)],
            }
            : {
                chopAfter: [rdn(0), rdn(1)],
            },
    ]);
    const dn: DistinguishedName = use_scope
        ? [rdn(9)]
        : [];
    const ocs: OBJECT_CLASS["&id"][] = [];
    const scope: DistinguishedName = use_scope
        ? [rdn(9)]
        : [];
    const getMatcher = () => compareElements;

    let result = withinSubtree(dn, ocs, sts, scope, getMatcher);
    expect(result).toBe(true); // Not chopped yet.

    dn.push(rdn(0));
    result = withinSubtree(dn, ocs, sts, scope, getMatcher);
    expect(result).toBe(true); // Still not chopped yet.

    dn.push(rdn(1));
    result = withinSubtree(dn, ocs, sts, scope, getMatcher);
    if (before) {
        expect(result).toBe(false); // Chopped.
    } else {
        expect(result).toBe(true); // Still not chopped yet.
    }

    dn.push(rdn(2));
    result = withinSubtree(dn, ocs, sts, scope, getMatcher);
    expect(result).toBe(false); // Chopped either way: chopBefore or chopAfter.
};

describe("dnWithinSubtreeSpecification", () => {
    it("correctly assesses whether a DN falls within the subtree's base", baseTest(false));
    it("correctly assesses whether a DN falls within the subtree's base (using scope)", baseTest(true));
    it("correctly assesses whether a DN falls within the minimum and maximum bounds", minimumAndMaximumTest(false));
    it("correctly assesses whether a DN falls within the minimum and maximum bounds (using scope)", minimumAndMaximumTest(true));
    // No need to test specificationFilter: it trivially calls `objectClassesWithinRefinement`
    it("correctly assesses whether a DN falls within a subtree with chopBefore specific exclusions", specificExclusionsTest(false, true));
    it("correctly assesses whether a DN falls within a subtree with chopAfter specific exclusions", specificExclusionsTest(false, false));
    it("correctly assesses whether a DN falls within a subtree with chopBefore specific exclusions (using scope)", specificExclusionsTest(true, true));
    it("correctly assesses whether a DN falls within a subtree with chopAfter specific exclusions (using scope)", specificExclusionsTest(true, false));
});
