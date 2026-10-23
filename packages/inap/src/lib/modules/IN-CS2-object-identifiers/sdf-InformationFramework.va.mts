/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    itu_t,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary sdf_InformationFramework
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sdf-InformationFramework OBJECT IDENTIFIER ::= {itu-t recommendation q 1228 modules(0) sdfInformationFramework(9)
 *    version1(0)}
 * ```
 * 
 * @constant
 */
export
const sdf_InformationFramework: OBJECT_IDENTIFIER = _OID.fromParts([
    0 /* recommendation */,
    17 /* q */,
    1228,
    /* modules */ 0,
    /* sdfInformationFramework */ 9,
    /* version1 */ 0,
], itu_t);

/* eslint-enable */
