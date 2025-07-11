/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

export enum _enum_for_OperationProgress_nameResolutionPhase {
    notStarted = 1,
    proceeding = 2,
    completed = 3,
}

/**
 * @summary OperationProgress_nameResolutionPhase
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OperationProgress-nameResolutionPhase ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type OperationProgress_nameResolutionPhase =
    | _enum_for_OperationProgress_nameResolutionPhase
    | ENUMERATED;

/**
 * @summary OperationProgress_nameResolutionPhase_notStarted
 * @constant
 * @type {number}
 */
export const OperationProgress_nameResolutionPhase_notStarted: OperationProgress_nameResolutionPhase = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notStarted
 * @constant
 * @type {number}
 */
export const notStarted: OperationProgress_nameResolutionPhase = OperationProgress_nameResolutionPhase_notStarted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationProgress_nameResolutionPhase_proceeding
 * @constant
 * @type {number}
 */
export const OperationProgress_nameResolutionPhase_proceeding: OperationProgress_nameResolutionPhase = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary proceeding
 * @constant
 * @type {number}
 */
export const proceeding: OperationProgress_nameResolutionPhase = OperationProgress_nameResolutionPhase_proceeding; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationProgress_nameResolutionPhase_completed
 * @constant
 * @type {number}
 */
export const OperationProgress_nameResolutionPhase_completed: OperationProgress_nameResolutionPhase = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary completed
 * @constant
 * @type {number}
 */
export const completed: OperationProgress_nameResolutionPhase = OperationProgress_nameResolutionPhase_completed; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_OperationProgress_nameResolutionPhase: $.ASN1Decoder<OperationProgress_nameResolutionPhase> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OperationProgress_nameResolutionPhase
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OperationProgress_nameResolutionPhase} The decoded data structure.
 */
export function _decode_OperationProgress_nameResolutionPhase(el: _Element): OperationProgress_nameResolutionPhase {
    if (!_cached_decoder_for_OperationProgress_nameResolutionPhase) {
        _cached_decoder_for_OperationProgress_nameResolutionPhase =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_OperationProgress_nameResolutionPhase(el);
}

let _cached_encoder_for_OperationProgress_nameResolutionPhase: $.ASN1Encoder<OperationProgress_nameResolutionPhase> | null = null;

/**
 * @summary Encodes a(n) OperationProgress_nameResolutionPhase into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OperationProgress_nameResolutionPhase, encoded as an ASN.1 Element.
 */
export function _encode_OperationProgress_nameResolutionPhase(
    value: OperationProgress_nameResolutionPhase,
    elGetter: $.ASN1Encoder<OperationProgress_nameResolutionPhase>
): _Element {
    if (!_cached_encoder_for_OperationProgress_nameResolutionPhase) {
        _cached_encoder_for_OperationProgress_nameResolutionPhase =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_OperationProgress_nameResolutionPhase(
        value,
        elGetter
    );
}


/* eslint-enable */
