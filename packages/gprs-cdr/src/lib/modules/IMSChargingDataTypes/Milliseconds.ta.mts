/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Milliseconds
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Milliseconds  ::=  INTEGER ( 0 .. 999 )
 * ```
 */
export
type Milliseconds = INTEGER;

export const _decode_Milliseconds = (el: _Element): Milliseconds => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? Number(value) : value) < 0 || (typeof value === "bigint" ? Number(value) : value) > 999) {
        throw new ASN1OverflowError("Milliseconds violates INTEGER range");
    }
    return value;
};

export
const _encode_Milliseconds: $.ASN1Encoder<Milliseconds> = $._encodeInteger;

/* eslint-enable */
