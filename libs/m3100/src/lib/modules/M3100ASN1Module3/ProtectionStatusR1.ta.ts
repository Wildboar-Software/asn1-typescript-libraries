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
  ProtectionStatusR1_Item,
  _decode_ProtectionStatusR1_Item,
  _encode_ProtectionStatusR1_Item,
} from '../M3100ASN1Module3/ProtectionStatusR1-Item.ta';
export {
  ProtectionStatusR1_Item,
  _decode_ProtectionStatusR1_Item,
  _encode_ProtectionStatusR1_Item,
} from '../M3100ASN1Module3/ProtectionStatusR1-Item.ta';

/* START_OF_SYMBOL_DEFINITION ProtectionStatusR1 */
/**
 * @summary ProtectionStatusR1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionStatusR1  ::=
 *   SET OF
 *     CHOICE {noRequest       [0]  NULL,
 *             doNotRevert     [1]  NULL,
 *             manualSwitch
 *               [2]  SEQUENCE {switchStatus  [1]  SwitchStatus,
 *                              relatedUnit   [2]  FromAndToProtectionUnit
 *             },
 *             autoSwitch
 *               [3]  SEQUENCE {switchStatus      [1]  SwitchStatus,
 *                              relatedUnit       [2]  FromAndToProtectionUnit,
 *                              autoSwitchReason  [3]  AutoSwitchReason},
 *             forcedSwitch
 *               [4]  SEQUENCE {switchStatus  [1]  SwitchStatus,
 *                              relatedUnit   [2]  FromAndToProtectionUnit
 *             },
 *             lockout
 *               [5]  CHOICE {switchStatus   [1]  SwitchStatus,
 *                            releaseFailed  [2]  NULL},
 *             releaseFailed   [6]  NULL,
 *             resourceFailed  [7]  NULL,
 *             lockedIn        [8]  NULL}
 * ```
 */
export type ProtectionStatusR1 = ProtectionStatusR1_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ProtectionStatusR1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionStatusR1 */
let _cached_decoder_for_ProtectionStatusR1: $.ASN1Decoder<ProtectionStatusR1> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionStatusR1 */

/* START_OF_SYMBOL_DEFINITION _decode_ProtectionStatusR1 */
/**
 * @summary Decodes an ASN.1 element into a(n) ProtectionStatusR1
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtectionStatusR1} The decoded data structure.
 */
export function _decode_ProtectionStatusR1(el: _Element) {
  if (!_cached_decoder_for_ProtectionStatusR1) {
    _cached_decoder_for_ProtectionStatusR1 = $._decodeSetOf<ProtectionStatusR1_Item>(
      () => _decode_ProtectionStatusR1_Item
    );
  }
  return _cached_decoder_for_ProtectionStatusR1(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProtectionStatusR1 */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionStatusR1 */
let _cached_encoder_for_ProtectionStatusR1: $.ASN1Encoder<ProtectionStatusR1> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionStatusR1 */

/* START_OF_SYMBOL_DEFINITION _encode_ProtectionStatusR1 */
/**
 * @summary Encodes a(n) ProtectionStatusR1 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtectionStatusR1, encoded as an ASN.1 Element.
 */
export function _encode_ProtectionStatusR1(
  value: ProtectionStatusR1,
  elGetter: $.ASN1Encoder<ProtectionStatusR1>
) {
  if (!_cached_encoder_for_ProtectionStatusR1) {
    _cached_encoder_for_ProtectionStatusR1 = $._encodeSetOf<ProtectionStatusR1_Item>(
      () => _encode_ProtectionStatusR1_Item,
      $.BER
    );
  }
  return _cached_encoder_for_ProtectionStatusR1(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProtectionStatusR1 */

/* eslint-enable */
