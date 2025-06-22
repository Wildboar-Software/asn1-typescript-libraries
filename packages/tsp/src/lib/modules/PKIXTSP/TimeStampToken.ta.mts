/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import {
    ContentInfo,
    _decode_ContentInfo,
    _encode_ContentInfo,
} from "@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/ContentInfo.ta.mjs";

/**
 * @summary TimeStampToken
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeStampToken  ::=  ContentInfo
 * ```
 */
export type TimeStampToken = ContentInfo; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) TimeStampToken
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeStampToken} The decoded data structure.
 */
export const _decode_TimeStampToken = _decode_ContentInfo;

/**
 * @summary Encodes a(n) TimeStampToken into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeStampToken, encoded as an ASN.1 Element.
 */
export const _encode_TimeStampToken = _encode_ContentInfo;


/* eslint-enable */
