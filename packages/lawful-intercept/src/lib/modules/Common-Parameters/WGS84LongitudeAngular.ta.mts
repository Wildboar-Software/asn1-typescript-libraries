/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary WGS84LongitudeAngular
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WGS84LongitudeAngular  ::=  OCTET STRING (SIZE (11))
 * ```
 */
export
type WGS84LongitudeAngular = OCTET_STRING; // OctetStringType
export const _decode_WGS84LongitudeAngular: $.ASN1Decoder<WGS84LongitudeAngular> = (el: _Element): WGS84LongitudeAngular => {
    const value = $._decodeOctetString(el);
    if (value.length < 11 || value.length > 11) {
        throw new ASN1SizeError("WGS84LongitudeAngular violates SIZE constraint");
    }
    return value;
};
export const _encode_WGS84LongitudeAngular: $.ASN1Encoder<WGS84LongitudeAngular> = $._encodeOctetString;


/* eslint-enable */
