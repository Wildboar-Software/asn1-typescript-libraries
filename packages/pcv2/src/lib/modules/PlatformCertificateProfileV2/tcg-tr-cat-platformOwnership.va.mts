/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";


/**
 * @summary tcg_tr_cat_platformOwnership
 * @description
 *
 * `{tcg-tr-category 6}`. `PlatformOwnership` includes a trait of this category,
 * and that trait identifies the platform's owner or user at issuance.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.21.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-cat-platformOwnership                        OBJECT IDENTIFIER ::= {tcg-tr-category 6}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_cat_platformOwnership: OBJECT_IDENTIFIER = _OID.fromParts([
    6,
], tcg_tr_category);

/* eslint-enable */
