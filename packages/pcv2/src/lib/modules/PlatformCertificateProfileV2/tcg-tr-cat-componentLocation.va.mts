/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";


/**
 * @summary tcg_tr_cat_componentLocation
 * @description
 *
 * `{tcg-tr-category 12}`. Location of a component inside the platform assembly
 * or enclosure, for example which memory slot a module occupies. A trait that
 * carries a component location uses this category.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
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
