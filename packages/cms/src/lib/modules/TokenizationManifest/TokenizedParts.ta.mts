/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Tokenized,
    _decode_Tokenized,
    _encode_Tokenized,
} from "../TokenizationManifest/Tokenized.ta.mjs";

/**
 * @summary TokenizedParts
 * @description
 *
 * Parameterized tokenization manifest value (ITU-T X.894 | ISO/IEC 24824-4 clause 8.3; Annex A.18).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TokenizedParts  ::=  Tokenized {{ Manifest }}
 * ```
 */
export type TokenizedParts = Tokenized; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) TokenizedParts
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TokenizedParts} The decoded data structure.
 */
export const _decode_TokenizedParts: $.ASN1Decoder<TokenizedParts> = _decode_Tokenized;

/**
 * @summary Encodes a(n) TokenizedParts into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TokenizedParts, encoded as an ASN.1 Element.
 */
export const _encode_TokenizedParts: $.ASN1Encoder<TokenizedParts> = _encode_Tokenized;


/* eslint-enable */
