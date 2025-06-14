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

/* START_OF_SYMBOL_DEFINITION _enum_for_DesignatedISChange */
/**
 * @summary DesignatedISChange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DesignatedISChange  ::=  ENUMERATED {resigned(0), elected(1)}
 * ```@enum {number}
 */
export enum _enum_for_DesignatedISChange {
  resigned = 0,
  elected = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_DesignatedISChange */

/* START_OF_SYMBOL_DEFINITION DesignatedISChange */
/**
 * @summary DesignatedISChange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DesignatedISChange  ::=  ENUMERATED {resigned(0), elected(1)}
 * ```@enum {number}
 */
export type DesignatedISChange = _enum_for_DesignatedISChange;
/* END_OF_SYMBOL_DEFINITION DesignatedISChange */

/* START_OF_SYMBOL_DEFINITION DesignatedISChange */
/**
 * @summary DesignatedISChange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DesignatedISChange  ::=  ENUMERATED {resigned(0), elected(1)}
 * ```@enum {number}
 */
export const DesignatedISChange = _enum_for_DesignatedISChange;
/* END_OF_SYMBOL_DEFINITION DesignatedISChange */

/* START_OF_SYMBOL_DEFINITION DesignatedISChange_resigned */
/**
 * @summary DesignatedISChange_resigned
 * @constant
 * @type {number}
 */
export const DesignatedISChange_resigned: DesignatedISChange =
  DesignatedISChange.resigned; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DesignatedISChange_resigned */

/* START_OF_SYMBOL_DEFINITION resigned */
/**
 * @summary resigned
 * @constant
 * @type {number}
 */
export const resigned: DesignatedISChange =
  DesignatedISChange.resigned; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION resigned */

/* START_OF_SYMBOL_DEFINITION DesignatedISChange_elected */
/**
 * @summary DesignatedISChange_elected
 * @constant
 * @type {number}
 */
export const DesignatedISChange_elected: DesignatedISChange =
  DesignatedISChange.elected; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DesignatedISChange_elected */

/* START_OF_SYMBOL_DEFINITION elected */
/**
 * @summary elected
 * @constant
 * @type {number}
 */
export const elected: DesignatedISChange =
  DesignatedISChange.elected; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION elected */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DesignatedISChange */
let _cached_decoder_for_DesignatedISChange: $.ASN1Decoder<DesignatedISChange> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DesignatedISChange */

/* START_OF_SYMBOL_DEFINITION _decode_DesignatedISChange */
/**
 * @summary Decodes an ASN.1 element into a(n) DesignatedISChange
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DesignatedISChange} The decoded data structure.
 */
export function _decode_DesignatedISChange(el: _Element) {
  if (!_cached_decoder_for_DesignatedISChange) {
    _cached_decoder_for_DesignatedISChange = $._decodeEnumerated;
  }
  return _cached_decoder_for_DesignatedISChange(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DesignatedISChange */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DesignatedISChange */
let _cached_encoder_for_DesignatedISChange: $.ASN1Encoder<DesignatedISChange> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DesignatedISChange */

/* START_OF_SYMBOL_DEFINITION _encode_DesignatedISChange */
/**
 * @summary Encodes a(n) DesignatedISChange into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DesignatedISChange, encoded as an ASN.1 Element.
 */
export function _encode_DesignatedISChange(
  value: DesignatedISChange,
  elGetter: $.ASN1Encoder<DesignatedISChange>
) {
  if (!_cached_encoder_for_DesignatedISChange) {
    _cached_encoder_for_DesignatedISChange = $._encodeEnumerated;
  }
  return _cached_encoder_for_DesignatedISChange(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DesignatedISChange */

/* eslint-enable */
