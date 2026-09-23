import { ASN1Construction, ASN1Element, ASN1TagClass, ASN1UniversalType, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { isAsn1Element, readObjectIdentifier } from "../readValue.mjs";
import type { ObjectIdentifierInput } from "../readValue.mjs";
import type { Certificate } from "../../modules/AuthenticationFramework/Certificate.ta.mjs";
import type { CertificateList } from "../../modules/AuthenticationFramework/CertificateList.ta.mjs";
import type { AttributeCertificate } from "../../modules/AttributeCertificateDefinitions/AttributeCertificate.ta.mjs";
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
function extensionsOf (
    value: ASN1Element | Certificate | CertificateList | AttributeCertificate,
): Extensions | undefined {
    if (!isAsn1Element(value)) {
        const signed = value.toBeSigned;
        if ("crlExtensions" in signed) {
            return signed.crlExtensions;
        }
        if ("extensions" in signed) {
            return signed.extensions;
        }
        return undefined;
    }
    const tbs: ASN1Element = value.sequence[0];
    const pkcExt: ASN1Element | undefined = tbs.sequence
        .find((el) => (
            (el.tagClass === ASN1TagClass.context)
            && (el.construction === ASN1Construction.constructed)
            && (el.tagNumber === 3)
        ));
    if (pkcExt) {
        return _decode_Extensions(pkcExt.inner);
    }
    const lastElement: ASN1Element = tbs.sequence[tbs.sequence.length - 1];
    if (
        (lastElement.tagClass === ASN1TagClass.context)
        && (lastElement.construction === ASN1Construction.constructed)
        && (lastElement.tagNumber === 0)
    ) {
        return _decode_Extensions(lastElement.inner);
    } else if (
        (lastElement.tagClass === ASN1TagClass.universal)
        && (lastElement.construction === ASN1Construction.constructed)
        && (lastElement.tagNumber === ASN1UniversalType.sequence)
    ) {
        return _decode_Extensions(lastElement.inner);
    }
    return undefined;
}

export
function extensionPresenceMatch (
    assertion: ObjectIdentifierInput,
    value: ASN1Element | Certificate | CertificateList | AttributeCertificate,
): boolean {
    return extensionPresenceMatchTyped(readObjectIdentifier(assertion), extensionsOf(value));
}

/**
 * `extensionPresenceMatch` on an extension OID and the certificate's
 * extension list.
 *
 * @param assertion Presented extension OID.
 * @param extensions Stored extensions, if the certificate has any.
 * @returns `true` when an extension has that OID.
 */
export
function extensionPresenceMatchTyped (
    assertion: OBJECT_IDENTIFIER,
    extensions: readonly Extension[] | undefined,
): boolean {
    return Boolean(extensions?.some((ext: Extension): boolean => ext.extnId.isEqualTo(assertion)));
}

export default extensionPresenceMatch;
