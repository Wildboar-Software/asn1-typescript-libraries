/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";


/**
 * @summary tcg_tr_cat_platformSerial
 * @description
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
