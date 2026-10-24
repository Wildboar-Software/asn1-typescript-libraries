/* eslint-disable */
import {
    ASN1Element as _Element,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BarometricPressure
 * @description
 * 
 * This IE specifies the measured uncompensated atmospheric pressure in units of
 * Pascal (Pa). Minimum: 30000. Maximum: 115000. Described in TS 29.572 [24]
 * clause 6.1.6.3.2.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BarometricPressure  ::=  INTEGER (30000..115000)
 * ```
 */
export
type BarometricPressure = INTEGER;
export const _decode_BarometricPressure: $.ASN1Decoder<BarometricPressure> = (el: _Element): BarometricPressure => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 30000n || _n > 115000n) {
        throw new ASN1OverflowError("BarometricPressure violates INTEGER range");
    }
    return value;
};
export const _encode_BarometricPressure: $.ASN1Encoder<BarometricPressure> = $._encodeInteger;


/* eslint-enable */
