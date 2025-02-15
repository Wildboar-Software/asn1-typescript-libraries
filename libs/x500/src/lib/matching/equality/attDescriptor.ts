import EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element } from "asn1-ts";
import {
    AttributeDescriptorSyntax,
    _decode_AttributeDescriptorSyntax,
} from "../../modules/AttributeCertificateDefinitions/AttributeDescriptorSyntax.ta";
import directoryStringToString from "../../stringifiers/directoryStringToString";

export
const attDescriptor: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: AttributeDescriptorSyntax = _decode_AttributeDescriptorSyntax(assertion);
    const v: AttributeDescriptorSyntax = _decode_AttributeDescriptorSyntax(value);

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
