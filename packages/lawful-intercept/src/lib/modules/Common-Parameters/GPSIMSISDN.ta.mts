/* eslint-disable */
import {
    ASN1Element as _Element,
    type NumericString,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GPSIMSISDN
 * @description
 *
 * Generic Public Subscription Identifier, as defined in 3GPP
 * TS 23.501, clause 5.9.8, in MSISDN representation (3GPP TS 23.003,
 * clause 3.2). In 3GPP Release 15 a GPSI is either an MSISDN or an
 * External Identifier given as an NAI under 3GPP TS 23.003,
 * clause 19.7.2. This form is the MSISDN. Decimal digits, length 1 to
 * 15. Example: `447700900000`.
 *
 * ETSI TS 103 280 V2.7.1 (2021-11), clause 6.45, citing 3GPP TS 23.501
 * and 3GPP TS 23.003.
 *
 * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GPSIMSISDN  ::=  NumericString (SIZE(1..15))
 * ```
 */
export
type GPSIMSISDN = NumericString; // NumericString
export const _decode_GPSIMSISDN: $.ASN1Decoder<GPSIMSISDN> = (el: _Element): GPSIMSISDN => {
    const value = $._decodeNumericString(el);
    if (value.length < 1 || value.length > 15) {
        throw new ASN1SizeError("GPSIMSISDN violates SIZE constraint");
    }
    return value;
};
export const _encode_GPSIMSISDN: $.ASN1Encoder<GPSIMSISDN> = $._encodeNumericString;


/* eslint-enable */
