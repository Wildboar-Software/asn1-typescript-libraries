/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VLANID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VLANID  ::=  INTEGER (0..4095)
 * ```
 */
export
type VLANID = INTEGER;
export const _decode_VLANID: $.ASN1Decoder<VLANID> = (el: _Element): VLANID => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 4095n) {
        throw new ASN1OverflowError("VLANID violates INTEGER range");
    }
    return value;
};
export const _encode_VLANID: $.ASN1Encoder<VLANID> = $._encodeInteger;


/* eslint-enable */
