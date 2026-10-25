/* eslint-disable */
import { ASN1Element as _Element, type UTF8String } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary Label
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Label  ::=  UTF8String (SIZE(0..pkcs15-ub-label))
 * ```
 */
export type Label = UTF8String; // UTF8String




export const _decode_Label: $.ASN1Decoder<string> = $._decodeUTF8String;




export const _encode_Label: $.ASN1Encoder<string> = $._encodeUTF8String;


/* eslint-enable */
