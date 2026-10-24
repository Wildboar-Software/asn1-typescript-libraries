/* eslint-disable */
import {
    type INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CounterID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CounterID  ::=  INTEGER(0..99)
 * ```
 */
export
type CounterID = INTEGER;

export
function _decode_CounterID (el: _Element): CounterID {
    const value = $._decodeInteger(el);
    if (value < 0 || value > 99) {
        throw new ASN1OverflowError("CounterID violates INTEGER constraint");
    }
    return value;
}

export
const _encode_CounterID: $.ASN1Encoder<CounterID> = $._encodeInteger;

/* eslint-enable */
