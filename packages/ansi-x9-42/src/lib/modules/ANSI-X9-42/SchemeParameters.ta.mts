/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../ANSI-X9-42/AlgorithmIdentifier.ta.mjs";

/**
 * @summary SchemeParameters
 * @description
 *
 * KDF hash algorithm identifier. SHA-1 (`id-sha1` with NULL) is the
 * only algorithm in this edition; the set is extensible. Written as
 * `{ algorithm id-sha1, parameters NULL }`. ANS X9.42-2003 §A.2.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SchemeParameters  ::=  AlgorithmIdentifier {{ KeyDerivationAlgorithm }}
 * ```
 */
export type SchemeParameters = AlgorithmIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) SchemeParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SchemeParameters} The decoded data structure.
 */
export const _decode_SchemeParameters: $.ASN1Decoder<SchemeParameters> = _decode_AlgorithmIdentifier;

/**
 * @summary Encodes a(n) SchemeParameters into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SchemeParameters, encoded as an ASN.1 Element.
 */
export const _encode_SchemeParameters: $.ASN1Encoder<SchemeParameters> = _encode_AlgorithmIdentifier;


/* eslint-enable */
