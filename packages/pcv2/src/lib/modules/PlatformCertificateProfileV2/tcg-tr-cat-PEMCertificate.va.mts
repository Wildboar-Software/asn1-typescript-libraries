/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";


/**
 * @summary tcg_tr_cat_PEMCertificate
 * @description
 *
 * `{tcg-tr-category 20}`. A `pemCertStringTrait` uses this category.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.20.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-cat-PEMCertificate                           OBJECT IDENTIFIER ::= {tcg-tr-category 20}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_cat_PEMCertificate: OBJECT_IDENTIFIER = _OID.fromParts([
    20,
], tcg_tr_category);

/* eslint-enable */
