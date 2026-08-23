import { describe, expect, it, vi } from "vitest";
import { AttCertIssuer } from "./AttCertIssuer.ta.mjs";
import { AttCertValidityPeriod } from "./AttCertValidityPeriod.ta.mjs";
import { Holder } from "./Holder.ta.mjs";
import { v2 } from "./AttCertVersion.ta.mjs";

vi.mock("./AlgorithmIdentifier.ta.mjs", () => ({
    AlgorithmIdentifier: class AlgorithmIdentifier {},
    _decode_AlgorithmIdentifier: () => undefined,
    _encode_AlgorithmIdentifier: () => undefined,
}));

import { TBSAttributeCertificate } from "./TBSAttributeCertificate.ta.mjs";

const notBeforeTime = new Date("2020-01-01T00:00:00.000Z");
const notAfterTime = new Date("2021-01-01T00:00:00.000Z");

function tbsAttributeCertificate(): TBSAttributeCertificate {
    return new TBSAttributeCertificate(
        v2,
        new Holder(undefined, [{ dNSName: "holder.example" }]),
        new AttCertIssuer([{ dNSName: "issuer.example" }]),
        {} as TBSAttributeCertificate["signature"],
        new Uint8Array([1]),
        new AttCertValidityPeriod(notBeforeTime, notAfterTime),
        [],
    );
}

describe("TBSAttributeCertificate.isWithinValidityPeriodAt()", () => {
    it("returns true for a Date strictly inside the attribute certificate validity", () => {
        expect(tbsAttributeCertificate().isWithinValidityPeriodAt(new Date("2020-06-01T00:00:00.000Z"))).toBe(true);
    });

    it("returns true for Dates equal to notBeforeTime and notAfterTime", () => {
        const value = tbsAttributeCertificate();
        expect(value.isWithinValidityPeriodAt(notBeforeTime)).toBe(true);
        expect(value.isWithinValidityPeriodAt(notAfterTime)).toBe(true);
    });

    it("returns false for Dates outside the attribute certificate validity", () => {
        const value = tbsAttributeCertificate();
        expect(value.isWithinValidityPeriodAt(new Date("2019-12-31T23:59:59.999Z"))).toBe(false);
        expect(value.isWithinValidityPeriodAt(new Date("2021-01-01T00:00:00.001Z"))).toBe(false);
    });
});
