/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SliceServiceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SliceServiceType  ::=  INTEGER ( 0 .. 255 )
 * ```
 */
export
type SliceServiceType = INTEGER;

export const _decode_SliceServiceType = (el: _Element): SliceServiceType => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? Number(value) : value) < 0 || (typeof value === "bigint" ? Number(value) : value) > 255) {
        throw new ASN1OverflowError("SliceServiceType violates INTEGER range");
    }
    return value;
};

export
const _encode_SliceServiceType: $.ASN1Encoder<SliceServiceType> = $._encodeInteger;

/* eslint-enable */
