/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LocationAreaType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationAreaType  ::=  BIT STRING (SIZE (14))
 * ```
 */
export
type LocationAreaType = BIT_STRING;
export const _decode_LocationAreaType: $.ASN1Decoder<LocationAreaType> = $._decodeBitString;
export const _encode_LocationAreaType: $.ASN1Encoder<LocationAreaType> = $._encodeBitString;


/* eslint-enable */
