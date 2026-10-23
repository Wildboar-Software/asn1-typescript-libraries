/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";


/**
 * @summary tcg_tr_cat_RebasePlatformCertificate
 * @description
 *
 * `{tcg-tr-category 23}`. A trait that references a platform certificate which
 * itself references an earlier platform certificate uses this category.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.11 and §4.2.2.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-cat-RebasePlatformCertificate                OBJECT IDENTIFIER ::= {tcg-tr-category 23}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_cat_RebasePlatformCertificate: OBJECT_IDENTIFIER = _OID.fromParts([
    23,
], tcg_tr_category);

/* eslint-enable */
