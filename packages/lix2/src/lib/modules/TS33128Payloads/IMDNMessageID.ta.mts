/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMDNMessageID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMDNMessageID  ::=  UTF8String
 * ```
 */
export
type IMDNMessageID = UTF8String; // UTF8String

/**
 * @summary Decodes an ASN.1 element into a(n) IMDNMessageID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IMDNMessageID = $._decodeUTF8String;

/**
 * @summary Encodes a(n) IMDNMessageID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMDNMessageID, encoded as an ASN.1 Element.
 */
export const _encode_IMDNMessageID = $._encodeUTF8String;


/* eslint-enable */
