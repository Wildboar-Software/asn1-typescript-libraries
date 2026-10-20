/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    itu_t,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary tc_Messages
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tc-Messages OBJECT IDENTIFIER ::= {itu-t recommendation q 773 modules(2) messages(1) version3(3)}
 * ```
 * 
 * @constant
 */
export
const tc_Messages: OBJECT_IDENTIFIER = _OID.fromParts([
    recommendation,
    q,
    773,
    /* modules */ 2,
    /* messages */ 1,
    /* version3 */ 3,
], itu_t);

/* eslint-enable */
