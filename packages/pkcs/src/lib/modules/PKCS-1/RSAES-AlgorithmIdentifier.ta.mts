/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../PKCS-1/AlgorithmIdentifier.ta.mjs";

/**
 * @summary RSAES_AlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RSAES-AlgorithmIdentifier  ::=  AlgorithmIdentifier {
 *     {PKCS1Algorithms}
 * }
 * ```
 */
export type RSAES_AlgorithmIdentifier = AlgorithmIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) RSAES_AlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RSAES_AlgorithmIdentifier} The decoded data structure.
 */
export const _decode_RSAES_AlgorithmIdentifier: $.ASN1Decoder<RSAES_AlgorithmIdentifier> = _decode_AlgorithmIdentifier;

/**
 * @summary Encodes a(n) RSAES_AlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RSAES_AlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export const _encode_RSAES_AlgorithmIdentifier: $.ASN1Encoder<RSAES_AlgorithmIdentifier> = _encode_AlgorithmIdentifier;


/* eslint-enable */
