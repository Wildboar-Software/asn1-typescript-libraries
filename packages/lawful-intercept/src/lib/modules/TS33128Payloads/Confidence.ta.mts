/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Confidence
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Confidence  ::=  INTEGER (0..100)
 * ```
 */
export
type Confidence = INTEGER;
export const _decode_Confidence: $.ASN1Decoder<Confidence> = $._decodeInteger;
export const _encode_Confidence: $.ASN1Encoder<Confidence> = $._encodeInteger;


/* eslint-enable */
