/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SpeedUncertainty
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpeedUncertainty  ::=  UTF8String
 * ```
 */
export
type SpeedUncertainty = UTF8String; // UTF8String
export const _decode_SpeedUncertainty: $.ASN1Decoder<SpeedUncertainty> = $._decodeUTF8String;
export const _encode_SpeedUncertainty: $.ASN1Encoder<SpeedUncertainty> = $._encodeUTF8String;


/* eslint-enable */
