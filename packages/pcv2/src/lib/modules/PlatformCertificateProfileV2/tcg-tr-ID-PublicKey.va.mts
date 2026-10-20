/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_ID } from "../PlatformCertificateProfileV2/tcg-tr-ID.va.mjs";
// export { tcg_tr_ID } from "../PlatformCertificateProfileV2/tcg-tr-ID.va.mjs";


/**
 * @summary tcg_tr_ID_PublicKey
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-ID-PublicKey                             OBJECT IDENTIFIER ::= {tcg-tr-ID 21}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_ID_PublicKey: OBJECT_IDENTIFIER = _OID.fromParts([
    21,
], tcg_tr_ID);

/* eslint-enable */
