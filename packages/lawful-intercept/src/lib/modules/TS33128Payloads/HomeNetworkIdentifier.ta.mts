/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HomeNetworkIdentifier
 * @description
 * 
 * Indicates the home network of the subscriber. Shall be populated as described
 * in TS 23.003 [19] clause 2.2B.
 *
 * 3GPP TS 33.128, clause 8.3.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HomeNetworkIdentifier  ::=  UTF8String
 * ```
 */
export
type HomeNetworkIdentifier = UTF8String; // UTF8String
export const _decode_HomeNetworkIdentifier: $.ASN1Decoder<HomeNetworkIdentifier> = $._decodeUTF8String;
export const _encode_HomeNetworkIdentifier: $.ASN1Encoder<HomeNetworkIdentifier> = $._encodeUTF8String;


/* eslint-enable */
