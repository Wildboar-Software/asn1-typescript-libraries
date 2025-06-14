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

/* START_OF_SYMBOL_DEFINITION _enum_for_AdjacencyState */
/**
 * @summary AdjacencyState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdjacencyState  ::=  ENUMERATED {initializing(0), up(1), failed(2), down(3)}
 * ```@enum {number}
 */
export enum _enum_for_AdjacencyState {
  initializing = 0,
  up = 1,
  failed = 2,
  down = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_AdjacencyState */

/* START_OF_SYMBOL_DEFINITION AdjacencyState */
/**
 * @summary AdjacencyState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdjacencyState  ::=  ENUMERATED {initializing(0), up(1), failed(2), down(3)}
 * ```@enum {number}
 */
export type AdjacencyState = _enum_for_AdjacencyState;
/* END_OF_SYMBOL_DEFINITION AdjacencyState */

/* START_OF_SYMBOL_DEFINITION AdjacencyState */
/**
 * @summary AdjacencyState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdjacencyState  ::=  ENUMERATED {initializing(0), up(1), failed(2), down(3)}
 * ```@enum {number}
 */
export const AdjacencyState = _enum_for_AdjacencyState;
/* END_OF_SYMBOL_DEFINITION AdjacencyState */

/* START_OF_SYMBOL_DEFINITION AdjacencyState_initializing */
/**
 * @summary AdjacencyState_initializing
 * @constant
 * @type {number}
 */
export const AdjacencyState_initializing: AdjacencyState =
  AdjacencyState.initializing; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AdjacencyState_initializing */

/* START_OF_SYMBOL_DEFINITION initializing */
/**
 * @summary initializing
 * @constant
 * @type {number}
 */
export const initializing: AdjacencyState =
  AdjacencyState.initializing; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION initializing */

/* START_OF_SYMBOL_DEFINITION AdjacencyState_up */
/**
 * @summary AdjacencyState_up
 * @constant
 * @type {number}
 */
export const AdjacencyState_up: AdjacencyState =
  AdjacencyState.up; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AdjacencyState_up */

/* START_OF_SYMBOL_DEFINITION up */
/**
 * @summary up
 * @constant
 * @type {number}
 */
export const up: AdjacencyState =
  AdjacencyState.up; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION up */

/* START_OF_SYMBOL_DEFINITION AdjacencyState_failed */
/**
 * @summary AdjacencyState_failed
 * @constant
 * @type {number}
 */
export const AdjacencyState_failed: AdjacencyState =
  AdjacencyState.failed; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AdjacencyState_failed */

/* START_OF_SYMBOL_DEFINITION failed */
/**
 * @summary failed
 * @constant
 * @type {number}
 */
export const failed: AdjacencyState =
  AdjacencyState.failed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION failed */

/* START_OF_SYMBOL_DEFINITION AdjacencyState_down */
/**
 * @summary AdjacencyState_down
 * @constant
 * @type {number}
 */
export const AdjacencyState_down: AdjacencyState =
  AdjacencyState.down; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AdjacencyState_down */

/* START_OF_SYMBOL_DEFINITION down */
/**
 * @summary down
 * @constant
 * @type {number}
 */
export const down: AdjacencyState =
  AdjacencyState.down; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION down */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AdjacencyState */
let _cached_decoder_for_AdjacencyState: $.ASN1Decoder<AdjacencyState> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AdjacencyState */

/* START_OF_SYMBOL_DEFINITION _decode_AdjacencyState */
/**
 * @summary Decodes an ASN.1 element into a(n) AdjacencyState
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AdjacencyState} The decoded data structure.
 */
export function _decode_AdjacencyState(el: _Element) {
  if (!_cached_decoder_for_AdjacencyState) {
    _cached_decoder_for_AdjacencyState = $._decodeEnumerated;
  }
  return _cached_decoder_for_AdjacencyState(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AdjacencyState */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AdjacencyState */
let _cached_encoder_for_AdjacencyState: $.ASN1Encoder<AdjacencyState> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AdjacencyState */

/* START_OF_SYMBOL_DEFINITION _encode_AdjacencyState */
/**
 * @summary Encodes a(n) AdjacencyState into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdjacencyState, encoded as an ASN.1 Element.
 */
export function _encode_AdjacencyState(
  value: AdjacencyState,
  elGetter: $.ASN1Encoder<AdjacencyState>
) {
  if (!_cached_encoder_for_AdjacencyState) {
    _cached_encoder_for_AdjacencyState = $._encodeEnumerated;
  }
  return _cached_encoder_for_AdjacencyState(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AdjacencyState */

/* eslint-enable */
