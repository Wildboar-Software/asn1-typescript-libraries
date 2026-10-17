/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMSRPMessageReference
 * @description
 * 
 * The SM-RL Message Reference of the message per TS 24.011 [46] clause 7.3.
 *
 * 3GPP TS 33.128, clause 6.2.5.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSRPMessageReference  ::=  INTEGER (0..255)
 * ```
 */
export
type SMSRPMessageReference = INTEGER;
export const _decode_SMSRPMessageReference: $.ASN1Decoder<SMSRPMessageReference> = (el: _Element): SMSRPMessageReference => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 255n) {
        throw new ASN1OverflowError("SMSRPMessageReference violates INTEGER range");
    }
    return value;
};
export const _encode_SMSRPMessageReference: $.ASN1Encoder<SMSRPMessageReference> = $._encodeInteger;


/* eslint-enable */
