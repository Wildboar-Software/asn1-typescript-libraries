/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceContextID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceContextID  ::=  UTF8String
 * ```
 */
export
type ServiceContextID = UTF8String; // UTF8String

export
const _decode_ServiceContextID: $.ASN1Decoder<ServiceContextID> = $._decodeUTF8String;

export
const _encode_ServiceContextID: $.ASN1Encoder<ServiceContextID> = $._encodeUTF8String;

/* eslint-enable */
