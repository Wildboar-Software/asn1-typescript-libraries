import { MATCH_FLAG_DEBUG } from "../../types/matching.mjs";
import type { Certificate } from "../../modules/AuthenticationFramework/Certificate.ta.mjs";
import { CertificatePair } from "../../modules/AuthenticationFramework/CertificatePair.ta.mjs";
import { CertificateExactAssertion } from "../../modules/CertificateExtensions/CertificateExactAssertion.ta.mjs";
import { CertificatePairExactAssertion } from "../../modules/CertificateExtensions/CertificatePairExactAssertion.ta.mjs";
import { certificatePairExactMatchTyped } from "./certificatePairExactMatch.mjs";

const issuedTo = new CertificateExactAssertion(
    new Uint8Array([1]),
    { rdnSequence: [] },
);

describe("certificatePairExactMatchTyped", () => {
    it("logs when the stored pair has no fields and MATCH_FLAG_DEBUG is set", () => {
        const spy = vi.spyOn(console, "error").mockImplementation(() => {});
        try {
            const assertion = new CertificatePairExactAssertion(issuedTo);
            expect(certificatePairExactMatchTyped(
                assertion,
                new CertificatePair(),
                undefined,
                MATCH_FLAG_DEBUG,
            )).toBe(false);
            expect(spy).toHaveBeenCalledTimes(1);
            expect(String(spy.mock.calls[0][0])).toContain(
                "value has neither issuedToThisCA nor issuedByThisCA",
            );
        } finally {
            spy.mockRestore();
        }
    });

    it("returns false for an empty stored pair without logging", () => {
        const spy = vi.spyOn(console, "error").mockImplementation(() => {});
        try {
            expect(certificatePairExactMatchTyped(
                new CertificatePairExactAssertion(issuedTo),
                new CertificatePair(),
            )).toBe(false);
            expect(spy).not.toHaveBeenCalled();
        } finally {
            spy.mockRestore();
        }
    });

    it("logs both empty cases when the assertion and the value have no fields", () => {
        const spy = vi.spyOn(console, "error").mockImplementation(() => {});
        try {
            expect(certificatePairExactMatchTyped(
                new CertificatePairExactAssertion(),
                new CertificatePair(),
                undefined,
                MATCH_FLAG_DEBUG,
            )).toBe(false);
            expect(spy).toHaveBeenCalledTimes(2);
            expect(String(spy.mock.calls[0][0])).toContain("assertion has neither");
            expect(String(spy.mock.calls[1][0])).toContain(
                "value has neither issuedToThisCA nor issuedByThisCA",
            );
        } finally {
            spy.mockRestore();
        }
    });

    it("does not log when the stored pair has a certificate", () => {
        const spy = vi.spyOn(console, "error").mockImplementation(() => {});
        try {
            const value = new CertificatePair({} as Certificate);
            expect(certificatePairExactMatchTyped(
                new CertificatePairExactAssertion(undefined, issuedTo),
                value,
                undefined,
                MATCH_FLAG_DEBUG,
            )).toBe(false);
            expect(spy).not.toHaveBeenCalled();
        } finally {
            spy.mockRestore();
        }
    });
});
