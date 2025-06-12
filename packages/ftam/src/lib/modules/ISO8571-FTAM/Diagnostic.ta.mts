/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
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
import {
  Diagnostic_Item,
  _decode_Diagnostic_Item,
  _encode_Diagnostic_Item,
} from '../ISO8571-FTAM/Diagnostic-Item.ta.mjs';
export {
  Diagnostic_Item,
  _decode_Diagnostic_Item,
  _encode_Diagnostic_Item,
} from '../ISO8571-FTAM/Diagnostic-Item.ta.mjs';

/* START_OF_SYMBOL_DEFINITION Diagnostic */
/**
 * @summary Diagnostic
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Diagnostic  ::=
 *   [APPLICATION 13] IMPLICIT
 *     SEQUENCE OF
 *       SEQUENCE {diagnostic-type
 *                   [0] IMPLICIT INTEGER {informative(0), transient(1),
 *                                         permanent(2)},
 *                 error-identifier  [1] IMPLICIT INTEGER,
 *                 -- As defined in ISO 8571-3.
 *                 error-observer    [2] IMPLICIT Entity-Reference,
 *                 error-Source      [3] IMPLICIT Entity-Reference,
 *                 suggested-delay   [4] IMPLICIT INTEGER OPTIONAL,
 *                 further-details   [5] IMPLICIT GraphicString OPTIONAL
 *     }
 * ```
 */
export type Diagnostic = Diagnostic_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION Diagnostic */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Diagnostic */
let _cached_decoder_for_Diagnostic: $.ASN1Decoder<Diagnostic> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Diagnostic */

/* START_OF_SYMBOL_DEFINITION _decode_Diagnostic */
/**
 * @summary Decodes an ASN.1 element into a(n) Diagnostic
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Diagnostic} The decoded data structure.
 */
export function _decode_Diagnostic(el: _Element) {
  if (!_cached_decoder_for_Diagnostic) {
    _cached_decoder_for_Diagnostic = $._decode_implicit<Diagnostic>(() =>
      $._decodeSequenceOf<Diagnostic_Item>(() => _decode_Diagnostic_Item)
    );
  }
  return _cached_decoder_for_Diagnostic(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Diagnostic */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Diagnostic */
let _cached_encoder_for_Diagnostic: $.ASN1Encoder<Diagnostic> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Diagnostic */

/* START_OF_SYMBOL_DEFINITION _encode_Diagnostic */
/**
 * @summary Encodes a(n) Diagnostic into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Diagnostic, encoded as an ASN.1 Element.
 */
export function _encode_Diagnostic(
  value: Diagnostic,
  elGetter: $.ASN1Encoder<Diagnostic>
) {
  if (!_cached_encoder_for_Diagnostic) {
    _cached_encoder_for_Diagnostic = $._encode_implicit(
      _TagClass.application,
      13,
      () =>
        $._encodeSequenceOf<Diagnostic_Item>(
          () => _encode_Diagnostic_Item,
          $.BER
        ),
      $.BER
    );
  }
  return _cached_encoder_for_Diagnostic(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Diagnostic */

/* eslint-enable */
