/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";


/**
 * @summary tcg_tr_cat_componentRevision
 * @description
 *
 * `{tcg-tr-category 13}`. Optional component revision. When a
 * `ComponentIdentifier` list includes a trait of this category, the trait
 * identifies the component's revision.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.19.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-cat-componentRevision                        OBJECT IDENTIFIER ::= {tcg-tr-category 13}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_cat_componentRevision: OBJECT_IDENTIFIER = _OID.fromParts([
    13,
], tcg_tr_category);

/* eslint-enable */
