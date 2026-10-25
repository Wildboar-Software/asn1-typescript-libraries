/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";


/**
 * @summary tcg_tr_cat_PlatformCertificate
 * @description
 *
 * `{tcg-tr-category 21}`. A trait that references a base platform certificate
 * uses this category, including in `previousPlatformCertificates` and as a
 * certificate identifier.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.11 and §4.2.2.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-cat-PlatformCertificate                      OBJECT IDENTIFIER ::= {tcg-tr-category 21}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_cat_PlatformCertificate: OBJECT_IDENTIFIER = _OID.fromParts([
    21,
], tcg_tr_category);

/* eslint-enable */
