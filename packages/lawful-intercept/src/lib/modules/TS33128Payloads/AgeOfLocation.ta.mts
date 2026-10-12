/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AgeOfLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgeOfLocation  ::=  INTEGER (0..32767)
 * ```
 */
export
type AgeOfLocation = INTEGER;
export const _decode_AgeOfLocation: $.ASN1Decoder<AgeOfLocation> = $._decodeInteger;
export const _encode_AgeOfLocation: $.ASN1Encoder<AgeOfLocation> = $._encodeInteger;


/* eslint-enable */
