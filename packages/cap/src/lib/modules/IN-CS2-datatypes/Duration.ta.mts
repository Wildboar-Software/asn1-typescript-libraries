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
 * @summary Duration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Duration  ::=  INTEGER(-2..86400)
 * ```
 */
export
type Duration = INTEGER;
export const _decode_Duration = (el: _Element): Duration => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < -2n || value > 86400n) : (value < -2 || value > 86400))) {
        throw new ASN1OverflowError("Duration violates INTEGER constraint");
    }
    return value;
};
export const _encode_Duration = $._encodeInteger;


/* eslint-enable */
