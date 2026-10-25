/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";


/**
 * @summary tcg_tr_cat_CommonCriteria
 * @description
 *
 * `{tcg-tr-category 25}`. A `commonCriteriaTrait` uses this category.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.3.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-cat-CommonCriteria                           OBJECT IDENTIFIER ::= {tcg-tr-category 25}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_cat_CommonCriteria: OBJECT_IDENTIFIER = _OID.fromParts([
    25,
], tcg_tr_category);

/* eslint-enable */
