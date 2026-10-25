/* eslint-disable */
import { ASN1Element as _Element, type ENUMERATED } from "@wildboar/asn1";
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
 * ENUMERATED `notStarted`(1) `proceeding`(2) `completed`(3). Numbering
 * starts at 1, not 0. `nextRDNToBeResolved` present only when
 * `proceeding`.
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
 * @description
 *
 * No DSA holding the initial RDN(s) has been reached. Default.
 * Numbering starts at 1.
 *
 * @constant
 * @type {number}
 */
export const OperationProgress_nameResolutionPhase_notStarted: _enum_for_OperationProgress_nameResolutionPhase.notStarted = _enum_for_OperationProgress_nameResolutionPhase.notStarted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notStarted
 * @description
 *
 * No DSA holding the initial RDN(s) has been reached. Default.
 * Numbering starts at 1.
 *
 * @constant
 * @type {number}
 */
export const notStarted: _enum_for_OperationProgress_nameResolutionPhase.notStarted = OperationProgress_nameResolutionPhase_notStarted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationProgress_nameResolutionPhase_proceeding
 * @description
 *
 * Initial part recognized; DSA holding the target not yet reached.
 * `nextRDNToBeResolved` shall be present.
 *
 * @constant
 * @type {number}
 */
export const OperationProgress_nameResolutionPhase_proceeding: _enum_for_OperationProgress_nameResolutionPhase.proceeding = _enum_for_OperationProgress_nameResolutionPhase.proceeding; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary proceeding
 * @description
 *
 * Initial part recognized; DSA holding the target not yet reached.
 * `nextRDNToBeResolved` shall be present.
 *
 * @constant
 * @type {number}
 */
export const proceeding: _enum_for_OperationProgress_nameResolutionPhase.proceeding = OperationProgress_nameResolutionPhase_proceeding; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationProgress_nameResolutionPhase_completed
 * @description
 *
 * DSA holding the target reached; operation proper underway.
 * `nextRDNToBeResolved` shall be absent.
 *
 * @constant
 * @type {number}
 */
export const OperationProgress_nameResolutionPhase_completed: _enum_for_OperationProgress_nameResolutionPhase.completed = _enum_for_OperationProgress_nameResolutionPhase.completed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary completed
 * @description
 *
 * DSA holding the target reached; operation proper underway.
 * `nextRDNToBeResolved` shall be absent.
 *
 * @constant
 * @type {number}
 */
export const completed: _enum_for_OperationProgress_nameResolutionPhase.completed = OperationProgress_nameResolutionPhase_completed; /* SHORT_NAMED_ENUMERATED_VALUE */

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
