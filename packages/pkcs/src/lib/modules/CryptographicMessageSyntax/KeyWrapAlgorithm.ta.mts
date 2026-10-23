/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/x500/AuthenticationFramework";


/**
 * @summary KeyWrapAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyWrapAlgorithm  ::=  AlgorithmIdentifier
 * ```
 */
export type KeyWrapAlgorithm = AlgorithmIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) KeyWrapAlgorithm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyWrapAlgorithm} The decoded data structure.
 */
export const _decode_KeyWrapAlgorithm: $.ASN1Decoder<KeyWrapAlgorithm> = _decode_AlgorithmIdentifier;

/**
 * @summary Encodes a(n) KeyWrapAlgorithm into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyWrapAlgorithm, encoded as an ASN.1 Element.
 */
export const _encode_KeyWrapAlgorithm: $.ASN1Encoder<KeyWrapAlgorithm> = _encode_AlgorithmIdentifier;


/* eslint-enable */
