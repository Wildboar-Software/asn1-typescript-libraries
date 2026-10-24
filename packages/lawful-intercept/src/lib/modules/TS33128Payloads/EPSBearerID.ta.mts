/* eslint-disable */
import {
    ASN1Element as _Element,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSBearerID
 * @description
 * 
 * Derived from the E-RAB ID IE, see TS 36.413 [38] clause 9.2.1.2.
 *
 * 3GPP TS 33.128, clause 6.3.2.2A.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSBearerID  ::=  INTEGER (0..255)
 * ```
 */
export
type EPSBearerID = INTEGER;
export const _decode_EPSBearerID: $.ASN1Decoder<EPSBearerID> = (el: _Element): EPSBearerID => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 255n) {
        throw new ASN1OverflowError("EPSBearerID violates INTEGER range");
    }
    return value;
};
export const _encode_EPSBearerID: $.ASN1Encoder<EPSBearerID> = $._encodeInteger;


/* eslint-enable */
