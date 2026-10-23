/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    HashPointer,
    _decode_HashPointer,
    _encode_HashPointer,
} from "../CMSProfileAttributes/HashPointer.ta.mjs";

/**
 * @summary Sidechain
 * @description
 *
 * Sidechain link encoded as `HashPointer` (ITU-T X.894 | ISO/IEC 24824-4 Annex A.17).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Sidechain     ::=  HashPointer
 * ```
 */
export type Sidechain = HashPointer; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) Sidechain
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Sidechain} The decoded data structure.
 */
export const _decode_Sidechain: $.ASN1Decoder<Sidechain> = _decode_HashPointer;

/**
 * @summary Encodes a(n) Sidechain into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Sidechain, encoded as an ASN.1 Element.
 */
export const _encode_Sidechain: $.ASN1Encoder<Sidechain> = _encode_HashPointer;


/* eslint-enable */
