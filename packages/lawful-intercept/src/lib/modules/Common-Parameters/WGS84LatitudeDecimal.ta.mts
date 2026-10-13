/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary WGS84LatitudeDecimal
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WGS84LatitudeDecimal  ::=  OCTET STRING (SIZE (10))
 * ```
 */
export
type WGS84LatitudeDecimal = OCTET_STRING; // OctetStringType
export const _decode_WGS84LatitudeDecimal: $.ASN1Decoder<WGS84LatitudeDecimal> = (el: _Element): WGS84LatitudeDecimal => {
    const value = $._decodeOctetString(el);
    if (value.length < 10 || value.length > 10) {
        throw new ASN1SizeError("WGS84LatitudeDecimal violates SIZE constraint");
    }
    return value;
};
export const _encode_WGS84LatitudeDecimal: $.ASN1Encoder<WGS84LatitudeDecimal> = $._encodeOctetString;


/* eslint-enable */
