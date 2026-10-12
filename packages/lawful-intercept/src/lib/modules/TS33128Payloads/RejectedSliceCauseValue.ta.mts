/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RejectedSliceCauseValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RejectedSliceCauseValue  ::=  INTEGER (0..255)
 * ```
 */
export
type RejectedSliceCauseValue = INTEGER;
export const _decode_RejectedSliceCauseValue: $.ASN1Decoder<RejectedSliceCauseValue> = $._decodeInteger;
export const _encode_RejectedSliceCauseValue: $.ASN1Encoder<RejectedSliceCauseValue> = $._encodeInteger;


/* eslint-enable */
