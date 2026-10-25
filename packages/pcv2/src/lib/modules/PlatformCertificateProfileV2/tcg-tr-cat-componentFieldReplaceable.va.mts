/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";


/**
 * @summary tcg_tr_cat_componentFieldReplaceable
 * @description
 *
 * `{tcg-tr-category 14}`. Whether the component is field replaceable. A
 * `ComponentIdentifier` list should include a trait of this category. The
 * syntax used in the profile's example is `booleanTrait`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.19.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-cat-componentFieldReplaceable                OBJECT IDENTIFIER ::= {tcg-tr-category 14}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_cat_componentFieldReplaceable: OBJECT_IDENTIFIER = _OID.fromParts([
    14,
], tcg_tr_category);

/* eslint-enable */
