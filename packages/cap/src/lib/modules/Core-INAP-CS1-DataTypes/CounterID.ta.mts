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
 * @summary CounterID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CounterID      ::=  INTEGER (0..99)
 * ```
 */
export
type CounterID = INTEGER;
export const _decode_CounterID = (el: _Element): CounterID => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 0n || value > 99n) : (value < 0 || value > 99))) {
        throw new ASN1OverflowError("CounterID violates INTEGER constraint");
    }
    return value;
};
export const _encode_CounterID = $._encodeInteger;


/* eslint-enable */
