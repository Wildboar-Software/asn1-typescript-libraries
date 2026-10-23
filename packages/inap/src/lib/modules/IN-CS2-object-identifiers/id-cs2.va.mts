/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    itu_t,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary id_cs2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-cs2 OBJECT IDENTIFIER ::= {itu-t recommendation q 1228 cs2(2)}
 * ```
 * 
 * @constant
 */
export
const id_cs2: OBJECT_IDENTIFIER = _OID.fromParts([
    0 /* recommendation */,
    17 /* q */,
    1228,
    /* cs2 */ 2,
], itu_t);

/* eslint-enable */
