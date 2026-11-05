import { AttributeCertificateAssertion } from "./AttributeCertificateAssertion.ta.mjs";
import { AttCertIssuer } from "./AttCertIssuer.ta.mjs";
import { Holder } from "./Holder.ta.mjs";
import { HolderIssuerAssertion } from "./HolderIssuerAssertion.ta.mjs";

describe("attribute certificate assertion isEmpty", () => {
    it("AttributeCertificateAssertion is empty with no components", () => {
        expect(new AttributeCertificateAssertion().isEmpty()).toBe(true);
        expect(new AttributeCertificateAssertion(undefined, []).isEmpty())
            .toBe(true);
        expect(new AttributeCertificateAssertion(
            undefined,
            [{ dNSName: "aa.example" }],
        ).isEmpty()).toBe(false);
    });

    it("HolderIssuerAssertion is empty when both sides are absent or empty", () => {
        expect(new HolderIssuerAssertion().isEmpty()).toBe(true);
        expect(new HolderIssuerAssertion(new Holder()).isEmpty()).toBe(true);
        expect(new HolderIssuerAssertion(
            new Holder(undefined, [{ dNSName: "holder.example" }]),
        ).isEmpty()).toBe(false);
        expect(new HolderIssuerAssertion(
            undefined,
            new AttCertIssuer([{ dNSName: "issuer.example" }]),
        ).isEmpty()).toBe(false);
    });
});
