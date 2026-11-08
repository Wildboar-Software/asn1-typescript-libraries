import compareGeneralNames from "./compareGeneralNames.mjs";
import type { GeneralNames } from "../modules/CertificateExtensions/GeneralNames.ta.mjs";
import { _encodeUTF8String } from "@wildboar/asn1/functional";

/**
 * Equality is a multiset comparison, so both argument orders must agree.
 */
function expectSymmetric (a: GeneralNames, b: GeneralNames, equal: boolean): void {
    expect(compareGeneralNames(a, b)).toBe(equal);
    expect(compareGeneralNames(b, a)).toBe(equal);
}

describe("compareGeneralNames()", () => {
    it("preserves repeated names in multiset equality (M18)", () => {
        expectSymmetric(
            [{ dNSName: "a.example" }, { dNSName: "a.example" }, { dNSName: "b.example" }],
            [{ dNSName: "b.example" }, { dNSName: "a.example" }, { dNSName: "a.example" }],
            true,
        );
        expectSymmetric(
            [{ dNSName: "a.example" }, { dNSName: "a.example" }, { dNSName: "b.example" }],
            [{ dNSName: "a.example" }, { dNSName: "b.example" }, { dNSName: "b.example" }],
            false,
        );
    });

    it("matches identical sequences", () => {
        const names: GeneralNames = [
            { dNSName: "a.example" },
            { rfc822Name: "user@example" },
        ];
        expectSymmetric(names, [ ...names ], true);
    });

    it("matches the same names regardless of order", () => {
        const a: GeneralNames = [
            { dNSName: "a.example" },
            { rfc822Name: "user@example" },
            { dNSName: "b.example" },
        ];
        const b: GeneralNames = [
            { dNSName: "b.example" },
            { dNSName: "a.example" },
            { rfc822Name: "user@example" },
        ];
        expectSymmetric(a, b, true);
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
        expectSymmetric(a, b, false);
    });

    it("rejects sequences of different lengths", () => {
        expectSymmetric(
            [ { dNSName: "a.example" } ],
            [ { dNSName: "a.example" }, { dNSName: "b.example" } ],
            false,
        );
    });
});
