/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    itu_t,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary in_ds
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * in-ds OBJECT IDENTIFIER ::= {itu-t recommendation q 1218 sdf-objects(10)}
 * ```
 * 
 * @constant
 */
export
const in_ds: OBJECT_IDENTIFIER = _OID.fromParts([
    0 /* recommendation */,
    17 /* q */,
    1218,
    /* sdf-objects */ 10,
], itu_t);

/* eslint-enable */
