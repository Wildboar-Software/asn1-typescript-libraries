/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg_tr_ID } from "../PlatformCertificateProfileV2/tcg-tr-ID.va.mjs";


/**
 * @summary tcg_tr_ID_UTF8String
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-tr-ID-UTF8String                            OBJECT IDENTIFIER ::= {tcg-tr-ID 18}
 * ```
 * 
 * @constant
 */
export
const tcg_tr_ID_UTF8String: OBJECT_IDENTIFIER = _OID.fromParts([
    18,
], tcg_tr_ID);

/* eslint-enable */
