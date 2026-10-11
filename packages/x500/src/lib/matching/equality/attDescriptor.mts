import type { ASN1Element } from "@wildboar/asn1";
import { readDecoded } from "../readValue.mjs";
import {
    AttributeDescriptorSyntax,
    _decode_AttributeDescriptorSyntax,
} from "../../modules/AttributeCertificateDefinitions/AttributeDescriptorSyntax.ta.mjs";
import directoryStringToString from "../../stringifiers/directoryStringToString.mjs";
import { Buffer } from "node:buffer";

/**
 * Rec. ITU-T X.509 (10/2019), clause 17.3.2.2.2 `attDescriptor`.
 *
 * Selects an attribute descriptor certificate. TRUE iff the stored
 * AC contains the `attributeDescriptor` extension and every
 * component present in the presented
 * `AttributeDescriptorSyntax` matches the corresponding stored
 * component.
 */
export
function attDescriptor (
    assertion: ASN1Element | AttributeDescriptorSyntax,
    value: ASN1Element | AttributeDescriptorSyntax,
): boolean {
    return attDescriptorTyped(
        readDecoded(assertion, _decode_AttributeDescriptorSyntax),
        readDecoded(value, _decode_AttributeDescriptorSyntax),
    );
}

/**
 * `attDescriptor` on two decoded attribute descriptors.
 *
 * @param a Presented descriptor.
 * @param v Stored descriptor.
 * @returns `true` when the compared components match.
 */
export
function attDescriptorTyped (
    a: AttributeDescriptorSyntax,
    v: AttributeDescriptorSyntax,
): boolean {

    if (a.identifier.toString() !== v.identifier.toString()) {
        return false;
    }

    if (Buffer.compare(a.attributeSyntax, v.attributeSyntax)) {
        return false;
    }

    if (a.name && (a.name !== v.name)) {
        return false;
    }

    if (a.description && (a.description !== v.description)) {
        return false;
    }

    if (a.dominationRule.privilegePolicy.isEqualTo(v.dominationRule.privilegePolicy)) {
        return false;
    }

    const aPol = a.dominationRule.privPolSyntax;
    const vPol = v.dominationRule.privPolSyntax;

    if (
        ("content" in aPol)
        && ("content" in vPol)
        && (directoryStringToString(aPol.content) !== directoryStringToString(vPol.content))
    ) {
        return false;
    }

    // dominationRule.privPolSyntax.pointer will not be checked for a match.

    return true;
}

export default attDescriptor;
