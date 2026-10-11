/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PCCRuleID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PCCRuleID  ::=  UTF8String
 * ```
 */
export
type PCCRuleID = UTF8String; // UTF8String

export const _decode_PCCRuleID: $.ASN1Decoder<PCCRuleID> = $._decodeUTF8String;

export const _encode_PCCRuleID: $.ASN1Encoder<PCCRuleID> = $._encodeUTF8String;


/* eslint-enable */
