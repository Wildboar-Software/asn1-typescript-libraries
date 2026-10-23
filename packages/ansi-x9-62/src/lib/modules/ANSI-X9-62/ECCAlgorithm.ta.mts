/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../ANSI-X9-62/AlgorithmIdentifier.ta.mjs";
/**
 * @summary ECCAlgorithm
 * @description
 *
 * AlgorithmIdentifier constrained to `ECCAlgorithmSet`. Not in
 * ANSI X9.62-1998, which identifies ECDSA+SHA-1 only by
 * `ecdsa-with-SHA1`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECCAlgorithm  ::=  AlgorithmIdentifier {{ECCAlgorithmSet}}
 * ```
 */
export type ECCAlgorithm = AlgorithmIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ECCAlgorithm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECCAlgorithm} The decoded data structure.
 */
export const _decode_ECCAlgorithm: $.ASN1Decoder<ECCAlgorithm> = _decode_AlgorithmIdentifier;

/**
 * @summary Encodes a(n) ECCAlgorithm into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECCAlgorithm, encoded as an ASN.1 Element.
 */
export const _encode_ECCAlgorithm: $.ASN1Encoder<ECCAlgorithm> = _encode_AlgorithmIdentifier;


/* eslint-enable */
