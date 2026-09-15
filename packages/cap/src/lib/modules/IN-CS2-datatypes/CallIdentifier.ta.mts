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
 * @summary CallIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallIdentifier  ::=  INTEGER(1..2147483647)
 * ```
 */
export
type CallIdentifier = INTEGER;
export const _decode_CallIdentifier = (el: _Element): CallIdentifier => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 1n || value > 2147483647n) : (value < 1 || value > 2147483647))) {
        throw new ASN1OverflowError("CallIdentifier violates INTEGER constraint");
    }
    return value;
};
export const _encode_CallIdentifier = $._encodeInteger;


/* eslint-enable */
