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
  FirstPdvExplicit,
  _decode_FirstPdvExplicit,
  _encode_FirstPdvExplicit,
} from '../GenericProtectingTransferSyntax/FirstPdvExplicit.ta.js';
export {
  FirstPdvExplicit,
  _decode_FirstPdvExplicit,
  _encode_FirstPdvExplicit,
} from '../GenericProtectingTransferSyntax/FirstPdvExplicit.ta.js';
import {
  FirstPdvExternal,
  _decode_FirstPdvExternal,
  _encode_FirstPdvExternal,
} from '../GenericProtectingTransferSyntax/FirstPdvExternal.ta.js';
export {
  FirstPdvExternal,
  _decode_FirstPdvExternal,
  _encode_FirstPdvExternal,
} from '../GenericProtectingTransferSyntax/FirstPdvExternal.ta.js';
import {
  SubsequentPdv,
  _decode_SubsequentPdv,
  _encode_SubsequentPdv,
} from '../GenericProtectingTransferSyntax/SubsequentPdv.ta.js';
export {
  SubsequentPdv,
  _decode_SubsequentPdv,
  _encode_SubsequentPdv,
} from '../GenericProtectingTransferSyntax/SubsequentPdv.ta.js';

/* START_OF_SYMBOL_DEFINITION SyntaxStructure */
/**
 * @summary SyntaxStructure
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SyntaxStructure{SECURITY-TRANSFORMATION:ValidSTs}  ::=  CHOICE {
 *   firstPdvExplicit  FirstPdvExplicit{{ValidSTs}},
 *   -- To be used on the first PDV of a protecting presentation
 *   -- context, or a protected PDV sent outside a presentation
 *   -- context, in the case of a presentation-context-bound or
 *   -- single-item-bound security association.
 *   firstPdvExternal  FirstPdvExternal{{ValidSTs}},
 *   -- To be used on the first PDV of a protecting presentation
 *   -- context, or a protected PDV sent outside a presentation
 *   -- context, in the case of an externally established
 *   -- security association.
 *   subsequentPdv     SubsequentPdv{{ValidSTs}}
 *   -- To be used on a subsequent PDV in a protecting
 *   -- presentation context.
 * }
 * ```
 */
export type SyntaxStructure =
  | { firstPdvExplicit: FirstPdvExplicit } /* CHOICE_ALT_ROOT */
  | { firstPdvExternal: FirstPdvExternal } /* CHOICE_ALT_ROOT */
  | { subsequentPdv: SubsequentPdv } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION SyntaxStructure */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SyntaxStructure */
let _cached_decoder_for_SyntaxStructure: $.ASN1Decoder<SyntaxStructure> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SyntaxStructure */

/* START_OF_SYMBOL_DEFINITION _decode_SyntaxStructure */
/**
 * @summary Decodes an ASN.1 element into a(n) SyntaxStructure
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SyntaxStructure} The decoded data structure.
 */
export function _decode_SyntaxStructure(el: _Element) {
  if (!_cached_decoder_for_SyntaxStructure) {
    _cached_decoder_for_SyntaxStructure = $._decode_inextensible_choice<SyntaxStructure>(
      {
        'CONTEXT 0': ['firstPdvExplicit', _decode_FirstPdvExplicit],
        'CONTEXT 1': ['firstPdvExternal', _decode_FirstPdvExternal],
        'CONTEXT 2': ['subsequentPdv', _decode_SubsequentPdv],
      }
    );
  }
  return _cached_decoder_for_SyntaxStructure(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SyntaxStructure */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SyntaxStructure */
let _cached_encoder_for_SyntaxStructure: $.ASN1Encoder<SyntaxStructure> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SyntaxStructure */

/* START_OF_SYMBOL_DEFINITION _encode_SyntaxStructure */
/**
 * @summary Encodes a(n) SyntaxStructure into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SyntaxStructure, encoded as an ASN.1 Element.
 */
export function _encode_SyntaxStructure(
  value: SyntaxStructure,
  elGetter: $.ASN1Encoder<SyntaxStructure>
) {
  if (!_cached_encoder_for_SyntaxStructure) {
    _cached_encoder_for_SyntaxStructure = $._encode_choice<SyntaxStructure>(
      {
        firstPdvExplicit: _encode_FirstPdvExplicit,
        firstPdvExternal: _encode_FirstPdvExternal,
        subsequentPdv: _encode_SubsequentPdv,
      },
      $.BER
    );
  }
  return _cached_encoder_for_SyntaxStructure(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SyntaxStructure */

/* eslint-enable */
