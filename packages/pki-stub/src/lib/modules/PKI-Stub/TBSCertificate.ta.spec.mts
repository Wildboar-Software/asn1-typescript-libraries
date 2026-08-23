import { describe, expect, it, vi } from "vitest";
import { Validity } from "./Validity.ta.mjs";

vi.mock("./AlgorithmIdentifier.ta.mjs", () => ({
    AlgorithmIdentifier: class AlgorithmIdentifier {},
    _decode_AlgorithmIdentifier: () => undefined,
    _encode_AlgorithmIdentifier: () => undefined,
}));

import { TBSCertificate } from "./TBSCertificate.ta.mjs";

const notBefore = new Date("2020-01-01T00:00:00.000Z");
const notAfter = new Date("2021-01-01T00:00:00.000Z");

function tbsCertificate(): TBSCertificate {
    return new TBSCertificate(
        undefined,
        new Uint8Array([1]),
        {} as TBSCertificate["signature"],
        { rdnSequence: [] },
        new Validity(
            { utcTime: notBefore },
            { generalizedTime: notAfter },
        ),
        { rdnSequence: [] },
        {} as TBSCertificate["subjectPublicKeyInfo"],
    );
}

describe("TBSCertificate.isWithinValidityPeriodAt()", () => {
    it("returns true for a Date strictly inside the certificate validity", () => {
        expect(tbsCertificate().isWithinValidityPeriodAt(new Date("2020-06-01T00:00:00.000Z"))).toBe(true);
    });

    it("returns true for Dates equal to notBefore and notAfter", () => {
        const value = tbsCertificate();
        expect(value.isWithinValidityPeriodAt(notBefore)).toBe(true);
        expect(value.isWithinValidityPeriodAt(notAfter)).toBe(true);
    });

    it("returns false for Dates outside the certificate validity", () => {
        const value = tbsCertificate();
        expect(value.isWithinValidityPeriodAt(new Date("2019-12-31T23:59:59.999Z"))).toBe(false);
        expect(value.isWithinValidityPeriodAt(new Date("2021-01-01T00:00:00.001Z"))).toBe(false);
    });
});
