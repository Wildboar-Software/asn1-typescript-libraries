/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Orientation
 * @description
 * 
 * Integer value of the orientation angle, expressed in degrees. Encoded as per
 * TS 29.572 [24] table 6.1.6.3.2-1.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Orientation  ::=  INTEGER (0..180)
 * ```
 */
export
type Orientation = INTEGER;
export const _decode_Orientation: $.ASN1Decoder<Orientation> = (el: _Element): Orientation => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 180n) {
        throw new ASN1OverflowError("Orientation violates INTEGER range");
    }
    return value;
};
export const _encode_Orientation: $.ASN1Encoder<Orientation> = $._encodeInteger;


/* eslint-enable */
