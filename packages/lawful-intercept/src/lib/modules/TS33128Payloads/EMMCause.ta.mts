/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EMMCause
 * @description
 * 
 * Indicates the EMM cause value for network-initiated detach, see TS 24.301
 * [51] clause 9.9.3.9.
 *
 * 3GPP TS 33.128, clause 6.3.2.2.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EMMCause  ::=  INTEGER (0..255)
 * ```
 */
export
type EMMCause = INTEGER;
export const _decode_EMMCause: $.ASN1Decoder<EMMCause> = (el: _Element): EMMCause => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 255n) {
        throw new ASN1OverflowError("EMMCause violates INTEGER range");
    }
    return value;
};
export const _encode_EMMCause: $.ASN1Encoder<EMMCause> = $._encodeInteger;


/* eslint-enable */
