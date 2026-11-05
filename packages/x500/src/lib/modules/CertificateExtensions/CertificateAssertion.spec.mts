import { CertificateAssertion } from "./CertificateAssertion.ta.mjs";
import { CertificateExactAssertion } from "./CertificateExactAssertion.ta.mjs";
import { CertificateListAssertion } from "./CertificateListAssertion.ta.mjs";
import { CertificatePairAssertion } from "./CertificatePairAssertion.ta.mjs";
import { CertificatePairExactAssertion } from "./CertificatePairExactAssertion.ta.mjs";
import { EnhancedCertificateAssertion } from "./EnhancedCertificateAssertion.ta.mjs";

const emptyName = { rdnSequence: [] };
const serial = new Uint8Array([1]);
const exact = new CertificateExactAssertion(serial, emptyName);

describe("certificate matching assertion isEmpty", () => {
    it("CertificateAssertion is empty only with no components", () => {
        expect(new CertificateAssertion().isEmpty()).toBe(true);
        expect(new CertificateAssertion(serial).isEmpty()).toBe(false);
    });

    it("EnhancedCertificateAssertion is empty only with no components", () => {
        expect(new EnhancedCertificateAssertion().isEmpty()).toBe(true);
        expect(new EnhancedCertificateAssertion(serial).isEmpty()).toBe(false);
    });

    it("CertificateListAssertion is empty only with no components", () => {
        expect(new CertificateListAssertion().isEmpty()).toBe(true);
        expect(new CertificateListAssertion(emptyName).isEmpty()).toBe(false);
    });

    it("CertificatePairAssertion treats empty nested assertions as empty", () => {
        expect(new CertificatePairAssertion().isEmpty()).toBe(true);
        expect(new CertificatePairAssertion(new CertificateAssertion()).isEmpty())
            .toBe(true);
        expect(new CertificatePairAssertion(new CertificateAssertion(serial))
            .isEmpty()).toBe(false);
    });

    it("CertificatePairExactAssertion is empty when both sides are absent", () => {
        expect(new CertificatePairExactAssertion().isEmpty()).toBe(true);
        expect(new CertificatePairExactAssertion(exact).isEmpty()).toBe(false);
    });
});
