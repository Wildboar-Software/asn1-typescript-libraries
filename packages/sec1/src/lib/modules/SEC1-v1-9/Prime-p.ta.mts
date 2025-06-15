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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary Prime_p
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Prime-p  ::=  INTEGER
 * ```
 */
export
type Prime_p = INTEGER;


export const _decode_Prime_p = $._decodeInteger;


export const _encode_Prime_p = $._encodeInteger;


/* eslint-enable */
