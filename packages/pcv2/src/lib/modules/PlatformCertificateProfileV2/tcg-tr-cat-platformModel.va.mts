/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";
// export { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";


/**
 * @summary tcg_tr_cat_platformModel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-cat-platformModel                            OBJECT IDENTIFIER ::= {tcg-tr-category 2}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_cat_platformModel: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], tcg_tr_category);

/* eslint-enable */
