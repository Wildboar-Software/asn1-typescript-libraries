/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Orientation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Orientation  ::=  INTEGER (0..180)
 * ```
 */
export
type Orientation = INTEGER;

export function _decode_Orientation (el: _Element): Orientation {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? value : BigInt(value)) < 0n || (typeof value === "bigint" ? value : BigInt(value)) > 180n) {
        throw new ASN1OverflowError("Orientation violates the INTEGER range constraint");
    }
    return value;
}

export const _encode_Orientation: $.ASN1Encoder<Orientation> = $._encodeInteger;


/* eslint-enable */
