/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InstanceIdentifierURN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InstanceIdentifierURN  ::=  UTF8String
 * ```
 */
export
type InstanceIdentifierURN = UTF8String; // UTF8String

export const _decode_InstanceIdentifierURN: $.ASN1Decoder<InstanceIdentifierURN> = $._decodeUTF8String;

export const _encode_InstanceIdentifierURN: $.ASN1Encoder<InstanceIdentifierURN> = $._encodeUTF8String;


/* eslint-enable */
