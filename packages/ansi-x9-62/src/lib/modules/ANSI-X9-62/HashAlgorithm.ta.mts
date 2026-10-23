/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../ANSI-X9-62/AlgorithmIdentifier.ta.mjs";
/**
 * @summary HashAlgorithm
 * @description
 *
 * Hash function identified by `ANSIX9HashFunctions`. Not in ANSI
 * X9.62-1998, which always uses SHA-1 via `ecdsa-with-SHA1`. Used
 * as parameters of `ecdsa-with-Specified`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HashAlgorithm ::=  AlgorithmIdentifier {{ ANSIX9HashFunctions }}
 * ```
 */
export type HashAlgorithm = AlgorithmIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) HashAlgorithm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HashAlgorithm} The decoded data structure.
 */
export const _decode_HashAlgorithm: $.ASN1Decoder<HashAlgorithm> = _decode_AlgorithmIdentifier;

/**
 * @summary Encodes a(n) HashAlgorithm into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HashAlgorithm, encoded as an ASN.1 Element.
 */
export const _encode_HashAlgorithm: $.ASN1Encoder<HashAlgorithm> = _encode_AlgorithmIdentifier;


/* eslint-enable */
