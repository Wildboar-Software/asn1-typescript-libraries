/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary StreamID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StreamID  ::=  INTEGER(0..65535)
 * ```
 */
export
type StreamID = INTEGER;
export const _decode_StreamID = $._decodeInteger;
export const _encode_StreamID = $._encodeInteger;


/* eslint-enable */
