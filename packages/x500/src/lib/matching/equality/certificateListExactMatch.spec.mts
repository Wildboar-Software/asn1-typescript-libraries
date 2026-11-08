import { ObjectIdentifier } from "@wildboar/asn1";
import { DER, _encodeUTF8String } from "@wildboar/asn1/functional";
import { AlgorithmIdentifier } from "../../modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import { type CertificateList, _encode_CertificateList } from "../../modules/AuthenticationFramework/CertificateList.ta.mjs";
import { CertificateListContent } from "../../modules/AuthenticationFramework/CertificateListContent.ta.mjs";
import { Extension } from "../../modules/AuthenticationFramework/Extension.ta.mjs";
import { SIGNED } from "../../modules/AuthenticationFramework/SIGNED.ta.mjs";
import type { Time } from "../../modules/AuthenticationFramework/Time.ta.mjs";
import { Version_v2 } from "../../modules/AuthenticationFramework/Version.ta.mjs";
import { CertificateListExactAssertion, _encode_CertificateListExactAssertion } from "../../modules/CertificateExtensions/CertificateListExactAssertion.ta.mjs";
import type { DistributionPointName } from "../../modules/CertificateExtensions/DistributionPointName.ta.mjs";
import { id_ce_issuingDistributionPoint } from "../../modules/CertificateExtensions/id-ce-issuingDistributionPoint.va.mjs";
import { IssuingDistPointSyntax, _encode_IssuingDistPointSyntax } from "../../modules/CertificateExtensions/IssuingDistPointSyntax.ta.mjs";
import { AttributeTypeAndValue } from "../../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import { MATCH_FLAG_APPROXIMATE, MATCH_FLAG_CONSTANT_TIME } from "../../types/matching.mjs";
import { certificateListExactMatch, certificateListExactMatchTyped } from "./certificateListExactMatch.mjs";

const algorithm = new AlgorithmIdentifier(ObjectIdentifier.fromString("1.2.840.113549.1.1.11"));
const commonName = ObjectIdentifier.fromString("2.5.4.3");
const issuer = { rdnSequence: [[new AttributeTypeAndValue(commonName, _encodeUTF8String("CRL issuer", DER))]] };
const instant = new Date("2026-01-01T12:00:00Z");
const thisUpdate: Time = { utcTime: instant };
const relativeName = [new AttributeTypeAndValue(commonName, _encodeUTF8String("Distribution point", DER))];
const otherRelativeName = [new AttributeTypeAndValue(commonName, _encodeUTF8String("Other point", DER))];

function makeCRL(time: Time = thisUpdate, idp?: IssuingDistPointSyntax): CertificateList {
    const extensions = idp ? [new Extension(
        id_ce_issuingDistributionPoint,
        true,
        _encode_IssuingDistPointSyntax(idp, DER).toBytes(),
    )] : undefined;
    return new SIGNED(new CertificateListContent(
        Version_v2, algorithm, issuer, time, undefined, undefined, [], extensions,
    ), algorithm, new Uint8ClampedArray([0]));
}

function expectMatch(assertion: CertificateListExactAssertion, crl: CertificateList, expected: boolean, flags: number): void {
    const encoded = _encode_CertificateList(crl, DER);
    expect(certificateListExactMatchTyped(assertion, crl, undefined, flags)).toBe(expected);
    expect(certificateListExactMatchTyped(assertion, encoded, undefined, flags)).toBe(expected);
    expect(certificateListExactMatch(
        _encode_CertificateListExactAssertion(assertion, DER),
        new AttributeTypeAndValue(ObjectIdentifier.fromString("2.5.4.39"), encoded),
        undefined, flags,
    )).toBe(expected);
}

describe.each([
    0, MATCH_FLAG_CONSTANT_TIME, MATCH_FLAG_APPROXIMATE, MATCH_FLAG_APPROXIMATE | MATCH_FLAG_CONSTANT_TIME,
])("certificateListExactMatch (M12), flags %i", (flags) => {
    describe.each(["utcTime", "generalizedTime"] as const)("stored Time.%s", (storedForm) => {
        it.each(["utcTime", "generalizedTime"] as const)("compares asserted Time.%s by timestamp", (assertedForm) => {
            const crl = makeCRL({ [storedForm]: new Date(instant) } as Time);
            for (const seconds of [-2, -1, 0, 1, 2]) {
                const assertedTime = { [assertedForm]: new Date(instant.valueOf() + seconds * 1000) } as Time;
                const expected = (flags & MATCH_FLAG_APPROXIMATE) ? Math.abs(seconds) <= 1 : seconds === 0;
                expectMatch(new CertificateListExactAssertion(issuer, assertedTime), crl, expected, flags);
            }
        });
    });

    it.each<{
        description: string;
        asserted: DistributionPointName;
        stored?: IssuingDistPointSyntax;
        expected: boolean;
    }>([
        {
            description: "identical full names",
            asserted: { fullName: [{ dNSName: "point.example" }] },
            stored: new IssuingDistPointSyntax({ fullName: [{ dNSName: "point.example" }] }),
            expected: true,
        },
        {
            description: "disjoint values in the same name form",
            asserted: { fullName: [{ dNSName: "other.example" }] },
            stored: new IssuingDistPointSyntax({ fullName: [{ dNSName: "point.example" }] }),
            expected: false,
        },
        {
            description: "disjoint name forms",
            asserted: { fullName: [{ uniformResourceIdentifier: "https://point.example/crl" }] },
            stored: new IssuingDistPointSyntax({ fullName: [{ dNSName: "point.example" }] }),
            expected: false,
        },
        {
            // X.509 13.3.5 requires only one shared name, even with different
            // list lengths/order. DNS case normalization must still apply.
            description: "one shared name among otherwise different full-name lists",
            asserted: { fullName: [{ dNSName: "other.example" }, { dNSName: "POINT.EXAMPLE" }] },
            stored: new IssuingDistPointSyntax({ fullName: [
                { uniformResourceIdentifier: "https://point.example/crl" },
                { dNSName: "point.example" },
                { rfc822Name: "admin@example.com" },
            ] }),
            expected: true,
        },
        {
            description: "a matching URI name form",
            asserted: { fullName: [{ uniformResourceIdentifier: "HTTPS://POINT.EXAMPLE/crl" }] },
            stored: new IssuingDistPointSyntax({ fullName: [
                { dNSName: "point.example" },
                { uniformResourceIdentifier: "https://point.example/crl" },
            ] }),
            expected: true,
        },
        {
            description: "a missing issuingDistributionPoint extension",
            asserted: { fullName: [{ dNSName: "point.example" }] },
            expected: false,
        },
        {
            description: "an extension with no distributionPoint field",
            asserted: { fullName: [{ dNSName: "point.example" }] },
            stored: new IssuingDistPointSyntax(undefined, true),
            expected: false,
        },
        {
            description: "equal relative names",
            asserted: { nameRelativeToCRLIssuer: relativeName },
            stored: new IssuingDistPointSyntax({ nameRelativeToCRLIssuer: relativeName }),
            expected: true,
        },
        {
            description: "different relative names",
            asserted: { nameRelativeToCRLIssuer: otherRelativeName },
            stored: new IssuingDistPointSyntax({ nameRelativeToCRLIssuer: relativeName }),
            expected: false,
        },
        {
            description: "a relative-name assertion against a stored full name",
            asserted: { nameRelativeToCRLIssuer: relativeName },
            stored: new IssuingDistPointSyntax({ fullName: [{ dNSName: "point.example" }] }),
            expected: false,
        },
        {
            description: "a full-name assertion against a stored relative name",
            asserted: { fullName: [{ dNSName: "point.example" }] },
            stored: new IssuingDistPointSyntax({ nameRelativeToCRLIssuer: relativeName }),
            expected: false,
        },
    ])("checks $description for encoded and decoded inputs", ({ asserted, stored, expected }) => {
        expectMatch(new CertificateListExactAssertion(issuer, thisUpdate, asserted), makeCRL(thisUpdate, stored), expected, flags);
    });

    it("still requires the asserted issuer to match", () => {
        const otherIssuer = { rdnSequence: [[new AttributeTypeAndValue(commonName, _encodeUTF8String("Other issuer", DER))]] };
        expectMatch(new CertificateListExactAssertion(otherIssuer, thisUpdate), makeCRL(), false, flags);
    });

    it("leaves distributionPoint unconstrained when the assertion omits it", () => {
        const idp = new IssuingDistPointSyntax({ fullName: [{ dNSName: "point.example" }] });
        expectMatch(new CertificateListExactAssertion(issuer, thisUpdate), makeCRL(thisUpdate, idp), true, flags);
    });
});
