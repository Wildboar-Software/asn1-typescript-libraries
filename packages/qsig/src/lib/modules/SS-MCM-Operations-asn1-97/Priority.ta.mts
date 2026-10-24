/* eslint-disable */
import {
    type INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Priority
 * @description
 *
 * Priority of a message (ECMA-347 §6.3.1). Integer 0..9.
 * 0 is the highest priority and 9 is the lowest. The same
 * range is used by the untyped priority components of
 * `mCMNewMsg` and `mCMUpdateReq`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
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
