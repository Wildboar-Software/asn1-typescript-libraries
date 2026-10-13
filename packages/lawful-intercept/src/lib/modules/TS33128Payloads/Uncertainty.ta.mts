/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Uncertainty
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Uncertainty  ::=  INTEGER (0..127)
 * ```
 */
export
type Uncertainty = INTEGER;
export const _decode_Uncertainty: $.ASN1Decoder<Uncertainty> = (el: _Element): Uncertainty => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 127n) {
        throw new ASN1OverflowError("Uncertainty violates INTEGER range");
    }
    return value;
};
export const _encode_Uncertainty: $.ASN1Encoder<Uncertainty> = $._encodeInteger;


/* eslint-enable */
