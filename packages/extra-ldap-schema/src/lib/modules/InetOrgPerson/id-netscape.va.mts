/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";

/**
 * @summary id_netscape
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-netscape OBJECT IDENTIFIER ::= {
 *     joint-iso-itu-t(2)
 *     country(16)
 *     us(840)
 *     organization(1)
 *     netscape(113730)
 * }
 * ```
 * 
 * @constant
 */
export
const id_netscape: OBJECT_IDENTIFIER = _OID.fromParts([
    /* joint-iso-itu-t */ 2,
    /* country */ 16,
    /* us */ 840,
    /* organization */ 1,
    /* netscape */ 113730,
]);

/* eslint-enable */
