import type { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { readDecoded } from "../readValue.mjs";
import { bytesEqual, stringsEqual } from "../constantTime.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";
import {
    AttributeDescriptorSyntax,
    _decode_AttributeDescriptorSyntax,
} from "../../modules/AttributeCertificateDefinitions/AttributeDescriptorSyntax.ta.mjs";
import directoryStringToString from "../../stringifiers/directoryStringToString.mjs";

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
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean {
    const v = readDecoded(value, _decode_AttributeDescriptorSyntax);
    const constantTime = flags & MATCH_FLAG_CONSTANT_TIME;
    let matched = true;

    if (!stringsEqual(a.identifier.toString(), v.identifier.toString(), constantTime)) {
        if (!constantTime) {
            return false;
        }
        matched = false;
    }

    if (!bytesEqual(a.attributeSyntax, v.attributeSyntax, constantTime)) {
        if (!constantTime) {
            return false;
        }
        matched = false;
    }

    if (a.name && (!v.name || !stringsEqual(a.name, v.name, constantTime))) {
        if (!constantTime) {
            return false;
        }
        matched = false;
    }

    if (a.description && (!v.description || !stringsEqual(a.description, v.description, constantTime))) {
        if (!constantTime) {
            return false;
        }
        matched = false;
    }

    if (a.dominationRule.privilegePolicy.isEqualTo(v.dominationRule.privilegePolicy)) {
        if (!constantTime) {
            return false;
        }
        matched = false;
    }

    const aPol = a.dominationRule.privPolSyntax;
    const vPol = v.dominationRule.privPolSyntax;

    if (
        ("content" in aPol)
        && ("content" in vPol)
        && !stringsEqual(
            directoryStringToString(aPol.content),
            directoryStringToString(vPol.content),
            constantTime,
        )
    ) {
        if (!constantTime) {
            return false;
        }
        matched = false;
    }

    // dominationRule.privPolSyntax.pointer will not be checked for a match.

    return matched;
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
