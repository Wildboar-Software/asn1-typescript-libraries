/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LocationErrorCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationErrorCode  ::=  INTEGER (1..699)
 * ```
 */
export
type LocationErrorCode = INTEGER;

export const _decode_LocationErrorCode: $.ASN1Decoder<LocationErrorCode> = $._decodeInteger;

export const _encode_LocationErrorCode: $.ASN1Encoder<LocationErrorCode> = $._encodeInteger;


/* eslint-enable */
