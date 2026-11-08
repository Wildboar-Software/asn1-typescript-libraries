import { ASN1Construction, ASN1TagClass, DERElement, ObjectIdentifier, type INTEGER } from "@wildboar/asn1";
import { DER, _encodeInteger, _encodeUTF8String } from "@wildboar/asn1/functional";
import { AlgorithmIdentifier } from "../../modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import { type CertificateList, _encode_CertificateList } from "../../modules/AuthenticationFramework/CertificateList.ta.mjs";
import { CertificateListContent } from "../../modules/AuthenticationFramework/CertificateListContent.ta.mjs";
import { Extension } from "../../modules/AuthenticationFramework/Extension.ta.mjs";
import { SIGNED } from "../../modules/AuthenticationFramework/SIGNED.ta.mjs";
import { Version_v2 } from "../../modules/AuthenticationFramework/Version.ta.mjs";
import { CertificateListAssertion, _encode_CertificateListAssertion } from "../../modules/CertificateExtensions/CertificateListAssertion.ta.mjs";
import type { DistributionPointName } from "../../modules/CertificateExtensions/DistributionPointName.ta.mjs";
import { id_ce_cRLNumber } from "../../modules/CertificateExtensions/id-ce-cRLNumber.va.mjs";
import { id_ce_issuingDistributionPoint } from "../../modules/CertificateExtensions/id-ce-issuingDistributionPoint.va.mjs";
import { IssuingDistPointSyntax, _encode_IssuingDistPointSyntax } from "../../modules/CertificateExtensions/IssuingDistPointSyntax.ta.mjs";
import { AttributeTypeAndValue } from "../../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import { MATCH_FLAG_APPROXIMATE, MATCH_FLAG_CONSTANT_TIME } from "../../types/matching.mjs";
import { certificateListMatch, certificateListMatchTyped } from "./certificateListMatch.mjs";

const algorithm = new AlgorithmIdentifier(ObjectIdentifier.fromString("1.2.840.113549.1.1.11"));
const commonName = ObjectIdentifier.fromString("2.5.4.3");
const issuer = { rdnSequence: [[new AttributeTypeAndValue(commonName, _encodeUTF8String("CRL issuer", DER))]] };
const relative = { nameRelativeToCRLIssuer: [new AttributeTypeAndValue(commonName, _encodeUTF8String("Point", DER))] };
const otherRelative = { nameRelativeToCRLIssuer: [new AttributeTypeAndValue(commonName, _encodeUTF8String("Other point", DER))] };
const full = { fullName: [{ dNSName: "point.example" }] };

function unknownName(content: number): DERElement {
    const element = new DERElement();
    element.tagClass = ASN1TagClass.context;
    element.tagNumber = 9;
    element.construction = ASN1Construction.primitive;
    element.value = new Uint8Array([content]);
    return element;
}

function makeCRL({ number, idp }: { number?: INTEGER; idp?: IssuingDistPointSyntax } = {}): CertificateList {
    const extensions: Extension[] = [];
    if (number !== undefined) {
        extensions.push(new Extension(id_ce_cRLNumber, false, _encodeInteger(number, DER).toBytes()));
    }
    if (idp) {
        extensions.push(new Extension(id_ce_issuingDistributionPoint, true, _encode_IssuingDistPointSyntax(idp, DER).toBytes()));
    }
    return new SIGNED(new CertificateListContent(
        Version_v2, algorithm, issuer, { utcTime: new Date("2026-01-01T00:00:00Z") },
        undefined, undefined, [], extensions.length ? extensions : undefined,
    ), algorithm, new Uint8ClampedArray([0]));
}

function expectMatch(assertion: CertificateListAssertion, crl: CertificateList, expected: boolean, flags: number): void {
    const encoded = _encode_CertificateList(crl, DER);
    expect(certificateListMatchTyped(assertion, crl, undefined, flags)).toBe(expected);
    expect(certificateListMatchTyped(assertion, encoded, undefined, flags)).toBe(expected);
    expect(certificateListMatch(
        _encode_CertificateListAssertion(assertion, DER),
        new AttributeTypeAndValue(ObjectIdentifier.fromString("2.5.4.39"), encoded),
        undefined, flags,
    )).toBe(expected);
}

describe.each([
    0, MATCH_FLAG_CONSTANT_TIME, MATCH_FLAG_APPROXIMATE, MATCH_FLAG_APPROXIMATE | MATCH_FLAG_CONSTANT_TIME,
])("certificateListMatch restrictions (M13), flags %i", (flags) => {
    it.each<{
        description: string;
        min?: INTEGER;
        max?: INTEGER;
        stored?: INTEGER;
        exact: boolean;
        approximate: boolean;
    }>([
        { description: "zero minimum requires an extension", min: 0, exact: false, approximate: false },
        { description: "bigint zero minimum requires an extension", min: 0n, exact: false, approximate: false },
        { description: "zero maximum requires an extension", max: 0, exact: false, approximate: false },
        { description: "bigint zero maximum requires an extension", max: 0n, exact: false, approximate: false },
        { description: "zero maximum accepts zero", max: 0, stored: 0n, exact: true, approximate: true },
        { description: "bigint zero maximum accepts zero", max: 0n, stored: 0, exact: true, approximate: true },
        { description: "zero maximum rejects one except approximately", max: 0, stored: 1, exact: false, approximate: true },
        { description: "zero maximum rejects two in all modes", max: 0n, stored: 2n, exact: false, approximate: false },
        { description: "zero minimum accepts positive numbers", min: 0n, stored: 2, exact: true, approximate: true },
        { description: "equal zero bounds accept zero", min: 0n, max: 0, stored: 0, exact: true, approximate: true },
        { description: "equal zero bounds constrain positive numbers", min: 0, max: 0n, stored: 2, exact: false, approximate: false },
        { description: "nonzero minimum remains inclusive", min: 5n, stored: 5, exact: true, approximate: true },
        { description: "nonzero minimum still rejects a lower number", min: 5, stored: 3n, exact: false, approximate: false },
        { description: "omitted bounds do not require an extension", exact: true, approximate: true },
    ])("$description", ({ min, max, stored, exact, approximate }) => {
        // X.509 13.3.6: zero is a present bound, and any present bound
        // requires a CRL-number extension. Approximate mode retains ±1.
        const assertion = new CertificateListAssertion(issuer, min, max);
        expectMatch(assertion, makeCRL({ number: stored }), (flags & MATCH_FLAG_APPROXIMATE) ? approximate : exact, flags);
    });

    it.each<{
        description: string;
        asserted: DistributionPointName;
        stored: DistributionPointName;
        expected: boolean;
    }>([
        { description: "equal full names", asserted: full, stored: full, expected: true },
        { description: "different full names", asserted: full, stored: { fullName: [{ dNSName: "other.example" }] }, expected: false },
        {
            description: "one shared name among different name lists",
            asserted: { fullName: [{ dNSName: "other.example" }, { dNSName: "POINT.EXAMPLE" }] },
            stored: { fullName: [{ uniformResourceIdentifier: "https://point.example/crl" }, { dNSName: "point.example" }, { rfc822Name: "admin@example.com" }] },
            expected: true,
        },
        { description: "equal relative names", asserted: relative, stored: relative, expected: true },
        { description: "different relative names", asserted: relative, stored: otherRelative, expected: false },
        { description: "full against relative", asserted: full, stored: relative, expected: false },
        { description: "relative against full", asserted: relative, stored: full, expected: false },
        { description: "full against unknown", asserted: full, stored: unknownName(1), expected: false },
        { description: "relative against unknown", asserted: relative, stored: unknownName(1), expected: false },
        { description: "unknown against full", asserted: unknownName(1), stored: full, expected: false },
        { description: "unknown against relative", asserted: unknownName(1), stored: relative, expected: false },
        { description: "different unknown encodings", asserted: unknownName(1), stored: unknownName(2), expected: false },
        { description: "equal unknown encodings", asserted: unknownName(1), stored: unknownName(1), expected: true },
    ])("checks $description without ignoring the distribution point", ({ asserted, stored, expected }) => {
        const assertion = new CertificateListAssertion(issuer, undefined, undefined, undefined, undefined, asserted);
        expectMatch(assertion, makeCRL({ idp: new IssuingDistPointSyntax(stored) }), expected, flags);
    });

    it("requires the distribution point extension and its distributionPoint field when asserted", () => {
        const assertion = new CertificateListAssertion(issuer, undefined, undefined, undefined, undefined, full);
        expectMatch(assertion, makeCRL(), false, flags);
        expectMatch(assertion, makeCRL({ idp: new IssuingDistPointSyntax(undefined, true) }), false, flags);
    });
});
