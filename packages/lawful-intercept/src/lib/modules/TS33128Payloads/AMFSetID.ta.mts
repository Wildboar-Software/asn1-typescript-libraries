/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMFSetID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFSetID  ::=  INTEGER (0..1023)
 * ```
 */
export
type AMFSetID = INTEGER;
export const _decode_AMFSetID: $.ASN1Decoder<AMFSetID> = (el: _Element): AMFSetID => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 1023n) {
        throw new ASN1OverflowError("AMFSetID violates INTEGER range");
    }
    return value;
};
export const _encode_AMFSetID: $.ASN1Encoder<AMFSetID> = $._encodeInteger;


/* eslint-enable */
