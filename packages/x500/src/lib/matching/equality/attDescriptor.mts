import type { ASN1Element } from "@wildboar/asn1";
import { readDecoded } from "../readValue.mjs";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";
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
/**
 * `attDescriptor` on two decoded attribute descriptors.
 *
 * @param a Presented descriptor.
 * @param value Stored descriptor, or that descriptor already decoded.
 * @returns `true` when the compared components match.
 */
export
function attDescriptorTyped (
    a: AttributeDescriptorSyntax,
    value: AttributeDescriptorSyntax | ASN1Element,
): boolean {
    const v = readDecoded(value, _decode_AttributeDescriptorSyntax);

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

attDescriptorTyped satisfies TypedEquationFunction<AttributeDescriptorSyntax>;

/**
 * `attDescriptor` as a `Matcher`.
 */
export
const attDescriptor: Matcher = createEqualityMatcher(
    _decode_AttributeDescriptorSyntax,
    attDescriptorTyped,
);

export default attDescriptor;
