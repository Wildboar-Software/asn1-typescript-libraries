/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RATType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RATType     ::=  INTEGER ( 0 .. 255 )
 * ```
 */
export
type RATType = INTEGER;

export const _decode_RATType = (el: _Element): RATType => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? Number(value) : value) < 0 || (typeof value === "bigint" ? Number(value) : value) > 255) {
        throw new ASN1OverflowError("RATType violates INTEGER range");
    }
    return value;
};

export
const _encode_RATType: $.ASN1Encoder<RATType> = $._encodeInteger;

/* eslint-enable */
