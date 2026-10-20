/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_attribute } from "../PlatformCertificateProfileV2/tcg-attribute.va.mjs";
// export { tcg_attribute } from "../PlatformCertificateProfileV2/tcg-attribute.va.mjs";


/**
 * @summary tcg_at_tcgCredentialType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-tcgCredentialType                        OBJECT IDENTIFIER ::= {tcg-attribute 25}
 * ```
 * 
 * @constant
 */
export
const tcg_at_tcgCredentialType: OBJECT_IDENTIFIER = _OID.fromParts([
    25,
], tcg_attribute);

/* eslint-enable */
