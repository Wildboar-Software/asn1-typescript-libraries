/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGGUTI
 * @description
 * 
 * Encoded as per TS 24.501 [13] figure 9.11.3.4.1, omitting the first four
 * octets.
 *
 * 3GPP TS 33.128, clause 6.2.2A.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGGUTI  ::=  OCTET STRING (SIZE(10))
 * ```
 */
export
type FiveGGUTI = OCTET_STRING; // OctetStringType
export const _decode_FiveGGUTI: $.ASN1Decoder<FiveGGUTI> = (el: _Element): FiveGGUTI => {
    const value = $._decodeOctetString(el);
    if (value.length < 10 || value.length > 10) {
        throw new ASN1SizeError("FiveGGUTI violates SIZE constraint");
    }
    return value;
};
export const _encode_FiveGGUTI: $.ASN1Encoder<FiveGGUTI> = $._encodeOctetString;


/* eslint-enable */
