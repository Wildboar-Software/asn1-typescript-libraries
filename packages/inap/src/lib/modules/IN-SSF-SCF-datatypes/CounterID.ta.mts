/* eslint-disable */
import {
    INTEGER,
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
 * CounterID  ::=  INTEGER(0..9)
 * ```
 */
export
type CounterID = INTEGER;

export
function _decode_CounterID (el: _Element): CounterID {
    const value = $._decodeInteger(el);
    if (typeof value === "bigint" ? (value < 0n || value > 9n) : (value < 0 || value > 9)) {
        throw new ASN1OverflowError("CounterID violates INTEGER constraint");
    }
    return value;
}

export
const _encode_CounterID: $.ASN1Encoder<CounterID> = $._encodeInteger;

/* eslint-enable */
