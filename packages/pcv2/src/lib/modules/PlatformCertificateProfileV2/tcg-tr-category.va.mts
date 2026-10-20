/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_traits } from "../PlatformCertificateProfileV2/tcg-traits.va.mjs";
// export { tcg_traits } from "../PlatformCertificateProfileV2/tcg-traits.va.mjs";


/**
 * @summary tcg_tr_category
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-category                                     OBJECT IDENTIFIER ::= {tcg-traits 2}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_category: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], tcg_traits);

/* eslint-enable */
