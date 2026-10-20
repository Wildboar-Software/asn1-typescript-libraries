/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_ID } from "../PlatformCertificateProfileV2/tcg-tr-ID.va.mjs";
// export { tcg_tr_ID } from "../PlatformCertificateProfileV2/tcg-tr-ID.va.mjs";


/**
 * @summary tcg_tr_ID_certificateIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-ID-certificateIdentifier                 OBJECT IDENTIFIER ::= {tcg-tr-ID 2}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_ID_certificateIdentifier: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], tcg_tr_ID);

/* eslint-enable */
