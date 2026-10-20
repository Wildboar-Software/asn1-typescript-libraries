/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AccessAvailabilityChangeReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessAvailabilityChangeReason  ::=  INTEGER ( 0 .. 4294967295 )
 * ```
 */
export
type AccessAvailabilityChangeReason = INTEGER;

export const _decode_AccessAvailabilityChangeReason = (el: _Element): AccessAvailabilityChangeReason => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? Number(value) : value) < 0 || (typeof value === "bigint" ? Number(value) : value) > 4294967295) {
        throw new ASN1OverflowError("AccessAvailabilityChangeReason violates INTEGER range");
    }
    return value;
};

export
const _encode_AccessAvailabilityChangeReason: $.ASN1Encoder<AccessAvailabilityChangeReason> = $._encodeInteger;

/* eslint-enable */
