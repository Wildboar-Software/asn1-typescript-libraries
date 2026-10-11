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
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Angle  ::=  INTEGER (0..360)
 * ```
 */
export
type Angle = INTEGER;

export function _decode_Angle (el: _Element): Angle {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? value : BigInt(value)) < 0n || (typeof value === "bigint" ? value : BigInt(value)) > 360n) {
        throw new ASN1OverflowError("Angle violates the INTEGER range constraint");
    }
    return value;
}

export const _encode_Angle: $.ASN1Encoder<Angle> = $._encodeInteger;


/* eslint-enable */
