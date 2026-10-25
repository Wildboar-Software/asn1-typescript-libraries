/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type URI, _decode_URI, _encode_URI } from "../TokenizationManifest/URI.ta.mjs";

/**
 * @summary TokenServiceProvider
 * @description
 *
 * URI of a token service provider (ITU-T X.894 | ISO/IEC 24824-4 Annex A.18).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TokenServiceProvider  ::=  URI
 * ```
 */
export type TokenServiceProvider = URI; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) TokenServiceProvider
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TokenServiceProvider} The decoded data structure.
 */
export const _decode_TokenServiceProvider: $.ASN1Decoder<TokenServiceProvider> = _decode_URI;

/**
 * @summary Encodes a(n) TokenServiceProvider into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TokenServiceProvider, encoded as an ASN.1 Element.
 */
export const _encode_TokenServiceProvider: $.ASN1Encoder<TokenServiceProvider> = _encode_URI;


/* eslint-enable */
