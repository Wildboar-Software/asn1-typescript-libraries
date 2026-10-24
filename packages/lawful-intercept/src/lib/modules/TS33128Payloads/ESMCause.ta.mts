/* eslint-disable */
import {
    ASN1Element as _Element,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ESMCause
 * @description
 * 
 * Provides the value of the ESM cause, see TS 24.301 [50] clause 9.9.4.4. Sent
 * as an integer cause value (see TS 29.274 [87] table 8.4-1). In case the
 * procedure is aborted due to a ESM STATUS message, the ESM cause is the one
 * included in the ESM status message.
 *
 * 3GPP TS 33.128, clause 6.3.3.2.10.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ESMCause  ::=  INTEGER (0..255)
 * ```
 */
export
type ESMCause = INTEGER;
export const _decode_ESMCause: $.ASN1Decoder<ESMCause> = (el: _Element): ESMCause => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 255n) {
        throw new ASN1OverflowError("ESMCause violates INTEGER range");
    }
    return value;
};
export const _encode_ESMCause: $.ASN1Encoder<ESMCause> = $._encodeInteger;


/* eslint-enable */
