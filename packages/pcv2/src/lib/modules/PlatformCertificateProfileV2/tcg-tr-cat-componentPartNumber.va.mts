/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";


/**
 * @summary tcg_tr_cat_componentPartNumber
 * @description
 *
 * `{tcg-tr-category 38}`. A component part number. A component may have more
 * than one, for example a supplier-internal number and a customer-facing
 * number, and each such number is a trait of this category.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.1.2.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-cat-componentPartNumber                      OBJECT IDENTIFIER ::= {tcg-tr-category 38}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_cat_componentPartNumber: OBJECT_IDENTIFIER = _OID.fromParts([
    38,
], tcg_tr_category);

/* eslint-enable */
