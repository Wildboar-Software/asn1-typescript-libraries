/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InnerRadius
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InnerRadius  ::=  INTEGER (0..327675)
 * ```
 */
export
type InnerRadius = INTEGER;
export const _decode_InnerRadius: $.ASN1Decoder<InnerRadius> = (el: _Element): InnerRadius => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 327675n) {
        throw new ASN1OverflowError("InnerRadius violates INTEGER range");
    }
    return value;
};
export const _encode_InnerRadius: $.ASN1Encoder<InnerRadius> = $._encodeInteger;


/* eslint-enable */
