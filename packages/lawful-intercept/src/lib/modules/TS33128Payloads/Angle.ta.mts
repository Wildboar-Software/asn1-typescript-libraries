/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Angle
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Angle  ::=  INTEGER (0..360)
 * ```
 */
export
type Angle = INTEGER;

export const _decode_Angle: $.ASN1Decoder<Angle> = $._decodeInteger;

export const _encode_Angle: $.ASN1Encoder<Angle> = $._encodeInteger;


/* eslint-enable */
