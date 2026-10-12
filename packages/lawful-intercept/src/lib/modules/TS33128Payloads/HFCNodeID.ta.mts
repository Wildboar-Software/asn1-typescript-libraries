/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HFCNodeID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HFCNodeID  ::=  UTF8String
 * ```
 */
export
type HFCNodeID = UTF8String; // UTF8String
export const _decode_HFCNodeID: $.ASN1Decoder<HFCNodeID> = $._decodeUTF8String;
export const _encode_HFCNodeID: $.ASN1Encoder<HFCNodeID> = $._encodeUTF8String;


/* eslint-enable */
