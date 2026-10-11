/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveQI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveQI  ::=  INTEGER (0..255)
 * ```
 */
export
type FiveQI = INTEGER;

export const _decode_FiveQI: $.ASN1Decoder<FiveQI> = $._decodeInteger;

export const _encode_FiveQI: $.ASN1Encoder<FiveQI> = $._encodeInteger;


/* eslint-enable */
