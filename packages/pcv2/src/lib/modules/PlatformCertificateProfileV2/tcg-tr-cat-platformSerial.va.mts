/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";


/**
 * @summary tcg_tr_cat_platformSerial
 * @description
 *
 * `{tcg-tr-category 4}`. When present in `PlatformIdentifier`, the trait holds
 * the customer-visible platform serial number. The sequence should include it.
 * Together with the manufacturer and model, it identifies one platform.
 *
 * TCG Platform Certificate Profile, Version 2.1, §2.1.4.14 and §3.3.16.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-cat-platformSerial                           OBJECT IDENTIFIER ::= {tcg-tr-category 4}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_cat_platformSerial: OBJECT_IDENTIFIER = _OID.fromParts([
    4,
], tcg_tr_category);

/* eslint-enable */
