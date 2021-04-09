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
import * as $ from 'asn1-ts/dist/node/functional';
import {
  AttributeIdError,
  _decode_AttributeIdError,
  _encode_AttributeIdError,
} from '../CMIP-1/AttributeIdError.ta';
export {
  AttributeIdError,
  _decode_AttributeIdError,
  _encode_AttributeIdError,
} from '../CMIP-1/AttributeIdError.ta';
import {
  Attribute,
  _decode_Attribute,
  _encode_Attribute,
} from '../CMIP-1/Attribute.ta';
export {
  Attribute,
  _decode_Attribute,
  _encode_Attribute,
} from '../CMIP-1/Attribute.ta';

/* START_OF_SYMBOL_DEFINITION GetInfoStatus */
/**
 * @summary GetInfoStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GetInfoStatus  ::=  CHOICE {
 *   attributeIdError  [0] IMPLICIT AttributeIdError,
 *   attribute         [1] IMPLICIT Attribute
 * }
 * ```
 */
export type GetInfoStatus =
  | { attributeIdError: AttributeIdError } /* CHOICE_ALT_ROOT */
  | { attribute: Attribute } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION GetInfoStatus */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GetInfoStatus */
let _cached_decoder_for_GetInfoStatus: $.ASN1Decoder<GetInfoStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GetInfoStatus */

/* START_OF_SYMBOL_DEFINITION _decode_GetInfoStatus */
/**
 * @summary Decodes an ASN.1 element into a(n) GetInfoStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GetInfoStatus} The decoded data structure.
 */
export function _decode_GetInfoStatus(el: _Element) {
  if (!_cached_decoder_for_GetInfoStatus) {
    _cached_decoder_for_GetInfoStatus = $._decode_inextensible_choice<GetInfoStatus>(
      {
        'CONTEXT 0': [
          'attributeIdError',
          $._decode_implicit<AttributeIdError>(() => _decode_AttributeIdError),
        ],
        'CONTEXT 1': [
          'attribute',
          $._decode_implicit<Attribute>(() => _decode_Attribute),
        ],
      }
    );
  }
  return _cached_decoder_for_GetInfoStatus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GetInfoStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GetInfoStatus */
let _cached_encoder_for_GetInfoStatus: $.ASN1Encoder<GetInfoStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GetInfoStatus */

/* START_OF_SYMBOL_DEFINITION _encode_GetInfoStatus */
/**
 * @summary Encodes a(n) GetInfoStatus into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetInfoStatus, encoded as an ASN.1 Element.
 */
export function _encode_GetInfoStatus(
  value: GetInfoStatus,
  elGetter: $.ASN1Encoder<GetInfoStatus>
) {
  if (!_cached_encoder_for_GetInfoStatus) {
    _cached_encoder_for_GetInfoStatus = $._encode_choice<GetInfoStatus>(
      {
        attributeIdError: $._encode_implicit(
          _TagClass.context,
          0,
          () => _encode_AttributeIdError,
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
  return _cached_encoder_for_GetInfoStatus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GetInfoStatus */

/* eslint-enable */
