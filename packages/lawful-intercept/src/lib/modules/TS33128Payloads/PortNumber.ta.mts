/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PortNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PortNumber  ::=  INTEGER (0..65535)
 * ```
 */
export
type PortNumber = INTEGER;
export const _decode_PortNumber: $.ASN1Decoder<PortNumber> = (el: _Element): PortNumber => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 65535n) {
        throw new ASN1OverflowError("PortNumber violates INTEGER range");
    }
    return value;
};
export const _encode_PortNumber: $.ASN1Encoder<PortNumber> = $._encodeInteger;


/* eslint-enable */
