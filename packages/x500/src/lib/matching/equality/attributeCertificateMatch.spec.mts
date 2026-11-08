import { ObjectIdentifier } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import { AlgorithmIdentifier } from "../../modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import { SIGNED } from "../../modules/AuthenticationFramework/SIGNED.ta.mjs";
import { _encode_AttributeCertificate } from "../../modules/AttributeCertificateDefinitions/AttributeCertificate.ta.mjs";
import { AttributeCertificateAssertion, _encode_AttributeCertificateAssertion } from "../../modules/AttributeCertificateDefinitions/AttributeCertificateAssertion.ta.mjs";
import { AttCertIssuer } from "../../modules/AttributeCertificateDefinitions/AttCertIssuer.ta.mjs";
import { AttCertValidityPeriod } from "../../modules/AttributeCertificateDefinitions/AttCertValidityPeriod.ta.mjs";
import { AttCertVersion_v2 } from "../../modules/AttributeCertificateDefinitions/AttCertVersion.ta.mjs";
import { Holder } from "../../modules/AttributeCertificateDefinitions/Holder.ta.mjs";
import { TBSAttributeCertificate } from "../../modules/AttributeCertificateDefinitions/TBSAttributeCertificate.ta.mjs";
import { AttributeTypeAndValue } from "../../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import { MATCH_FLAG_APPROXIMATE, MATCH_FLAG_CONSTANT_TIME } from "../../types/matching.mjs";
import { attributeCertificateMatch, attributeCertificateMatchTyped } from "./attributeCertificateMatch.mjs";

const algorithm = new AlgorithmIdentifier(ObjectIdentifier.fromString("1.2.840.113549.1.1.11"));
const notBefore = new Date("2026-01-01T00:00:00Z");
const notAfter = new Date("2026-01-02T00:00:00Z");
const certificate = new SIGNED(new TBSAttributeCertificate(
    AttCertVersion_v2,
    new Holder(undefined, [{ dNSName: "holder.example" }]),
    new AttCertIssuer([{ dNSName: "issuer.example" }]),
    algorithm,
    new Uint8Array([1]),
    new AttCertValidityPeriod(notBefore, notAfter),
    [],
), algorithm, new Uint8ClampedArray([0]));
const encodedCertificate = _encode_AttributeCertificate(certificate, DER);
const storedAttribute = new AttributeTypeAndValue(ObjectIdentifier.fromString("2.5.4.58"), encodedCertificate);

describe.each([
    0, MATCH_FLAG_CONSTANT_TIME, MATCH_FLAG_APPROXIMATE, MATCH_FLAG_APPROXIMATE | MATCH_FLAG_CONSTANT_TIME,
])("attributeCertificateMatch validity (M11), flags %i", (flags) => {
    it.each([
        { description: "before the validity period", time: new Date(notBefore.valueOf() - 2000), exact: false, approximate: false },
        { description: "one second before the start", time: new Date(notBefore.valueOf() - 1000), exact: false, approximate: true },
        { description: "at the inclusive start", time: notBefore, exact: true, approximate: true },
        { description: "inside the validity period", time: new Date("2026-01-01T12:00:00Z"), exact: true, approximate: true },
        { description: "at the inclusive end", time: notAfter, exact: true, approximate: true },
        { description: "one second after the end", time: new Date(notAfter.valueOf() + 1000), exact: false, approximate: true },
        { description: "after the validity period", time: new Date(notAfter.valueOf() + 2000), exact: false, approximate: false },
    ])("checks $description for encoded and decoded inputs", ({ time, exact, approximate }) => {
        // X.509 19.3.2: a presented validity instant must fall within the
        // stored AC's validity period. Approximate mode retains ±1000 ms.
        const assertion = new AttributeCertificateAssertion(undefined, undefined, time);
        const expected = (flags & MATCH_FLAG_APPROXIMATE) ? approximate : exact;
        expect(attributeCertificateMatchTyped(assertion, certificate, undefined, flags)).toBe(expected);
        expect(attributeCertificateMatchTyped(assertion, encodedCertificate, undefined, flags)).toBe(expected);
        expect(attributeCertificateMatch(
            _encode_AttributeCertificateAssertion(assertion, DER), storedAttribute, undefined, flags,
        )).toBe(expected);
    });

    it("checks subsecond bounds for decoded assertions without rounding", () => {
        // The assertion encoder writes whole seconds. Exercise the decoded
        // API separately so encoding does not round the assertion into range.
        for (const time of [new Date(notBefore.valueOf() - 1), new Date(notAfter.valueOf() + 1)]) {
            const assertion = new AttributeCertificateAssertion(undefined, undefined, time);
            const expected = Boolean(flags & MATCH_FLAG_APPROXIMATE);
            expect(attributeCertificateMatchTyped(assertion, certificate, undefined, flags)).toBe(expected);
            expect(attributeCertificateMatchTyped(assertion, encodedCertificate, undefined, flags)).toBe(expected);
        }
    });

    it("leaves validity unconstrained when the assertion omits it", () => {
        const assertion = new AttributeCertificateAssertion(undefined, [{ dNSName: "issuer.example" }]);
        expect(attributeCertificateMatchTyped(assertion, certificate, undefined, flags)).toBe(true);
        expect(attributeCertificateMatch(
            _encode_AttributeCertificateAssertion(assertion, DER), storedAttribute, undefined, flags,
        )).toBe(true);
    });
});
