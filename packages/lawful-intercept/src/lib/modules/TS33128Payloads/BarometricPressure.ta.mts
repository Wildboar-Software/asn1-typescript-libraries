/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BarometricPressure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BarometricPressure  ::=  INTEGER (30000..115000)
 * ```
 */
export
type BarometricPressure = INTEGER;

export function _decode_BarometricPressure (el: _Element): BarometricPressure {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? value : BigInt(value)) < 30000n || (typeof value === "bigint" ? value : BigInt(value)) > 115000n) {
        throw new ASN1OverflowError("BarometricPressure violates the INTEGER range constraint");
    }
    return value;
}

export const _encode_BarometricPressure: $.ASN1Encoder<BarometricPressure> = $._encodeInteger;


/* eslint-enable */
