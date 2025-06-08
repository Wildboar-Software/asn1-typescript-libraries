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

/* START_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK */
/**
 * @summary BioAPI_OPTIONS_MASK
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-OPTIONS-MASK  ::=  BIT STRING {
 *   raw(0), qualityRaw(1), qualityIntermediate(2), qualityProcessed(3),
 *   appGui(4), guiProgressEvents(5), sourcePresent(6), payload(7), birSign(8),
 *   birEncrypt(9), templateUpdate(10), adaptation(11), binning(12),
 *   selfContainedDevice(13), moc(14), subtypeToCapture(15), sensorBFP(16),
 *   archiveBFP(17), comparisonBFP(18), processingBFP(19), coarseScores(20)
 * }(SIZE (32))
 * ```
 */
export type BioAPI_OPTIONS_MASK = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_raw */
/**
 * @summary BioAPI_OPTIONS_MASK_raw
 * @constant
 */
export const BioAPI_OPTIONS_MASK_raw: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_raw */

/* START_OF_SYMBOL_DEFINITION raw */
/**
 * @summary raw
 * @constant
 */
export const raw: number = BioAPI_OPTIONS_MASK_raw; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION raw */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_qualityRaw */
/**
 * @summary BioAPI_OPTIONS_MASK_qualityRaw
 * @constant
 */
export const BioAPI_OPTIONS_MASK_qualityRaw: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_qualityRaw */

/* START_OF_SYMBOL_DEFINITION qualityRaw */
/**
 * @summary qualityRaw
 * @constant
 */
export const qualityRaw: number = BioAPI_OPTIONS_MASK_qualityRaw; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION qualityRaw */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_qualityIntermediate */
/**
 * @summary BioAPI_OPTIONS_MASK_qualityIntermediate
 * @constant
 */
export const BioAPI_OPTIONS_MASK_qualityIntermediate: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_qualityIntermediate */

/* START_OF_SYMBOL_DEFINITION qualityIntermediate */
/**
 * @summary qualityIntermediate
 * @constant
 */
export const qualityIntermediate: number = BioAPI_OPTIONS_MASK_qualityIntermediate; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION qualityIntermediate */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_qualityProcessed */
/**
 * @summary BioAPI_OPTIONS_MASK_qualityProcessed
 * @constant
 */
export const BioAPI_OPTIONS_MASK_qualityProcessed: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_qualityProcessed */

/* START_OF_SYMBOL_DEFINITION qualityProcessed */
/**
 * @summary qualityProcessed
 * @constant
 */
export const qualityProcessed: number = BioAPI_OPTIONS_MASK_qualityProcessed; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION qualityProcessed */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_appGui */
/**
 * @summary BioAPI_OPTIONS_MASK_appGui
 * @constant
 */
export const BioAPI_OPTIONS_MASK_appGui: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_appGui */

/* START_OF_SYMBOL_DEFINITION appGui */
/**
 * @summary appGui
 * @constant
 */
export const appGui: number = BioAPI_OPTIONS_MASK_appGui; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION appGui */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_guiProgressEvents */
/**
 * @summary BioAPI_OPTIONS_MASK_guiProgressEvents
 * @constant
 */
export const BioAPI_OPTIONS_MASK_guiProgressEvents: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_guiProgressEvents */

/* START_OF_SYMBOL_DEFINITION guiProgressEvents */
/**
 * @summary guiProgressEvents
 * @constant
 */
export const guiProgressEvents: number = BioAPI_OPTIONS_MASK_guiProgressEvents; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION guiProgressEvents */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_sourcePresent */
/**
 * @summary BioAPI_OPTIONS_MASK_sourcePresent
 * @constant
 */
export const BioAPI_OPTIONS_MASK_sourcePresent: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_sourcePresent */

/* START_OF_SYMBOL_DEFINITION sourcePresent */
/**
 * @summary sourcePresent
 * @constant
 */
export const sourcePresent: number = BioAPI_OPTIONS_MASK_sourcePresent; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION sourcePresent */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_payload */
/**
 * @summary BioAPI_OPTIONS_MASK_payload
 * @constant
 */
export const BioAPI_OPTIONS_MASK_payload: number = 7; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_payload */

/* START_OF_SYMBOL_DEFINITION payload */
/**
 * @summary payload
 * @constant
 */
export const payload: number = BioAPI_OPTIONS_MASK_payload; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION payload */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_birSign */
/**
 * @summary BioAPI_OPTIONS_MASK_birSign
 * @constant
 */
export const BioAPI_OPTIONS_MASK_birSign: number = 8; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_birSign */

/* START_OF_SYMBOL_DEFINITION birSign */
/**
 * @summary birSign
 * @constant
 */
export const birSign: number = BioAPI_OPTIONS_MASK_birSign; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION birSign */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_birEncrypt */
/**
 * @summary BioAPI_OPTIONS_MASK_birEncrypt
 * @constant
 */
export const BioAPI_OPTIONS_MASK_birEncrypt: number = 9; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_birEncrypt */

/* START_OF_SYMBOL_DEFINITION birEncrypt */
/**
 * @summary birEncrypt
 * @constant
 */
export const birEncrypt: number = BioAPI_OPTIONS_MASK_birEncrypt; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION birEncrypt */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_templateUpdate */
/**
 * @summary BioAPI_OPTIONS_MASK_templateUpdate
 * @constant
 */
export const BioAPI_OPTIONS_MASK_templateUpdate: number = 10; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_templateUpdate */

/* START_OF_SYMBOL_DEFINITION templateUpdate */
/**
 * @summary templateUpdate
 * @constant
 */
export const templateUpdate: number = BioAPI_OPTIONS_MASK_templateUpdate; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION templateUpdate */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_adaptation */
/**
 * @summary BioAPI_OPTIONS_MASK_adaptation
 * @constant
 */
export const BioAPI_OPTIONS_MASK_adaptation: number = 11; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_adaptation */

/* START_OF_SYMBOL_DEFINITION adaptation */
/**
 * @summary adaptation
 * @constant
 */
export const adaptation: number = BioAPI_OPTIONS_MASK_adaptation; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION adaptation */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_binning */
/**
 * @summary BioAPI_OPTIONS_MASK_binning
 * @constant
 */
export const BioAPI_OPTIONS_MASK_binning: number = 12; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_binning */

/* START_OF_SYMBOL_DEFINITION binning */
/**
 * @summary binning
 * @constant
 */
export const binning: number = BioAPI_OPTIONS_MASK_binning; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION binning */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_selfContainedDevice */
/**
 * @summary BioAPI_OPTIONS_MASK_selfContainedDevice
 * @constant
 */
export const BioAPI_OPTIONS_MASK_selfContainedDevice: number = 13; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_selfContainedDevice */

/* START_OF_SYMBOL_DEFINITION selfContainedDevice */
/**
 * @summary selfContainedDevice
 * @constant
 */
export const selfContainedDevice: number = BioAPI_OPTIONS_MASK_selfContainedDevice; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION selfContainedDevice */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_moc */
/**
 * @summary BioAPI_OPTIONS_MASK_moc
 * @constant
 */
export const BioAPI_OPTIONS_MASK_moc: number = 14; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_moc */

/* START_OF_SYMBOL_DEFINITION moc */
/**
 * @summary moc
 * @constant
 */
export const moc: number = BioAPI_OPTIONS_MASK_moc; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION moc */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_subtypeToCapture */
/**
 * @summary BioAPI_OPTIONS_MASK_subtypeToCapture
 * @constant
 */
export const BioAPI_OPTIONS_MASK_subtypeToCapture: number = 15; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_subtypeToCapture */

/* START_OF_SYMBOL_DEFINITION subtypeToCapture */
/**
 * @summary subtypeToCapture
 * @constant
 */
export const subtypeToCapture: number = BioAPI_OPTIONS_MASK_subtypeToCapture; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION subtypeToCapture */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_sensorBFP */
/**
 * @summary BioAPI_OPTIONS_MASK_sensorBFP
 * @constant
 */
export const BioAPI_OPTIONS_MASK_sensorBFP: number = 16; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_sensorBFP */

/* START_OF_SYMBOL_DEFINITION sensorBFP */
/**
 * @summary sensorBFP
 * @constant
 */
export const sensorBFP: number = BioAPI_OPTIONS_MASK_sensorBFP; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION sensorBFP */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_archiveBFP */
/**
 * @summary BioAPI_OPTIONS_MASK_archiveBFP
 * @constant
 */
export const BioAPI_OPTIONS_MASK_archiveBFP: number = 17; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_archiveBFP */

/* START_OF_SYMBOL_DEFINITION archiveBFP */
/**
 * @summary archiveBFP
 * @constant
 */
export const archiveBFP: number = BioAPI_OPTIONS_MASK_archiveBFP; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION archiveBFP */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_comparisonBFP */
/**
 * @summary BioAPI_OPTIONS_MASK_comparisonBFP
 * @constant
 */
export const BioAPI_OPTIONS_MASK_comparisonBFP: number = 18; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_comparisonBFP */

/* START_OF_SYMBOL_DEFINITION comparisonBFP */
/**
 * @summary comparisonBFP
 * @constant
 */
export const comparisonBFP: number = BioAPI_OPTIONS_MASK_comparisonBFP; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION comparisonBFP */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_processingBFP */
/**
 * @summary BioAPI_OPTIONS_MASK_processingBFP
 * @constant
 */
export const BioAPI_OPTIONS_MASK_processingBFP: number = 19; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_processingBFP */

/* START_OF_SYMBOL_DEFINITION processingBFP */
/**
 * @summary processingBFP
 * @constant
 */
export const processingBFP: number = BioAPI_OPTIONS_MASK_processingBFP; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION processingBFP */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_coarseScores */
/**
 * @summary BioAPI_OPTIONS_MASK_coarseScores
 * @constant
 */
export const BioAPI_OPTIONS_MASK_coarseScores: number = 20; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPTIONS_MASK_coarseScores */

/* START_OF_SYMBOL_DEFINITION coarseScores */
/**
 * @summary coarseScores
 * @constant
 */
export const coarseScores: number = BioAPI_OPTIONS_MASK_coarseScores; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION coarseScores */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_OPTIONS_MASK */
let _cached_decoder_for_BioAPI_OPTIONS_MASK: $.ASN1Decoder<BioAPI_OPTIONS_MASK> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_OPTIONS_MASK */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_OPTIONS_MASK */
/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_OPTIONS_MASK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_OPTIONS_MASK} The decoded data structure.
 */
export function _decode_BioAPI_OPTIONS_MASK(el: _Element) {
  if (!_cached_decoder_for_BioAPI_OPTIONS_MASK) {
    _cached_decoder_for_BioAPI_OPTIONS_MASK = $._decodeBitString;
  }
  return _cached_decoder_for_BioAPI_OPTIONS_MASK(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_OPTIONS_MASK */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_OPTIONS_MASK */
let _cached_encoder_for_BioAPI_OPTIONS_MASK: $.ASN1Encoder<BioAPI_OPTIONS_MASK> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_OPTIONS_MASK */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_OPTIONS_MASK */
/**
 * @summary Encodes a(n) BioAPI_OPTIONS_MASK into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_OPTIONS_MASK, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_OPTIONS_MASK(
  value: BioAPI_OPTIONS_MASK,
  elGetter: $.ASN1Encoder<BioAPI_OPTIONS_MASK>
) {
  if (!_cached_encoder_for_BioAPI_OPTIONS_MASK) {
    _cached_encoder_for_BioAPI_OPTIONS_MASK = $._encodeBitString;
  }
  return _cached_encoder_for_BioAPI_OPTIONS_MASK(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_OPTIONS_MASK */

/* eslint-enable */
