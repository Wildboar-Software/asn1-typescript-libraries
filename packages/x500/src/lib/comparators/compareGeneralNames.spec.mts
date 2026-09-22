import compareGeneralNames from "./compareGeneralNames.mjs";
import type { GeneralNames } from "../modules/CertificateExtensions/GeneralNames.ta.mjs";

describe("compareGeneralNames()", () => {
    it("matches the same names regardless of order", () => {
        const a: GeneralNames = [
            { dNSName: "a.example" },
            { dNSName: "b.example" },
        ];
        const b: GeneralNames = [
            { dNSName: "b.example" },
            { dNSName: "a.example" },
        ];
        expect(compareGeneralNames(a, b)).toBe(true);
    });

    it("does not treat a duplicate as covering a missing name", () => {
        const a: GeneralNames = [
            { dNSName: "a.example" },
            { dNSName: "a.example" },
        ];
        const b: GeneralNames = [
            { dNSName: "a.example" },
            { dNSName: "b.example" },
        ];
        expect(compareGeneralNames(a, b)).toBe(false);
    });
});
