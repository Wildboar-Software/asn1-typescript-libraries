/* eslint-disable */
import {
  INTEGER,
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

/* START_OF_SYMBOL_DEFINITION Diagnostic_Item_diagnostic_type */
/**
 * @summary Diagnostic_Item_diagnostic_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Diagnostic-Item-diagnostic-type ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Diagnostic_Item_diagnostic_type = INTEGER;
/* END_OF_SYMBOL_DEFINITION Diagnostic_Item_diagnostic_type */

/* START_OF_SYMBOL_DEFINITION Diagnostic_Item_diagnostic_type_informative */
/**
 * @summary Diagnostic_Item_diagnostic_type_informative
 * @constant
 * @type {number}
 */
export const Diagnostic_Item_diagnostic_type_informative: Diagnostic_Item_diagnostic_type = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Diagnostic_Item_diagnostic_type_informative */

/* START_OF_SYMBOL_DEFINITION informative */
/**
 * @summary Diagnostic_Item_diagnostic_type_informative
 * @constant
 * @type {number}
 */
export const informative: Diagnostic_Item_diagnostic_type = Diagnostic_Item_diagnostic_type_informative; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION informative */

/* START_OF_SYMBOL_DEFINITION Diagnostic_Item_diagnostic_type_transient */
/**
 * @summary Diagnostic_Item_diagnostic_type_transient
 * @constant
 * @type {number}
 */
export const Diagnostic_Item_diagnostic_type_transient: Diagnostic_Item_diagnostic_type = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Diagnostic_Item_diagnostic_type_transient */

/* START_OF_SYMBOL_DEFINITION transient */
/**
 * @summary Diagnostic_Item_diagnostic_type_transient
 * @constant
 * @type {number}
 */
export const transient: Diagnostic_Item_diagnostic_type = Diagnostic_Item_diagnostic_type_transient; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION transient */

/* START_OF_SYMBOL_DEFINITION Diagnostic_Item_diagnostic_type_permanent */
/**
 * @summary Diagnostic_Item_diagnostic_type_permanent
 * @constant
 * @type {number}
 */
export const Diagnostic_Item_diagnostic_type_permanent: Diagnostic_Item_diagnostic_type = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Diagnostic_Item_diagnostic_type_permanent */

/* START_OF_SYMBOL_DEFINITION permanent */
/**
 * @summary Diagnostic_Item_diagnostic_type_permanent
 * @constant
 * @type {number}
 */
export const permanent: Diagnostic_Item_diagnostic_type = Diagnostic_Item_diagnostic_type_permanent; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION permanent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Diagnostic_Item_diagnostic_type */
let _cached_decoder_for_Diagnostic_Item_diagnostic_type: $.ASN1Decoder<Diagnostic_Item_diagnostic_type> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Diagnostic_Item_diagnostic_type */

/* START_OF_SYMBOL_DEFINITION _decode_Diagnostic_Item_diagnostic_type */
/**
 * @summary Decodes an ASN.1 element into a(n) Diagnostic_Item_diagnostic_type
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Diagnostic_Item_diagnostic_type} The decoded data structure.
 */
export function _decode_Diagnostic_Item_diagnostic_type(el: _Element) {
  if (!_cached_decoder_for_Diagnostic_Item_diagnostic_type) {
    _cached_decoder_for_Diagnostic_Item_diagnostic_type = $._decodeInteger;
  }
  return _cached_decoder_for_Diagnostic_Item_diagnostic_type(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Diagnostic_Item_diagnostic_type */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Diagnostic_Item_diagnostic_type */
let _cached_encoder_for_Diagnostic_Item_diagnostic_type: $.ASN1Encoder<Diagnostic_Item_diagnostic_type> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Diagnostic_Item_diagnostic_type */

/* START_OF_SYMBOL_DEFINITION _encode_Diagnostic_Item_diagnostic_type */
/**
 * @summary Encodes a(n) Diagnostic_Item_diagnostic_type into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Diagnostic_Item_diagnostic_type, encoded as an ASN.1 Element.
 */
export function _encode_Diagnostic_Item_diagnostic_type(
  value: Diagnostic_Item_diagnostic_type,
  elGetter: $.ASN1Encoder<Diagnostic_Item_diagnostic_type>
) {
  if (!_cached_encoder_for_Diagnostic_Item_diagnostic_type) {
    _cached_encoder_for_Diagnostic_Item_diagnostic_type = $._encodeInteger;
  }
  return _cached_encoder_for_Diagnostic_Item_diagnostic_type(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Diagnostic_Item_diagnostic_type */

/* eslint-enable */
