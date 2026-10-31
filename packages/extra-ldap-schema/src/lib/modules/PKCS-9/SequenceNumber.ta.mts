/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SequenceNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SequenceNumber  ::=  INTEGER (1..MAX)
 * ```
 */
export
type SequenceNumber = INTEGER;

export function _decode_SequenceNumber (el: _Element): SequenceNumber {
    const value = $._decodeInteger(el);
    if (value < 1) {
        throw new ASN1OverflowError("SequenceNumber violates INTEGER range");
    }
    return value;
}

export
const _encode_SequenceNumber: $.ASN1Encoder<SequenceNumber> = $._encodeInteger;

/* eslint-enable */
