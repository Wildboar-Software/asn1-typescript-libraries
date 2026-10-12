/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMFPointer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFPointer  ::=  INTEGER (0..63)
 * ```
 */
export
type AMFPointer = INTEGER;
export const _decode_AMFPointer: $.ASN1Decoder<AMFPointer> = $._decodeInteger;
export const _encode_AMFPointer: $.ASN1Encoder<AMFPointer> = $._encodeInteger;


/* eslint-enable */
