/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_ID } from "../PlatformCertificateProfileV2/tcg-tr-ID.va.mjs";


/**
 * @summary tcg_tr_ID_URI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-ID-URI                                   OBJECT IDENTIFIER ::= {tcg-tr-ID 17}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_ID_URI: OBJECT_IDENTIFIER = _OID.fromParts([
    17,
], tcg_tr_ID);

/* eslint-enable */
