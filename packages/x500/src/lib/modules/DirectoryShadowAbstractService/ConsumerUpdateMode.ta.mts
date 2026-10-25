/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SchedulingParameters,
    _decode_SchedulingParameters,
    _encode_SchedulingParameters,
} from "../DirectoryShadowAbstractService/SchedulingParameters.ta.mjs";
/**
 * @summary ConsumerUpdateMode
 * @description
 *
 * Consumer-driven update schedule. Same encoding as
 * `SchedulingParameters`. The consumer still uses
 * `requestShadowUpdate` then `updateShadow`; this only says when those
 * requests are expected.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConsumerUpdateMode  ::=  SchedulingParameters
 * ```
 */
export type ConsumerUpdateMode = SchedulingParameters; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ConsumerUpdateMode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConsumerUpdateMode} The decoded data structure.
 */
export const _decode_ConsumerUpdateMode: $.ASN1Decoder<ConsumerUpdateMode> = _decode_SchedulingParameters;

/**
 * @summary Encodes a(n) ConsumerUpdateMode into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConsumerUpdateMode, encoded as an ASN.1 Element.
 */
export const _encode_ConsumerUpdateMode: $.ASN1Encoder<ConsumerUpdateMode> = _encode_SchedulingParameters;


/* eslint-enable */
