/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../NIST-AES/AlgorithmIdentifier.ta.mjs";



/**
 * @summary AESAlgorithmIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AESAlgorithmIdentifier  ::=  AlgorithmIdentifier {{ AES-Algorithms }}
 * ```
 */
export
type AESAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) AESAlgorithmIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AESAlgorithmIdentifier: $.ASN1Decoder<AESAlgorithmIdentifier> = _decode_AlgorithmIdentifier;

/**
 * @summary Encodes a(n) AESAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AESAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export const _encode_AESAlgorithmIdentifier: $.ASN1Encoder<AESAlgorithmIdentifier> = _encode_AlgorithmIdentifier;


/* eslint-enable */
