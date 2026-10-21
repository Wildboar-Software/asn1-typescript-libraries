/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";


/**
 * @summary tcg_tr_cat_componentSerial
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-cat-componentSerial                          OBJECT IDENTIFIER ::= {tcg-tr-category 10}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_cat_componentSerial: OBJECT_IDENTIFIER = _OID.fromParts([
    10,
], tcg_tr_category);

/* eslint-enable */
