/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    itu_t,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary id
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id OBJECT IDENTIFIER ::= {itu-t recommendation q 1248}
 * ```
 * 
 * @constant
 */
export
const id: OBJECT_IDENTIFIER = _OID.fromParts([
    recommendation,
    q,
    1248,
], itu_t);

/* eslint-enable */
