/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";


/**
 * @summary tcg_tr_cat_platformModel
 * @description
 *
 * `{tcg-tr-category 2}`. `PlatformIdentifier` includes a trait of this
 * category, and that trait identifies the manufacturer-specific platform model.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.16.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
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
