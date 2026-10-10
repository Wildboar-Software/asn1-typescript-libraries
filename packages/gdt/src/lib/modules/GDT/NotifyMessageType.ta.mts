/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
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
export const _decode_NotifyMessageType = $._decodeInteger;
export const _encode_NotifyMessageType = $._encodeInteger;


/* eslint-enable */
