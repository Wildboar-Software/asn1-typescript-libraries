/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary RRClass
 * @description
 *
 * Route restriction class returned by `getRRCInf` (ECMA-302 §6.3.1, §7.5.2.1).
 * An integer from 0 to 99. The standard assigns no meaning to individual
 * values. §6.9.19 states no protocol interaction with ANF-RRC.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-302/
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
