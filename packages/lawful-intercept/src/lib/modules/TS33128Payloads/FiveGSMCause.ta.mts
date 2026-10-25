/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGSMCause
 * @description
 * 
 * Provides the value of the 5GSM cause, see TS 24.501 [13] clause 9.11.4.2. In
 * case the procedure is aborted due to a 5GSM STATUS message, the 5GSM cause is
 * the one included in the 5GSM status message.
 *
 * 3GPP TS 33.128, clause 6.2.3.2.6.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGSMCause  ::=  INTEGER (0..255)
 * ```
 */
export
type FiveGSMCause = INTEGER;
export const _decode_FiveGSMCause: $.ASN1Decoder<FiveGSMCause> = (el: _Element): FiveGSMCause => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 255n) {
        throw new ASN1OverflowError("FiveGSMCause violates INTEGER range");
    }
    return value;
};
export const _encode_FiveGSMCause: $.ASN1Encoder<FiveGSMCause> = $._encodeInteger;


/* eslint-enable */
