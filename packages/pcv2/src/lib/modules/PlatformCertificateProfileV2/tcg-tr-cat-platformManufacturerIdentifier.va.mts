/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";


/**
 * @summary tcg_tr_cat_platformManufacturerIdentifier
 * @description
 *
 * `{tcg-tr-category 5}`. When present in `PlatformIdentifier`, the trait
 * identifies the platform manufacturer by an IANA Private Enterprise Number.
 * The sequence may include it.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.16.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-cat-platformManufacturerIdentifier           OBJECT IDENTIFIER ::= {tcg-tr-category 5}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_cat_platformManufacturerIdentifier: OBJECT_IDENTIFIER = _OID.fromParts([
    5,
], tcg_tr_category);

/* eslint-enable */
