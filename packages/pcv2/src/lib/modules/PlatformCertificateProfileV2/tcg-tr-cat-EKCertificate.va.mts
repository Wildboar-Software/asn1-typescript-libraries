/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";


/**
 * @summary tcg_tr_cat_EKCertificate
 * @description
 *
 * `{tcg-tr-category 15}`. A `certificateIdentifierTrait` that references a TCG
 * endorsement-key certificate uses this category.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.2.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-cat-EKCertificate                            OBJECT IDENTIFIER ::= {tcg-tr-category 15}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_cat_EKCertificate: OBJECT_IDENTIFIER = _OID.fromParts([
    15,
], tcg_tr_category);

/* eslint-enable */
