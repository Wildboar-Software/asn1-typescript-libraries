/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Status
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Status  ::=  INTEGER (0..255)
 * ```
 */
export
type Status = INTEGER;

export
const _decode_Status = (el: _Element): Status => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 0n || value > 255n) : (value < 0 || value > 255))) {
        throw new ASN1OverflowError("Status violates INTEGER constraint");
    }
    return value;
};

export
const _encode_Status: $.ASN1Encoder<Status> = $._encodeInteger;

/* eslint-enable */
