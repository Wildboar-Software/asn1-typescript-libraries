/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";


/**
 * @summary tcg_tr_cat_componentModel
 * @description
 *
 * `{tcg-tr-category 9}`. A `ComponentIdentifier` list that is not a single
 * `componentIdentifierV11Trait` includes a trait of this category identifying
 * the component model.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.19.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-cat-componentModel                           OBJECT IDENTIFIER ::= {tcg-tr-category 9}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_cat_componentModel: OBJECT_IDENTIFIER = _OID.fromParts([
    9,
], tcg_tr_category);

/* eslint-enable */
