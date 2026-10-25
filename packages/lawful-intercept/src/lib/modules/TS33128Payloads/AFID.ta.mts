/* eslint-disable */
import {
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AFID
 * @description
 * 
 * The AF replacing an existing Device trigger which has not been delivered yet
 * to the device (e.g. because the device is unreachable) by a new Device
 * trigger.
 *
 * 3GPP TS 33.128, clause 7.7.3.1.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AFID  ::=  UTF8String
 * ```
 */
export
type AFID = UTF8String; // UTF8String
export const _decode_AFID: $.ASN1Decoder<AFID> = $._decodeUTF8String;
export const _encode_AFID: $.ASN1Encoder<AFID> = $._encodeUTF8String;


/* eslint-enable */
