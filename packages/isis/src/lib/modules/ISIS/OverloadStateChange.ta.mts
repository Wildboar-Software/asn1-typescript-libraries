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

/* START_OF_SYMBOL_DEFINITION _enum_for_OverloadStateChange */
/**
 * @summary OverloadStateChange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OverloadStateChange  ::=  ENUMERATED {on(0), waiting(1)}
 * ```@enum {number}
 */
export enum _enum_for_OverloadStateChange {
  on = 0,
  waiting = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_OverloadStateChange */

/* START_OF_SYMBOL_DEFINITION OverloadStateChange */
/**
 * @summary OverloadStateChange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OverloadStateChange  ::=  ENUMERATED {on(0), waiting(1)}
 * ```@enum {number}
 */
export type OverloadStateChange = _enum_for_OverloadStateChange;
/* END_OF_SYMBOL_DEFINITION OverloadStateChange */

/* START_OF_SYMBOL_DEFINITION OverloadStateChange */
/**
 * @summary OverloadStateChange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OverloadStateChange  ::=  ENUMERATED {on(0), waiting(1)}
 * ```@enum {number}
 */
export const OverloadStateChange = _enum_for_OverloadStateChange;
/* END_OF_SYMBOL_DEFINITION OverloadStateChange */

/* START_OF_SYMBOL_DEFINITION OverloadStateChange_on */
/**
 * @summary OverloadStateChange_on
 * @constant
 * @type {number}
 */
export const OverloadStateChange_on: OverloadStateChange =
  OverloadStateChange.on; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION OverloadStateChange_on */

/* START_OF_SYMBOL_DEFINITION on */
/**
 * @summary on
 * @constant
 * @type {number}
 */
export const on: OverloadStateChange =
  OverloadStateChange.on; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION on */

/* START_OF_SYMBOL_DEFINITION OverloadStateChange_waiting */
/**
 * @summary OverloadStateChange_waiting
 * @constant
 * @type {number}
 */
export const OverloadStateChange_waiting: OverloadStateChange =
  OverloadStateChange.waiting; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION OverloadStateChange_waiting */

/* START_OF_SYMBOL_DEFINITION waiting */
/**
 * @summary waiting
 * @constant
 * @type {number}
 */
export const waiting: OverloadStateChange =
  OverloadStateChange.waiting; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION waiting */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OverloadStateChange */
let _cached_decoder_for_OverloadStateChange: $.ASN1Decoder<OverloadStateChange> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OverloadStateChange */

/* START_OF_SYMBOL_DEFINITION _decode_OverloadStateChange */
/**
 * @summary Decodes an ASN.1 element into a(n) OverloadStateChange
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OverloadStateChange} The decoded data structure.
 */
export function _decode_OverloadStateChange(el: _Element) {
  if (!_cached_decoder_for_OverloadStateChange) {
    _cached_decoder_for_OverloadStateChange = $._decodeEnumerated;
  }
  return _cached_decoder_for_OverloadStateChange(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OverloadStateChange */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OverloadStateChange */
let _cached_encoder_for_OverloadStateChange: $.ASN1Encoder<OverloadStateChange> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OverloadStateChange */

/* START_OF_SYMBOL_DEFINITION _encode_OverloadStateChange */
/**
 * @summary Encodes a(n) OverloadStateChange into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OverloadStateChange, encoded as an ASN.1 Element.
 */
export function _encode_OverloadStateChange(
  value: OverloadStateChange,
  elGetter: $.ASN1Encoder<OverloadStateChange>
) {
  if (!_cached_encoder_for_OverloadStateChange) {
    _cached_encoder_for_OverloadStateChange = $._encodeEnumerated;
  }
  return _cached_encoder_for_OverloadStateChange(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OverloadStateChange */

/* eslint-enable */
