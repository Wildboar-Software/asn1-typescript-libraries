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
 * @summary Interval
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Interval           ::=  INTEGER (-1..60000)
 * ```
 */
export
type Interval = INTEGER;
export const _decode_Interval = (el: _Element): Interval => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < -1n || value > 60000n) : (value < -1 || value > 60000))) {
        throw new ASN1OverflowError("Interval violates INTEGER constraint");
    }
    return value;
};
export const _encode_Interval = $._encodeInteger;


/* eslint-enable */
