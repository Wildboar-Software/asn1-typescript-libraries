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
  Contents_Type_Attribute,
  _decode_Contents_Type_Attribute,
  _encode_Contents_Type_Attribute,
} from '../ISO8571-FTAM/Contents-Type-Attribute.ta';
export {
  Contents_Type_Attribute,
  _decode_Contents_Type_Attribute,
  _encode_Contents_Type_Attribute,
} from '../ISO8571-FTAM/Contents-Type-Attribute.ta';

/* START_OF_SYMBOL_DEFINITION F_OPEN_request_contents_type */
/**
 * @summary F_OPEN_request_contents_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-OPEN-request-contents-type ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type F_OPEN_request_contents_type =
  | { unknown: NULL } /* CHOICE_ALT_ROOT */
  | { proposed: Contents_Type_Attribute } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION F_OPEN_request_contents_type */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_F_OPEN_request_contents_type */
let _cached_decoder_for_F_OPEN_request_contents_type: $.ASN1Decoder<F_OPEN_request_contents_type> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_F_OPEN_request_contents_type */

/* START_OF_SYMBOL_DEFINITION _decode_F_OPEN_request_contents_type */
/**
 * @summary Decodes an ASN.1 element into a(n) F_OPEN_request_contents_type
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_OPEN_request_contents_type} The decoded data structure.
 */
export function _decode_F_OPEN_request_contents_type(el: _Element) {
  if (!_cached_decoder_for_F_OPEN_request_contents_type) {
    _cached_decoder_for_F_OPEN_request_contents_type = $._decode_inextensible_choice<F_OPEN_request_contents_type>(
      {
        'CONTEXT 0': ['unknown', $._decode_implicit<NULL>(() => $._decodeNull)],
        'CONTEXT 1': [
          'proposed',
          $._decode_explicit<Contents_Type_Attribute>(
            () => _decode_Contents_Type_Attribute
          ),
        ],
      }
    );
  }
  return _cached_decoder_for_F_OPEN_request_contents_type(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_F_OPEN_request_contents_type */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_F_OPEN_request_contents_type */
let _cached_encoder_for_F_OPEN_request_contents_type: $.ASN1Encoder<F_OPEN_request_contents_type> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_F_OPEN_request_contents_type */

/* START_OF_SYMBOL_DEFINITION _encode_F_OPEN_request_contents_type */
/**
 * @summary Encodes a(n) F_OPEN_request_contents_type into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_OPEN_request_contents_type, encoded as an ASN.1 Element.
 */
export function _encode_F_OPEN_request_contents_type(
  value: F_OPEN_request_contents_type,
  elGetter: $.ASN1Encoder<F_OPEN_request_contents_type>
) {
  if (!_cached_encoder_for_F_OPEN_request_contents_type) {
    _cached_encoder_for_F_OPEN_request_contents_type = $._encode_choice<F_OPEN_request_contents_type>(
      {
        unknown: $._encode_implicit(
          _TagClass.context,
          0,
          () => $._encodeNull,
          $.BER
        ),
        proposed: $._encode_explicit(
          _TagClass.context,
          1,
          () => _encode_Contents_Type_Attribute,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_F_OPEN_request_contents_type(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_F_OPEN_request_contents_type */

/* eslint-enable */
