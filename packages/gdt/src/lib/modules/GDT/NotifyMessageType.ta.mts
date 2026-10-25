/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NotifyMessageType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotifyMessageType  ::=  INTEGER
 * ```
 */
export
type NotifyMessageType = INTEGER;
export const _decode_NotifyMessageType: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_NotifyMessageType: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
