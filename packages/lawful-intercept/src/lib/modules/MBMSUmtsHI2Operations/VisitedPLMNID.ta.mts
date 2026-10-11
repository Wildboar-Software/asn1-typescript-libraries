/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary VisitedPLMNID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VisitedPLMNID  ::=  UTF8String
 * ```
 */
export
type VisitedPLMNID = UTF8String; // UTF8String

export const _decode_VisitedPLMNID: $.ASN1Decoder<VisitedPLMNID> = $._decodeUTF8String;

export const _encode_VisitedPLMNID: $.ASN1Encoder<VisitedPLMNID> = $._encodeUTF8String;

/* eslint-enable */
