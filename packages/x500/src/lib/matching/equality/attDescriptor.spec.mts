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
import {
    AttributeDescriptorSyntax,
    _encode_AttributeDescriptorSyntax,
} from "../../modules/AttributeCertificateDefinitions/AttributeDescriptorSyntax.ta.mjs";
import { PrivilegePolicyIdentifier } from "../../modules/AttributeCertificateDefinitions/PrivilegePolicyIdentifier.ta.mjs";
import { id_ce_attributeDescriptor } from "../../modules/AttributeCertificateDefinitions/id-ce-attributeDescriptor.va.mjs";
import { id_ce_basicAttConstraints } from "../../modules/AttributeCertificateDefinitions/id-ce-basicAttConstraints.va.mjs";
import {
    MATCH_FLAG_APPROXIMATE,
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_USED_FOR_NAME,
} from "../../types/matching.mjs";
import { attDescriptor, attDescriptorTyped } from "./attDescriptor.mjs";

const signatureAlgorithm = new AlgorithmIdentifier(ObjectIdentifier.fromString("1.2.840.113549.1.1.11"));
const attributeIdentifier = ObjectIdentifier.fromString("1.2.3.4");
const privilegePolicy = ObjectIdentifier.fromString("1.2.3.5");
const differentPolicy = ObjectIdentifier.fromString("1.2.3.6");
const certificateType = ObjectIdentifier.fromString("2.5.4.62");
const syntax = new TextEncoder().encode("Example ::= INTEGER");
const dominationRule = new PrivilegePolicyIdentifier(privilegePolicy, { content: { uTF8String: "Policy text" } });
const descriptor = new AttributeDescriptorSyntax(attributeIdentifier, syntax, "Example", "Example privilege", dominationRule);

function certificateWithExtensions (extensions?: Extension[]): AttributeCertificate {
    // Attribute descriptor certificates are self-issued and have no attributes.
    return new SIGNED(new TBSAttributeCertificate(
        AttCertVersion_v2,
        new Holder(undefined, [{ dNSName: "soa.example" }]),
        new AttCertIssuer([{ dNSName: "soa.example" }]),
        signatureAlgorithm,
        new Uint8Array([1]),
        new AttCertValidityPeriod(new Date("2020-01-01T00:00:00Z"), new Date("2030-01-01T00:00:00Z")),
        [],
        undefined,
        [],
        extensions,
    ), signatureAlgorithm, new Uint8ClampedArray([0]));
}

function certificateWithDescriptor (value: AttributeDescriptorSyntax): AttributeCertificate {
    return certificateWithExtensions([new Extension(
        id_ce_attributeDescriptor, false, _encode_AttributeDescriptorSyntax(value, DER).toBytes(),
    )]);
}

describe.each([0, MATCH_FLAG_CONSTANT_TIME])("attDescriptor (M15), flags %i", (flags) => {
    it("extracts the descriptor extension from a decoded attribute certificate", () => {
        expect(attDescriptorTyped(descriptor, certificateWithDescriptor(descriptor), undefined, flags)).toBe(true);
    });

    it("matches a descriptor assertion against an encoded certificate through the public Matcher", () => {
        const stored = new AttributeTypeAndValue(
            certificateType, _encode_AttributeCertificate(certificateWithDescriptor(descriptor), DER),
        );
        expect(attDescriptor(_encode_AttributeDescriptorSyntax(descriptor, DER), stored, undefined, flags)).toBe(true);
    });

    it("rejects a different privilege-policy OID rather than rejecting equal OIDs", () => {
        const otherPolicyDescriptor = new AttributeDescriptorSyntax(
            attributeIdentifier, syntax, "Example", "Example privilege",
            new PrivilegePolicyIdentifier(differentPolicy, dominationRule.privPolSyntax),
        );
        expect(attDescriptorTyped(descriptor, certificateWithDescriptor(otherPolicyDescriptor), undefined, flags)).toBe(false);
    });

    it.each([
        { description: "omitted extensions", extensions: undefined },
        { description: "an empty extensions sequence", extensions: [] },
    ])("returns false for $description", ({ extensions }) => {
        expect(attDescriptorTyped(descriptor, certificateWithExtensions(extensions), undefined, flags)).toBe(false);
    });

    it("does not decode an unrelated extension as an attribute descriptor", () => {
        const decoy = new Extension(id_ce_basicAttConstraints, false, _encode_AttributeDescriptorSyntax(descriptor, DER).toBytes());
        expect(attDescriptorTyped(descriptor, certificateWithExtensions([decoy]), undefined, flags)).toBe(false);
    });

    it("allows name and description to be omitted from the assertion", () => {
        const requiredComponents = new AttributeDescriptorSyntax(attributeIdentifier, syntax, undefined, undefined, dominationRule);
        expect(attDescriptorTyped(requiredComponents, certificateWithDescriptor(descriptor), undefined, flags)).toBe(true);
    });

    it.each([
        {
            component: "attribute identifier",
            storedDescriptor: new AttributeDescriptorSyntax(
                ObjectIdentifier.fromString("1.2.3.7"), syntax, "Example", "Example privilege", dominationRule,
            ),
        },
        {
            component: "attribute syntax",
            storedDescriptor: new AttributeDescriptorSyntax(
                attributeIdentifier, new TextEncoder().encode("Different ::= INTEGER"), "Example", "Example privilege", dominationRule,
            ),
        },
        {
            component: "name",
            storedDescriptor: new AttributeDescriptorSyntax(attributeIdentifier, syntax, "Other", "Example privilege", dominationRule),
        },
        {
            component: "description",
            storedDescriptor: new AttributeDescriptorSyntax(attributeIdentifier, syntax, "Example", "Other privilege", dominationRule),
        },
        {
            component: "inline policy text",
            storedDescriptor: new AttributeDescriptorSyntax(attributeIdentifier, syntax, "Example", "Example privilege",
                new PrivilegePolicyIdentifier(privilegePolicy, { content: { uTF8String: "Different policy text" } })),
        },
        {
            component: "missing asserted name",
            storedDescriptor: new AttributeDescriptorSyntax(attributeIdentifier, syntax, undefined, "Example privilege", dominationRule),
        },
        {
            component: "missing asserted description",
            storedDescriptor: new AttributeDescriptorSyntax(attributeIdentifier, syntax, "Example", undefined, dominationRule),
        },
    ])("rejects a mismatched $component", ({ storedDescriptor }) => {
        expect(attDescriptorTyped(descriptor, certificateWithDescriptor(storedDescriptor), undefined, flags)).toBe(false);
    });

    it("cannot be used as a naming rule because assertion and stored syntaxes differ", () => {
        const stored = new AttributeTypeAndValue(
            certificateType, _encode_AttributeCertificate(certificateWithDescriptor(descriptor), DER),
        );
        expect(attDescriptor(
            _encode_AttributeDescriptorSyntax(descriptor, DER), stored, undefined, flags | MATCH_FLAG_USED_FOR_NAME,
        )).toBeUndefined();
    });
});

it("preserves approximate matching after extracting the descriptor extension", () => {
    const approximateAssertion = new AttributeDescriptorSyntax(
        attributeIdentifier, syntax, "Exampl", "Example privilege", dominationRule,
    );
    expect(attDescriptorTyped(
        approximateAssertion, certificateWithDescriptor(descriptor), undefined, MATCH_FLAG_APPROXIMATE,
    )).toBe(true);
});
