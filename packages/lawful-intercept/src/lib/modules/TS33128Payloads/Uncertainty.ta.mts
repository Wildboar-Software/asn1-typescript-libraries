/* eslint-disable */
import {
    ASN1Element as _Element,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Uncertainty
 * @description
 * 
 * This type has been deprecated and shall always be set to 0.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
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
