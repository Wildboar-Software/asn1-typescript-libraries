/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";


/**
 * @summary tcg_tr_cat_networkMAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-cat-networkMAC                               OBJECT IDENTIFIER ::= {tcg-tr-category 29}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_cat_networkMAC: OBJECT_IDENTIFIER = _OID.fromParts([
    29,
], tcg_tr_category);

/* eslint-enable */
