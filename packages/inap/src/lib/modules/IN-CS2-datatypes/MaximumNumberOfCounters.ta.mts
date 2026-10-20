/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import { numOfCounters } from "./numOfCounters.va.mjs";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MaximumNumberOfCounters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MaximumNumberOfCounters  ::=  INTEGER(1..numOfCounters)
 * ```
 */
export
type MaximumNumberOfCounters = INTEGER;

export
function _decode_MaximumNumberOfCounters (el: _Element): MaximumNumberOfCounters {
    const value = $._decodeInteger(el);
    if (typeof value === "bigint" ? (value < 1n || value > BigInt(numOfCounters)) : (value < 1 || value > numOfCounters)) {
        throw new ASN1OverflowError("MaximumNumberOfCounters violates INTEGER constraint");
    }
    return value;
}

export
const _encode_MaximumNumberOfCounters: $.ASN1Encoder<MaximumNumberOfCounters> = $._encodeInteger;

/* eslint-enable */
