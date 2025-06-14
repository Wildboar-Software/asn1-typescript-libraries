/* eslint-disable */
import {
  BIT_STRING,
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

/* START_OF_SYMBOL_DEFINITION Concurrency_Key */
/**
 * @summary Concurrency_Key
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Concurrency-Key  ::=  BIT STRING {
 *   not-required(0), shared(1), exclusive(2), no-access(3)}
 * ```
 */
export type Concurrency_Key = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION Concurrency_Key */

/* START_OF_SYMBOL_DEFINITION Concurrency_Key_not_required */
/**
 * @summary Concurrency_Key_not_required
 * @constant
 */
export const Concurrency_Key_not_required: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Concurrency_Key_not_required */

/* START_OF_SYMBOL_DEFINITION not_required */
/**
 * @summary not_required
 * @constant
 */
export const not_required: number = Concurrency_Key_not_required; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION not_required */

/* START_OF_SYMBOL_DEFINITION Concurrency_Key_shared */
/**
 * @summary Concurrency_Key_shared
 * @constant
 */
export const Concurrency_Key_shared: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Concurrency_Key_shared */

/* START_OF_SYMBOL_DEFINITION shared */
/**
 * @summary shared
 * @constant
 */
export const shared: number = Concurrency_Key_shared; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION shared */

/* START_OF_SYMBOL_DEFINITION Concurrency_Key_exclusive */
/**
 * @summary Concurrency_Key_exclusive
 * @constant
 */
export const Concurrency_Key_exclusive: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Concurrency_Key_exclusive */

/* START_OF_SYMBOL_DEFINITION exclusive */
/**
 * @summary exclusive
 * @constant
 */
export const exclusive: number = Concurrency_Key_exclusive; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION exclusive */

/* START_OF_SYMBOL_DEFINITION Concurrency_Key_no_access */
/**
 * @summary Concurrency_Key_no_access
 * @constant
 */
export const Concurrency_Key_no_access: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Concurrency_Key_no_access */

/* START_OF_SYMBOL_DEFINITION no_access */
/**
 * @summary no_access
 * @constant
 */
export const no_access: number = Concurrency_Key_no_access; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION no_access */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Concurrency_Key */
let _cached_decoder_for_Concurrency_Key: $.ASN1Decoder<Concurrency_Key> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Concurrency_Key */

/* START_OF_SYMBOL_DEFINITION _decode_Concurrency_Key */
/**
 * @summary Decodes an ASN.1 element into a(n) Concurrency_Key
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Concurrency_Key} The decoded data structure.
 */
export function _decode_Concurrency_Key(el: _Element) {
  if (!_cached_decoder_for_Concurrency_Key) {
    _cached_decoder_for_Concurrency_Key = $._decodeBitString;
  }
  return _cached_decoder_for_Concurrency_Key(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Concurrency_Key */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Concurrency_Key */
let _cached_encoder_for_Concurrency_Key: $.ASN1Encoder<Concurrency_Key> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Concurrency_Key */

/* START_OF_SYMBOL_DEFINITION _encode_Concurrency_Key */
/**
 * @summary Encodes a(n) Concurrency_Key into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Concurrency_Key, encoded as an ASN.1 Element.
 */
export function _encode_Concurrency_Key(
  value: Concurrency_Key,
  elGetter: $.ASN1Encoder<Concurrency_Key>
) {
  if (!_cached_encoder_for_Concurrency_Key) {
    _cached_encoder_for_Concurrency_Key = $._encodeBitString;
  }
  return _cached_encoder_for_Concurrency_Key(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Concurrency_Key */

/* eslint-enable */
