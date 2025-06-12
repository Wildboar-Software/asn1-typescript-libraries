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
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta.mjs';
export {
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta.mjs';
import {
  BioAPI_STRING,
  _decode_BioAPI_STRING,
  _encode_BioAPI_STRING,
} from '../BIP/BioAPI-STRING.ta.mjs';
export {
  BioAPI_STRING,
  _decode_BioAPI_STRING,
  _encode_BioAPI_STRING,
} from '../BIP/BioAPI-STRING.ta.mjs';
import {
  BioAPI_VERSION,
  _decode_BioAPI_VERSION,
  _encode_BioAPI_VERSION,
} from '../BIP/BioAPI-VERSION.ta.mjs';
export {
  BioAPI_VERSION,
  _decode_BioAPI_VERSION,
  _encode_BioAPI_VERSION,
} from '../BIP/BioAPI-VERSION.ta.mjs';
import {
  BioAPI_BIR_BIOMETRIC_DATA_FORMAT,
  _decode_BioAPI_BIR_BIOMETRIC_DATA_FORMAT,
  _encode_BioAPI_BIR_BIOMETRIC_DATA_FORMAT,
} from '../BIP/BioAPI-BIR-BIOMETRIC-DATA-FORMAT.ta.mjs';
export {
  BioAPI_BIR_BIOMETRIC_DATA_FORMAT,
  _decode_BioAPI_BIR_BIOMETRIC_DATA_FORMAT,
  _encode_BioAPI_BIR_BIOMETRIC_DATA_FORMAT,
} from '../BIP/BioAPI-BIR-BIOMETRIC-DATA-FORMAT.ta.mjs';
import {
  BioAPI_BIR_BIOMETRIC_TYPE,
  BioAPI_BIR_BIOMETRIC_TYPE_typeMultipleBiometricTypes /* IMPORTED_LONG_NAMED_BIT */,
  typeMultipleBiometricTypes /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_BIOMETRIC_TYPE_typeFace /* IMPORTED_LONG_NAMED_BIT */,
  typeFace /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_BIOMETRIC_TYPE_typeVoice /* IMPORTED_LONG_NAMED_BIT */,
  typeVoice /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_BIOMETRIC_TYPE_typeFinger /* IMPORTED_LONG_NAMED_BIT */,
  typeFinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_BIOMETRIC_TYPE_typeIris /* IMPORTED_LONG_NAMED_BIT */,
  typeIris /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_BIOMETRIC_TYPE_typeRetina /* IMPORTED_LONG_NAMED_BIT */,
  typeRetina /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_BIOMETRIC_TYPE_typeHandGeometry /* IMPORTED_LONG_NAMED_BIT */,
  typeHandGeometry /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_BIOMETRIC_TYPE_typeSignatureSign /* IMPORTED_LONG_NAMED_BIT */,
  typeSignatureSign /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_BIOMETRIC_TYPE_typeKeystroke /* IMPORTED_LONG_NAMED_BIT */,
  typeKeystroke /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_BIOMETRIC_TYPE_typeLipMovement /* IMPORTED_LONG_NAMED_BIT */,
  typeLipMovement /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_BIOMETRIC_TYPE_typeGait /* IMPORTED_LONG_NAMED_BIT */,
  typeGait /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_BIOMETRIC_TYPE_typeVein /* IMPORTED_LONG_NAMED_BIT */,
  typeVein /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_BIOMETRIC_TYPE_typeDNA /* IMPORTED_LONG_NAMED_BIT */,
  typeDNA /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_BIOMETRIC_TYPE_typeEar /* IMPORTED_LONG_NAMED_BIT */,
  typeEar /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_BIOMETRIC_TYPE_typeFoot /* IMPORTED_LONG_NAMED_BIT */,
  typeFoot /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_BIOMETRIC_TYPE_typeScent /* IMPORTED_LONG_NAMED_BIT */,
  typeScent /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_BIOMETRIC_TYPE_typeOther /* IMPORTED_LONG_NAMED_BIT */,
  typeOther /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_BIOMETRIC_TYPE_typePassword /* IMPORTED_LONG_NAMED_BIT */,
  typePassword /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_BioAPI_BIR_BIOMETRIC_TYPE,
  _encode_BioAPI_BIR_BIOMETRIC_TYPE,
} from '../BIP/BioAPI-BIR-BIOMETRIC-TYPE.ta.mjs';
export {
  BioAPI_BIR_BIOMETRIC_TYPE,
  BioAPI_BIR_BIOMETRIC_TYPE_typeMultipleBiometricTypes /* IMPORTED_LONG_NAMED_BIT */,
  typeMultipleBiometricTypes /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_BIOMETRIC_TYPE_typeFace /* IMPORTED_LONG_NAMED_BIT */,
  typeFace /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_BIOMETRIC_TYPE_typeVoice /* IMPORTED_LONG_NAMED_BIT */,
  typeVoice /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_BIOMETRIC_TYPE_typeFinger /* IMPORTED_LONG_NAMED_BIT */,
  typeFinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_BIOMETRIC_TYPE_typeIris /* IMPORTED_LONG_NAMED_BIT */,
  typeIris /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_BIOMETRIC_TYPE_typeRetina /* IMPORTED_LONG_NAMED_BIT */,
  typeRetina /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_BIOMETRIC_TYPE_typeHandGeometry /* IMPORTED_LONG_NAMED_BIT */,
  typeHandGeometry /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_BIOMETRIC_TYPE_typeSignatureSign /* IMPORTED_LONG_NAMED_BIT */,
  typeSignatureSign /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_BIOMETRIC_TYPE_typeKeystroke /* IMPORTED_LONG_NAMED_BIT */,
  typeKeystroke /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_BIOMETRIC_TYPE_typeLipMovement /* IMPORTED_LONG_NAMED_BIT */,
  typeLipMovement /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_BIOMETRIC_TYPE_typeGait /* IMPORTED_LONG_NAMED_BIT */,
  typeGait /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_BIOMETRIC_TYPE_typeVein /* IMPORTED_LONG_NAMED_BIT */,
  typeVein /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_BIOMETRIC_TYPE_typeDNA /* IMPORTED_LONG_NAMED_BIT */,
  typeDNA /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_BIOMETRIC_TYPE_typeEar /* IMPORTED_LONG_NAMED_BIT */,
  typeEar /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_BIOMETRIC_TYPE_typeFoot /* IMPORTED_LONG_NAMED_BIT */,
  typeFoot /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_BIOMETRIC_TYPE_typeScent /* IMPORTED_LONG_NAMED_BIT */,
  typeScent /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_BIOMETRIC_TYPE_typeOther /* IMPORTED_LONG_NAMED_BIT */,
  typeOther /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_BIOMETRIC_TYPE_typePassword /* IMPORTED_LONG_NAMED_BIT */,
  typePassword /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_BioAPI_BIR_BIOMETRIC_TYPE,
  _encode_BioAPI_BIR_BIOMETRIC_TYPE,
} from '../BIP/BioAPI-BIR-BIOMETRIC-TYPE.ta.mjs';
import {
  BioAPI_OPERATIONS_MASK,
  BioAPI_OPERATIONS_MASK_enableEvents /* IMPORTED_LONG_NAMED_BIT */,
  enableEvents /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_subscribeToGUIEvents /* IMPORTED_LONG_NAMED_BIT */,
  subscribeToGUIEvents /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_capture /* IMPORTED_LONG_NAMED_BIT */,
  capture /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_createTemplate /* IMPORTED_LONG_NAMED_BIT */,
  createTemplate /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_process /* IMPORTED_LONG_NAMED_BIT */,
  process /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_processWithAuxBir /* IMPORTED_LONG_NAMED_BIT */,
  processWithAuxBir /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_verifyMatch /* IMPORTED_LONG_NAMED_BIT */,
  verifyMatch /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_identifyMatch /* IMPORTED_LONG_NAMED_BIT */,
  identifyMatch /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_enroll /* IMPORTED_LONG_NAMED_BIT */,
  enroll /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_verify /* IMPORTED_LONG_NAMED_BIT */,
  verify /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_identify /* IMPORTED_LONG_NAMED_BIT */,
  identify /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_import_ /* IMPORTED_LONG_NAMED_BIT */,
  import_ /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_presetIdentifyPopulation /* IMPORTED_LONG_NAMED_BIT */,
  presetIdentifyPopulation /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_databaseOperations /* IMPORTED_LONG_NAMED_BIT */,
  databaseOperations /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_setPowerMode /* IMPORTED_LONG_NAMED_BIT */,
  setPowerMode /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_setIndicatorStatus /* IMPORTED_LONG_NAMED_BIT */,
  setIndicatorStatus /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_getIndicatorStatus /* IMPORTED_LONG_NAMED_BIT */,
  getIndicatorStatus /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_calibrateSensor /* IMPORTED_LONG_NAMED_BIT */,
  calibrateSensor /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_utilities /* IMPORTED_LONG_NAMED_BIT */,
  utilities /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_queryUnits /* IMPORTED_LONG_NAMED_BIT */,
  queryUnits /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_queryBFPs /* IMPORTED_LONG_NAMED_BIT */,
  queryBFPs /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_controlUnit /* IMPORTED_LONG_NAMED_BIT */,
  controlUnit /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_BioAPI_OPERATIONS_MASK,
  _encode_BioAPI_OPERATIONS_MASK,
} from '../BIP/BioAPI-OPERATIONS-MASK.ta.mjs';
export {
  BioAPI_OPERATIONS_MASK,
  BioAPI_OPERATIONS_MASK_enableEvents /* IMPORTED_LONG_NAMED_BIT */,
  enableEvents /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_subscribeToGUIEvents /* IMPORTED_LONG_NAMED_BIT */,
  subscribeToGUIEvents /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_capture /* IMPORTED_LONG_NAMED_BIT */,
  capture /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_createTemplate /* IMPORTED_LONG_NAMED_BIT */,
  createTemplate /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_process /* IMPORTED_LONG_NAMED_BIT */,
  process /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_processWithAuxBir /* IMPORTED_LONG_NAMED_BIT */,
  processWithAuxBir /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_verifyMatch /* IMPORTED_LONG_NAMED_BIT */,
  verifyMatch /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_identifyMatch /* IMPORTED_LONG_NAMED_BIT */,
  identifyMatch /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_enroll /* IMPORTED_LONG_NAMED_BIT */,
  enroll /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_verify /* IMPORTED_LONG_NAMED_BIT */,
  verify /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_identify /* IMPORTED_LONG_NAMED_BIT */,
  identify /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_import_ /* IMPORTED_LONG_NAMED_BIT */,
  import_ /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_presetIdentifyPopulation /* IMPORTED_LONG_NAMED_BIT */,
  presetIdentifyPopulation /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_databaseOperations /* IMPORTED_LONG_NAMED_BIT */,
  databaseOperations /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_setPowerMode /* IMPORTED_LONG_NAMED_BIT */,
  setPowerMode /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_setIndicatorStatus /* IMPORTED_LONG_NAMED_BIT */,
  setIndicatorStatus /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_getIndicatorStatus /* IMPORTED_LONG_NAMED_BIT */,
  getIndicatorStatus /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_calibrateSensor /* IMPORTED_LONG_NAMED_BIT */,
  calibrateSensor /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_utilities /* IMPORTED_LONG_NAMED_BIT */,
  utilities /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_queryUnits /* IMPORTED_LONG_NAMED_BIT */,
  queryUnits /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_queryBFPs /* IMPORTED_LONG_NAMED_BIT */,
  queryBFPs /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPERATIONS_MASK_controlUnit /* IMPORTED_LONG_NAMED_BIT */,
  controlUnit /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_BioAPI_OPERATIONS_MASK,
  _encode_BioAPI_OPERATIONS_MASK,
} from '../BIP/BioAPI-OPERATIONS-MASK.ta.mjs';
import {
  BioAPI_OPTIONS_MASK,
  BioAPI_OPTIONS_MASK_raw /* IMPORTED_LONG_NAMED_BIT */,
  raw /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_qualityRaw /* IMPORTED_LONG_NAMED_BIT */,
  qualityRaw /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_qualityIntermediate /* IMPORTED_LONG_NAMED_BIT */,
  qualityIntermediate /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_qualityProcessed /* IMPORTED_LONG_NAMED_BIT */,
  qualityProcessed /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_appGui /* IMPORTED_LONG_NAMED_BIT */,
  appGui /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_guiProgressEvents /* IMPORTED_LONG_NAMED_BIT */,
  guiProgressEvents /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_sourcePresent /* IMPORTED_LONG_NAMED_BIT */,
  sourcePresent /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_payload /* IMPORTED_LONG_NAMED_BIT */,
  payload /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_birSign /* IMPORTED_LONG_NAMED_BIT */,
  birSign /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_birEncrypt /* IMPORTED_LONG_NAMED_BIT */,
  birEncrypt /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_templateUpdate /* IMPORTED_LONG_NAMED_BIT */,
  templateUpdate /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_adaptation /* IMPORTED_LONG_NAMED_BIT */,
  adaptation /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_binning /* IMPORTED_LONG_NAMED_BIT */,
  binning /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_selfContainedDevice /* IMPORTED_LONG_NAMED_BIT */,
  selfContainedDevice /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_moc /* IMPORTED_LONG_NAMED_BIT */,
  moc /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_subtypeToCapture /* IMPORTED_LONG_NAMED_BIT */,
  subtypeToCapture /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_sensorBFP /* IMPORTED_LONG_NAMED_BIT */,
  sensorBFP /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_archiveBFP /* IMPORTED_LONG_NAMED_BIT */,
  archiveBFP /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_comparisonBFP /* IMPORTED_LONG_NAMED_BIT */,
  comparisonBFP /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_processingBFP /* IMPORTED_LONG_NAMED_BIT */,
  processingBFP /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_coarseScores /* IMPORTED_LONG_NAMED_BIT */,
  coarseScores /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_BioAPI_OPTIONS_MASK,
  _encode_BioAPI_OPTIONS_MASK,
} from '../BIP/BioAPI-OPTIONS-MASK.ta.mjs';
export {
  BioAPI_OPTIONS_MASK,
  BioAPI_OPTIONS_MASK_raw /* IMPORTED_LONG_NAMED_BIT */,
  raw /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_qualityRaw /* IMPORTED_LONG_NAMED_BIT */,
  qualityRaw /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_qualityIntermediate /* IMPORTED_LONG_NAMED_BIT */,
  qualityIntermediate /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_qualityProcessed /* IMPORTED_LONG_NAMED_BIT */,
  qualityProcessed /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_appGui /* IMPORTED_LONG_NAMED_BIT */,
  appGui /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_guiProgressEvents /* IMPORTED_LONG_NAMED_BIT */,
  guiProgressEvents /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_sourcePresent /* IMPORTED_LONG_NAMED_BIT */,
  sourcePresent /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_payload /* IMPORTED_LONG_NAMED_BIT */,
  payload /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_birSign /* IMPORTED_LONG_NAMED_BIT */,
  birSign /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_birEncrypt /* IMPORTED_LONG_NAMED_BIT */,
  birEncrypt /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_templateUpdate /* IMPORTED_LONG_NAMED_BIT */,
  templateUpdate /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_adaptation /* IMPORTED_LONG_NAMED_BIT */,
  adaptation /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_binning /* IMPORTED_LONG_NAMED_BIT */,
  binning /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_selfContainedDevice /* IMPORTED_LONG_NAMED_BIT */,
  selfContainedDevice /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_moc /* IMPORTED_LONG_NAMED_BIT */,
  moc /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_subtypeToCapture /* IMPORTED_LONG_NAMED_BIT */,
  subtypeToCapture /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_sensorBFP /* IMPORTED_LONG_NAMED_BIT */,
  sensorBFP /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_archiveBFP /* IMPORTED_LONG_NAMED_BIT */,
  archiveBFP /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_comparisonBFP /* IMPORTED_LONG_NAMED_BIT */,
  comparisonBFP /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_processingBFP /* IMPORTED_LONG_NAMED_BIT */,
  processingBFP /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_OPTIONS_MASK_coarseScores /* IMPORTED_LONG_NAMED_BIT */,
  coarseScores /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_BioAPI_OPTIONS_MASK,
  _encode_BioAPI_OPTIONS_MASK,
} from '../BIP/BioAPI-OPTIONS-MASK.ta.mjs';
import {
  BioAPI_FMR,
  _decode_BioAPI_FMR,
  _encode_BioAPI_FMR,
} from '../BIP/BioAPI-FMR.ta.mjs';
export {
  BioAPI_FMR,
  _decode_BioAPI_FMR,
  _encode_BioAPI_FMR,
} from '../BIP/BioAPI-FMR.ta.mjs';
import {
  UnsignedInt,
  _decode_UnsignedInt,
  _encode_UnsignedInt,
} from '../BIP/UnsignedInt.ta.mjs';
export {
  UnsignedInt,
  _decode_UnsignedInt,
  _encode_UnsignedInt,
} from '../BIP/UnsignedInt.ta.mjs';
import {
  SignedInt,
  _decode_SignedInt,
  _encode_SignedInt,
} from '../BIP/SignedInt.ta.mjs';
export {
  SignedInt,
  _decode_SignedInt,
  _encode_SignedInt,
} from '../BIP/SignedInt.ta.mjs';
import {
  EndpointIRI,
  _decode_EndpointIRI,
  _encode_EndpointIRI,
} from '../BIP/EndpointIRI.ta.mjs';
export {
  EndpointIRI,
  _decode_EndpointIRI,
  _encode_EndpointIRI,
} from '../BIP/EndpointIRI.ta.mjs';

/* START_OF_SYMBOL_DEFINITION BioAPI_BSP_SCHEMA */
/**
 * @summary BioAPI_BSP_SCHEMA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-BSP-SCHEMA ::= SEQUENCE {
 *   bspProductUuid           BioAPI-UUID,
 *   description              BioAPI-STRING,
 *   path                     UTF8String,
 *   specVersion              BioAPI-VERSION,
 *   productVersion           BioAPI-STRING,
 *   vendor                   BioAPI-STRING,
 *   supportedFormats
 *     SEQUENCE (SIZE (0..max-unsigned-int)) OF format
 *       BioAPI-BIR-BIOMETRIC-DATA-FORMAT,
 *   factorsMask              BioAPI-BIR-BIOMETRIC-TYPE,
 *   operations               BioAPI-OPERATIONS-MASK,
 *   options                  BioAPI-OPTIONS-MASK,
 *   payloadPolicy            BioAPI-FMR,
 *   maxPayloadSize           UnsignedInt,
 *   defaultVerifyTimeout     SignedInt,
 *   defaultIdentifyTimeout   SignedInt,
 *   defaultCaptureTimeout    SignedInt,
 *   defaultEnrollTimeout     SignedInt,
 *   defaultCalibrateTimeout  SignedInt,
 *   maxBSPDbSize             UnsignedInt,
 *   maxIdentify              UnsignedInt,
 *   hostingEndpointIRI       EndpointIRI,
 *   bspAccessUuid            BioAPI-UUID
 * }
 * ```
 *
 * @class
 */
export class BioAPI_BSP_SCHEMA {
  constructor(
    /**
     * @summary `bspProductUuid`.
     * @public
     * @readonly
     */
    readonly bspProductUuid: BioAPI_UUID,
    /**
     * @summary `description`.
     * @public
     * @readonly
     */
    readonly description: BioAPI_STRING,
    /**
     * @summary `path`.
     * @public
     * @readonly
     */
    readonly path: UTF8String,
    /**
     * @summary `specVersion`.
     * @public
     * @readonly
     */
    readonly specVersion: BioAPI_VERSION,
    /**
     * @summary `productVersion`.
     * @public
     * @readonly
     */
    readonly productVersion: BioAPI_STRING,
    /**
     * @summary `vendor`.
     * @public
     * @readonly
     */
    readonly vendor: BioAPI_STRING,
    /**
     * @summary `supportedFormats`.
     * @public
     * @readonly
     */
    readonly supportedFormats: BioAPI_BIR_BIOMETRIC_DATA_FORMAT[],
    /**
     * @summary `factorsMask`.
     * @public
     * @readonly
     */
    readonly factorsMask: BioAPI_BIR_BIOMETRIC_TYPE,
    /**
     * @summary `operations`.
     * @public
     * @readonly
     */
    readonly operations: BioAPI_OPERATIONS_MASK,
    /**
     * @summary `options`.
     * @public
     * @readonly
     */
    readonly options: BioAPI_OPTIONS_MASK,
    /**
     * @summary `payloadPolicy`.
     * @public
     * @readonly
     */
    readonly payloadPolicy: BioAPI_FMR,
    /**
     * @summary `maxPayloadSize`.
     * @public
     * @readonly
     */
    readonly maxPayloadSize: UnsignedInt,
    /**
     * @summary `defaultVerifyTimeout`.
     * @public
     * @readonly
     */
    readonly defaultVerifyTimeout: SignedInt,
    /**
     * @summary `defaultIdentifyTimeout`.
     * @public
     * @readonly
     */
    readonly defaultIdentifyTimeout: SignedInt,
    /**
     * @summary `defaultCaptureTimeout`.
     * @public
     * @readonly
     */
    readonly defaultCaptureTimeout: SignedInt,
    /**
     * @summary `defaultEnrollTimeout`.
     * @public
     * @readonly
     */
    readonly defaultEnrollTimeout: SignedInt,
    /**
     * @summary `defaultCalibrateTimeout`.
     * @public
     * @readonly
     */
    readonly defaultCalibrateTimeout: SignedInt,
    /**
     * @summary `maxBSPDbSize`.
     * @public
     * @readonly
     */
    readonly maxBSPDbSize: UnsignedInt,
    /**
     * @summary `maxIdentify`.
     * @public
     * @readonly
     */
    readonly maxIdentify: UnsignedInt,
    /**
     * @summary `hostingEndpointIRI`.
     * @public
     * @readonly
     */
    readonly hostingEndpointIRI: EndpointIRI,
    /**
     * @summary `bspAccessUuid`.
     * @public
     * @readonly
     */
    readonly bspAccessUuid: BioAPI_UUID
  ) {}

  /**
   * @summary Restructures an object into a BioAPI_BSP_SCHEMA
   * @description
   *
   * This takes an `object` and converts it to a `BioAPI_BSP_SCHEMA`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BioAPI_BSP_SCHEMA`.
   * @returns {BioAPI_BSP_SCHEMA}
   */
  public static _from_object(
    _o: { [_K in keyof BioAPI_BSP_SCHEMA]: BioAPI_BSP_SCHEMA[_K] }
  ): BioAPI_BSP_SCHEMA {
    return new BioAPI_BSP_SCHEMA(
      _o.bspProductUuid,
      _o.description,
      _o.path,
      _o.specVersion,
      _o.productVersion,
      _o.vendor,
      _o.supportedFormats,
      _o.factorsMask,
      _o.operations,
      _o.options,
      _o.payloadPolicy,
      _o.maxPayloadSize,
      _o.defaultVerifyTimeout,
      _o.defaultIdentifyTimeout,
      _o.defaultCaptureTimeout,
      _o.defaultEnrollTimeout,
      _o.defaultCalibrateTimeout,
      _o.maxBSPDbSize,
      _o.maxIdentify,
      _o.hostingEndpointIRI,
      _o.bspAccessUuid
    );
  }
}
/* END_OF_SYMBOL_DEFINITION BioAPI_BSP_SCHEMA */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BioAPI_BSP_SCHEMA */
/**
 * @summary The Leading Root Component Types of BioAPI_BSP_SCHEMA
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BioAPI_BSP_SCHEMA: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'bspProductUuid',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'description',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'path',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'specVersion',
    false,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'productVersion',
    false,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'vendor',
    false,
    $.hasTag(_TagClass.context, 5),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'supportedFormats',
    false,
    $.hasTag(_TagClass.context, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'factorsMask',
    false,
    $.hasTag(_TagClass.context, 7),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'operations',
    false,
    $.hasTag(_TagClass.context, 8),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'options',
    false,
    $.hasTag(_TagClass.context, 9),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'payloadPolicy',
    false,
    $.hasTag(_TagClass.context, 10),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'maxPayloadSize',
    false,
    $.hasTag(_TagClass.context, 11),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'defaultVerifyTimeout',
    false,
    $.hasTag(_TagClass.context, 12),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'defaultIdentifyTimeout',
    false,
    $.hasTag(_TagClass.context, 13),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'defaultCaptureTimeout',
    false,
    $.hasTag(_TagClass.context, 14),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'defaultEnrollTimeout',
    false,
    $.hasTag(_TagClass.context, 15),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'defaultCalibrateTimeout',
    false,
    $.hasTag(_TagClass.context, 16),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'maxBSPDbSize',
    false,
    $.hasTag(_TagClass.context, 17),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'maxIdentify',
    false,
    $.hasTag(_TagClass.context, 18),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'hostingEndpointIRI',
    false,
    $.hasTag(_TagClass.context, 19),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'bspAccessUuid',
    false,
    $.hasTag(_TagClass.context, 20),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BioAPI_BSP_SCHEMA */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BioAPI_BSP_SCHEMA */
/**
 * @summary The Trailing Root Component Types of BioAPI_BSP_SCHEMA
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BioAPI_BSP_SCHEMA: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BioAPI_BSP_SCHEMA */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BioAPI_BSP_SCHEMA */
/**
 * @summary The Extension Addition Component Types of BioAPI_BSP_SCHEMA
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BioAPI_BSP_SCHEMA: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BioAPI_BSP_SCHEMA */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_BSP_SCHEMA */
let _cached_decoder_for_BioAPI_BSP_SCHEMA: $.ASN1Decoder<BioAPI_BSP_SCHEMA> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_BSP_SCHEMA */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_BSP_SCHEMA */
/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_BSP_SCHEMA
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_BSP_SCHEMA} The decoded data structure.
 */
export function _decode_BioAPI_BSP_SCHEMA(el: _Element) {
  if (!_cached_decoder_for_BioAPI_BSP_SCHEMA) {
    _cached_decoder_for_BioAPI_BSP_SCHEMA = function (
      el: _Element
    ): BioAPI_BSP_SCHEMA {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 21) {
        throw new _ConstructionError(
          'BioAPI-BSP-SCHEMA contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'bspProductUuid';
      sequence[1].name = 'description';
      sequence[2].name = 'path';
      sequence[3].name = 'specVersion';
      sequence[4].name = 'productVersion';
      sequence[5].name = 'vendor';
      sequence[6].name = 'supportedFormats';
      sequence[7].name = 'factorsMask';
      sequence[8].name = 'operations';
      sequence[9].name = 'options';
      sequence[10].name = 'payloadPolicy';
      sequence[11].name = 'maxPayloadSize';
      sequence[12].name = 'defaultVerifyTimeout';
      sequence[13].name = 'defaultIdentifyTimeout';
      sequence[14].name = 'defaultCaptureTimeout';
      sequence[15].name = 'defaultEnrollTimeout';
      sequence[16].name = 'defaultCalibrateTimeout';
      sequence[17].name = 'maxBSPDbSize';
      sequence[18].name = 'maxIdentify';
      sequence[19].name = 'hostingEndpointIRI';
      sequence[20].name = 'bspAccessUuid';
      let bspProductUuid!: BioAPI_UUID;
      let description!: BioAPI_STRING;
      let path!: UTF8String;
      let specVersion!: BioAPI_VERSION;
      let productVersion!: BioAPI_STRING;
      let vendor!: BioAPI_STRING;
      let supportedFormats!: BioAPI_BIR_BIOMETRIC_DATA_FORMAT[];
      let factorsMask!: BioAPI_BIR_BIOMETRIC_TYPE;
      let operations!: BioAPI_OPERATIONS_MASK;
      let options!: BioAPI_OPTIONS_MASK;
      let payloadPolicy!: BioAPI_FMR;
      let maxPayloadSize!: UnsignedInt;
      let defaultVerifyTimeout!: SignedInt;
      let defaultIdentifyTimeout!: SignedInt;
      let defaultCaptureTimeout!: SignedInt;
      let defaultEnrollTimeout!: SignedInt;
      let defaultCalibrateTimeout!: SignedInt;
      let maxBSPDbSize!: UnsignedInt;
      let maxIdentify!: UnsignedInt;
      let hostingEndpointIRI!: EndpointIRI;
      let bspAccessUuid!: BioAPI_UUID;
      bspProductUuid = _decode_BioAPI_UUID(sequence[0]);
      description = _decode_BioAPI_STRING(sequence[1]);
      path = $._decodeUTF8String(sequence[2]);
      specVersion = _decode_BioAPI_VERSION(sequence[3]);
      productVersion = _decode_BioAPI_STRING(sequence[4]);
      vendor = _decode_BioAPI_STRING(sequence[5]);
      supportedFormats = $._decodeSequenceOf<BioAPI_BIR_BIOMETRIC_DATA_FORMAT>(
        () => _decode_BioAPI_BIR_BIOMETRIC_DATA_FORMAT
      )(sequence[6]);
      factorsMask = _decode_BioAPI_BIR_BIOMETRIC_TYPE(sequence[7]);
      operations = _decode_BioAPI_OPERATIONS_MASK(sequence[8]);
      options = _decode_BioAPI_OPTIONS_MASK(sequence[9]);
      payloadPolicy = _decode_BioAPI_FMR(sequence[10]);
      maxPayloadSize = _decode_UnsignedInt(sequence[11]);
      defaultVerifyTimeout = _decode_SignedInt(sequence[12]);
      defaultIdentifyTimeout = _decode_SignedInt(sequence[13]);
      defaultCaptureTimeout = _decode_SignedInt(sequence[14]);
      defaultEnrollTimeout = _decode_SignedInt(sequence[15]);
      defaultCalibrateTimeout = _decode_SignedInt(sequence[16]);
      maxBSPDbSize = _decode_UnsignedInt(sequence[17]);
      maxIdentify = _decode_UnsignedInt(sequence[18]);
      hostingEndpointIRI = _decode_EndpointIRI(sequence[19]);
      bspAccessUuid = _decode_BioAPI_UUID(sequence[20]);
      return new BioAPI_BSP_SCHEMA(
        bspProductUuid,
        description,
        path,
        specVersion,
        productVersion,
        vendor,
        supportedFormats,
        factorsMask,
        operations,
        options,
        payloadPolicy,
        maxPayloadSize,
        defaultVerifyTimeout,
        defaultIdentifyTimeout,
        defaultCaptureTimeout,
        defaultEnrollTimeout,
        defaultCalibrateTimeout,
        maxBSPDbSize,
        maxIdentify,
        hostingEndpointIRI,
        bspAccessUuid
      );
    };
  }
  return _cached_decoder_for_BioAPI_BSP_SCHEMA(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_BSP_SCHEMA */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_BSP_SCHEMA */
let _cached_encoder_for_BioAPI_BSP_SCHEMA: $.ASN1Encoder<BioAPI_BSP_SCHEMA> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_BSP_SCHEMA */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_BSP_SCHEMA */
/**
 * @summary Encodes a(n) BioAPI_BSP_SCHEMA into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_BSP_SCHEMA, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_BSP_SCHEMA(
  value: BioAPI_BSP_SCHEMA,
  elGetter: $.ASN1Encoder<BioAPI_BSP_SCHEMA>
) {
  if (!_cached_encoder_for_BioAPI_BSP_SCHEMA) {
    _cached_encoder_for_BioAPI_BSP_SCHEMA = function (
      value: BioAPI_BSP_SCHEMA,
      elGetter: $.ASN1Encoder<BioAPI_BSP_SCHEMA>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_UUID(value.bspProductUuid, $.BER),
            /* REQUIRED   */ _encode_BioAPI_STRING(value.description, $.BER),
            /* REQUIRED   */ $._encodeUTF8String(value.path, $.BER),
            /* REQUIRED   */ _encode_BioAPI_VERSION(value.specVersion, $.BER),
            /* REQUIRED   */ _encode_BioAPI_STRING(value.productVersion, $.BER),
            /* REQUIRED   */ _encode_BioAPI_STRING(value.vendor, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<BioAPI_BIR_BIOMETRIC_DATA_FORMAT>(
              () => _encode_BioAPI_BIR_BIOMETRIC_DATA_FORMAT,
              $.BER
            )(value.supportedFormats, $.BER),
            /* REQUIRED   */ _encode_BioAPI_BIR_BIOMETRIC_TYPE(
              value.factorsMask,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_OPERATIONS_MASK(
              value.operations,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_OPTIONS_MASK(value.options, $.BER),
            /* REQUIRED   */ _encode_BioAPI_FMR(value.payloadPolicy, $.BER),
            /* REQUIRED   */ _encode_UnsignedInt(value.maxPayloadSize, $.BER),
            /* REQUIRED   */ _encode_SignedInt(
              value.defaultVerifyTimeout,
              $.BER
            ),
            /* REQUIRED   */ _encode_SignedInt(
              value.defaultIdentifyTimeout,
              $.BER
            ),
            /* REQUIRED   */ _encode_SignedInt(
              value.defaultCaptureTimeout,
              $.BER
            ),
            /* REQUIRED   */ _encode_SignedInt(
              value.defaultEnrollTimeout,
              $.BER
            ),
            /* REQUIRED   */ _encode_SignedInt(
              value.defaultCalibrateTimeout,
              $.BER
            ),
            /* REQUIRED   */ _encode_UnsignedInt(value.maxBSPDbSize, $.BER),
            /* REQUIRED   */ _encode_UnsignedInt(value.maxIdentify, $.BER),
            /* REQUIRED   */ _encode_EndpointIRI(
              value.hostingEndpointIRI,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_UUID(value.bspAccessUuid, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BioAPI_BSP_SCHEMA(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_BSP_SCHEMA */

/* eslint-enable */
