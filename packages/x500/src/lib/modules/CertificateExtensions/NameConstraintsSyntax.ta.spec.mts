import { GeneralSubtree } from "./GeneralSubtree.ta.mjs";
import { NameConstraintsSyntax } from "./NameConstraintsSyntax.ta.mjs";

function subtree (name: string, minimum?: number, maximum?: number): GeneralSubtree {
    return new GeneralSubtree({ dNSName: name }, minimum, maximum);
}

describe("NameConstraintsSyntax.isEmpty()", () => {
    it("is true when both subtree lists are absent or empty", () => {
        expect(new NameConstraintsSyntax().isEmpty()).toBe(true);
        expect(new NameConstraintsSyntax([]).isEmpty()).toBe(true);
        expect(new NameConstraintsSyntax([subtree("example")]).isEmpty()).toBe(false);
        expect(new NameConstraintsSyntax(undefined, [subtree("deny.example")]).isEmpty())
            .toBe(false);
    });
});

describe("NameConstraintsSyntax.isEqualTo()", () => {
    it("matches the same permitted subtrees", () => {
        const a = new NameConstraintsSyntax([subtree("example")]);
        const b = new NameConstraintsSyntax([subtree("example")]);
        expect(a.isEqualTo(b)).toBe(true);
    });

    it("matches the same excluded subtrees", () => {
        const a = new NameConstraintsSyntax(undefined, [subtree("deny.example", 0, 1)]);
        const b = new NameConstraintsSyntax(undefined, [subtree("deny.example", undefined, 1)]);
        expect(a.isEqualTo(b)).toBe(true);
    });

    it("does not match a missing component, a different name, or a different order", () => {
        const permitted = new NameConstraintsSyntax([subtree("a.example"), subtree("b.example")]);
        expect(permitted.isEqualTo(new NameConstraintsSyntax(undefined, [subtree("a.example")])))
            .toBe(false);
        expect(permitted.isEqualTo(new NameConstraintsSyntax([subtree("b.example"), subtree("a.example")])))
            .toBe(false);
        expect(permitted.isEqualTo(new NameConstraintsSyntax([subtree("other.example"), subtree("b.example")])))
            .toBe(false);
    });

    it("can ignore the order of permitted and excluded subtrees", () => {
        const ignoreOrder = { ignoreSubtreeOrder: true };
        const a = new NameConstraintsSyntax(
            [subtree("A.Example"), subtree("b.example")],
            [subtree("deny.example", 0, 1), subtree("other.example", 1, 2)],
        );
        const reordered = new NameConstraintsSyntax(
            [subtree("b.example"), subtree("a.example")],
            [subtree("other.example", 1, 2), subtree("deny.example", undefined, 1)],
        );
        const differentBounds = new NameConstraintsSyntax(
            [subtree("b.example"), subtree("a.example", 1)],
            [subtree("other.example", 1, 2), subtree("deny.example", 0, 1)],
        );
        const duplicate = new NameConstraintsSyntax(
            [subtree("a.example"), subtree("a.example")],
            [subtree("deny.example")],
        );
        expect(a.isEqualTo(reordered)).toBe(false);
        expect(a.isEqualTo(reordered, undefined, ignoreOrder)).toBe(true);
        expect(reordered.isEqualTo(a, undefined, ignoreOrder)).toBe(true);
        expect(a.isEqualTo(reordered, undefined, { ignoreSubtreeOrder: false })).toBe(false);
        expect(a.isEqualTo(differentBounds, undefined, ignoreOrder)).toBe(false);
        expect(duplicate.isEqualTo(
            new NameConstraintsSyntax([subtree("a.example"), subtree("b.example")], [subtree("deny.example")]),
            undefined,
            ignoreOrder,
        )).toBe(false);
        expect(duplicate.isEqualTo(
            new NameConstraintsSyntax([subtree("A.Example"), subtree("a.example")], [subtree("deny.example")]),
            undefined,
            ignoreOrder,
        )).toBe(false);
        expect(a.isEqualTo(
            new NameConstraintsSyntax(undefined, a.excludedSubtrees),
            undefined,
            ignoreOrder,
        )).toBe(false);
    });
});
