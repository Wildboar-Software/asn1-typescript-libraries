/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Orientation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Orientation  ::=  INTEGER (0..180)
 * ```
 */
export
type Orientation = INTEGER;
export const _decode_Orientation: $.ASN1Decoder<Orientation> = $._decodeInteger;
export const _encode_Orientation: $.ASN1Encoder<Orientation> = $._encodeInteger;


/* eslint-enable */
