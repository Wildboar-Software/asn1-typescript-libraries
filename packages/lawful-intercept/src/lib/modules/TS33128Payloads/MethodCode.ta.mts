/* eslint-disable */
import {
    ASN1Element as _Element,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MethodCode
 * @description
 * 
 * This parameter shall carry the decimal code value of the network specific
 * positioning method as described in TS 29.572 [24] clause 6.1.6.2.15.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MethodCode  ::=  INTEGER (16..31)
 * ```
 */
export
type MethodCode = INTEGER;
export const _decode_MethodCode: $.ASN1Decoder<MethodCode> = (el: _Element): MethodCode => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 16n || _n > 31n) {
        throw new ASN1OverflowError("MethodCode violates INTEGER range");
    }
    return value;
};
export const _encode_MethodCode: $.ASN1Encoder<MethodCode> = $._encodeInteger;


/* eslint-enable */
