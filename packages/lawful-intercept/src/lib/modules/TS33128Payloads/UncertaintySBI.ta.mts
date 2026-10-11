/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UncertaintySBI
 * @description
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
