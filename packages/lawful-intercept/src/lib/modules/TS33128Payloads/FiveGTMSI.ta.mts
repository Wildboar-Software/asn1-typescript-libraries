/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGTMSI
 * @description
 * 
 * Derived from the TMSI defined in TS 23.003 [19] clause 2.10.1.
 *
 * 3GPP TS 33.128, clause 8.3.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGTMSI  ::=  INTEGER (0..4294967295)
 * ```
 */
export
type FiveGTMSI = INTEGER;
export const _decode_FiveGTMSI: $.ASN1Decoder<FiveGTMSI> = (el: _Element): FiveGTMSI => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 4294967295n) {
        throw new ASN1OverflowError("FiveGTMSI violates INTEGER range");
    }
    return value;
};
export const _encode_FiveGTMSI: $.ASN1Encoder<FiveGTMSI> = $._encodeInteger;


/* eslint-enable */
