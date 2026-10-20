/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_ID } from "../PlatformCertificateProfileV2/tcg-tr-ID.va.mjs";
// export { tcg_tr_ID } from "../PlatformCertificateProfileV2/tcg-tr-ID.va.mjs";


/**
 * @summary tcg_tr_ID_status
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-ID-status                                OBJECT IDENTIFIER ::= {tcg-tr-ID 16}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_ID_status: OBJECT_IDENTIFIER = _OID.fromParts([
    16,
], tcg_tr_ID);

/* eslint-enable */
