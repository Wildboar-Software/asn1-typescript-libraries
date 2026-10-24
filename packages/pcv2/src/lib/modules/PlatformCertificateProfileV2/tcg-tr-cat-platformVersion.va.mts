/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";


/**
 * @summary tcg_tr_cat_platformVersion
 * @description
 *
 * `{tcg-tr-category 3}`. `PlatformIdentifier` includes a trait of this
 * category, and that trait identifies the manufacturer-specific platform
 * version.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.16.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-cat-platformVersion                          OBJECT IDENTIFIER ::= {tcg-tr-category 3}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_cat_platformVersion: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], tcg_tr_category);

/* eslint-enable */
