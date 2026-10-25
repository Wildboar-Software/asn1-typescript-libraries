/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/x500/AuthenticationFramework";


/**
 * @summary MessageAuthenticationCodeAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageAuthenticationCodeAlgorithm  ::=  AlgorithmIdentifier
 * ```
 */
export type MessageAuthenticationCodeAlgorithm = AlgorithmIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) MessageAuthenticationCodeAlgorithm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageAuthenticationCodeAlgorithm} The decoded data structure.
 */
export const _decode_MessageAuthenticationCodeAlgorithm: $.ASN1Decoder<MessageAuthenticationCodeAlgorithm> = _decode_AlgorithmIdentifier;

/**
 * @summary Encodes a(n) MessageAuthenticationCodeAlgorithm into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageAuthenticationCodeAlgorithm, encoded as an ASN.1 Element.
 */
export const _encode_MessageAuthenticationCodeAlgorithm: $.ASN1Encoder<MessageAuthenticationCodeAlgorithm> = _encode_AlgorithmIdentifier;


/* eslint-enable */
