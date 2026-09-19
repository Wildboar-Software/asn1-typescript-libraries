/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary id_icao
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-icao                                 OBJECT IDENTIFIER ::= {joint-iso-itu-t(2) international(23) icao(136)}
 * ```
 * 
 * @constant
 */
export
const id_icao: OBJECT_IDENTIFIER = _OID.fromParts([
    /* joint-iso-itu-t */ 2,
    /* international */ 23,
    /* icao */ 136,
]);

/* eslint-enable */
