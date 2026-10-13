/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LocationErrorCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationErrorCode  ::=  INTEGER (1..699)
 * ```
 */
export
type LocationErrorCode = INTEGER;
export const _decode_LocationErrorCode: $.ASN1Decoder<LocationErrorCode> = (el: _Element): LocationErrorCode => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 1n || _n > 699n) {
        throw new ASN1OverflowError("LocationErrorCode violates INTEGER range");
    }
    return value;
};
export const _encode_LocationErrorCode: $.ASN1Encoder<LocationErrorCode> = $._encodeInteger;


/* eslint-enable */
