/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";


/**
 * @summary tcg_tr_cat_PEN
 * @description
 *
 * `{tcg-tr-category 31}`. A `penTrait` uses this category.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.10.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-cat-PEN                                      OBJECT IDENTIFIER ::= {tcg-tr-category 31}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_cat_PEN: OBJECT_IDENTIFIER = _OID.fromParts([
    31,
], tcg_tr_category);

/* eslint-enable */
