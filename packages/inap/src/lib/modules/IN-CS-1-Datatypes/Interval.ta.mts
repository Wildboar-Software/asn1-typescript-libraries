/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Interval
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Interval  ::=  INTEGER(-1..60000)
 * ```
 */
export
type Interval = INTEGER;

export
function _decode_Interval (el: _Element): Interval {
    const value = $._decodeInteger(el);
    if (value < -1 || value > 60000) {
        throw new ASN1OverflowError("Interval violates INTEGER constraint");
    }
    return value;
}

export
const _encode_Interval: $.ASN1Encoder<Interval> = $._encodeInteger;

/* eslint-enable */
