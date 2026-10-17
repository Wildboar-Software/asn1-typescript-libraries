/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UncertaintySBI
 * @description
 * 
 * Contains a string representation of the uncertainty reported in meters. See
 * TS 29.572 [24] table 6.1.6.3.2-1.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UncertaintySBI  ::=  UTF8String
 * ```
 */
export
type UncertaintySBI = UTF8String; // UTF8String
export const _decode_UncertaintySBI: $.ASN1Decoder<UncertaintySBI> = $._decodeUTF8String;
export const _encode_UncertaintySBI: $.ASN1Encoder<UncertaintySBI> = $._encodeUTF8String;


/* eslint-enable */
