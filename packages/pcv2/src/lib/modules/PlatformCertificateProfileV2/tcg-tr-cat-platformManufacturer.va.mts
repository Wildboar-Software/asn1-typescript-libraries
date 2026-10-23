/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";


/**
 * @summary tcg_tr_cat_platformManufacturer
 * @description
 *
 * `{tcg-tr-category 1}`. `PlatformIdentifier` includes a trait of this
 * category, and that trait identifies the platform manufacturer.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.16.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-cat-platformManufacturer                     OBJECT IDENTIFIER ::= {tcg-tr-category 1}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_cat_platformManufacturer: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], tcg_tr_category);

/* eslint-enable */
