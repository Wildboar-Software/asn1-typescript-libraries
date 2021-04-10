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

/* START_OF_SYMBOL_DEFINITION ConnectivityEndPoint */
/**
 * @summary ConnectivityEndPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectivityEndPoint  ::=  CHOICE {
 *   sncTp        [1]  ObjectInstance,
 *   linkEnd      [2]  ObjectInstance,
 *   accessGroup  [3]  ObjectInstance
 * }
 * ```
 */
export type ConnectivityEndPoint =
  | { sncTp: ObjectInstance } /* CHOICE_ALT_ROOT */
  | { linkEnd: ObjectInstance } /* CHOICE_ALT_ROOT */
  | { accessGroup: ObjectInstance } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ConnectivityEndPoint */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectivityEndPoint */
let _cached_decoder_for_ConnectivityEndPoint: $.ASN1Decoder<ConnectivityEndPoint> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectivityEndPoint */

/* START_OF_SYMBOL_DEFINITION _decode_ConnectivityEndPoint */
/**
 * @summary Decodes an ASN.1 element into a(n) ConnectivityEndPoint
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConnectivityEndPoint} The decoded data structure.
 */
export function _decode_ConnectivityEndPoint(el: _Element) {
  if (!_cached_decoder_for_ConnectivityEndPoint) {
    _cached_decoder_for_ConnectivityEndPoint = $._decode_inextensible_choice<ConnectivityEndPoint>(
      {
        'CONTEXT 1': [
          'sncTp',
          $._decode_implicit<ObjectInstance>(() => _decode_ObjectInstance),
        ],
        'CONTEXT 2': [
          'linkEnd',
          $._decode_implicit<ObjectInstance>(() => _decode_ObjectInstance),
        ],
        'CONTEXT 3': [
          'accessGroup',
          $._decode_implicit<ObjectInstance>(() => _decode_ObjectInstance),
        ],
      }
    );
  }
  return _cached_decoder_for_ConnectivityEndPoint(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ConnectivityEndPoint */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectivityEndPoint */
let _cached_encoder_for_ConnectivityEndPoint: $.ASN1Encoder<ConnectivityEndPoint> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectivityEndPoint */

/* START_OF_SYMBOL_DEFINITION _encode_ConnectivityEndPoint */
/**
 * @summary Encodes a(n) ConnectivityEndPoint into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectivityEndPoint, encoded as an ASN.1 Element.
 */
export function _encode_ConnectivityEndPoint(
  value: ConnectivityEndPoint,
  elGetter: $.ASN1Encoder<ConnectivityEndPoint>
) {
  if (!_cached_encoder_for_ConnectivityEndPoint) {
    _cached_encoder_for_ConnectivityEndPoint = $._encode_choice<ConnectivityEndPoint>(
      {
        sncTp: $._encode_implicit(
          _TagClass.context,
          1,
          () => _encode_ObjectInstance,
          $.BER
        ),
        linkEnd: $._encode_implicit(
          _TagClass.context,
          2,
          () => _encode_ObjectInstance,
          $.BER
        ),
        accessGroup: $._encode_implicit(
          _TagClass.context,
          3,
          () => _encode_ObjectInstance,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_ConnectivityEndPoint(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ConnectivityEndPoint */

/* eslint-enable */
