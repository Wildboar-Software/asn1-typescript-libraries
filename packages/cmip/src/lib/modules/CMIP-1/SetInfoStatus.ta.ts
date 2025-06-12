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
  AttributeError,
  _decode_AttributeError,
  _encode_AttributeError,
} from '../CMIP-1/AttributeError.ta.js';
export {
  AttributeError,
  _decode_AttributeError,
  _encode_AttributeError,
} from '../CMIP-1/AttributeError.ta.js';
import {
  Attribute,
  _decode_Attribute,
  _encode_Attribute,
} from '../CMIP-1/Attribute.ta.js';
export {
  Attribute,
  _decode_Attribute,
  _encode_Attribute,
} from '../CMIP-1/Attribute.ta.js';

/* START_OF_SYMBOL_DEFINITION SetInfoStatus */
/**
 * @summary SetInfoStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SetInfoStatus  ::=  CHOICE {
 *   attributeError  [0] IMPLICIT AttributeError,
 *   attribute       [1] IMPLICIT Attribute
 * }
 * ```
 */
export type SetInfoStatus =
  | { attributeError: AttributeError } /* CHOICE_ALT_ROOT */
  | { attribute: Attribute } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION SetInfoStatus */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SetInfoStatus */
let _cached_decoder_for_SetInfoStatus: $.ASN1Decoder<SetInfoStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SetInfoStatus */

/* START_OF_SYMBOL_DEFINITION _decode_SetInfoStatus */
/**
 * @summary Decodes an ASN.1 element into a(n) SetInfoStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SetInfoStatus} The decoded data structure.
 */
export function _decode_SetInfoStatus(el: _Element) {
  if (!_cached_decoder_for_SetInfoStatus) {
    _cached_decoder_for_SetInfoStatus = $._decode_inextensible_choice<SetInfoStatus>(
      {
        'CONTEXT 0': [
          'attributeError',
          $._decode_implicit<AttributeError>(() => _decode_AttributeError),
        ],
        'CONTEXT 1': [
          'attribute',
          $._decode_implicit<Attribute>(() => _decode_Attribute),
        ],
      }
    );
  }
  return _cached_decoder_for_SetInfoStatus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SetInfoStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SetInfoStatus */
let _cached_encoder_for_SetInfoStatus: $.ASN1Encoder<SetInfoStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SetInfoStatus */

/* START_OF_SYMBOL_DEFINITION _encode_SetInfoStatus */
/**
 * @summary Encodes a(n) SetInfoStatus into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetInfoStatus, encoded as an ASN.1 Element.
 */
export function _encode_SetInfoStatus(
  value: SetInfoStatus,
  elGetter: $.ASN1Encoder<SetInfoStatus>
) {
  if (!_cached_encoder_for_SetInfoStatus) {
    _cached_encoder_for_SetInfoStatus = $._encode_choice<SetInfoStatus>(
      {
        attributeError: $._encode_implicit(
          _TagClass.context,
          0,
          () => _encode_AttributeError,
          $.BER
        ),
        attribute: $._encode_implicit(
          _TagClass.context,
          1,
          () => _encode_Attribute,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_SetInfoStatus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SetInfoStatus */

/* eslint-enable */
