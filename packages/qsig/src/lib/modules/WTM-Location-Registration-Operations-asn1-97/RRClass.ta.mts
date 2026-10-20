/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RRClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RRClass  ::=  INTEGER (0..99)
 * ```
 */
export
type RRClass = INTEGER;

export
const _decode_RRClass = (el: _Element): RRClass => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 0n || value > 99n) : (value < 0 || value > 99))) {
        throw new ASN1OverflowError("RRClass violates INTEGER constraint");
    }
    return value;
};

export
const _encode_RRClass: $.ASN1Encoder<RRClass> = $._encodeInteger;

/* eslint-enable */
