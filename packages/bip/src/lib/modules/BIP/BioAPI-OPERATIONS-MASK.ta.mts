/* eslint-disable */
import {
  BIT_STRING,
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

/* START_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK */
/**
 * @summary BioAPI_OPERATIONS_MASK
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-OPERATIONS-MASK  ::=  BIT STRING {
 *   enableEvents(0), subscribeToGUIEvents(1), capture(2), createTemplate(3),
 *   process(4), processWithAuxBir(5), verifyMatch(6), identifyMatch(7),
 *   enroll(8), verify(9), identify(10), import(11), presetIdentifyPopulation(12),
 *   databaseOperations(13), setPowerMode(14), setIndicatorStatus(15),
 *   getIndicatorStatus(16), calibrateSensor(17), utilities(18), queryUnits(20),
 *   queryBFPs(21), controlUnit(22)}(SIZE (32))
 * ```
 */
export type BioAPI_OPERATIONS_MASK = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_enableEvents */
/**
 * @summary BioAPI_OPERATIONS_MASK_enableEvents
 * @constant
 */
export const BioAPI_OPERATIONS_MASK_enableEvents: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_enableEvents */

/* START_OF_SYMBOL_DEFINITION enableEvents */
/**
 * @summary enableEvents
 * @constant
 */
export const enableEvents: number = BioAPI_OPERATIONS_MASK_enableEvents; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION enableEvents */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_subscribeToGUIEvents */
/**
 * @summary BioAPI_OPERATIONS_MASK_subscribeToGUIEvents
 * @constant
 */
export const BioAPI_OPERATIONS_MASK_subscribeToGUIEvents: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_subscribeToGUIEvents */

/* START_OF_SYMBOL_DEFINITION subscribeToGUIEvents */
/**
 * @summary subscribeToGUIEvents
 * @constant
 */
export const subscribeToGUIEvents: number = BioAPI_OPERATIONS_MASK_subscribeToGUIEvents; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION subscribeToGUIEvents */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_capture */
/**
 * @summary BioAPI_OPERATIONS_MASK_capture
 * @constant
 */
export const BioAPI_OPERATIONS_MASK_capture: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_capture */

/* START_OF_SYMBOL_DEFINITION capture */
/**
 * @summary capture
 * @constant
 */
export const capture: number = BioAPI_OPERATIONS_MASK_capture; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION capture */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_createTemplate */
/**
 * @summary BioAPI_OPERATIONS_MASK_createTemplate
 * @constant
 */
export const BioAPI_OPERATIONS_MASK_createTemplate: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_createTemplate */

/* START_OF_SYMBOL_DEFINITION createTemplate */
/**
 * @summary createTemplate
 * @constant
 */
export const createTemplate: number = BioAPI_OPERATIONS_MASK_createTemplate; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION createTemplate */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_process */
/**
 * @summary BioAPI_OPERATIONS_MASK_process
 * @constant
 */
export const BioAPI_OPERATIONS_MASK_process: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_process */

/* START_OF_SYMBOL_DEFINITION process */
/**
 * @summary process
 * @constant
 */
export const process: number = BioAPI_OPERATIONS_MASK_process; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION process */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_processWithAuxBir */
/**
 * @summary BioAPI_OPERATIONS_MASK_processWithAuxBir
 * @constant
 */
export const BioAPI_OPERATIONS_MASK_processWithAuxBir: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_processWithAuxBir */

/* START_OF_SYMBOL_DEFINITION processWithAuxBir */
/**
 * @summary processWithAuxBir
 * @constant
 */
export const processWithAuxBir: number = BioAPI_OPERATIONS_MASK_processWithAuxBir; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION processWithAuxBir */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_verifyMatch */
/**
 * @summary BioAPI_OPERATIONS_MASK_verifyMatch
 * @constant
 */
export const BioAPI_OPERATIONS_MASK_verifyMatch: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_verifyMatch */

/* START_OF_SYMBOL_DEFINITION verifyMatch */
/**
 * @summary verifyMatch
 * @constant
 */
export const verifyMatch: number = BioAPI_OPERATIONS_MASK_verifyMatch; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION verifyMatch */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_identifyMatch */
/**
 * @summary BioAPI_OPERATIONS_MASK_identifyMatch
 * @constant
 */
export const BioAPI_OPERATIONS_MASK_identifyMatch: number = 7; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_identifyMatch */

/* START_OF_SYMBOL_DEFINITION identifyMatch */
/**
 * @summary identifyMatch
 * @constant
 */
export const identifyMatch: number = BioAPI_OPERATIONS_MASK_identifyMatch; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION identifyMatch */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_enroll */
/**
 * @summary BioAPI_OPERATIONS_MASK_enroll
 * @constant
 */
export const BioAPI_OPERATIONS_MASK_enroll: number = 8; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_enroll */

/* START_OF_SYMBOL_DEFINITION enroll */
/**
 * @summary enroll
 * @constant
 */
export const enroll: number = BioAPI_OPERATIONS_MASK_enroll; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION enroll */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_verify */
/**
 * @summary BioAPI_OPERATIONS_MASK_verify
 * @constant
 */
export const BioAPI_OPERATIONS_MASK_verify: number = 9; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_verify */

/* START_OF_SYMBOL_DEFINITION verify */
/**
 * @summary verify
 * @constant
 */
export const verify: number = BioAPI_OPERATIONS_MASK_verify; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION verify */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_identify */
/**
 * @summary BioAPI_OPERATIONS_MASK_identify
 * @constant
 */
export const BioAPI_OPERATIONS_MASK_identify: number = 10; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_identify */

/* START_OF_SYMBOL_DEFINITION identify */
/**
 * @summary identify
 * @constant
 */
export const identify: number = BioAPI_OPERATIONS_MASK_identify; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION identify */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_import_ */
/**
 * @summary BioAPI_OPERATIONS_MASK_import_
 * @constant
 */
export const BioAPI_OPERATIONS_MASK_import_: number = 11; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_import_ */

/* START_OF_SYMBOL_DEFINITION import_ */
/**
 * @summary import_
 * @constant
 */
export const import_: number = BioAPI_OPERATIONS_MASK_import_; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION import_ */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_presetIdentifyPopulation */
/**
 * @summary BioAPI_OPERATIONS_MASK_presetIdentifyPopulation
 * @constant
 */
export const BioAPI_OPERATIONS_MASK_presetIdentifyPopulation: number = 12; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_presetIdentifyPopulation */

/* START_OF_SYMBOL_DEFINITION presetIdentifyPopulation */
/**
 * @summary presetIdentifyPopulation
 * @constant
 */
export const presetIdentifyPopulation: number = BioAPI_OPERATIONS_MASK_presetIdentifyPopulation; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION presetIdentifyPopulation */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_databaseOperations */
/**
 * @summary BioAPI_OPERATIONS_MASK_databaseOperations
 * @constant
 */
export const BioAPI_OPERATIONS_MASK_databaseOperations: number = 13; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_databaseOperations */

/* START_OF_SYMBOL_DEFINITION databaseOperations */
/**
 * @summary databaseOperations
 * @constant
 */
export const databaseOperations: number = BioAPI_OPERATIONS_MASK_databaseOperations; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION databaseOperations */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_setPowerMode */
/**
 * @summary BioAPI_OPERATIONS_MASK_setPowerMode
 * @constant
 */
export const BioAPI_OPERATIONS_MASK_setPowerMode: number = 14; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_setPowerMode */

/* START_OF_SYMBOL_DEFINITION setPowerMode */
/**
 * @summary setPowerMode
 * @constant
 */
export const setPowerMode: number = BioAPI_OPERATIONS_MASK_setPowerMode; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION setPowerMode */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_setIndicatorStatus */
/**
 * @summary BioAPI_OPERATIONS_MASK_setIndicatorStatus
 * @constant
 */
export const BioAPI_OPERATIONS_MASK_setIndicatorStatus: number = 15; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_setIndicatorStatus */

/* START_OF_SYMBOL_DEFINITION setIndicatorStatus */
/**
 * @summary setIndicatorStatus
 * @constant
 */
export const setIndicatorStatus: number = BioAPI_OPERATIONS_MASK_setIndicatorStatus; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION setIndicatorStatus */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_getIndicatorStatus */
/**
 * @summary BioAPI_OPERATIONS_MASK_getIndicatorStatus
 * @constant
 */
export const BioAPI_OPERATIONS_MASK_getIndicatorStatus: number = 16; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_getIndicatorStatus */

/* START_OF_SYMBOL_DEFINITION getIndicatorStatus */
/**
 * @summary getIndicatorStatus
 * @constant
 */
export const getIndicatorStatus: number = BioAPI_OPERATIONS_MASK_getIndicatorStatus; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION getIndicatorStatus */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_calibrateSensor */
/**
 * @summary BioAPI_OPERATIONS_MASK_calibrateSensor
 * @constant
 */
export const BioAPI_OPERATIONS_MASK_calibrateSensor: number = 17; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_calibrateSensor */

/* START_OF_SYMBOL_DEFINITION calibrateSensor */
/**
 * @summary calibrateSensor
 * @constant
 */
export const calibrateSensor: number = BioAPI_OPERATIONS_MASK_calibrateSensor; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION calibrateSensor */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_utilities */
/**
 * @summary BioAPI_OPERATIONS_MASK_utilities
 * @constant
 */
export const BioAPI_OPERATIONS_MASK_utilities: number = 18; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_utilities */

/* START_OF_SYMBOL_DEFINITION utilities */
/**
 * @summary utilities
 * @constant
 */
export const utilities: number = BioAPI_OPERATIONS_MASK_utilities; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION utilities */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_queryUnits */
/**
 * @summary BioAPI_OPERATIONS_MASK_queryUnits
 * @constant
 */
export const BioAPI_OPERATIONS_MASK_queryUnits: number = 20; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_queryUnits */

/* START_OF_SYMBOL_DEFINITION queryUnits */
/**
 * @summary queryUnits
 * @constant
 */
export const queryUnits: number = BioAPI_OPERATIONS_MASK_queryUnits; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION queryUnits */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_queryBFPs */
/**
 * @summary BioAPI_OPERATIONS_MASK_queryBFPs
 * @constant
 */
export const BioAPI_OPERATIONS_MASK_queryBFPs: number = 21; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_queryBFPs */

/* START_OF_SYMBOL_DEFINITION queryBFPs */
/**
 * @summary queryBFPs
 * @constant
 */
export const queryBFPs: number = BioAPI_OPERATIONS_MASK_queryBFPs; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION queryBFPs */

/* START_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_controlUnit */
/**
 * @summary BioAPI_OPERATIONS_MASK_controlUnit
 * @constant
 */
export const BioAPI_OPERATIONS_MASK_controlUnit: number = 22; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION BioAPI_OPERATIONS_MASK_controlUnit */

/* START_OF_SYMBOL_DEFINITION controlUnit */
/**
 * @summary controlUnit
 * @constant
 */
export const controlUnit: number = BioAPI_OPERATIONS_MASK_controlUnit; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION controlUnit */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_OPERATIONS_MASK */
let _cached_decoder_for_BioAPI_OPERATIONS_MASK: $.ASN1Decoder<BioAPI_OPERATIONS_MASK> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_OPERATIONS_MASK */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_OPERATIONS_MASK */
/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_OPERATIONS_MASK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_OPERATIONS_MASK} The decoded data structure.
 */
export function _decode_BioAPI_OPERATIONS_MASK(el: _Element) {
  if (!_cached_decoder_for_BioAPI_OPERATIONS_MASK) {
    _cached_decoder_for_BioAPI_OPERATIONS_MASK = $._decodeBitString;
  }
  return _cached_decoder_for_BioAPI_OPERATIONS_MASK(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_OPERATIONS_MASK */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_OPERATIONS_MASK */
let _cached_encoder_for_BioAPI_OPERATIONS_MASK: $.ASN1Encoder<BioAPI_OPERATIONS_MASK> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_OPERATIONS_MASK */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_OPERATIONS_MASK */
/**
 * @summary Encodes a(n) BioAPI_OPERATIONS_MASK into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_OPERATIONS_MASK, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_OPERATIONS_MASK(
  value: BioAPI_OPERATIONS_MASK,
  elGetter: $.ASN1Encoder<BioAPI_OPERATIONS_MASK>
) {
  if (!_cached_encoder_for_BioAPI_OPERATIONS_MASK) {
    _cached_encoder_for_BioAPI_OPERATIONS_MASK = $._encodeBitString;
  }
  return _cached_encoder_for_BioAPI_OPERATIONS_MASK(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_OPERATIONS_MASK */

/* eslint-enable */
