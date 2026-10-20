/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Priority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Priority  ::=  INTEGER (0..9)
 * ```
 */
export
type Priority = INTEGER;

export
const _decode_Priority = (el: _Element): Priority => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 0n || value > 9n) : (value < 0 || value > 9))) {
        throw new ASN1OverflowError("Priority violates INTEGER constraint");
    }
    return value;
};

export
const _encode_Priority: $.ASN1Encoder<Priority> = $._encodeInteger;

/* eslint-enable */
