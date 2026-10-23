/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    DSABindArgument,
    _decode_DSABindArgument,
    _encode_DSABindArgument,
} from "../DistributedOperations/DSABindArgument.ta.mjs";
/**
 * @summary DSABindResult
 * @description
 *
 * `DSABindResult ::= DSABindArgument` (same components). Responder
 * AE-title as a DN in `credentials`; no SASL.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DSABindResult   ::=   DSABindArgument
 * ```
 */
export type DSABindResult = DSABindArgument; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) DSABindResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DSABindResult} The decoded data structure.
 */
export const _decode_DSABindResult: $.ASN1Decoder<DSABindResult> = _decode_DSABindArgument;

/**
 * @summary Encodes a(n) DSABindResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DSABindResult, encoded as an ASN.1 Element.
 */
export const _encode_DSABindResult: $.ASN1Encoder<DSABindResult> = _encode_DSABindArgument;


/* eslint-enable */
