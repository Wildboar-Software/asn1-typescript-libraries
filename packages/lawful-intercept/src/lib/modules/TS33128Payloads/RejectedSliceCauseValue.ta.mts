/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
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

export function _decode_RejectedSliceCauseValue (el: _Element): RejectedSliceCauseValue {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? value : BigInt(value)) < 0n || (typeof value === "bigint" ? value : BigInt(value)) > 255n) {
        throw new ASN1OverflowError("RejectedSliceCauseValue violates the INTEGER range constraint");
    }
    return value;
}

export const _encode_RejectedSliceCauseValue: $.ASN1Encoder<RejectedSliceCauseValue> = $._encodeInteger;


/* eslint-enable */
