/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TriggerID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TriggerID  ::=  UTF8String
 * ```
 */
export
type TriggerID = UTF8String; // UTF8String
export const _decode_TriggerID: $.ASN1Decoder<TriggerID> = $._decodeUTF8String;
export const _encode_TriggerID: $.ASN1Encoder<TriggerID> = $._encodeUTF8String;


/* eslint-enable */
