import { PolicyConstraintsSyntax } from "./PolicyConstraintsSyntax.ta.mjs";

describe("PolicyConstraintsSyntax.isEmpty", () => {
    it("is true when both skip values are absent", () => {
        expect(new PolicyConstraintsSyntax().isEmpty()).toBe(true);
        expect(new PolicyConstraintsSyntax(0).isEmpty()).toBe(false);
        expect(new PolicyConstraintsSyntax(undefined, 1).isEmpty()).toBe(false);
    });
});
