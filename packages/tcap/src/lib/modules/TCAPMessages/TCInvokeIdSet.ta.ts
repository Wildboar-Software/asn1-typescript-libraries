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
  InvokeId,
  _decode_InvokeId,
  _encode_InvokeId,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Generic-ROS-PDUs/InvokeId.ta';
export {
  InvokeId,
  _decode_InvokeId,
  _encode_InvokeId,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Generic-ROS-PDUs/InvokeId.ta';

/* START_OF_SYMBOL_DEFINITION TCInvokeIdSet */
/**
 * @summary TCInvokeIdSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TCInvokeIdSet  ::=  InvokeId(WITH COMPONENTS {
 *                              present  (-128..127)
 *                            })
 * ```
 */
export type TCInvokeIdSet = InvokeId; // DefinedType
/* END_OF_SYMBOL_DEFINITION TCInvokeIdSet */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TCInvokeIdSet */
let _cached_decoder_for_TCInvokeIdSet: $.ASN1Decoder<TCInvokeIdSet> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TCInvokeIdSet */

/* START_OF_SYMBOL_DEFINITION _decode_TCInvokeIdSet */
/**
 * @summary Decodes an ASN.1 element into a(n) TCInvokeIdSet
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TCInvokeIdSet} The decoded data structure.
 */
export function _decode_TCInvokeIdSet(el: _Element) {
  if (!_cached_decoder_for_TCInvokeIdSet) {
    _cached_decoder_for_TCInvokeIdSet = _decode_InvokeId;
  }
  return _cached_decoder_for_TCInvokeIdSet(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TCInvokeIdSet */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TCInvokeIdSet */
let _cached_encoder_for_TCInvokeIdSet: $.ASN1Encoder<TCInvokeIdSet> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TCInvokeIdSet */

/* START_OF_SYMBOL_DEFINITION _encode_TCInvokeIdSet */
/**
 * @summary Encodes a(n) TCInvokeIdSet into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TCInvokeIdSet, encoded as an ASN.1 Element.
 */
export function _encode_TCInvokeIdSet(
  value: TCInvokeIdSet,
  elGetter: $.ASN1Encoder<TCInvokeIdSet>
) {
  if (!_cached_encoder_for_TCInvokeIdSet) {
    _cached_encoder_for_TCInvokeIdSet = _encode_InvokeId;
  }
  return _cached_encoder_for_TCInvokeIdSet(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TCInvokeIdSet */

/* eslint-enable */
