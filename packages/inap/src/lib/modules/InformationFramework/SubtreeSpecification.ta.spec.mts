import { ObjectIdentifier } from "@wildboar/asn1";
import {
    BER,
    _encodePrintableString,
    _encodeUTF8String,
} from "@wildboar/asn1/functional";
import {
    AttributeTypeAndValue,
    rdnSequenceToJSON,
    rdnSequenceToString,
    type RDNSequence,
} from "@wildboar/dn";
import { SubtreeSpecification as X500SubtreeSpecification } from "@wildboar/x500/InformationFramework";
import { describe, expect, it } from "vitest";
import {
    SubtreeSpecification,
    _decode_SubtreeSpecification,
    _encode_SubtreeSpecification,
} from "./SubtreeSpecification.ta.mjs";

const country = ObjectIdentifier.fromParts([2, 5, 4, 6]);
const person = ObjectIdentifier.fromParts([2, 5, 6, 6]);
const organization = ObjectIdentifier.fromParts([2, 5, 6, 4]);

function rdn (text: string): AttributeTypeAndValue[] {
    return [new AttributeTypeAndValue(country, _encodePrintableString(text, BER))];
}

function name (...parts: string[]): RDNSequence {
    return parts.map((part) => rdn(part));
}

describe("SubtreeSpecification", () => {
    it("is a X.500 subtree specification and round-trips", () => {
        const spec = new SubtreeSpecification(
            name("US", "CA"),
            [{ chopBefore: name("secret") }],
            1,
            4,
            { item: person },
        );
        expect(spec).toBeInstanceOf(X500SubtreeSpecification);
        const decoded = _decode_SubtreeSpecification(
            _encode_SubtreeSpecification(spec, BER),
        );
        expect(decoded).toBeInstanceOf(SubtreeSpecification);
        expect(decoded.isEqualTo(spec)).toBe(true);
        expect(decoded.union(spec).isEqualTo(spec)).toBe(true);
    });

    it("treats default base and minimum as equal", () => {
        const omitted = new SubtreeSpecification();
        const explicit = new SubtreeSpecification([], undefined, 0);
        expect(omitted.isEqualTo(explicit)).toBe(true);
        expect(omitted.contains(explicit)).toBe(true);
        expect(explicit.contains([])).toBe(true);
        expect(omitted.toString()).toBe("{ }");
        expect(omitted.toJSON()).toEqual({});
    });

    it("compares local names with dn keys, ignoring chop order", () => {
        const upper = new SubtreeSpecification(
            [rdn("US")],
            [{ chopBefore: name("a") }, { chopAfter: name("b") }],
        );
        const lower = new SubtreeSpecification(
            [rdn("us")],
            [{ chopAfter: name("b") }, { chopBefore: name("a") }],
        );
        expect(upper.isEqualTo(lower)).toBe(true);
        expect(upper.contains([rdn("us")])).toBe(true);
    });

    it("ignores a chop already covered by a wider chop", () => {
        const wide = new SubtreeSpecification([], [
            { chopBefore: name("people") },
        ]);
        const redundant = new SubtreeSpecification([], [
            { chopBefore: name("people", "secret") },
            { chopBefore: name("people") },
        ]);
        expect(wide.isEqualTo(redundant)).toBe(true);
    });

    it("treats empty specifications as equal", () => {
        const inverted = new SubtreeSpecification(name("a"), undefined, 5, 1);
        const chopped = new SubtreeSpecification(
            name("b"),
            [{ chopBefore: [] }],
            0,
            9,
        );
        const unsatisfiable = new SubtreeSpecification(
            undefined,
            undefined,
            undefined,
            undefined,
            { and: [{ item: person }, { not: { item: person } }] },
        );
        expect(inverted.isEqualTo(chopped)).toBe(true);
        expect(inverted.isEqualTo(unsatisfiable)).toBe(true);
        expect(unsatisfiable.contains(name("a"))).toBe(false);
        expect(inverted.contains(chopped)).toBe(true);
    });

    it("folds chopAfter of the base into maximum 0", () => {
        const chopped = new SubtreeSpecification(undefined, [{ chopAfter: [] }]);
        const bounded = new SubtreeSpecification(undefined, undefined, undefined, 0);
        expect(chopped.isEqualTo(bounded)).toBe(true);
        expect(chopped.contains([])).toBe(true);
        expect(chopped.contains(name("child"))).toBe(false);
    });

    it("contains a local name only inside the base, window, and chops", () => {
        const spec = new SubtreeSpecification(
            name("people"),
            [{ chopBefore: name("secret") }, { chopAfter: name("kept") }],
            0,
            2,
        );
        expect(spec.contains(name("people"))).toBe(true);
        expect(spec.contains(name("people", "other"))).toBe(true);
        expect(spec.contains(name("people", "other", "x", "y"))).toBe(false);
        expect(spec.contains(name("other"))).toBe(false);
        expect(spec.contains([])).toBe(false);
        expect(spec.contains(name("people", "secret"))).toBe(false);
        expect(spec.contains(name("people", "secret", "x"))).toBe(false);
        expect(spec.contains(name("people", "kept"))).toBe(true);
        expect(spec.contains(name("people", "kept", "x"))).toBe(false);
    });

    it("does not apply a satisfiable object-class filter to a local name", () => {
        const spec = new SubtreeSpecification(
            undefined,
            undefined,
            undefined,
            undefined,
            { item: person },
        );
        expect(spec.contains(name("a"))).toBe(true);
    });

    it("contains a narrower specification and not a wider one", () => {
        const outer = new SubtreeSpecification(
            [],
            [{ chopBefore: name("secret") }],
            0,
            10,
            { item: person },
        );
        const inner = new SubtreeSpecification(
            name("people"),
            [{ chopBefore: name("secret") }],
            1,
            3,
            { and: [{ item: person }, { item: organization }] },
        );
        const tooDeep = new SubtreeSpecification(name("people"), undefined, 0, 20);
        const sibling = new SubtreeSpecification(name("other"));
        expect(outer.contains(inner)).toBe(true);
        expect(inner.contains(outer)).toBe(false);
        expect(outer.contains(tooDeep)).toBe(false);
        expect(outer.contains(sibling)).toBe(false);
        expect(outer.union(inner).isEqualTo(outer)).toBe(true);
    });

    it("intersects nested bases and distance windows", () => {
        const wide = new SubtreeSpecification([], undefined, 0, 5);
        const deep = new SubtreeSpecification(name("ou"), undefined, 0, 10);
        const overlap = wide.intersection(deep);
        expect(overlap).toBeDefined();
        expect(overlap?.isEqualTo(
            new SubtreeSpecification(name("ou"), undefined, 0, 4),
        )).toBe(true);
        expect(wide.contains(overlap!)).toBe(true);
        expect(deep.contains(overlap!)).toBe(true);
        expect(new SubtreeSpecification(name("ou")).intersection(
            new SubtreeSpecification(name("other")),
        )).toBeUndefined();
    });

    it("intersects chops from both sides", () => {
        const left = new SubtreeSpecification([], [{ chopBefore: name("a") }], 0, 1);
        const right = new SubtreeSpecification([], [{ chopBefore: name("b") }], 0, 1);
        const overlap = left.intersection(right);
        expect(overlap?.isEqualTo(new SubtreeSpecification([], [
            { chopBefore: name("b") },
            { chopBefore: name("a") },
        ], 0, 1))).toBe(true);
        expect(left.intersection(new SubtreeSpecification(undefined, undefined, 3, 4))).toBeUndefined();
    });

    it("drops a branch that one side chops away", () => {
        const chopped = new SubtreeSpecification([], [{ chopBefore: name("ou") }]);
        const branch = new SubtreeSpecification(name("ou"));
        expect(chopped.intersection(branch)).toBeUndefined();
        expect(chopped.contains(branch)).toBe(false);

        const after = new SubtreeSpecification([], [{ chopAfter: name("ou") }]);
        const onlyEntry = new SubtreeSpecification(name("ou"), undefined, 0, 0);
        const withChildren = new SubtreeSpecification(name("ou"), undefined, 0, 2);
        const childrenOnly = new SubtreeSpecification(name("ou"), undefined, 1, 2);
        expect(after.contains(onlyEntry)).toBe(true);
        expect(after.intersection(onlyEntry)?.isEqualTo(onlyEntry)).toBe(true);
        expect(after.intersection(withChildren)?.isEqualTo(onlyEntry)).toBe(true);
        expect(after.intersection(childrenOnly)).toBeUndefined();
    });

    it("unions by covering both, filling gaps, and keeping shared chops", () => {
        const low = new SubtreeSpecification(
            name("people"),
            [{ chopBefore: name("secret") }],
            0,
            1,
        );
        const high = new SubtreeSpecification(
            name("people"),
            [{ chopBefore: name("secret") }],
            3,
            4,
        );
        const cover = low.union(high);
        expect(cover.isEqualTo(new SubtreeSpecification(
            name("people"),
            [{ chopBefore: name("secret") }],
            0,
            4,
        ))).toBe(true);
        expect(cover.contains(low)).toBe(true);
        expect(cover.contains(high)).toBe(true);

        const left = new SubtreeSpecification(name("a"), undefined, 0, 1);
        const right = new SubtreeSpecification(name("b"), undefined, 0, 2);
        const siblings = left.union(right);
        expect(siblings.contains(left)).toBe(true);
        expect(siblings.contains(right)).toBe(true);
        expect(left.intersection(right)).toBeUndefined();
    });

    it("combines object-class filters with and and or", () => {
        const people = new SubtreeSpecification(
            undefined,
            undefined,
            undefined,
            undefined,
            { item: person },
        );
        const orgs = new SubtreeSpecification(
            undefined,
            undefined,
            undefined,
            undefined,
            { item: organization },
        );
        const both = new SubtreeSpecification(
            undefined,
            undefined,
            undefined,
            undefined,
            { and: [{ item: organization }, { item: person }] },
        );
        expect(people.contains(both)).toBe(true);
        expect(both.contains(people)).toBe(false);
        expect(people.intersection(orgs)?.isEqualTo(both)).toBe(true);
        const either = people.union(orgs);
        expect(either.contains(people)).toBe(true);
        expect(either.contains(orgs)).toBe(true);
        expect(either.isEqualTo(new SubtreeSpecification(
            undefined,
            undefined,
            undefined,
            undefined,
            { or: [{ item: organization }, { item: person }] },
        ))).toBe(true);
    });

    it("prints distinguished names with the dn package and emits JSON", () => {
        const base = name("US", "CA");
        const chop = name("secret");
        const spec = new SubtreeSpecification(
            base,
            [{ chopBefore: chop }, { chopAfter: name("kept") }],
            1,
            3,
            { or: [{ item: person }, { not: { item: organization } }] },
        );
        expect(spec.toString()).toBe(
            "{ base " + JSON.stringify(rdnSequenceToString(base))
            + ", specificExclusions { chopBefore:"
            + JSON.stringify(rdnSequenceToString(chop))
            + ", chopAfter:"
            + JSON.stringify(rdnSequenceToString(name("kept")))
            + " }, minimum 1, maximum 3, specificationFilter or:{ item:"
            + person.toString()
            + ", not:item:"
            + organization.toString()
            + " } }",
        );
        expect(spec.toJSON()).toEqual({
            base: rdnSequenceToJSON(base),
            specificExclusions: [
                { chopBefore: rdnSequenceToJSON(chop) },
                { chopAfter: rdnSequenceToJSON(name("kept")) },
            ],
            minimum: 1,
            maximum: 3,
            specificationFilter: {
                or: [
                    { item: person.toString() },
                    { not: { item: organization.toString() } },
                ],
            },
        });
    });

    it("refuses set algebra on unrecognized components", () => {
        const ext = _encodeUTF8String("ext", BER);
        const again = _encodeUTF8String("ext", BER);
        const opaque = new SubtreeSpecification(
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            [ext],
        );
        const twin = new SubtreeSpecification(
            [],
            undefined,
            0,
            undefined,
            undefined,
            [again],
        );
        const plain = new SubtreeSpecification();
        expect(opaque.isEqualTo(twin)).toBe(true);
        expect(opaque.contains(twin)).toBe(true);
        expect(plain.contains(opaque)).toBe(false);
        expect(plain.intersection(opaque)).toBeUndefined();
        expect(opaque.union(twin).isEqualTo(opaque)).toBe(true);
        expect(() => plain.union(opaque)).toThrow(TypeError);

        const chop = _encodeUTF8String("chop", BER);
        const unknownChop = new SubtreeSpecification(undefined, [chop]);
        expect(unknownChop.isEqualTo(
            new SubtreeSpecification(undefined, [_encodeUTF8String("chop", BER)]),
        )).toBe(true);
        expect(() => unknownChop.union(plain)).toThrow(TypeError);
    });
});
