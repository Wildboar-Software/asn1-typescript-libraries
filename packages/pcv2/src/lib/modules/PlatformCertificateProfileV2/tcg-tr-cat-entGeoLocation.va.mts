/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";
// export { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";


/**
 * @summary tcg_tr_cat_entGeoLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-cat-entGeoLocation                           OBJECT IDENTIFIER ::= {tcg-tr-category 39}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_cat_entGeoLocation: OBJECT_IDENTIFIER = _OID.fromParts([
    39,
], tcg_tr_category);

/* eslint-enable */
