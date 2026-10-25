/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMFRegionID
 * @description
 * 
 * Derived from the AMF Region ID defined in TS 23.003 [19] clause 2.10.1.
 *
 * 3GPP TS 33.128, clause 8.3.3.
 * https://www.3gpp.org/DynaReport/33128.htm
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
