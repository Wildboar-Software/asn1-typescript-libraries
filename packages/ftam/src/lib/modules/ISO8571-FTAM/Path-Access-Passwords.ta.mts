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
  Path_Access_Passwords_Item,
  _decode_Path_Access_Passwords_Item,
  _encode_Path_Access_Passwords_Item,
} from '../ISO8571-FTAM/Path-Access-Passwords-Item.ta.mjs';
export {
  Path_Access_Passwords_Item,
  _decode_Path_Access_Passwords_Item,
  _encode_Path_Access_Passwords_Item,
} from '../ISO8571-FTAM/Path-Access-Passwords-Item.ta.mjs';

/* START_OF_SYMBOL_DEFINITION Path_Access_Passwords */
/**
 * @summary Path_Access_Passwords
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Path-Access-Passwords  ::=
 *   [APPLICATION 27] IMPLICIT
 *     SEQUENCE OF
 *       SEQUENCE {read-password              [0] IMPLICIT Password,
 *                 insert-password            [1] IMPLICIT Password,
 *                 replace-password           [2] IMPLICIT Password,
 *                 extend-password            [3] IMPLICIT Password,
 *                 erase-password             [4] IMPLICIT Password,
 *                 read-attribute-password    [5] IMPLICIT Password,
 *                 change-attribute-password  [6] IMPLICIT Password,
 *                 delete-password            [7] IMPLICIT Password,
 *                 pass-passwords             [8] IMPLICIT Pass-Passwords,
 *                 link-password              [9] IMPLICIT Password}
 * ```
 */
export type Path_Access_Passwords = Path_Access_Passwords_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION Path_Access_Passwords */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Path_Access_Passwords */
let _cached_decoder_for_Path_Access_Passwords: $.ASN1Decoder<Path_Access_Passwords> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Path_Access_Passwords */

/* START_OF_SYMBOL_DEFINITION _decode_Path_Access_Passwords */
/**
 * @summary Decodes an ASN.1 element into a(n) Path_Access_Passwords
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Path_Access_Passwords} The decoded data structure.
 */
export function _decode_Path_Access_Passwords(el: _Element) {
  if (!_cached_decoder_for_Path_Access_Passwords) {
    _cached_decoder_for_Path_Access_Passwords = $._decode_implicit<Path_Access_Passwords>(
      () =>
        $._decodeSequenceOf<Path_Access_Passwords_Item>(
          () => _decode_Path_Access_Passwords_Item
        )
    );
  }
  return _cached_decoder_for_Path_Access_Passwords(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Path_Access_Passwords */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Path_Access_Passwords */
let _cached_encoder_for_Path_Access_Passwords: $.ASN1Encoder<Path_Access_Passwords> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Path_Access_Passwords */

/* START_OF_SYMBOL_DEFINITION _encode_Path_Access_Passwords */
/**
 * @summary Encodes a(n) Path_Access_Passwords into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Path_Access_Passwords, encoded as an ASN.1 Element.
 */
export function _encode_Path_Access_Passwords(
  value: Path_Access_Passwords,
  elGetter: $.ASN1Encoder<Path_Access_Passwords>
) {
  if (!_cached_encoder_for_Path_Access_Passwords) {
    _cached_encoder_for_Path_Access_Passwords = $._encode_implicit(
      _TagClass.application,
      27,
      () =>
        $._encodeSequenceOf<Path_Access_Passwords_Item>(
          () => _encode_Path_Access_Passwords_Item,
          $.BER
        ),
      $.BER
    );
  }
  return _cached_encoder_for_Path_Access_Passwords(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Path_Access_Passwords */

/* eslint-enable */
