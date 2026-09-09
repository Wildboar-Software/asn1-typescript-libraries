/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Integer4
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Integer4      ::=  INTEGER (0..2147483647)
 * ```
 */
export
type Integer4 = INTEGER;
export const _decode_Integer4 = $._decodeInteger;
export const _encode_Integer4 = $._encodeInteger;


/* eslint-enable */
