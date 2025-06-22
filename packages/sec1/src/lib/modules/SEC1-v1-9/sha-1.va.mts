/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";



/**
 * @summary sha_1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sha-1 OBJECT IDENTIFIER ::= {iso(1) identified-organization(3)
 * oiw(14) secsig(3) algorithm(2) 26}
 * ```
 * 
 * @constant
 */
export
const sha_1: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* oiw */ 14,
    /* secsig */ 3,
    /* algorithm */ 2,
    26,
]);

/* eslint-enable */
