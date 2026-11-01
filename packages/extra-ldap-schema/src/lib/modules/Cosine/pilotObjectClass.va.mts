/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary pilotObjectClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pilotObjectClass OBJECT IDENTIFIER ::= {
 *     itu-t(0)
 *     data(9)
 *     pss(2342)
 *     ucl(19200300)
 *     pilot(100)
 *     pilotAttributeType(4)
 * }
 * ```
 * 
 * @constant
 */
export
const pilotObjectClass: OBJECT_IDENTIFIER = _OID.fromParts([
    /* itu-t */ 0,
    /* data */ 9,
    /* pss */ 2342,
    /* ucl */ 19200300,
    /* pilot */ 100,
    /* pilotAttributeType */ 4,
]);

/* eslint-enable */
