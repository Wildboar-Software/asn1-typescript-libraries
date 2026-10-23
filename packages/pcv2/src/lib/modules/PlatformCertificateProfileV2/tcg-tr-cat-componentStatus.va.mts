/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";


/**
 * @summary tcg_tr_cat_componentStatus
 * @description
 *
 * `{tcg-tr-category 11}`. In a delta platform certificate, a
 * `ComponentIdentifier` list includes a trait of this category stating whether
 * the component was added, modified, or removed relative to the previous
 * certificate. The syntax is `statusTrait`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.19.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-cat-componentStatus                          OBJECT IDENTIFIER ::= {tcg-tr-category 11}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_cat_componentStatus: OBJECT_IDENTIFIER = _OID.fromParts([
    11,
], tcg_tr_category);

/* eslint-enable */
