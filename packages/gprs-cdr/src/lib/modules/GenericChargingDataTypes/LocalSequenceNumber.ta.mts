/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LocalSequenceNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocalSequenceNumber  ::=  INTEGER ( 0 .. 4294967295 )
 * ```
 */
export
type LocalSequenceNumber = INTEGER;

export const _decode_LocalSequenceNumber = (el: _Element): LocalSequenceNumber => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? Number(value) : value) < 0 || (typeof value === "bigint" ? Number(value) : value) > 4294967295) {
        throw new ASN1OverflowError("LocalSequenceNumber violates INTEGER range");
    }
    return value;
};

export
const _encode_LocalSequenceNumber: $.ASN1Encoder<LocalSequenceNumber> = $._encodeInteger;

/* eslint-enable */
