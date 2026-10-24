/* eslint-disable */
import {
    ASN1Element as _Element,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMFPointer
 * @description
 * 
 * Derived from the AMF Pointer defined in TS 23.003 [19] clause 2.10.1.
 *
 * 3GPP TS 33.128, clause 8.3.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFPointer  ::=  INTEGER (0..63)
 * ```
 */
export
type AMFPointer = INTEGER;
export const _decode_AMFPointer: $.ASN1Decoder<AMFPointer> = (el: _Element): AMFPointer => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 63n) {
        throw new ASN1OverflowError("AMFPointer violates INTEGER range");
    }
    return value;
};
export const _encode_AMFPointer: $.ASN1Encoder<AMFPointer> = $._encodeInteger;


/* eslint-enable */
