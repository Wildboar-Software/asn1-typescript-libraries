/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";


/**
 * @summary tcg_tr_cat_IDevIDCertificate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-cat-IDevIDCertificate                        OBJECT IDENTIFIER ::= {tcg-tr-category 17}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_cat_IDevIDCertificate: OBJECT_IDENTIFIER = _OID.fromParts([
    17,
], tcg_tr_category);

/* eslint-enable */
