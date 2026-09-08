/* eslint-disable */
import {
    INTEGER,
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
export const _decode_NotificationId = $._decodeInteger;
export const _encode_NotificationId = $._encodeInteger;


/* eslint-enable */
