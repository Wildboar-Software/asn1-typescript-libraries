/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
/**
 * @summary PwdEncAlg
 * @description
 *
 * Algorithm used when creating encrypted passwords. Equality
 * (`pwdEncAlgMatch`) requires `algorithm` identifier **and** `parameters`
 * equal.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PwdEncAlg  ::=  AlgorithmIdentifier{{SupportedAlgorithms}}
 * ```
 */
export type PwdEncAlg = AlgorithmIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) PwdEncAlg
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PwdEncAlg} The decoded data structure.
 */
export const _decode_PwdEncAlg: $.ASN1Decoder<PwdEncAlg> = _decode_AlgorithmIdentifier;

/**
 * @summary Encodes a(n) PwdEncAlg into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PwdEncAlg, encoded as an ASN.1 Element.
 */
export const _encode_PwdEncAlg: $.ASN1Encoder<PwdEncAlg> = _encode_AlgorithmIdentifier;


/* eslint-enable */
