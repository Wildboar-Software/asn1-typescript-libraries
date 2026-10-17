/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SCSASID
 * @description
 * 
 * Identity of the SCS/AS replacing an existing Device trigger which has not
 * been delivered yet to the device (e.g. because the device is unreachable) by
 * a new Device trigger.
 *
 * 3GPP TS 33.128, clause 7.8.3.1.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCSASID  ::=  UTF8String
 * ```
 */
export
type SCSASID = UTF8String; // UTF8String
export const _decode_SCSASID: $.ASN1Decoder<SCSASID> = $._decodeUTF8String;
export const _encode_SCSASID: $.ASN1Encoder<SCSASID> = $._encodeUTF8String;


/* eslint-enable */
