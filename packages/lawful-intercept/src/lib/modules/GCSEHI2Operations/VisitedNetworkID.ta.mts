/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VisitedNetworkID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VisitedNetworkID  ::=  UTF8String
 * ```
 */
export
type VisitedNetworkID = UTF8String; // UTF8String
export const _decode_VisitedNetworkID: $.ASN1Decoder<VisitedNetworkID> = $._decodeUTF8String;
export const _encode_VisitedNetworkID: $.ASN1Encoder<VisitedNetworkID> = $._encodeUTF8String;


/* eslint-enable */
