/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    itu_t,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary tc_NotationExtensions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tc-NotationExtensions OBJECT IDENTIFIER ::= {itu-t recommendation q 775 modules(2) notation-extension(4) version1(1)}
 * ```
 * 
 * @constant
 */
export
const tc_NotationExtensions: OBJECT_IDENTIFIER = _OID.fromParts([
    0 /* recommendation */,
    17 /* q */,
    775,
    /* modules */ 2,
    /* notation-extension */ 4,
    /* version1 */ 1,
], itu_t);

/* eslint-enable */
