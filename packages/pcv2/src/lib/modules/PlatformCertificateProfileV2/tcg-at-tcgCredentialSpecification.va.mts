/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_attribute } from "../PlatformCertificateProfileV2/tcg-attribute.va.mjs";
// export { tcg_attribute } from "../PlatformCertificateProfileV2/tcg-attribute.va.mjs";


/**
 * @summary tcg_at_tcgCredentialSpecification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-tcgCredentialSpecification               OBJECT IDENTIFIER ::= {tcg-attribute 23}
 * ```
 * 
 * @constant
 */
export
const tcg_at_tcgCredentialSpecification: OBJECT_IDENTIFIER = _OID.fromParts([
    23,
], tcg_attribute);

/* eslint-enable */
