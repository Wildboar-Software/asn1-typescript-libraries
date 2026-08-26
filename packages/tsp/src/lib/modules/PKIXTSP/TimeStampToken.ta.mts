/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import {
    ContentInfo,
    _decode_ContentInfo,
    _encode_ContentInfo,
} from "@wildboar/cms";

/**
 * @summary TimeStampToken
 * @description
 *
 * Time-stamp token: a CMS `ContentInfo` that SHALL encapsulate a
 * signed-data content type
 * ([RFC 3161 §2.4.2](https://datatracker.ietf.org/doc/html/rfc3161#section-2.4.2)).
 *
 * - `contentType` is `id-signedData` ([CMS](https://datatracker.ietf.org/doc/html/rfc2630)).
 * - Within `SignedData` `encapContentInfo`, `eContentType` is
 *   `id-ct-TSTInfo` and `eContent` is the DER-encoded `TSTInfo`.
 *
 * MUST NOT contain signatures other than the TSA's. The TSA certificate
 * identifier (`ESSCertID`) MUST appear as a `signerInfo` attribute
 * inside a `SigningCertificate` attribute.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeStampToken  ::=  ContentInfo
 * -- contentType is id-signedData ([CMS])
 * -- content is SignedData ([CMS])
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
