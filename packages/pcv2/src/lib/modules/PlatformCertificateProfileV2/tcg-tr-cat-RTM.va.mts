/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";


/**
 * @summary tcg_tr_cat_RTM
 * @description
 *
 * `{tcg-tr-category 36}`. An `rtmTrait` uses this category. The trait names
 * which RTM capabilities exist. It does not say which RTM runs at boot.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.15.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-cat-RTM                                      OBJECT IDENTIFIER ::= {tcg-tr-category 36}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_cat_RTM: OBJECT_IDENTIFIER = _OID.fromParts([
    36,
], tcg_tr_category);

/* eslint-enable */
