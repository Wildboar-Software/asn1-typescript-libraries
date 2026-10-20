/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";
// export { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";


/**
 * @summary tcg_tr_cat_ISO9000
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-cat-ISO9000                                  OBJECT IDENTIFIER ::= {tcg-tr-category 28}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_cat_ISO9000: OBJECT_IDENTIFIER = _OID.fromParts([
    28,
], tcg_tr_category);

/* eslint-enable */
