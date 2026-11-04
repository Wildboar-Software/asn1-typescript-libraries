import { GeneralSubtree } from "./GeneralSubtree.ta.mjs";
import { NameConstraintsSyntax } from "./NameConstraintsSyntax.ta.mjs";

function subtree (name: string, minimum?: number, maximum?: number): GeneralSubtree {
    return new GeneralSubtree({ dNSName: name }, minimum, maximum);
}

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
});
