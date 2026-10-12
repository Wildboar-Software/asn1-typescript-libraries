/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMFRegionID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFRegionID  ::=  INTEGER (0..255)
 * ```
 */
export
type AMFRegionID = INTEGER;
export const _decode_AMFRegionID: $.ASN1Decoder<AMFRegionID> = (el: _Element): AMFRegionID => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 255n) {
        throw new ASN1OverflowError("AMFRegionID violates INTEGER range");
    }
    return value;
};
export const _encode_AMFRegionID: $.ASN1Encoder<AMFRegionID> = $._encodeInteger;


/* eslint-enable */
