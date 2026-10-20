/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";
// export { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";


/**
 * @summary tcg_tr_cat_componentManufacturer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-cat-componentManufacturer                    OBJECT IDENTIFIER ::= {tcg-tr-category 8}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_cat_componentManufacturer: OBJECT_IDENTIFIER = _OID.fromParts([
    8,
], tcg_tr_category);

/* eslint-enable */
