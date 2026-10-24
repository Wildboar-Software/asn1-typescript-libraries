/* eslint-disable */
import {
    ASN1Element as _Element,
    type NumericString,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InternationalE164
 * @description
 *
 * E.164 number in fully international format, written as decimal
 * digits. Length 1 to 15. Example: `447700900123`.
 *
 * ETSI TS 103 280 V2.7.1 (2021-11), clause 6.6, citing Recommendation
 * ITU-T E.164, clause 6.
 *
 * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InternationalE164  ::=  NumericString (SIZE(1..15))
 * ```
 */
export
type InternationalE164 = NumericString; // NumericString
export const _decode_InternationalE164: $.ASN1Decoder<InternationalE164> = (el: _Element): InternationalE164 => {
    const value = $._decodeNumericString(el);
    if (value.length < 1 || value.length > 15) {
        throw new ASN1SizeError("InternationalE164 violates SIZE constraint");
    }
    return value;
};
export const _encode_InternationalE164: $.ASN1Encoder<InternationalE164> = $._encodeNumericString;


/* eslint-enable */
