import { ASN1Construction, ASN1Element, ASN1TagClass, ASN1UniversalType, type OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { Certificate } from "../../modules/AuthenticationFramework/Certificate.ta.mjs";
import type { CertificateList } from "../../modules/AuthenticationFramework/CertificateList.ta.mjs";
import type { AttributeCertificate } from "../../modules/AttributeCertificateDefinitions/AttributeCertificate.ta.mjs";
import {
    Extension,
} from "../../modules/AuthenticationFramework/Extension.ta.mjs";
import {
    type Extensions,
    _decode_Extensions,
} from "../../modules/AuthenticationFramework/Extensions.ta.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

/**
 * Rec. ITU-T X.509 (10/2019), clause 19.3.5
 * `extensionPresenceMatch`.
 *
 * TRUE iff the stored certificate contains the extension whose OID
 * is presented (`EXTENSION.&id`). The specification is written
 * against attribute certificates; this implementation also accepts
 * public-key certificates and CRLs.
 *
 * AVL limitation: TBSCertAVL calls its container-level field `avlExtensions`.
 * That decoded property is not recognized below, and the encoded untagged
 * branch has an attribute-certificate-specific field-count guard. There is
 * currently no dedicated AVL decoding branch; do not infer AVL support merely
 * because an AVL also uses SIGNED and an untagged Extensions sequence.
 */
function extensionsOf (
    value: ASN1Element | Certificate | CertificateList | AttributeCertificate,
): Extensions | undefined {
    if (!ASN1Element.isElement(value)) {
        // Already decoded SIGNED value: no ASN.1 tag wrappers remain to unwrap.
        const signed = value.toBeSigned;
        if ("crlExtensions" in signed) {
            // CRL: CertificateListContent.crlExtensions, i.e. extensions on the
            // whole list, not crlEntryExtensions on individual revoked entries.
            return signed.crlExtensions;
        }
        if ("extensions" in signed) {
            // Public-key certificate (TBSCertificate) or attribute certificate
            // (TBSAttributeCertificate): both decoded classes call this extensions.
            return signed.extensions;
        }
        // No recognized container-level extension property.
        return undefined;
    }
    // Encoded SIGNED { T }: its first SEQUENCE component is the to-be-signed T.
    // Dispatch below uses the known layouts/tags; it does not validate the
    // certificate type or signature, nor inspect per-entry extensions.
    const tbs: ASN1Element = value.sequence[0];
    // Public-key certificate: TBSCertificate.extensions is [3] EXPLICIT
    // Extensions (X.509 7.2.1). Search by tag rather than a fixed field position.
    const pkcExt: ASN1Element | undefined = tbs.sequence
        .find((el) => (
            (el.tagClass === ASN1TagClass.context)
            && (el.construction === ASN1Construction.constructed)
            && (el.tagNumber === 3)
        ));
    if (pkcExt) {
        // Remove the [3] wrapper; its inner element is SEQUENCE OF Extension.
        return _decode_Extensions(pkcExt.inner);
    }
    const lastElement: ASN1Element = tbs.sequence[tbs.sequence.length - 1];
    if (
        (lastElement.tagClass === ASN1TagClass.context)
        && (lastElement.construction === ASN1Construction.constructed)
        && (lastElement.tagNumber === 0)
    ) {
        // CRL: CertificateListContent.crlExtensions is the trailing [0]
        // EXPLICIT Extensions field (X.509 7.10.2). Remove that tag wrapper.
        return _decode_Extensions(lastElement.inner);
    } else if (
        (lastElement.tagClass === ASN1TagClass.universal)
        && (lastElement.construction === ASN1Construction.constructed)
        && (lastElement.tagNumber === ASN1UniversalType.sequence)
        // Attribute certificate: seven mandatory TBS fields precede optional
        // extensions (version, holder, issuer, signature, serial, validity,
        // attributes). This guard avoids mistaking its attributes, a PKC's
        // SPKI, or a CRL's revokedCertificates sequence for AC extensions.
        && (tbs.sequence.length >= 8)
    ) {
        // AC: TBSAttributeCertificate.extensions is an UNTAGGED Extensions
        // sequence, not an EXPLICIT wrapper. Decode the list itself (M30).
        // Using .inner here would remove the SEQUENCE OF layer and select one
        // Extension, or fail when the list has several Extension children.
        return _decode_Extensions(lastElement);
    }
    // No recognized extension container in the encoded layout. This includes
    // supported certificate/CRL forms with no extensions; it is not a claim
    // that all other SIGNED formats (notably AVLs) have no extensions.
    return undefined;
}

type StoredCertificate = ASN1Element | Certificate | CertificateList | AttributeCertificate;

/**
 * @param assertion Presented extension OID.
 * @param value Stored certificate, CRL, or attribute certificate.
 * @returns `true` when an extension has that OID.
 */
export
function extensionPresenceMatchTyped (
    assertion: OBJECT_IDENTIFIER,
    value: StoredCertificate,
    _getEqualityMatcher?: unknown,
    flags: number = 0,
): boolean | undefined {
    const exts = extensionsOf(value);
    if (!exts) {
        return false;
    }
    const constantTime = Boolean(flags & MATCH_FLAG_CONSTANT_TIME);
    let matched = false;
    for (let i = 0; i < exts.length; i++) {
        if (exts[i].extnId.isEqualTo(assertion)) {
            if (!constantTime) {
                return true;
            }
            matched = true;
        }
    }
    return matched;
}

extensionPresenceMatchTyped satisfies TypedEquationFunction<OBJECT_IDENTIFIER>;

/**
 * `extensionPresenceMatch` as a `Matcher`.
 */
export
const extensionPresenceMatch: Matcher = createEqualityMatcher(
    (el) => el.objectIdentifier,
    extensionPresenceMatchTyped,
    undefined,
    true,
);

export default extensionPresenceMatch;
