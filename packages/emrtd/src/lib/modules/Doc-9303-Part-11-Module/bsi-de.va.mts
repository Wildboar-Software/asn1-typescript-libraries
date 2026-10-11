/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary bsi_de
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * bsi-de OBJECT IDENTIFIER ::= {
 *     itu-t(0) identified-organization(4) etsi(0)
 *     reserved(127) etsi-identified-organization(0) 7
 * }
 * ```
 * 
 * @constant
 */
export
const bsi_de: OBJECT_IDENTIFIER = _OID.fromParts([
    /* itu-t */ 0,
    /* identified-organization */ 4,
    /* etsi */ 0,
    /* reserved */ 127,
    /* etsi-identified-organization */ 0,
    7,
]);

/* eslint-enable */
