/* eslint-disable */
import {
    type INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NotificationId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotificationId  ::=  INTEGER
 * ```
 */
export
type NotificationId = INTEGER;
export const _decode_NotificationId: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_NotificationId: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
