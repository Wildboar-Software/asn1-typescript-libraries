/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    itu_t,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary dialogue_as_id
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dialogue-as-id OBJECT IDENTIFIER ::= {itu-t recommendation q 773 as(1) dialogue-as(1) version1(1)}
 * ```
 * 
 * @constant
 */
export
const dialogue_as_id: OBJECT_IDENTIFIER = _OID.fromParts([
    recommendation,
    q,
    773,
    /* as */ 1,
    /* dialogue-as */ 1,
    /* version1 */ 1,
], itu_t);

/* eslint-enable */
