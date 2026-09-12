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
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Integer8
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Integer8  ::=  INTEGER(-128..127)
 * ```
 */
export
type Integer8 = INTEGER;
export const _decode_Integer8 = (el: _Element): Integer8 => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < -128 || n > 127) {
        throw new ASN1OverflowError("Integer8 violates INTEGER range constraint");
    }
    return value;
};
export const _encode_Integer8 = $._encodeInteger;


/* eslint-enable */
