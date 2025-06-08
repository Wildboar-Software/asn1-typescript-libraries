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

/* START_OF_SYMBOL_DEFINITION _enum_for_BioAPI_GUI_MOMENT */
export enum _enum_for_BioAPI_GUI_MOMENT {
  beforeStart = 0,
  during = 1,
  afterEnd = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_BioAPI_GUI_MOMENT */

/* START_OF_SYMBOL_DEFINITION BioAPI_GUI_MOMENT */
/**
 * @summary BioAPI_GUI_MOMENT
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-GUI-MOMENT  ::=  ENUMERATED {beforeStart, during, afterEnd, ...
 *                                   }
 * ```@enum {number}
 */
export type BioAPI_GUI_MOMENT = _enum_for_BioAPI_GUI_MOMENT | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION BioAPI_GUI_MOMENT */

/* START_OF_SYMBOL_DEFINITION BioAPI_GUI_MOMENT_beforeStart */
/**
 * @summary BioAPI_GUI_MOMENT_beforeStart
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_MOMENT_beforeStart: BioAPI_GUI_MOMENT = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_GUI_MOMENT_beforeStart */

/* START_OF_SYMBOL_DEFINITION beforeStart */
/**
 * @summary beforeStart
 * @constant
 * @type {number}
 */
export const beforeStart: BioAPI_GUI_MOMENT = BioAPI_GUI_MOMENT_beforeStart; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION beforeStart */

/* START_OF_SYMBOL_DEFINITION BioAPI_GUI_MOMENT_during */
/**
 * @summary BioAPI_GUI_MOMENT_during
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_MOMENT_during: BioAPI_GUI_MOMENT = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_GUI_MOMENT_during */

/* START_OF_SYMBOL_DEFINITION during */
/**
 * @summary during
 * @constant
 * @type {number}
 */
export const during: BioAPI_GUI_MOMENT = BioAPI_GUI_MOMENT_during; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION during */

/* START_OF_SYMBOL_DEFINITION BioAPI_GUI_MOMENT_afterEnd */
/**
 * @summary BioAPI_GUI_MOMENT_afterEnd
 * @constant
 * @type {number}
 */
export const BioAPI_GUI_MOMENT_afterEnd: BioAPI_GUI_MOMENT = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_GUI_MOMENT_afterEnd */

/* START_OF_SYMBOL_DEFINITION afterEnd */
/**
 * @summary afterEnd
 * @constant
 * @type {number}
 */
export const afterEnd: BioAPI_GUI_MOMENT = BioAPI_GUI_MOMENT_afterEnd; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION afterEnd */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_GUI_MOMENT */
let _cached_decoder_for_BioAPI_GUI_MOMENT: $.ASN1Decoder<BioAPI_GUI_MOMENT> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_GUI_MOMENT */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_GUI_MOMENT */
/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_GUI_MOMENT
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_GUI_MOMENT} The decoded data structure.
 */
export function _decode_BioAPI_GUI_MOMENT(el: _Element) {
  if (!_cached_decoder_for_BioAPI_GUI_MOMENT) {
    _cached_decoder_for_BioAPI_GUI_MOMENT = $._decodeEnumerated;
  }
  return _cached_decoder_for_BioAPI_GUI_MOMENT(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_GUI_MOMENT */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_GUI_MOMENT */
let _cached_encoder_for_BioAPI_GUI_MOMENT: $.ASN1Encoder<BioAPI_GUI_MOMENT> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_GUI_MOMENT */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_GUI_MOMENT */
/**
 * @summary Encodes a(n) BioAPI_GUI_MOMENT into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_GUI_MOMENT, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_GUI_MOMENT(
  value: BioAPI_GUI_MOMENT,
  elGetter: $.ASN1Encoder<BioAPI_GUI_MOMENT>
) {
  if (!_cached_encoder_for_BioAPI_GUI_MOMENT) {
    _cached_encoder_for_BioAPI_GUI_MOMENT = $._encodeEnumerated;
  }
  return _cached_encoder_for_BioAPI_GUI_MOMENT(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_GUI_MOMENT */

/* eslint-enable */
