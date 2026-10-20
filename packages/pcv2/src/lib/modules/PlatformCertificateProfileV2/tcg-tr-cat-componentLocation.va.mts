/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";
// export { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";


/**
 * @summary tcg_tr_cat_componentLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-cat-componentLocation                        OBJECT IDENTIFIER ::= {tcg-tr-category 12}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_cat_componentLocation: OBJECT_IDENTIFIER = _OID.fromParts([
    12,
], tcg_tr_category);

/* eslint-enable */
