/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";


/**
 * @summary tcg_tr_cat_platformHardwareCapabilities
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-cat-platformHardwareCapabilities             OBJECT IDENTIFIER ::= {tcg-tr-category 33}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_cat_platformHardwareCapabilities: OBJECT_IDENTIFIER = _OID.fromParts([
    33,
], tcg_tr_category);

/* eslint-enable */
