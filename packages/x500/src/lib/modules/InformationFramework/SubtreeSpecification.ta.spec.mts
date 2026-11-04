import { BER } from "@wildboar/asn1/functional";
import {
    asDITDescending,
    compareRDNSequence,
    rdnSequenceToJSON,
    type RDNSequenceDescending,
} from "@wildboar/dn";
import { AttributeTypeAndValue } from "./AttributeTypeAndValue.ta.mjs";
import { SubtreeSpecification } from "./SubtreeSpecification.ta.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_organization } from "../SelectedObjectClasses/id-oc-organization.va.mjs";
import { id_oc_person } from "../SelectedObjectClasses/id-oc-person.va.mjs";
import type { AttributeType } from "./AttributeType.ta.mjs";
import type { EqualityMatcher } from "../../types/matching.mjs";
import { caseIgnoreMatch } from "../../matching/equality/caseIgnoreMatch.mjs";
import { subtreeIntersection } from "../../utils/subtreeIntersection.mjs";
import { valueEqualityMatcher } from "../../matching/valueEqualityMatcher.mjs";

const getEqualityMatcher = (_type: AttributeType): EqualityMatcher => caseIgnoreMatch;
const namingMatcher = valueEqualityMatcher(getEqualityMatcher);

function cnRDN (value: string): AttributeTypeAndValue[] {
    return [
        new AttributeTypeAndValue(
            commonName["&id"],
            commonName.encoderFor["&Type"]!({ uTF8String: value }, BER),
        ),
    ];
}

const root1: RDNSequenceDescending = asDITDescending([ cnRDN("root1") ]);
const root2: RDNSequenceDescending = asDITDescending([ cnRDN("root2") ]);
const base1: RDNSequenceDescending = asDITDescending([ cnRDN("base1") ]);

describe("SubtreeSpecification.isEqualTo()", () => {
    it("treats DEFAULT base {} and DEFAULT minimum 0 as equal to omitted values", () => {
        const empty = new SubtreeSpecification();
        const explicitDefaults = new SubtreeSpecification([], undefined, 0);
        expect(empty.isEqualTo(explicitDefaults)).toBe(true);
        expect(explicitDefaults.isEqualTo(new SubtreeSpecification([], undefined, 0n))).toBe(true);
    });

    it("compares local names with directory-string matching", () => {
        const a = new SubtreeSpecification([ cnRDN("People") ]);
        const b = new SubtreeSpecification([ cnRDN("people") ]);
        const c = new SubtreeSpecification([ cnRDN("other") ]);
        expect(a.isEqualTo(b)).toBe(true);
        expect(a.isEqualTo(c)).toBe(false);
    });

    it("compares specificExclusions as a SET", () => {
        const a = new SubtreeSpecification(undefined, [
            { chopBefore: root1 },
            { chopAfter: root2 },
        ]);
        const b = new SubtreeSpecification(undefined, [
            { chopAfter: root2 },
            { chopBefore: root1 },
        ]);
        const c = new SubtreeSpecification(undefined, [
            { chopBefore: root1 },
            { chopBefore: root2 },
        ]);
        expect(a.isEqualTo(b)).toBe(true);
        expect(a.isEqualTo(c)).toBe(false);
    });

    it("compares nested and/or refinements as SETs", () => {
        const a = new SubtreeSpecification(
            undefined,
            undefined,
            undefined,
            undefined,
            { and: [ { item: id_oc_person }, { item: id_oc_organization } ] },
        );
        const b = new SubtreeSpecification(
            undefined,
            undefined,
            undefined,
            undefined,
            { and: [ { item: id_oc_organization }, { item: id_oc_person } ] },
        );
        const c = new SubtreeSpecification(
            undefined,
            undefined,
            undefined,
            undefined,
            { or: [ { item: id_oc_person }, { item: id_oc_organization } ] },
        );
        expect(a.isEqualTo(b)).toBe(true);
        expect(a.isEqualTo(c)).toBe(false);
    });

    it("distinguishes maximum from an unbounded subtree", () => {
        expect(new SubtreeSpecification(undefined, undefined, undefined, 1)
            .isEqualTo(new SubtreeSpecification())).toBe(false);
        expect(new SubtreeSpecification(undefined, undefined, undefined, 1)
            .isEqualTo(new SubtreeSpecification(undefined, undefined, undefined, 1n)))
            .toBe(true);
    });
});

describe("SubtreeSpecification.toString()", () => {
    it("prints an empty specification as {}", () => {
        expect(new SubtreeSpecification().toString()).toBe("{}");
        expect(new SubtreeSpecification([], undefined, 0).toString()).toBe("{}");
    });

    it("prints base, chops, distances, and refinements in RFC 3672 order", () => {
        const spec = new SubtreeSpecification(
            base1,
            [
                { chopBefore: root1 },
                { chopAfter: root2 },
            ],
            1,
            4,
            {
                and: [
                    { item: id_oc_person },
                    { not: { item: id_oc_organization } },
                ],
            },
        );
        expect(spec.toString()).toBe(
            "{ base \"cn=base1\", "
            + "specificExclusions { chopBefore:\"cn=root1\", chopAfter:\"cn=root2\" }, "
            + "minimum 1, maximum 4, "
            + "specificationFilter and:{ item:2.5.6.6, not:item:2.5.6.4 } }",
        );
    });
});

describe("SubtreeSpecification.toJSON()", () => {
    it("omits DEFAULT base and minimum", () => {
        expect(new SubtreeSpecification().toJSON()).toEqual({});
        expect(new SubtreeSpecification([], undefined, 0).toJSON()).toEqual({});
    });

    it("encodes names, chops, distances, and refinements", () => {
        const spec = new SubtreeSpecification(
            base1,
            [ { chopBefore: root1 } ],
            2,
            5,
            { item: id_oc_person },
        );
        expect(spec.toJSON()).toEqual({
            base: rdnSequenceToJSON(base1),
            specificExclusions: [ { chopBefore: rdnSequenceToJSON(root1) } ],
            minimum: 2,
            maximum: 5,
            specificationFilter: { item: "2.5.6.6" },
        });
    });
});

describe("SubtreeSpecification.intersection()", () => {
    it("agrees with subtreeIntersection for overlapping subtrees", () => {
        const subtree_a = new SubtreeSpecification(
            [],
            [ { chopBefore: root1 } ],
            1,
        );
        const subtree_b = new SubtreeSpecification(
            [],
            [ { chopBefore: root2 } ],
            undefined,
            1,
        );
        const viaFunction = subtreeIntersection(
            getEqualityMatcher,
            subtree_a,
            subtree_b,
        );
        const viaMethod = subtree_a.intersection(subtree_b, getEqualityMatcher);
        expect(viaFunction).toBeTruthy();
        expect(viaMethod).toBeTruthy();
        const [ functionSpec, functionRoot ] = viaFunction!;
        const [ methodSpec, methodRoot ] = viaMethod!;
        expect(compareRDNSequence(functionRoot, methodRoot, namingMatcher)).toBe(true);
        expect(functionSpec.isEqualTo(methodSpec, namingMatcher)).toBe(true);
        expect(methodSpec.minimum ?? 0).toBe(1);
        expect(methodSpec.maximum).toBe(1);
        expect(methodSpec.specificExclusions).toHaveLength(2);
    });

    it("returns null when the bases do not overlap", () => {
        const a = new SubtreeSpecification();
        const b = new SubtreeSpecification();
        expect(a.intersection(b, getEqualityMatcher, root1, root2)).toBeNull();
        expect(subtreeIntersection(
            getEqualityMatcher,
            a,
            b,
            root1,
            root2,
        )).toBeNull();
    });
});
