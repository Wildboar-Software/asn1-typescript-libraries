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
 * @summary NumberOfDigits
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberOfDigits  ::=  INTEGER(1..255)
 * ```
 */
export
type NumberOfDigits = INTEGER;
export const _decode_NumberOfDigits = (el: _Element): NumberOfDigits => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 1n || value > 255n) : (value < 1 || value > 255))) {
        throw new ASN1OverflowError("NumberOfDigits violates INTEGER constraint");
    }
    return value;
};
export const _encode_NumberOfDigits = $._encodeInteger;


/* eslint-enable */
