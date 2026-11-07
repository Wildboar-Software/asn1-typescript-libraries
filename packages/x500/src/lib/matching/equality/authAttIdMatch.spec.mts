import { ObjectIdentifier } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import { SIGNED } from "../../modules/AuthenticationFramework/SIGNED.ta.mjs";
import { AlgorithmIdentifier } from "../../modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import { Extension } from "../../modules/AuthenticationFramework/Extension.ta.mjs";
import { AttributeTypeAndValue } from "../../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import {
    type AttributeCertificate,
    _encode_AttributeCertificate,
} from "../../modules/AttributeCertificateDefinitions/AttributeCertificate.ta.mjs";
import { TBSAttributeCertificate } from "../../modules/AttributeCertificateDefinitions/TBSAttributeCertificate.ta.mjs";
import { Holder } from "../../modules/AttributeCertificateDefinitions/Holder.ta.mjs";
import { AttCertIssuer } from "../../modules/AttributeCertificateDefinitions/AttCertIssuer.ta.mjs";
import { AttCertValidityPeriod } from "../../modules/AttributeCertificateDefinitions/AttCertValidityPeriod.ta.mjs";
import { AttCertVersion_v2 } from "../../modules/AttributeCertificateDefinitions/AttCertVersion.ta.mjs";
import { IssuerSerial } from "../../modules/AttributeCertificateDefinitions/IssuerSerial.ta.mjs";
import { _encode_AuthorityAttributeIdentifierSyntax } from "../../modules/AttributeCertificateDefinitions/AuthorityAttributeIdentifierSyntax.ta.mjs";
import { id_ce_authorityAttributeIdentifier } from "../../modules/AttributeCertificateDefinitions/id-ce-authorityAttributeIdentifier.va.mjs";
import { id_ce_basicAttConstraints } from "../../modules/AttributeCertificateDefinitions/id-ce-basicAttConstraints.va.mjs";
import { MATCH_FLAG_CONSTANT_TIME } from "../../types/matching.mjs";
import { authAttIdMatch, authAttIdMatchTyped } from "./authAttIdMatch.mjs";

const signatureAlgorithm = new AlgorithmIdentifier(ObjectIdentifier.fromString("1.2.840.113549.1.1.11"));
const attributeCertificateType = ObjectIdentifier.fromString("2.5.4.58");

function certificateWithExtensions (extensions?: Extension[]): AttributeCertificate {
    return new SIGNED(new TBSAttributeCertificate(
        AttCertVersion_v2,
        new Holder(undefined, [{ dNSName: "holder.example" }]),
        new AttCertIssuer([{ dNSName: "issuer.example" }]),
        signatureAlgorithm,
        new Uint8Array([1]),
        new AttCertValidityPeriod(new Date("2020-01-01T00:00:00Z"), new Date("2030-01-01T00:00:00Z")),
        [],
        undefined,
        [],
        extensions,
    ), signatureAlgorithm, new Uint8ClampedArray([0]));
}

describe.each([0, MATCH_FLAG_CONSTANT_TIME])("authAttIdMatch (M14), flags %i", (flags) => {
    const pointer = new IssuerSerial([{ dNSName: "authority.example" }], new Uint8Array([7]));
    const assertion = [pointer];
    const encodedIdentifiers = _encode_AuthorityAttributeIdentifierSyntax([pointer], DER);
    const authorityExtension = new Extension(id_ce_authorityAttributeIdentifier, false, encodedIdentifiers.toBytes());

    it("finds authorityAttributeIdentifier in a decoded attribute certificate", () => {
        expect(authAttIdMatchTyped(assertion, certificateWithExtensions([authorityExtension]), undefined, flags)).toBe(true);
    });

    it("matches an encoded attribute certificate through the public Matcher", () => {
        const stored = new AttributeTypeAndValue(
            attributeCertificateType,
            _encode_AttributeCertificate(certificateWithExtensions([authorityExtension]), DER),
        );
        expect(authAttIdMatch(encodedIdentifiers, stored, undefined, flags)).toBe(true);
    });

    it.each([
        { description: "omitted extensions", extensions: undefined },
        { description: "an empty extensions sequence", extensions: [] },
    ])("does not match $description", ({ extensions }) => {
        expect(authAttIdMatchTyped(assertion, certificateWithExtensions(extensions), undefined, flags)).toBe(false);
    });

    // This is based on a bug in the original implementation.
    it("does not interpret the old basicAttConstraints OID as authority identifiers", () => {
        // Deliberately give the wrong extension OID a decodable identifiers payload:
        // accepting it would prove that the lookup selected the wrong extension.
        const decoy = new Extension(id_ce_basicAttConstraints, false, encodedIdentifiers.toBytes());
        expect(authAttIdMatchTyped(assertion, certificateWithExtensions([decoy]), undefined, flags)).toBe(false);
    });

    it("rejects a different issuer-serial pointer", () => {
        const otherPointer = new IssuerSerial([{ dNSName: "authority.example" }], new Uint8Array([8]));
        expect(authAttIdMatchTyped([otherPointer], certificateWithExtensions([authorityExtension]), undefined, flags)).toBe(false);
    });

    it("rejects a different issuer UID even when the name and serial match (M16)", () => {
        const presented = new IssuerSerial(
            [{ dNSName: "authority.example" }], new Uint8Array([7]), new Uint8ClampedArray([1, 0]),
        );
        const storedPointer = new IssuerSerial(
            [{ dNSName: "authority.example" }], new Uint8Array([7]), new Uint8ClampedArray([0, 1]),
        );
        const extension = new Extension(
            id_ce_authorityAttributeIdentifier, false,
            _encode_AuthorityAttributeIdentifierSyntax([storedPointer], DER).toBytes(),
        );
        expect(authAttIdMatchTyped([presented], certificateWithExtensions([extension]), undefined, flags)).toBe(false);
    });
});
