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
 * @summary RequestedType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedType  ::=  INTEGER(0..127)
 * ```
 */
export
type RequestedType = INTEGER;
export const _decode_RequestedType = (el: _Element): RequestedType => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 0n || value > 127n) : (value < 0 || value > 127))) {
        throw new ASN1OverflowError("RequestedType violates INTEGER constraint");
    }
    return value;
};
export const _encode_RequestedType = $._encodeInteger;


/* eslint-enable */
