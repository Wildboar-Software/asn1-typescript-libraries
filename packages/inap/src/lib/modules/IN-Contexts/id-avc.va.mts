/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    itu_t,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary id_avc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-avc OBJECT IDENTIFIER ::= {itu-t recommendation q 1218 contexts(8)}
 * ```
 * 
 * @constant
 */
export
const id_avc: OBJECT_IDENTIFIER = _OID.fromParts([
    recommendation,
    q,
    1218,
    /* contexts */ 8,
], itu_t);

/* eslint-enable */
