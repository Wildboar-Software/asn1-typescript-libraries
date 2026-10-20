/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_attribute } from "../PlatformCertificateProfileV2/tcg-attribute.va.mjs";
// export { tcg_attribute } from "../PlatformCertificateProfileV2/tcg-attribute.va.mjs";


/**
 * @summary tcg_at_cryptographicAnchors
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-cryptographicAnchors                     OBJECT IDENTIFIER ::= {tcg-attribute 28}
 * ```
 * 
 * @constant
 */
export
const tcg_at_cryptographicAnchors: OBJECT_IDENTIFIER = _OID.fromParts([
    28,
], tcg_attribute);

/* eslint-enable */
