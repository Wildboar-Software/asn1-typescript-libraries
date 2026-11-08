import { DERElement, type ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { readDecoded } from "../readValue.mjs";
import { approximatelyEqualBytes, approximatelyEqualStrings } from "../approximate.mjs";
import { bytesEqual, stringsEqual } from "../constantTime.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_APPROXIMATE,
    MATCH_FLAG_CONSTANT_TIME,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";
import {
    AttributeDescriptorSyntax,
    _decode_AttributeDescriptorSyntax,
} from "../../modules/AttributeCertificateDefinitions/AttributeDescriptorSyntax.ta.mjs";
import directoryStringToString from "../../stringifiers/directoryStringToString.mjs";
import {
    type AttributeCertificate,
    _decode_AttributeCertificate,
} from "../../modules/AttributeCertificateDefinitions/AttributeCertificate.ta.mjs";
import { id_ce_attributeDescriptor } from "../../modules/AttributeCertificateDefinitions/id-ce-attributeDescriptor.va.mjs";

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
 * `attDescriptor` on a presented descriptor and a stored attribute certificate.
 *
 * @param a Presented descriptor.
 * @param value Stored attribute certificate, encoded or already decoded.
 * @returns `true` when the compared components match.
 */
export
function attDescriptorTyped (
    a: AttributeDescriptorSyntax,
    value: AttributeCertificate | ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean {
    const certificate = readDecoded(value, _decode_AttributeCertificate);
    const extension = certificate.toBeSigned.extensions
        ?.find((ext) => ext.extnId.isEqualTo(id_ce_attributeDescriptor));
    if (!extension) {
        return false;
    }
    const encodedDescriptor = new DERElement();
    encodedDescriptor.fromBytes(extension.extnValue);
    const v = _decode_AttributeDescriptorSyntax(encodedDescriptor);
    const constantTime = flags & MATCH_FLAG_CONSTANT_TIME;
    const approximate = (flags & MATCH_FLAG_APPROXIMATE) !== 0;
    let matched = true;

    if (!stringsEqual(a.identifier.toString(), v.identifier.toString(), constantTime)) {
        if (!constantTime) {
            return false;
        }
        matched = false;
    }

    if (
        approximate
            ? !approximatelyEqualBytes(a.attributeSyntax, v.attributeSyntax)
            : !bytesEqual(a.attributeSyntax, v.attributeSyntax, constantTime)
    ) {
        if (!constantTime) {
            return false;
        }
        matched = false;
    }

    if (
        a.name
        && (
            !v.name
            || (approximate
                ? !approximatelyEqualStrings(a.name.trim().toLowerCase(), v.name.trim().toLowerCase())
                : !stringsEqual(a.name, v.name, constantTime))
        )
    ) {
        if (!constantTime) {
            return false;
        }
        matched = false;
    }

    if (
        a.description
        && (
            !v.description
            || (approximate
                ? !approximatelyEqualStrings(a.description.trim().toLowerCase(), v.description.trim().toLowerCase())
                : !stringsEqual(a.description, v.description, constantTime))
        )
    ) {
        if (!constantTime) {
            return false;
        }
        matched = false;
    }

    if (!a.dominationRule.privilegePolicy.isEqualTo(v.dominationRule.privilegePolicy)) {
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
        && (
            approximate
                ? !approximatelyEqualStrings(
                    directoryStringToString(aPol.content),
                    directoryStringToString(vPol.content),
                )
                : !stringsEqual(
                    directoryStringToString(aPol.content),
                    directoryStringToString(vPol.content),
                    constantTime,
                )
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
    undefined,
    true,
);

export default attDescriptor;
