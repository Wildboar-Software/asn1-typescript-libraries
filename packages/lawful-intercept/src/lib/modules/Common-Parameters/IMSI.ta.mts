/* eslint-disable */
import {
    ASN1Element as _Element,
    type NumericString,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMSI
 * @description
 *
 * International Mobile Subscriber Identity, written as decimal digits.
 * Length 6 to 15. Example: `999999123456789`.
 *
 * ETSI TS 103 280 V2.7.1 (2021-11), clause 6.7, citing Recommendation
 * ITU-T E.212, clause 6.1, and 3GPP TS 23.003, clause 2.2 and
 * clause 2.3.
 *
 * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSI  ::=  NumericString (SIZE(6..15))
 * ```
 */
export
type IMSI = NumericString; // NumericString
export const _decode_IMSI: $.ASN1Decoder<IMSI> = (el: _Element): IMSI => {
    const value = $._decodeNumericString(el);
    if (value.length < 6 || value.length > 15) {
        throw new ASN1SizeError("IMSI violates SIZE constraint");
    }
    return value;
};
export const _encode_IMSI: $.ASN1Encoder<IMSI> = $._encodeNumericString;


/* eslint-enable */
