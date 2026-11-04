import type { ASN1Element } from "@wildboar/asn1";
import {
    type DistinguishedName,
    AttributeTypeAndValue,
    SubtreeSpecification,
    type AttributeType,
} from "@wildboar/x500/InformationFramework";
import { dnStartsWith, type RDNSequenceDescending, asDITDescending, compareRDNSequence } from "@wildboar/dn";
import { subtreeIntersection } from "./subtreeIntersection.mjs";
import { commonName } from "../modules/SelectedAttributeTypes/index.mjs";
import { BER } from "@wildboar/asn1/functional";
import { strict as assert, strictEqual as assertEqual } from "node:assert";
import type { FilterItem_substrings_strings_Item } from "../modules/DirectoryAbstractService/index.mjs";
import type { EqualityMatcher } from "../types/matching.mjs";
import { caseIgnoreMatch } from "../matching/equality/caseIgnoreMatch.mjs";
import { valueEqualityMatcher } from "../matching/valueEqualityMatcher.mjs";

const getEqualityMatcher = (_type: AttributeType): EqualityMatcher => caseIgnoreMatch;
const namingMatcher = valueEqualityMatcher(getEqualityMatcher);

const root1: RDNSequenceDescending = asDITDescending([
    [
        new AttributeTypeAndValue(
            commonName["&id"],
            commonName.encoderFor["&Type"]!({ uTF8String: "root1" }, BER),
        ),
    ],
]);

const root2: RDNSequenceDescending = asDITDescending([
    [
        new AttributeTypeAndValue(
            commonName["&id"],
            commonName.encoderFor["&Type"]!({ uTF8String: "root2" }, BER),
        ),
    ],
]);

const root3: RDNSequenceDescending = asDITDescending([
    ...root1,
    [
        new AttributeTypeAndValue(
            commonName["&id"],
            commonName.encoderFor["&Type"]!({ uTF8String: "subroot1" }, BER),
        ),
    ],
]);

const base1: RDNSequenceDescending = asDITDescending([
    [
        new AttributeTypeAndValue(
            commonName["&id"],
            commonName.encoderFor["&Type"]!({ uTF8String: "base1" }, BER),
        ),
    ],
]);

const base2: RDNSequenceDescending = asDITDescending([
    [
        new AttributeTypeAndValue(
            commonName["&id"],
            commonName.encoderFor["&Type"]!({ uTF8String: "base2" }, BER),
        ),
    ],
]);

describe("subtreeIntersection", () => {
    it("two match-everything subtrees should return a match-everything subtree", () => {
        const subtree_a = new SubtreeSpecification(
            [],
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
        );
        const subtree_b = new SubtreeSpecification(
            [],
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
        );
        const result = subtreeIntersection(getEqualityMatcher, subtree_a, subtree_b);
        expect(result);
        const [ isubtree, iroot ] = result;
        expect(iroot.length).toBe(0);
        expect(isubtree.base).toBeUndefined();
        expect(isubtree.minimum ?? 0).toBe(0); // Either 0 or undefined is fine.
        expect(isubtree.maximum).toBeUndefined();
        expect(isubtree.specificationFilter).toBeUndefined();
        expect(isubtree.specificExclusions).toBeUndefined();
    });

    it("two match-everything subtrees under different roots should return no match", () => {
        const subtree_a = new SubtreeSpecification(
            [],
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
        );
        const subtree_b = new SubtreeSpecification(
            [],
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
        );
        const result = subtreeIntersection(getEqualityMatcher, subtree_a, subtree_b, root1, root2);
        assert(!result);
    });

    // This test is wrong: the implementation just joins both refinements as subfilters into a single filter.
    // it("two subtrees with conflicting specification filters should return no match", () => {
    //     const subtree_a = new SubtreeSpecification(
    //         [],
    //         undefined,
    //         undefined,
    //         undefined,
    //         {
    //             item: person["&id"],
    //         },
    //         undefined,
    //     );
    //     const subtree_b = new SubtreeSpecification(
    //         [],
    //         undefined,
    //         undefined,
    //         undefined,
    //         {
    //             item: organization["&id"],
    //         },
    //         undefined,
    //     );
    //     const result = subtreeIntersection(subtree_a, subtree_b, root1, root2);
    //     assert(!result);
    // });

    it("two subtrees with non-overlapping minimums and maximums should return no match", () => {
        const subtree_a = new SubtreeSpecification(
            [],
            undefined,
            2,
            undefined,
            undefined,
            undefined,
        );
        const subtree_b = new SubtreeSpecification(
            [],
            undefined,
            undefined,
            1,
            undefined,
            undefined,
        );
        const result = subtreeIntersection(getEqualityMatcher, subtree_a, subtree_b);
        assert(!result);
    });

    it("two subtrees with equal minimums and maximums should return a match", () => {
        const subtree_a = new SubtreeSpecification(
            [],
            undefined,
            1,
            undefined,
            undefined,
            undefined,
        );
        const subtree_b = new SubtreeSpecification(
            [],
            undefined,
            undefined,
            1,
            undefined,
            undefined,
        );
        const result = subtreeIntersection(getEqualityMatcher, subtree_a, subtree_b);
        assert(result);
        const [ isubtree, iroot ] = result;
        assertEqual(iroot.length, 0);
        assertEqual(isubtree.base, undefined);
        assertEqual(isubtree.minimum ?? 0, 1);
        assertEqual(isubtree.maximum, 1);
        assertEqual(isubtree.specificationFilter, undefined);
        assertEqual(isubtree.specificExclusions, undefined);
    });

    // Not valid: it just combines the chops.
    // it("two subtrees with same chops that differ by before/after should return the 'after' as a match", () => {
    //     const subtree_a = new SubtreeSpecification(
    //         [],
    //         [
    //             {
    //                 chopBefore: root1,
    //             },
    //         ],
    //         undefined,
    //         undefined,
    //         undefined,
    //         undefined,
    //     );
    //     const subtree_b = new SubtreeSpecification(
    //         [],
    //         [
    //             {
    //                 chopAfter: root1,
    //             },
    //         ],
    //         undefined,
    //         undefined,
    //         undefined,
    //         undefined,
    //     );
    //     const result = subtreeIntersection(subtree_a, subtree_b);
    //     assert(result);
    //     const [ isubtree, iroot ] = result;
    //     assertEqual(iroot.length, 0);
    //     assertEqual(isubtree.base, undefined);
    //     assertEqual(isubtree.minimum, undefined);
    //     assertEqual(isubtree.maximum, undefined);
    //     assertEqual(isubtree.specificationFilter, undefined);
    //     assertEqual(isubtree.specificExclusions?.length, 1);
    //     const spex1 = isubtree.specificExclusions?.[0];
    //     assert(spex1);
    //     assert("chopAfter" in spex1);
    //     const namingMatcher = getNamingMatcherGetter(ctx);
    //     assert(compareDistinguishedName(spex1.chopAfter, root1, namingMatcher));
    // });

    it("combines chops correctly", () => {
        const subtree_a = new SubtreeSpecification(
            [],
            [
                {
                    chopBefore: root1,
                },
            ],
            undefined,
            undefined,
            undefined,
            undefined,
        );
        const subtree_b = new SubtreeSpecification(
            [],
            [
                {
                    chopBefore: root2,
                },
            ],
            undefined,
            undefined,
            undefined,
            undefined,
        );
        const result = subtreeIntersection(getEqualityMatcher, subtree_a, subtree_b);
        assert(result);
        const [ isubtree, iroot ] = result;
        assertEqual(iroot.length, 0);
        assertEqual(isubtree.base, undefined);
        assertEqual(isubtree.minimum, undefined);
        assertEqual(isubtree.maximum, undefined);
        assertEqual(isubtree.specificationFilter, undefined);
        assertEqual(isubtree.specificExclusions?.length, 2);
        const spex1 = isubtree.specificExclusions?.[0];
        const spex2 = isubtree.specificExclusions?.[1];
        assert(spex1);
        assert(spex2);
        assert("chopBefore" in spex1);
        assert("chopBefore" in spex2);
        // NOTE: The ordering of the chops gets swapped around sometimes. Ordering doesn't matter.
        assert(compareRDNSequence(spex1.chopBefore, root1, namingMatcher));
        assert(compareRDNSequence(spex2.chopBefore, root2, namingMatcher));
    });

    it("combines chopAfters correctly", () => {
        const subtree_a = new SubtreeSpecification(
            [],
            [
                {
                    chopBefore: root1,
                },
            ],
            undefined,
            undefined,
            undefined,
            undefined,
        );
        const subtree_b = new SubtreeSpecification(
            [],
            [
                {
                    chopAfter: [
                        root2[0],
                        root1[0],
                    ],
                },
            ],
            undefined,
            undefined,
            undefined,
            undefined,
        );
        const result = subtreeIntersection(getEqualityMatcher, subtree_a, subtree_b);
        assert(result);
        const [ isubtree, iroot ] = result;
        assertEqual(iroot.length, 0);
        assertEqual(isubtree.base, undefined);
        assertEqual(isubtree.minimum, undefined);
        assertEqual(isubtree.maximum, undefined);
        assertEqual(isubtree.specificationFilter, undefined);
        assertEqual(isubtree.specificExclusions?.length, 2);
        const spex1 = isubtree.specificExclusions?.[0];
        const spex2 = isubtree.specificExclusions?.[1];
        assert(spex1);
        assert(spex2);
        assert("chopBefore" in spex1);
        assert("chopAfter" in spex2);
        // NOTE: The ordering of the chops gets swapped around sometimes. Ordering doesn't matter.
        assert(compareRDNSequence(spex1.chopBefore, root1, namingMatcher));
        assert(compareRDNSequence(spex2.chopAfter, [
            root2[0],
            root1[0],
        ], namingMatcher));
    });

    it("combines two complex subtrees that match correctly", () => {
        const subtree_a = new SubtreeSpecification(
            [],
            [
                {
                    chopBefore: root2,
                },
            ],
            1,
            undefined,
            undefined,
            undefined,
        );
        const subtree_b = new SubtreeSpecification(
            [
                root3[1],
            ],
            [
                {
                    chopAfter: [
                        root2[0],
                        root1[0],
                    ],
                },
            ],
            0, // Still should match.
            4,
            undefined,
            undefined,
        );
        const result = subtreeIntersection(getEqualityMatcher, subtree_a, subtree_b, root3, root1);
        assert(result);
        const [ isubtree, iroot ] = result;
        assertEqual(iroot.length, 2);
        assertEqual(isubtree.base, undefined);
        assertEqual(isubtree.minimum, 1);
        assertEqual(isubtree.maximum, 4); // I am unsure of this.
        assertEqual(isubtree.specificationFilter, undefined);
        assertEqual(isubtree.specificExclusions?.length, 2);
        const spex1 = isubtree.specificExclusions?.[0];
        const spex2 = isubtree.specificExclusions?.[1];
        assert(spex1);
        assert(spex2);
        assert("chopBefore" in spex1);
        assert("chopAfter" in spex2);
        // NOTE: The ordering of the chops gets swapped around sometimes. Ordering doesn't matter.
        assert(compareRDNSequence(spex2.chopAfter, [
            root2[0],
            root1[0],
        ], namingMatcher));
        assert(compareRDNSequence(spex1.chopBefore, root2, namingMatcher));
    });

    it("does not combine subtrees when one of the chops rules out the whole intersection", () => {
        const subtree_a = new SubtreeSpecification(
            [],
            [
                { // This should exclude the whole intersection.
                    chopBefore: [ root3[1] ],
                },
            ],
            undefined,
            undefined,
            undefined,
            undefined,
        );
        const subtree_b = new SubtreeSpecification(
            [
                root3[1],
                root3[1],
            ],
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
        );
        const result = subtreeIntersection(getEqualityMatcher, subtree_a, subtree_b, root3, root1);
        assert(!result);
    });

});