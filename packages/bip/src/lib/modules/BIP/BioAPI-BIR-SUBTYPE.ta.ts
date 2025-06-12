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
  BioAPI_BIR_SUBTYPE_anySubtype,
  BioAPI_BIR_SUBTYPE_anySubtype_left /* IMPORTED_LONG_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_anySubtype_right /* IMPORTED_LONG_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_anySubtype_thumb /* IMPORTED_LONG_NAMED_BIT */,
  thumb /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_anySubtype_pointerFinger /* IMPORTED_LONG_NAMED_BIT */,
  pointerFinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_anySubtype_middleFinger /* IMPORTED_LONG_NAMED_BIT */,
  middleFinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_anySubtype_ringFinger /* IMPORTED_LONG_NAMED_BIT */,
  ringFinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_anySubtype_littleFinger /* IMPORTED_LONG_NAMED_BIT */,
  littleFinger /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_BioAPI_BIR_SUBTYPE_anySubtype,
  _encode_BioAPI_BIR_SUBTYPE_anySubtype,
} from '../BIP/BioAPI-BIR-SUBTYPE-anySubtype.ta.js';
export {
  BioAPI_BIR_SUBTYPE_anySubtype,
  BioAPI_BIR_SUBTYPE_anySubtype_left /* IMPORTED_LONG_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_anySubtype_right /* IMPORTED_LONG_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_anySubtype_thumb /* IMPORTED_LONG_NAMED_BIT */,
  thumb /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_anySubtype_pointerFinger /* IMPORTED_LONG_NAMED_BIT */,
  pointerFinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_anySubtype_middleFinger /* IMPORTED_LONG_NAMED_BIT */,
  middleFinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_anySubtype_ringFinger /* IMPORTED_LONG_NAMED_BIT */,
  ringFinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_anySubtype_littleFinger /* IMPORTED_LONG_NAMED_BIT */,
  littleFinger /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_BioAPI_BIR_SUBTYPE_anySubtype,
  _encode_BioAPI_BIR_SUBTYPE_anySubtype,
} from '../BIP/BioAPI-BIR-SUBTYPE-anySubtype.ta.js';
import {
  BioAPI_BIR_SUBTYPE_vein_only_subtype,
  BioAPI_BIR_SUBTYPE_vein_only_subtype_left /* IMPORTED_LONG_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_vein_only_subtype_right /* IMPORTED_LONG_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_vein_only_subtype_veinPalm /* IMPORTED_LONG_NAMED_BIT */,
  veinPalm /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_vein_only_subtype_veinBackofhand /* IMPORTED_LONG_NAMED_BIT */,
  veinBackofhand /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_vein_only_subtype_veinWrist /* IMPORTED_LONG_NAMED_BIT */,
  veinWrist /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_BioAPI_BIR_SUBTYPE_vein_only_subtype,
  _encode_BioAPI_BIR_SUBTYPE_vein_only_subtype,
} from '../BIP/BioAPI-BIR-SUBTYPE-vein-only-subtype.ta.js';
export {
  BioAPI_BIR_SUBTYPE_vein_only_subtype,
  BioAPI_BIR_SUBTYPE_vein_only_subtype_left /* IMPORTED_LONG_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_vein_only_subtype_right /* IMPORTED_LONG_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_vein_only_subtype_veinPalm /* IMPORTED_LONG_NAMED_BIT */,
  veinPalm /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_vein_only_subtype_veinBackofhand /* IMPORTED_LONG_NAMED_BIT */,
  veinBackofhand /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_vein_only_subtype_veinWrist /* IMPORTED_LONG_NAMED_BIT */,
  veinWrist /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_BioAPI_BIR_SUBTYPE_vein_only_subtype,
  _encode_BioAPI_BIR_SUBTYPE_vein_only_subtype,
} from '../BIP/BioAPI-BIR-SUBTYPE-vein-only-subtype.ta.js';

/* START_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE */
/**
 * @summary BioAPI_BIR_SUBTYPE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-BIR-SUBTYPE  ::=  CHOICE {
 *   anySubtype
 *     BIT STRING {left(0), right(1), thumb(2), pointerFinger(3), middleFinger(4),
 *                 ringFinger(5), littleFinger(6)}(SIZE (7)),
 *   vein-only-subtype
 *     BIT STRING {left(0), right(1), veinPalm(2), veinBackofhand(3), veinWrist(4)}
 *                                                                     (SIZE (7))
 * }
 * ```
 */
export type BioAPI_BIR_SUBTYPE =
  | { anySubtype: BioAPI_BIR_SUBTYPE_anySubtype } /* CHOICE_ALT_ROOT */
  | {
      vein_only_subtype: BioAPI_BIR_SUBTYPE_vein_only_subtype;
    } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION BioAPI_BIR_SUBTYPE */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_BIR_SUBTYPE */
let _cached_decoder_for_BioAPI_BIR_SUBTYPE: $.ASN1Decoder<BioAPI_BIR_SUBTYPE> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_BIR_SUBTYPE */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_BIR_SUBTYPE */
/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_BIR_SUBTYPE
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_BIR_SUBTYPE} The decoded data structure.
 */
export function _decode_BioAPI_BIR_SUBTYPE(el: _Element) {
  if (!_cached_decoder_for_BioAPI_BIR_SUBTYPE) {
    _cached_decoder_for_BioAPI_BIR_SUBTYPE = $._decode_inextensible_choice<BioAPI_BIR_SUBTYPE>(
      {
        'CONTEXT 0': ['anySubtype', _decode_BioAPI_BIR_SUBTYPE_anySubtype],
        'CONTEXT 1': [
          'vein_only_subtype',
          _decode_BioAPI_BIR_SUBTYPE_vein_only_subtype,
        ],
      }
    );
  }
  return _cached_decoder_for_BioAPI_BIR_SUBTYPE(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_BIR_SUBTYPE */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_BIR_SUBTYPE */
let _cached_encoder_for_BioAPI_BIR_SUBTYPE: $.ASN1Encoder<BioAPI_BIR_SUBTYPE> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_BIR_SUBTYPE */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_BIR_SUBTYPE */
/**
 * @summary Encodes a(n) BioAPI_BIR_SUBTYPE into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_BIR_SUBTYPE, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_BIR_SUBTYPE(
  value: BioAPI_BIR_SUBTYPE,
  elGetter: $.ASN1Encoder<BioAPI_BIR_SUBTYPE>
) {
  if (!_cached_encoder_for_BioAPI_BIR_SUBTYPE) {
    _cached_encoder_for_BioAPI_BIR_SUBTYPE = $._encode_choice<BioAPI_BIR_SUBTYPE>(
      {
        anySubtype: _encode_BioAPI_BIR_SUBTYPE_anySubtype,
        vein_only_subtype: _encode_BioAPI_BIR_SUBTYPE_vein_only_subtype,
      },
      $.BER
    );
  }
  return _cached_encoder_for_BioAPI_BIR_SUBTYPE(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_BIR_SUBTYPE */

/* eslint-enable */
