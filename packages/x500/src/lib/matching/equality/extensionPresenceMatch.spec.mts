import { ObjectIdentifier } from "@wildboar/asn1";
import { DER, _encodeNull, _encodeObjectIdentifier } from "@wildboar/asn1/functional";
import { SIGNED } from "../../modules/AuthenticationFramework/SIGNED.ta.mjs";
import { AlgorithmIdentifier } from "../../modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import { Extension } from "../../modules/AuthenticationFramework/Extension.ta.mjs";
import { AttributeTypeAndValue } from "../../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import { TBSAttributeCertificate } from "../../modules/AttributeCertificateDefinitions/TBSAttributeCertificate.ta.mjs";
import { Holder } from "../../modules/AttributeCertificateDefinitions/Holder.ta.mjs";
import { AttCertIssuer } from "../../modules/AttributeCertificateDefinitions/AttCertIssuer.ta.mjs";
import { AttCertValidityPeriod } from "../../modules/AttributeCertificateDefinitions/AttCertValidityPeriod.ta.mjs";
import { AttCertVersion_v2 } from "../../modules/AttributeCertificateDefinitions/AttCertVersion.ta.mjs";
import { _encode_AttributeCertificate } from "../../modules/AttributeCertificateDefinitions/AttributeCertificate.ta.mjs";
import { MATCH_FLAG_CONSTANT_TIME } from "../../types/matching.mjs";
import { extensionPresenceMatch, extensionPresenceMatchTyped } from "./extensionPresenceMatch.mjs";

const algorithm = new AlgorithmIdentifier(ObjectIdentifier.fromString("1.2.840.113549.1.1.11"));
const wanted = ObjectIdentifier.fromString("1.2.3.4");
const other = ObjectIdentifier.fromString("1.2.3.5");
const payload = _encodeNull(null, DER).toBytes();
const wantedExtension = new Extension(wanted, false, payload);
const otherExtension = new Extension(other, false, payload);

describe.each([0, MATCH_FLAG_CONSTANT_TIME])("AC extension presence (M30), flags %i", (flags) => {
    it.each<{
        description: string;
        extensions: Extension[] | undefined;
        expected: boolean;
    }>([
        { description: "one extension", extensions: [wantedExtension], expected: true },
        { description: "the first of several extensions", extensions: [wantedExtension, otherExtension], expected: true },
        { description: "the last of several extensions", extensions: [otherExtension, wantedExtension], expected: true },
        { description: "no requested extension", extensions: [otherExtension], expected: false },
        { description: "an omitted extensions field", extensions: undefined, expected: false },
        { description: "an empty extensions sequence", extensions: [], expected: false },
    ])("handles $description in encoded and decoded certificates", ({ extensions, expected }) => {
        const certificate = new SIGNED(new TBSAttributeCertificate(
            AttCertVersion_v2,
            new Holder(undefined, [{ dNSName: "holder.example" }]),
            new AttCertIssuer([{ dNSName: "issuer.example" }]),
            algorithm,
            new Uint8Array([1]),
            new AttCertValidityPeriod(new Date("2020-01-01T00:00:00Z"), new Date("2030-01-01T00:00:00Z")),
            [], undefined, [], extensions,
        ), algorithm, new Uint8ClampedArray([0]));
        const encoded = _encode_AttributeCertificate(certificate, DER);
        expect(extensionPresenceMatchTyped(wanted, certificate, undefined, flags)).toBe(expected);
        expect(extensionPresenceMatchTyped(wanted, encoded, undefined, flags)).toBe(expected);
        expect(extensionPresenceMatch(
            _encodeObjectIdentifier(wanted, DER),
            new AttributeTypeAndValue(ObjectIdentifier.fromString("2.5.4.58"), encoded),
            undefined, flags,
        )).toBe(expected);
    });
});
