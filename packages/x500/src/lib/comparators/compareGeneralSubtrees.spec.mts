import { _encodeUTF8String } from "@wildboar/asn1/functional";
import { GeneralSubtree } from "../modules/CertificateExtensions/GeneralSubtree.ta.mjs";
import { NameConstraintsSyntax } from "../modules/CertificateExtensions/NameConstraintsSyntax.ta.mjs";
import { compareGeneralSubtrees } from "./compareGeneralSubtrees.mjs";
import { compareNameConstraintsSyntax } from "./compareNameConstraintsSyntax.mjs";

describe("compareGeneralSubtrees (M18)", () => {
    const a = new GeneralSubtree({ dNSName: "a.example" });
    const b = new GeneralSubtree({ dNSName: "b.example" });

    it("keeps the default ordered comparison", () => {
        expect(compareGeneralSubtrees([a, b], [b, a])).toBe(false);
        expect(compareGeneralSubtrees([a, a], [a, a])).toBe(true);
    });

    it("matches reordered multisets without collapsing repeated subtrees", () => {
        expect(compareGeneralSubtrees([a, a, b], [b, a, a], undefined, false)).toBe(true);
        expect(compareGeneralSubtrees([b, a, a], [a, a, b], undefined, false)).toBe(true);
        expect(compareGeneralSubtrees([a, a, b], [a, b, b], undefined, false)).toBe(false);
        expect(compareGeneralSubtrees([a], [a, a], undefined, false)).toBe(false);
    });

    it("includes bounds in each multiset member and accepts numeric INTEGER representations", () => {
        const implicitZero = new GeneralSubtree({ dNSName: "a.example" });
        const explicitZero = new GeneralSubtree({ dNSName: "a.example" }, 0n);
        const baseOnly = new GeneralSubtree({ dNSName: "a.example" }, 0, 0n);
        const deeper = new GeneralSubtree({ dNSName: "a.example" }, 1);
        expect(compareGeneralSubtrees([implicitZero], [explicitZero], undefined, false)).toBe(true);
        expect(compareGeneralSubtrees([implicitZero], [baseOnly], undefined, false)).toBe(false);
        expect(compareGeneralSubtrees([implicitZero], [deeper], undefined, false)).toBe(false);
    });

    it("preserves duplicate permitted subtrees through NameConstraintsSyntax comparison", () => {
        const left = new NameConstraintsSyntax([a, a, b]);
        const right = new NameConstraintsSyntax([b, a, a]);
        expect(compareNameConstraintsSyntax(left, right, undefined, { ignoreSubtreeOrder: true })).toBe(true);
        expect(compareNameConstraintsSyntax(left, right)).toBe(false);
    });
});
