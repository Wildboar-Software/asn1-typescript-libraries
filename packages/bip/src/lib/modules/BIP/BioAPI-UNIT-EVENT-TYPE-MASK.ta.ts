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

/* START_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE_MASK */
/**
 * @summary BioAPI_UNIT_EVENT_TYPE_MASK
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-UNIT-EVENT-TYPE-MASK  ::=  BIT STRING {
 *   insert(0), remove(1), fault(2), sourcePresent(3), sourceRemoved(4)
 * }(SIZE (32))
 * ```
 */
export type BioAPI_UNIT_EVENT_TYPE_MASK = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE_MASK */

/* START_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE_MASK_insert */
/**
 * @summary BioAPI_UNIT_EVENT_TYPE_MASK_insert
 * @constant
 */
export const BioAPI_UNIT_EVENT_TYPE_MASK_insert: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE_MASK_insert */

/* START_OF_SYMBOL_DEFINITION insert */
/**
 * @summary insert
 * @constant
 */
export const insert: number = BioAPI_UNIT_EVENT_TYPE_MASK_insert; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION insert */

/* START_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE_MASK_remove */
/**
 * @summary BioAPI_UNIT_EVENT_TYPE_MASK_remove
 * @constant
 */
export const BioAPI_UNIT_EVENT_TYPE_MASK_remove: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE_MASK_remove */

/* START_OF_SYMBOL_DEFINITION remove */
/**
 * @summary remove
 * @constant
 */
export const remove: number = BioAPI_UNIT_EVENT_TYPE_MASK_remove; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION remove */

/* START_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE_MASK_fault */
/**
 * @summary BioAPI_UNIT_EVENT_TYPE_MASK_fault
 * @constant
 */
export const BioAPI_UNIT_EVENT_TYPE_MASK_fault: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE_MASK_fault */

/* START_OF_SYMBOL_DEFINITION fault */
/**
 * @summary fault
 * @constant
 */
export const fault: number = BioAPI_UNIT_EVENT_TYPE_MASK_fault; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION fault */

/* START_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE_MASK_sourcePresent */
/**
 * @summary BioAPI_UNIT_EVENT_TYPE_MASK_sourcePresent
 * @constant
 */
export const BioAPI_UNIT_EVENT_TYPE_MASK_sourcePresent: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE_MASK_sourcePresent */

/* START_OF_SYMBOL_DEFINITION sourcePresent */
/**
 * @summary sourcePresent
 * @constant
 */
export const sourcePresent: number = BioAPI_UNIT_EVENT_TYPE_MASK_sourcePresent; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION sourcePresent */

/* START_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE_MASK_sourceRemoved */
/**
 * @summary BioAPI_UNIT_EVENT_TYPE_MASK_sourceRemoved
 * @constant
 */
export const BioAPI_UNIT_EVENT_TYPE_MASK_sourceRemoved: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_UNIT_EVENT_TYPE_MASK_sourceRemoved */

/* START_OF_SYMBOL_DEFINITION sourceRemoved */
/**
 * @summary sourceRemoved
 * @constant
 */
export const sourceRemoved: number = BioAPI_UNIT_EVENT_TYPE_MASK_sourceRemoved; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION sourceRemoved */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_UNIT_EVENT_TYPE_MASK */
let _cached_decoder_for_BioAPI_UNIT_EVENT_TYPE_MASK: $.ASN1Decoder<BioAPI_UNIT_EVENT_TYPE_MASK> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_UNIT_EVENT_TYPE_MASK */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_UNIT_EVENT_TYPE_MASK */
/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_UNIT_EVENT_TYPE_MASK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_UNIT_EVENT_TYPE_MASK} The decoded data structure.
 */
export function _decode_BioAPI_UNIT_EVENT_TYPE_MASK(el: _Element) {
  if (!_cached_decoder_for_BioAPI_UNIT_EVENT_TYPE_MASK) {
    _cached_decoder_for_BioAPI_UNIT_EVENT_TYPE_MASK = $._decodeBitString;
  }
  return _cached_decoder_for_BioAPI_UNIT_EVENT_TYPE_MASK(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_UNIT_EVENT_TYPE_MASK */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_UNIT_EVENT_TYPE_MASK */
let _cached_encoder_for_BioAPI_UNIT_EVENT_TYPE_MASK: $.ASN1Encoder<BioAPI_UNIT_EVENT_TYPE_MASK> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_UNIT_EVENT_TYPE_MASK */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_UNIT_EVENT_TYPE_MASK */
/**
 * @summary Encodes a(n) BioAPI_UNIT_EVENT_TYPE_MASK into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_UNIT_EVENT_TYPE_MASK, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_UNIT_EVENT_TYPE_MASK(
  value: BioAPI_UNIT_EVENT_TYPE_MASK,
  elGetter: $.ASN1Encoder<BioAPI_UNIT_EVENT_TYPE_MASK>
) {
  if (!_cached_encoder_for_BioAPI_UNIT_EVENT_TYPE_MASK) {
    _cached_encoder_for_BioAPI_UNIT_EVENT_TYPE_MASK = $._encodeBitString;
  }
  return _cached_encoder_for_BioAPI_UNIT_EVENT_TYPE_MASK(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_UNIT_EVENT_TYPE_MASK */

/* eslint-enable */
