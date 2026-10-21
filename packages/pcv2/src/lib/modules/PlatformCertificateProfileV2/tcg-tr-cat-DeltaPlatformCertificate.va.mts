/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_category } from "../PlatformCertificateProfileV2/tcg-tr-category.va.mjs";


/**
 * @summary tcg_tr_cat_DeltaPlatformCertificate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-cat-DeltaPlatformCertificate                 OBJECT IDENTIFIER ::= {tcg-tr-category 22}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_cat_DeltaPlatformCertificate: OBJECT_IDENTIFIER = _OID.fromParts([
    22,
], tcg_tr_category);

/* eslint-enable */
