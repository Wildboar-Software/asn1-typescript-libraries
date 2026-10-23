/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    itu_t,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary sdf_BasicAccessControl
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sdf-BasicAccessControl OBJECT IDENTIFIER ::= {itu-t recommendation q 1228 modules(0) sdfBasicAccessControl(10) version1(0)}
 * ```
 * 
 * @constant
 */
export
const sdf_BasicAccessControl: OBJECT_IDENTIFIER = _OID.fromParts([
    0 /* recommendation */,
    17 /* q */,
    1228,
    /* modules */ 0,
    /* sdfBasicAccessControl */ 10,
    /* version1 */ 0,
], itu_t);

/* eslint-enable */
