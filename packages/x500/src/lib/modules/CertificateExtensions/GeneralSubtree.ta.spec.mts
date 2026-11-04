import { GeneralSubtree } from "./GeneralSubtree.ta.mjs";

describe("GeneralSubtree.isEqualTo()", () => {
    it("matches the same base and applies DEFAULT minimum 0", () => {
        const explicit = new GeneralSubtree({ dNSName: "example" }, 0);
        const implicit = new GeneralSubtree({ dNSName: "example" });
        expect(explicit.isEqualTo(implicit)).toBe(true);
        expect(implicit.isEqualTo(explicit)).toBe(true);
    });

    it("matches the same maximum bound", () => {
        const a = new GeneralSubtree({ dNSName: "example" }, 0, 2);
        const b = new GeneralSubtree({ dNSName: "example" }, undefined, 2);
        expect(a.isEqualTo(b)).toBe(true);
    });

    it("does not match a different base, minimum, or maximum", () => {
        const a = new GeneralSubtree({ dNSName: "example" }, 1, 3);
        expect(a.isEqualTo(new GeneralSubtree({ dNSName: "other.example" }, 1, 3)))
            .toBe(false);
        expect(a.isEqualTo(new GeneralSubtree({ dNSName: "example" }, 0, 3)))
            .toBe(false);
        expect(a.isEqualTo(new GeneralSubtree({ dNSName: "example" }, 1)))
            .toBe(false);
    });
});
