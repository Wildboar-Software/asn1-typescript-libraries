/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";


/**
 * @summary tcg_tr_cat_componentManufacturer
 * @description
 *
 * `{tcg-tr-category 8}`. A `ComponentIdentifier` list that is not a single
 * `componentIdentifierV11Trait` includes a trait of this category identifying
 * the component manufacturer.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.19.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-cat-componentManufacturer                    OBJECT IDENTIFIER ::= {tcg-tr-category 8}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_cat_componentManufacturer: OBJECT_IDENTIFIER = _OID.fromParts([
    8,
], tcg_tr_category);

/* eslint-enable */
