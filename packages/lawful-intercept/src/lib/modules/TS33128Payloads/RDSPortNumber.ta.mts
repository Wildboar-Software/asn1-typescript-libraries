/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RDSPortNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RDSPortNumber  ::=  INTEGER (0..15)
 * ```
 */
export
type RDSPortNumber = INTEGER;
export const _decode_RDSPortNumber: $.ASN1Decoder<RDSPortNumber> = (el: _Element): RDSPortNumber => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 15n) {
        throw new ASN1OverflowError("RDSPortNumber violates INTEGER range");
    }
    return value;
};
export const _encode_RDSPortNumber: $.ASN1Encoder<RDSPortNumber> = $._encodeInteger;


/* eslint-enable */
