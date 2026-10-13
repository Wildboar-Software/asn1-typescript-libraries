/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary WGS84LongitudeDecimal
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WGS84LongitudeDecimal  ::=  OCTET STRING (SIZE (11))
 * ```
 */
export
type WGS84LongitudeDecimal = OCTET_STRING; // OctetStringType
export const _decode_WGS84LongitudeDecimal: $.ASN1Decoder<WGS84LongitudeDecimal> = (el: _Element): WGS84LongitudeDecimal => {
    const value = $._decodeOctetString(el);
    if (value.length < 11 || value.length > 11) {
        throw new ASN1SizeError("WGS84LongitudeDecimal violates SIZE constraint");
    }
    return value;
};
export const _encode_WGS84LongitudeDecimal: $.ASN1Encoder<WGS84LongitudeDecimal> = $._encodeOctetString;


/* eslint-enable */
