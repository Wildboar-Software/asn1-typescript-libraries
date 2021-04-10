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
  ProtectedXC,
  _decode_ProtectedXC,
  _encode_ProtectedXC,
} from '../M3100ASN1TypeModule6/ProtectedXC.ta';
export {
  ProtectedXC,
  _decode_ProtectedXC,
  _encode_ProtectedXC,
} from '../M3100ASN1TypeModule6/ProtectedXC.ta';

/* START_OF_SYMBOL_DEFINITION JoinXCReply_Item_success */
/**
 * @summary JoinXCReply_Item_success
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * JoinXCReply-Item-success ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type JoinXCReply_Item_success =
  | { unprotected: ObjectInstance } /* CHOICE_ALT_ROOT */
  | { protected_: ProtectedXC } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION JoinXCReply_Item_success */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_JoinXCReply_Item_success */
let _cached_decoder_for_JoinXCReply_Item_success: $.ASN1Decoder<JoinXCReply_Item_success> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_JoinXCReply_Item_success */

/* START_OF_SYMBOL_DEFINITION _decode_JoinXCReply_Item_success */
/**
 * @summary Decodes an ASN.1 element into a(n) JoinXCReply_Item_success
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {JoinXCReply_Item_success} The decoded data structure.
 */
export function _decode_JoinXCReply_Item_success(el: _Element) {
  if (!_cached_decoder_for_JoinXCReply_Item_success) {
    _cached_decoder_for_JoinXCReply_Item_success = $._decode_inextensible_choice<JoinXCReply_Item_success>(
      {
        '*': ['unprotected', _decode_ObjectInstance],
        'UNIVERSAL 16': ['protected_', _decode_ProtectedXC],
      }
    );
  }
  return _cached_decoder_for_JoinXCReply_Item_success(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_JoinXCReply_Item_success */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_JoinXCReply_Item_success */
let _cached_encoder_for_JoinXCReply_Item_success: $.ASN1Encoder<JoinXCReply_Item_success> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_JoinXCReply_Item_success */

/* START_OF_SYMBOL_DEFINITION _encode_JoinXCReply_Item_success */
/**
 * @summary Encodes a(n) JoinXCReply_Item_success into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The JoinXCReply_Item_success, encoded as an ASN.1 Element.
 */
export function _encode_JoinXCReply_Item_success(
  value: JoinXCReply_Item_success,
  elGetter: $.ASN1Encoder<JoinXCReply_Item_success>
) {
  if (!_cached_encoder_for_JoinXCReply_Item_success) {
    _cached_encoder_for_JoinXCReply_Item_success = $._encode_choice<JoinXCReply_Item_success>(
      {
        unprotected: _encode_ObjectInstance,
        protected_: _encode_ProtectedXC,
      },
      $.BER
    );
  }
  return _cached_encoder_for_JoinXCReply_Item_success(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_JoinXCReply_Item_success */

/* eslint-enable */
