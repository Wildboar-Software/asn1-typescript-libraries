import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import { ASN1Construction, ASN1Element, ASN1TagClass, ASN1UniversalType, OBJECT_IDENTIFIER } from "asn1-ts";
import {
    Extension,
} from "../../modules/AuthenticationFramework/Extension.ta.mjs";
import {
    Extensions,
    _decode_Extensions,
} from "../../modules/AuthenticationFramework/Extensions.ta.mjs";

/**
 * It is never said explicitly in the specification, but it is implied that the
 * following matching rule only applies to attribute certificates. Still, this
 * implementation supports checking for the presence of extensions in:
 *
 * - Public Key Certificates
 * - Certificate Revocation Lists
 * - Attribute Certificates
 * - AVLs
 */
export
const extensionPresenceMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: OBJECT_IDENTIFIER = assertion.objectIdentifier;
    const tbs: ASN1Element = value.sequence[0];
    const pkcExt: ASN1Element = tbs.sequence
        .find((el) => (
            (el.tagClass === ASN1TagClass.context)
            && (el.construction === ASN1Construction.constructed)
            && (el.tagNumber === 3)
        ));
    if (pkcExt) { // It is a public key certificate.
        const exts: Extensions = _decode_Extensions(pkcExt.inner);
        return exts.some((ext: Extension): boolean => (ext.extnId.isEqualTo(a)));
    }
    const lastElement: ASN1Element = tbs.sequence[tbs.sequence.length - 1];
    if (
        (lastElement.tagClass === ASN1TagClass.context)
        && (lastElement.construction === ASN1Construction.constructed)
        && (lastElement.tagNumber === 0)
    ) {
        const exts: Extensions = _decode_Extensions(lastElement.inner);
        return exts.some((ext: Extension): boolean => (ext.extnId.isEqualTo(a)));
    } else if (
        (lastElement.tagClass === ASN1TagClass.universal)
        && (lastElement.construction === ASN1Construction.constructed)
        && (lastElement.tagNumber === ASN1UniversalType.sequence)
    ) {
        const exts: Extensions = _decode_Extensions(lastElement.inner);
        return exts.some((ext: Extension): boolean => (ext.extnId.isEqualTo(a)));
    }
    return false;
}

export default extensionPresenceMatch;
