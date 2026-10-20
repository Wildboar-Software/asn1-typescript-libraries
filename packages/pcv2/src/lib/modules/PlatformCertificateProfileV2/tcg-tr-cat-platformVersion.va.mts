/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";


/**
 * @summary tcg_tr_cat_platformVersion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-cat-platformVersion                          OBJECT IDENTIFIER ::= {tcg-tr-category 3}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_cat_platformVersion: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], tcg_tr_category);

/* eslint-enable */
