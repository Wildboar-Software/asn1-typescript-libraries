/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RejectedSliceCauseValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RejectedSliceCauseValue  ::=  INTEGER (0..255)
 * ```
 */
export
type RejectedSliceCauseValue = INTEGER;
export const _decode_RejectedSliceCauseValue: $.ASN1Decoder<RejectedSliceCauseValue> = (el: _Element): RejectedSliceCauseValue => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 255n) {
        throw new ASN1OverflowError("RejectedSliceCauseValue violates INTEGER range");
    }
    return value;
};
export const _encode_RejectedSliceCauseValue: $.ASN1Encoder<RejectedSliceCauseValue> = $._encodeInteger;


/* eslint-enable */
