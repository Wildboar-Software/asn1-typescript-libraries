/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";


/**
 * @summary tcg_tr_cat_componentSerial
 * @description
 *
 * `{tcg-tr-category 10}`. Component serial number. A `ComponentIdentifier` list
 * should include a trait of this category. A `componentIdentifierV11Trait`
 * populates `componentSerial`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.19 and §4.2.5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-cat-componentSerial                          OBJECT IDENTIFIER ::= {tcg-tr-category 10}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_cat_componentSerial: OBJECT_IDENTIFIER = _OID.fromParts([
    10,
], tcg_tr_category);

/* eslint-enable */
