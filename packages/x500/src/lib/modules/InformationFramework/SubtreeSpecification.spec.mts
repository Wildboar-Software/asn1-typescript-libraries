import { ObjectIdentifier } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import { rdnSequenceToJSON } from "@wildboar/dn";
import {
    AttributeTypeAndValue,
    SubtreeSpecification,
    type DistinguishedName,
    type RelativeDistinguishedName,
} from "./index.mjs";
import { commonName } from "../SelectedAttributeTypes/index.mjs";

function rdn (index: number): RelativeDistinguishedName {
    return [
        new AttributeTypeAndValue(
            commonName["&id"],
            commonName.encoderFor["&Type"]!({
                printableString: index.toString(),
            }, DER),
        ),
    ];
}

function dn (...indices: number[]): DistinguishedName {
    return indices.map(rdn);
}

const person = ObjectIdentifier.fromString("2.5.6.6");
const orgPerson = ObjectIdentifier.fromString("2.5.6.7");

describe("SubtreeSpecification.isEqualTo", () => {
    it("applies DEFAULT base and minimum", () => {
        const implicit = new SubtreeSpecification();
        const explicit = new SubtreeSpecification([], undefined, 0);
        expect(implicit.isEqualTo(explicit)).toBe(true);
        expect(implicit.isEqualTo(new SubtreeSpecification(dn(0)))).toBe(false);
        expect(implicit.isEqualTo(new SubtreeSpecification(
            undefined,
            undefined,
            1,
        ))).toBe(false);
    });

    it("compares specificExclusions as a SET", () => {
        const a = new SubtreeSpecification(undefined, [
            { chopBefore: dn(0) },
            { chopAfter: dn(1) },
        ]);
        const b = new SubtreeSpecification(undefined, [
            { chopAfter: dn(1) },
            { chopBefore: dn(0) },
        ]);
        expect(a.isEqualTo(b)).toBe(true);
        expect(a.isEqualTo(new SubtreeSpecification(undefined, [
            { chopBefore: dn(0) },
        ]))).toBe(false);
    });

    it("compares and/or refinements without regard to order", () => {
        const a = new SubtreeSpecification(
            undefined,
            undefined,
            undefined,
            undefined,
            { and: [ { item: person }, { item: orgPerson } ] },
        );
        const b = new SubtreeSpecification(
            undefined,
            undefined,
            undefined,
            undefined,
            { and: [ { item: orgPerson }, { item: person } ] },
        );
        expect(a.isEqualTo(b)).toBe(true);
        expect(a.isEqualTo(new SubtreeSpecification(
            undefined,
            undefined,
            undefined,
            undefined,
            { item: person },
        ))).toBe(false);
    });
});

describe("SubtreeSpecification.contains / intersection / union", () => {
    const people = new SubtreeSpecification(dn(0));
    const staff = new SubtreeSpecification(dn(0, 1));
    const groups = new SubtreeSpecification(dn(2));
    const inverted = new SubtreeSpecification(
        undefined,
        undefined,
        3,
        1,
    );

    it("contains a DN on the closed distance interval", () => {
        const area = new SubtreeSpecification(undefined, undefined, 1, 2);
        expect(area.contains(dn())).toBe(false);
        expect(area.contains(dn(0))).toBe(true);
        expect(area.contains(dn(0, 1))).toBe(true);
        expect(area.contains(dn(0, 1, 2))).toBe(false);
        expect(people.contains(dn(0))).toBe(true);
        expect(people.contains(dn(0, 1, 2))).toBe(true);
        expect(people.contains(dn(2))).toBe(false);
    });

    it("honors chopBefore and chopAfter for a DN", () => {
        const chopped = new SubtreeSpecification(undefined, [
            { chopBefore: dn(0, 1) },
            { chopAfter: dn(2) },
        ]);
        expect(chopped.contains(dn(0))).toBe(true);
        expect(chopped.contains(dn(0, 1))).toBe(false);
        expect(chopped.contains(dn(0, 1, 9))).toBe(false);
        expect(chopped.contains(dn(2))).toBe(true);
        expect(chopped.contains(dn(2, 3))).toBe(false);
    });

    it("contains a nested specification but not a sibling", () => {
        expect(people.contains(staff)).toBe(true);
        expect(staff.contains(people)).toBe(false);
        expect(people.contains(groups)).toBe(false);
        expect(people.contains(people)).toBe(true);
        expect(people.contains(inverted)).toBe(false);
        expect(inverted.contains(dn(0))).toBe(false);
        expect(inverted.contains(staff)).toBe(false);
    });

    it("does not contain a nested spec that this specification chops", () => {
        const choppedPeople = new SubtreeSpecification(dn(0), [
            { chopBefore: dn(1) },
        ]);
        expect(choppedPeople.contains(staff)).toBe(false);
        expect(people.contains(choppedPeople)).toBe(true);
    });

    it("intersection is the nested overlap, or undefined", () => {
        const overlap = people.intersection(staff);
        expect(overlap).toBeDefined();
        expect(overlap!.isEqualTo(staff)).toBe(true);
        expect(people.intersection(groups)).toBeUndefined();
        expect(people.intersection(inverted)).toBeUndefined();
        const tight = new SubtreeSpecification(undefined, undefined, 0, 1);
        const deep = new SubtreeSpecification(undefined, undefined, 2, 4);
        expect(tight.intersection(deep)).toBeUndefined();
    });

    it("intersection tightens minimum, maximum, chops, and filters", () => {
        const a = new SubtreeSpecification(
            dn(0),
            [ { chopBefore: dn(1, 9) } ],
            0,
            5,
            { item: person },
        );
        const b = new SubtreeSpecification(
            dn(0, 1),
            [ { chopAfter: dn(2) } ],
            1,
            3,
            { item: person },
        );
        const overlap = a.intersection(b);
        expect(overlap).toBeDefined();
        expect(overlap!.base).toEqual(dn(0, 1));
        expect(Number(overlap!.minimum)).toBe(1);
        expect(Number(overlap!.maximum)).toBe(3);
        expect(overlap!.specificExclusions).toEqual([
            { chopBefore: dn(9) },
            { chopAfter: dn(2) },
        ]);
        expect(overlap!.specificationFilter).toEqual({
            and: [ { item: person }, { item: person } ],
        });
    });

    it("union of nested specs is the outer covering spec", () => {
        const spanning = people.union(staff);
        expect(spanning.isEqualTo(people)).toBe(true);
    });

    it("union of siblings fills the gap from the common prefix", () => {
        const spanning = people.union(groups);
        expect(spanning.base === undefined || spanning.base.length === 0)
            .toBe(true);
        expect(Number(spanning.minimum ?? 0)).toBe(1);
        expect(spanning.maximum).toBeUndefined();
        expect(spanning.contains(dn())).toBe(false);
        expect(spanning.contains(dn(0))).toBe(true);
        expect(spanning.contains(dn(2))).toBe(true);
        expect(spanning.contains(dn(1))).toBe(true);
    });

    it("union drops a chop that would exclude the other operand", () => {
        const choppedPeople = new SubtreeSpecification(undefined, [
            { chopBefore: dn(0) },
        ]);
        const spanning = choppedPeople.union(people);
        expect(spanning.contains(dn(0))).toBe(true);
        expect(spanning.specificExclusions).toBeUndefined();
    });

    it("union of filters is or; unrestricted wins", () => {
        const peopleOnly = new SubtreeSpecification(
            undefined,
            undefined,
            undefined,
            undefined,
            { item: person },
        );
        const orFilter = peopleOnly.union(new SubtreeSpecification(
            undefined,
            undefined,
            undefined,
            undefined,
            { item: orgPerson },
        ));
        expect(orFilter.specificationFilter).toEqual({
            or: [ { item: person }, { item: orgPerson } ],
        });
        expect(peopleOnly.union(new SubtreeSpecification()).specificationFilter)
            .toBeUndefined();
    });
});

describe("SubtreeSpecification.toString / toJSON", () => {
    it("prints {} for the DEFAULT whole-area specification", () => {
        expect(new SubtreeSpecification().toString()).toBe("{}");
        expect(new SubtreeSpecification().toJSON()).toEqual({});
        expect(new SubtreeSpecification([], undefined, 0).toJSON()).toEqual({});
    });

    it("prints GSER with X.500-order DNs", () => {
        const spec = new SubtreeSpecification(
            dn(0, 1),
            [
                { chopBefore: dn(2) },
                { chopAfter: dn(3) },
            ],
            1,
            4,
            { item: person },
        );
        expect(spec.toString()).toBe(
            "{ base \"cn=0,cn=1\", specificExclusions { chopBefore:\"cn=2\", chopAfter:\"cn=3\" }, minimum 1, maximum 4, specificationFilter item:2.5.6.6 }",
        );
        expect(spec.toJSON()).toEqual({
            base: rdnSequenceToJSON(dn(0, 1)),
            specificExclusions: [
                { chopBefore: rdnSequenceToJSON(dn(2)) },
                { chopAfter: rdnSequenceToJSON(dn(3)) },
            ],
            minimum: 1,
            maximum: 4,
            specificationFilter: { item: person.toString() },
        });
    });
});
