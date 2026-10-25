/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";


/**
 * @summary tcg_tr_cat_componentIdentifierV11
 * @description
 *
 * `{tcg-tr-category 26}`. A `componentIdentifierV11Trait` uses this category. A
 * `ComponentIdentifier` that contains this trait contains no other trait.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-cat-componentIdentifierV11                   OBJECT IDENTIFIER ::= {tcg-tr-category 26}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_cat_componentIdentifierV11: OBJECT_IDENTIFIER = _OID.fromParts([
    26,
], tcg_tr_category);

/* eslint-enable */
