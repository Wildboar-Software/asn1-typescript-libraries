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
import * as $ from "@wildboar/asn1/functional";




/**
 * @summary Generic64BitCounter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Generic64BitCounter  ::=  INTEGER(0..18446744073709551615)
 * ```
 */
export
type Generic64BitCounter = INTEGER;




export const _decode_Generic64BitCounter = $._decodeInteger;




export const _encode_Generic64BitCounter = $._encodeInteger;


/* eslint-enable */
