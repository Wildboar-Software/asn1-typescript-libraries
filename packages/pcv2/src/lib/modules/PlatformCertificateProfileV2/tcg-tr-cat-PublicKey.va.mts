/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";


/**
 * @summary tcg_tr_cat_PublicKey
 * @description
 *
 * `{tcg-tr-category 37}`. A trait that references a public key, including a
 * `publicKeyTrait` in `cryptographicAnchors`, uses this category. Section
 * 4.2.21 spells the identifier `tcg-tr-cat-publicKey`; section 5 and this
 * module assign arc 37 as `tcg-tr-cat-PublicKey`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.15 and §4.2.21.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-cat-PublicKey                                OBJECT IDENTIFIER ::= {tcg-tr-category 37}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_cat_PublicKey: OBJECT_IDENTIFIER = _OID.fromParts([
    37,
], tcg_tr_category);

/* eslint-enable */
