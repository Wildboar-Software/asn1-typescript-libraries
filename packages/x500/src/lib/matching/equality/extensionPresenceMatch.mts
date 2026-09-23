import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import { ASN1Construction, ASN1Element, ASN1TagClass, ASN1UniversalType, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import {
    Extension,
} from "../../modules/AuthenticationFramework/Extension.ta.mjs";
import {
    Extensions,
    _decode_Extensions,
} from "../../modules/AuthenticationFramework/Extensions.ta.mjs";

/**
 * Rec. ITU-T X.509 (10/2019), clause 19.3.5
 * `extensionPresenceMatch`.
 *
 * TRUE iff the stored certificate contains the extension whose OID
 * is presented (`EXTENSION.&id`). The specification is written
 * against attribute certificates; this implementation also accepts
 * public-key certificates, CRLs, and AVLs.
 */
export
const extensionPresenceMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: OBJECT_IDENTIFIER = assertion.objectIdentifier;
    const tbs: ASN1Element = value.sequence[0];
    const pkcExt: ASN1Element | undefined = tbs.sequence
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
