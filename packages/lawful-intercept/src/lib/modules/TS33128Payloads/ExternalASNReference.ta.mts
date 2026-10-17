/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExternalASNReference
 * @description
 * 
 * The formal reference notation (as described in clause D.5) for the ASN.1
 * component used to encode the parameter or message reported in the
 * EncodedASNValue.
 *
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExternalASNReference  ::=  UTF8String
 * ```
 */
export
type ExternalASNReference = UTF8String; // UTF8String
export const _decode_ExternalASNReference: $.ASN1Decoder<ExternalASNReference> = $._decodeUTF8String;
export const _encode_ExternalASNReference: $.ASN1Encoder<ExternalASNReference> = $._encodeUTF8String;


/* eslint-enable */
