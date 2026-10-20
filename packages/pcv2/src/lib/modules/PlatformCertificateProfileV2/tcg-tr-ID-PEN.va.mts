/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_ID } from "../PlatformCertificateProfileV2/tcg-tr-ID.va.mjs";
// export { tcg_tr_ID } from "../PlatformCertificateProfileV2/tcg-tr-ID.va.mjs";


/**
 * @summary tcg_tr_ID_PEN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-ID-PEN                                   OBJECT IDENTIFIER ::= {tcg-tr-ID 10}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_ID_PEN: OBJECT_IDENTIFIER = _OID.fromParts([
    10,
], tcg_tr_ID);

/* eslint-enable */
