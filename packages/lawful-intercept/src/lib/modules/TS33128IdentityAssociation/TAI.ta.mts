/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TAI
 * @description
 * 
 * Encoded as per TS 24.501 [13] clause 9.11.3.8, omitting the first octet.
 *
 * 3GPP TS 33.128, clause 6.2.2A.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TAI  ::=  OCTET STRING (SIZE(6))
 * ```
 */
export
type TAI = OCTET_STRING; // OctetStringType
export const _decode_TAI: $.ASN1Decoder<TAI> = (el: _Element): TAI => {
    const value = $._decodeOctetString(el);
    if (value.length < 6 || value.length > 6) {
        throw new ASN1SizeError("TAI violates SIZE constraint");
    }
    return value;
};
export const _encode_TAI: $.ASN1Encoder<TAI> = $._encodeOctetString;


/* eslint-enable */
