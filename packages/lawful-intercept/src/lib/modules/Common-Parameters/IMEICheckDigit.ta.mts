/* eslint-disable */
import {
    ASN1Element as _Element,
    type NumericString,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMEICheckDigit
 * @description
 *
 * International Mobile station Equipment Identity, written as decimal
 * digits, with the Luhn check digit of ISO/IEC 7812-1, annex B.
 * Length 15. Example: `009971234567892`.
 *
 * ETSI TS 103 280 V2.7.1 (2021-11), clause 6.9, citing 3GPP TS 23.003,
 * clause 6.
 *
 * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMEICheckDigit  ::=  NumericString (SIZE(15))
 * ```
 */
export
type IMEICheckDigit = NumericString; // NumericString
export const _decode_IMEICheckDigit: $.ASN1Decoder<IMEICheckDigit> = (el: _Element): IMEICheckDigit => {
    const value = $._decodeNumericString(el);
    if (value.length < 15 || value.length > 15) {
        throw new ASN1SizeError("IMEICheckDigit violates SIZE constraint");
    }
    return value;
};
export const _encode_IMEICheckDigit: $.ASN1Encoder<IMEICheckDigit> = $._encodeNumericString;


/* eslint-enable */
