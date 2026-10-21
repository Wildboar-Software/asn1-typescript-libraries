/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary FailureCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FailureCause  ::=  INTEGER (0..255)
 * ```
 */
export
type FailureCause = INTEGER;

export
const _decode_FailureCause = (el: _Element): FailureCause => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 0n || value > 255n) : (value < 0 || value > 255))) {
        throw new ASN1OverflowError("FailureCause violates INTEGER constraint");
    }
    return value;
};

export
const _encode_FailureCause: $.ASN1Encoder<FailureCause> = $._encodeInteger;

/* eslint-enable */
