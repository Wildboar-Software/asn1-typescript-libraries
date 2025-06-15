/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';


/**
 * @summary ReachabilityChangeSyntax_newState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReachabilityChangeSyntax-newState ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_ReachabilityChangeSyntax_newState {
    down = 0,
    up = 1,
}


/**
 * @summary ReachabilityChangeSyntax_newState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReachabilityChangeSyntax-newState ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type ReachabilityChangeSyntax_newState = _enum_for_ReachabilityChangeSyntax_newState;


/**
 * @summary ReachabilityChangeSyntax_newState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReachabilityChangeSyntax-newState ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const ReachabilityChangeSyntax_newState = _enum_for_ReachabilityChangeSyntax_newState;


/**
 * @summary ReachabilityChangeSyntax_newState_down
 * @constant
 * @type {number}
 */
export const ReachabilityChangeSyntax_newState_down: ReachabilityChangeSyntax_newState =
    ReachabilityChangeSyntax_newState.down; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary down
 * @constant
 * @type {number}
 */
export const down: ReachabilityChangeSyntax_newState =
    ReachabilityChangeSyntax_newState.down; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ReachabilityChangeSyntax_newState_up
 * @constant
 * @type {number}
 */
export const ReachabilityChangeSyntax_newState_up: ReachabilityChangeSyntax_newState =
    ReachabilityChangeSyntax_newState.up; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary up
 * @constant
 * @type {number}
 */
export const up: ReachabilityChangeSyntax_newState =
    ReachabilityChangeSyntax_newState.up; /* SHORT_NAMED_ENUMERATED_VALUE */


let _cached_decoder_for_ReachabilityChangeSyntax_newState: $.ASN1Decoder<ReachabilityChangeSyntax_newState> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ReachabilityChangeSyntax_newState
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReachabilityChangeSyntax_newState} The decoded data structure.
 */
export function _decode_ReachabilityChangeSyntax_newState(el: _Element) {
    if (!_cached_decoder_for_ReachabilityChangeSyntax_newState) {
        _cached_decoder_for_ReachabilityChangeSyntax_newState =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_ReachabilityChangeSyntax_newState(el);
}


let _cached_encoder_for_ReachabilityChangeSyntax_newState: $.ASN1Encoder<ReachabilityChangeSyntax_newState> | null = null;


/**
 * @summary Encodes a(n) ReachabilityChangeSyntax_newState into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReachabilityChangeSyntax_newState, encoded as an ASN.1 Element.
 */
export function _encode_ReachabilityChangeSyntax_newState(
    value: ReachabilityChangeSyntax_newState,
    elGetter: $.ASN1Encoder<ReachabilityChangeSyntax_newState>
) {
    if (!_cached_encoder_for_ReachabilityChangeSyntax_newState) {
        _cached_encoder_for_ReachabilityChangeSyntax_newState =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_ReachabilityChangeSyntax_newState(
        value,
        elGetter
    );
}


/* eslint-enable */
