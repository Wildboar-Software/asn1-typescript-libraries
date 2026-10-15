/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Angle
 * @description
 * 
 * Integer value of the angle in degrees.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Angle  ::=  INTEGER (0..360)
 * ```
 */
export
type Angle = INTEGER;
export const _decode_Angle: $.ASN1Decoder<Angle> = (el: _Element): Angle => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 360n) {
        throw new ASN1OverflowError("Angle violates INTEGER range");
    }
    return value;
};
export const _encode_Angle: $.ASN1Encoder<Angle> = $._encodeInteger;


/* eslint-enable */
