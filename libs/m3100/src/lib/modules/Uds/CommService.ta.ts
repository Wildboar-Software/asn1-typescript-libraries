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
  ComServiceTypes,
  _decode_ComServiceTypes,
  _encode_ComServiceTypes,
} from '../Uds/ComServiceTypes.ta';
export {
  ComServiceTypes,
  _decode_ComServiceTypes,
  _encode_ComServiceTypes,
} from '../Uds/ComServiceTypes.ta';

/* START_OF_SYMBOL_DEFINITION CommService */
/**
 * @summary CommService
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommService  ::=  ComServiceTypes
 * ```
 */
export type CommService = ComServiceTypes; // DefinedType
/* END_OF_SYMBOL_DEFINITION CommService */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CommService */
let _cached_decoder_for_CommService: $.ASN1Decoder<CommService> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CommService */

/* START_OF_SYMBOL_DEFINITION _decode_CommService */
/**
 * @summary Decodes an ASN.1 element into a(n) CommService
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CommService} The decoded data structure.
 */
export function _decode_CommService(el: _Element) {
  if (!_cached_decoder_for_CommService) {
    _cached_decoder_for_CommService = _decode_ComServiceTypes;
  }
  return _cached_decoder_for_CommService(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CommService */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CommService */
let _cached_encoder_for_CommService: $.ASN1Encoder<CommService> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CommService */

/* START_OF_SYMBOL_DEFINITION _encode_CommService */
/**
 * @summary Encodes a(n) CommService into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommService, encoded as an ASN.1 Element.
 */
export function _encode_CommService(
  value: CommService,
  elGetter: $.ASN1Encoder<CommService>
) {
  if (!_cached_encoder_for_CommService) {
    _cached_encoder_for_CommService = _encode_ComServiceTypes;
  }
  return _cached_encoder_for_CommService(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CommService */

/* eslint-enable */
