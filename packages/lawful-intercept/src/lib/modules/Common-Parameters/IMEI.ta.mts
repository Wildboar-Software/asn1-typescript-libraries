/* eslint-disable */
import {
    type ASN1Element as _Element,
    type NumericString,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMEI
 * @description
 *
 * International Mobile station Equipment Identity, written as decimal
 * digits, without the Luhn check digit of ISO/IEC 7812-1, annex B.
 * Length 14. Example: `00997123456789`.
 *
 * The check digit is excluded because of the inclusion and exclusion
 * issues noted in ETSI TS 102 657, clause E.3. Use `IMEICheckDigit`
 * when the check digit is required.
 *
 * ETSI TS 103 280 V2.7.1 (2021-11), clause 6.8, citing 3GPP TS 23.003,
 * clause 6.
 *
 * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMEI  ::=  NumericString (SIZE(14))
 * ```
 */
export
type IMEI = NumericString; // NumericString
export const _decode_IMEI: $.ASN1Decoder<IMEI> = (el: _Element): IMEI => {
    const value = $._decodeNumericString(el);
    if (value.length < 14 || value.length > 14) {
        throw new ASN1SizeError("IMEI violates SIZE constraint");
    }
    return value;
};
export const _encode_IMEI: $.ASN1Encoder<IMEI> = $._encodeNumericString;


/* eslint-enable */
