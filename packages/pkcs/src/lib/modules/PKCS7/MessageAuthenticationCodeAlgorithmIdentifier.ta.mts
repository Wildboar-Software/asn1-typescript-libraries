/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/x500/AuthenticationFramework";


/**
 * @summary MessageAuthenticationCodeAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageAuthenticationCodeAlgorithmIdentifier  ::=  AlgorithmIdentifier
 * ```
 */
export type MessageAuthenticationCodeAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) MessageAuthenticationCodeAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageAuthenticationCodeAlgorithmIdentifier} The decoded data structure.
 */
export const _decode_MessageAuthenticationCodeAlgorithmIdentifier: $.ASN1Decoder<MessageAuthenticationCodeAlgorithmIdentifier> = _decode_AlgorithmIdentifier;

/**
 * @summary Encodes a(n) MessageAuthenticationCodeAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageAuthenticationCodeAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export const _encode_MessageAuthenticationCodeAlgorithmIdentifier: $.ASN1Encoder<MessageAuthenticationCodeAlgorithmIdentifier> = _encode_AlgorithmIdentifier;


/* eslint-enable */
