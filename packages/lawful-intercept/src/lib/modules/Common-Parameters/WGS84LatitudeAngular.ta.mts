/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary WGS84LatitudeAngular
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WGS84LatitudeAngular  ::=  OCTET STRING (SIZE (10))
 * ```
 */
export
type WGS84LatitudeAngular = OCTET_STRING; // OctetStringType
export const _decode_WGS84LatitudeAngular: $.ASN1Decoder<WGS84LatitudeAngular> = (el: _Element): WGS84LatitudeAngular => {
    const value = $._decodeOctetString(el);
    if (value.length < 10 || value.length > 10) {
        throw new ASN1SizeError("WGS84LatitudeAngular violates SIZE constraint");
    }
    return value;
};
export const _encode_WGS84LatitudeAngular: $.ASN1Encoder<WGS84LatitudeAngular> = $._encodeOctetString;


/* eslint-enable */
