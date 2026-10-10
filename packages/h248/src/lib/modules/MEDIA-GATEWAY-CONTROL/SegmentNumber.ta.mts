/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SegmentNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SegmentNumber  ::=  INTEGER(0..65535)
 * ```
 */
export
type SegmentNumber = INTEGER;
export const _decode_SegmentNumber = $._decodeInteger;
export const _encode_SegmentNumber = $._encodeInteger;


/* eslint-enable */
