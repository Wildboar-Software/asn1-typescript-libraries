/* eslint-disable */
import {
    ASN1Element as _Element,
    type NumericString,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMEISV
 * @description
 *
 * International Mobile station Equipment Identity and Software Version
 * Number, as defined in 3GPP TS 23.003, clause 6.2.2. Decimal digits,
 * with a software version number in place of a Luhn check digit.
 * Length 16. Example: `0099712345678999`.
 *
 * ETSI TS 103 280 V2.7.1 (2021-11), clause 6.10, citing 3GPP TS 23.003,
 * clause 6.2.2.
 *
 * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMEISV  ::=  NumericString (SIZE(16))
 * ```
 */
export
type IMEISV = NumericString; // NumericString
export const _decode_IMEISV: $.ASN1Decoder<IMEISV> = (el: _Element): IMEISV => {
    const value = $._decodeNumericString(el);
    if (value.length < 16 || value.length > 16) {
        throw new ASN1SizeError("IMEISV violates SIZE constraint");
    }
    return value;
};
export const _encode_IMEISV: $.ASN1Encoder<IMEISV> = $._encodeNumericString;


/* eslint-enable */
