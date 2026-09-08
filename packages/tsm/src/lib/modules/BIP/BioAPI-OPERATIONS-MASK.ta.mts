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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



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
export
type BioAPI_OPERATIONS_MASK = BIT_STRING;

/**
 * @summary BioAPI_OPERATIONS_MASK_enableEvents
 * @constant
 */
export
const BioAPI_OPERATIONS_MASK_enableEvents: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary enableEvents
 * @constant
 */
export
const enableEvents: number = BioAPI_OPERATIONS_MASK_enableEvents; /* SHORT_NAMED_BIT */

/**
 * @summary BioAPI_OPERATIONS_MASK_subscribeToGUIEvents
 * @constant
 */
export
const BioAPI_OPERATIONS_MASK_subscribeToGUIEvents: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary subscribeToGUIEvents
 * @constant
 */
export
const subscribeToGUIEvents: number = BioAPI_OPERATIONS_MASK_subscribeToGUIEvents; /* SHORT_NAMED_BIT */

/**
 * @summary BioAPI_OPERATIONS_MASK_capture
 * @constant
 */
export
const BioAPI_OPERATIONS_MASK_capture: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary capture
 * @constant
 */
export
const capture: number = BioAPI_OPERATIONS_MASK_capture; /* SHORT_NAMED_BIT */

/**
 * @summary BioAPI_OPERATIONS_MASK_createTemplate
 * @constant
 */
export
const BioAPI_OPERATIONS_MASK_createTemplate: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary createTemplate
 * @constant
 */
export
const createTemplate: number = BioAPI_OPERATIONS_MASK_createTemplate; /* SHORT_NAMED_BIT */

/**
 * @summary BioAPI_OPERATIONS_MASK_process
 * @constant
 */
export
const BioAPI_OPERATIONS_MASK_process: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary process
 * @constant
 */
export
const process: number = BioAPI_OPERATIONS_MASK_process; /* SHORT_NAMED_BIT */

/**
 * @summary BioAPI_OPERATIONS_MASK_processWithAuxBir
 * @constant
 */
export
const BioAPI_OPERATIONS_MASK_processWithAuxBir: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary processWithAuxBir
 * @constant
 */
export
const processWithAuxBir: number = BioAPI_OPERATIONS_MASK_processWithAuxBir; /* SHORT_NAMED_BIT */

/**
 * @summary BioAPI_OPERATIONS_MASK_verifyMatch
 * @constant
 */
export
const BioAPI_OPERATIONS_MASK_verifyMatch: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary verifyMatch
 * @constant
 */
export
const verifyMatch: number = BioAPI_OPERATIONS_MASK_verifyMatch; /* SHORT_NAMED_BIT */

/**
 * @summary BioAPI_OPERATIONS_MASK_identifyMatch
 * @constant
 */
export
const BioAPI_OPERATIONS_MASK_identifyMatch: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary identifyMatch
 * @constant
 */
export
const identifyMatch: number = BioAPI_OPERATIONS_MASK_identifyMatch; /* SHORT_NAMED_BIT */

/**
 * @summary BioAPI_OPERATIONS_MASK_enroll
 * @constant
 */
export
const BioAPI_OPERATIONS_MASK_enroll: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary enroll
 * @constant
 */
export
const enroll: number = BioAPI_OPERATIONS_MASK_enroll; /* SHORT_NAMED_BIT */

/**
 * @summary BioAPI_OPERATIONS_MASK_verify
 * @constant
 */
export
const BioAPI_OPERATIONS_MASK_verify: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary verify
 * @constant
 */
export
const verify: number = BioAPI_OPERATIONS_MASK_verify; /* SHORT_NAMED_BIT */

/**
 * @summary BioAPI_OPERATIONS_MASK_identify
 * @constant
 */
export
const BioAPI_OPERATIONS_MASK_identify: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary identify
 * @constant
 */
export
const identify: number = BioAPI_OPERATIONS_MASK_identify; /* SHORT_NAMED_BIT */

/**
 * @summary BioAPI_OPERATIONS_MASK_import_
 * @constant
 */
export
const BioAPI_OPERATIONS_MASK_import_: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary import_
 * @constant
 */
export
const import_: number = BioAPI_OPERATIONS_MASK_import_; /* SHORT_NAMED_BIT */

/**
 * @summary BioAPI_OPERATIONS_MASK_presetIdentifyPopulation
 * @constant
 */
export
const BioAPI_OPERATIONS_MASK_presetIdentifyPopulation: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary presetIdentifyPopulation
 * @constant
 */
export
const presetIdentifyPopulation: number = BioAPI_OPERATIONS_MASK_presetIdentifyPopulation; /* SHORT_NAMED_BIT */

/**
 * @summary BioAPI_OPERATIONS_MASK_databaseOperations
 * @constant
 */
export
const BioAPI_OPERATIONS_MASK_databaseOperations: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary databaseOperations
 * @constant
 */
export
const databaseOperations: number = BioAPI_OPERATIONS_MASK_databaseOperations; /* SHORT_NAMED_BIT */

/**
 * @summary BioAPI_OPERATIONS_MASK_setPowerMode
 * @constant
 */
export
const BioAPI_OPERATIONS_MASK_setPowerMode: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary setPowerMode
 * @constant
 */
export
const setPowerMode: number = BioAPI_OPERATIONS_MASK_setPowerMode; /* SHORT_NAMED_BIT */

/**
 * @summary BioAPI_OPERATIONS_MASK_setIndicatorStatus
 * @constant
 */
export
const BioAPI_OPERATIONS_MASK_setIndicatorStatus: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary setIndicatorStatus
 * @constant
 */
export
const setIndicatorStatus: number = BioAPI_OPERATIONS_MASK_setIndicatorStatus; /* SHORT_NAMED_BIT */

/**
 * @summary BioAPI_OPERATIONS_MASK_getIndicatorStatus
 * @constant
 */
export
const BioAPI_OPERATIONS_MASK_getIndicatorStatus: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary getIndicatorStatus
 * @constant
 */
export
const getIndicatorStatus: number = BioAPI_OPERATIONS_MASK_getIndicatorStatus; /* SHORT_NAMED_BIT */

/**
 * @summary BioAPI_OPERATIONS_MASK_calibrateSensor
 * @constant
 */
export
const BioAPI_OPERATIONS_MASK_calibrateSensor: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary calibrateSensor
 * @constant
 */
export
const calibrateSensor: number = BioAPI_OPERATIONS_MASK_calibrateSensor; /* SHORT_NAMED_BIT */

/**
 * @summary BioAPI_OPERATIONS_MASK_utilities
 * @constant
 */
export
const BioAPI_OPERATIONS_MASK_utilities: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary utilities
 * @constant
 */
export
const utilities: number = BioAPI_OPERATIONS_MASK_utilities; /* SHORT_NAMED_BIT */

/**
 * @summary BioAPI_OPERATIONS_MASK_queryUnits
 * @constant
 */
export
const BioAPI_OPERATIONS_MASK_queryUnits: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary queryUnits
 * @constant
 */
export
const queryUnits: number = BioAPI_OPERATIONS_MASK_queryUnits; /* SHORT_NAMED_BIT */

/**
 * @summary BioAPI_OPERATIONS_MASK_queryBFPs
 * @constant
 */
export
const BioAPI_OPERATIONS_MASK_queryBFPs: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary queryBFPs
 * @constant
 */
export
const queryBFPs: number = BioAPI_OPERATIONS_MASK_queryBFPs; /* SHORT_NAMED_BIT */

/**
 * @summary BioAPI_OPERATIONS_MASK_controlUnit
 * @constant
 */
export
const BioAPI_OPERATIONS_MASK_controlUnit: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary controlUnit
 * @constant
 */
export
const controlUnit: number = BioAPI_OPERATIONS_MASK_controlUnit; /* SHORT_NAMED_BIT */

let _cached_decoder_for_BioAPI_OPERATIONS_MASK: $.ASN1Decoder<BioAPI_OPERATIONS_MASK> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_OPERATIONS_MASK
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BioAPI_OPERATIONS_MASK (el: _Element): BioAPI_OPERATIONS_MASK {
    if (!_cached_decoder_for_BioAPI_OPERATIONS_MASK) { _cached_decoder_for_BioAPI_OPERATIONS_MASK = $._decodeBitString; }
    return _cached_decoder_for_BioAPI_OPERATIONS_MASK(el);
}

let _cached_encoder_for_BioAPI_OPERATIONS_MASK: $.ASN1Encoder<BioAPI_OPERATIONS_MASK> | null = null;

/**
 * @summary Encodes a(n) BioAPI_OPERATIONS_MASK into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_OPERATIONS_MASK, encoded as an ASN.1 Element.
 */
export
function _encode_BioAPI_OPERATIONS_MASK (value: BioAPI_OPERATIONS_MASK, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BioAPI_OPERATIONS_MASK) { _cached_encoder_for_BioAPI_OPERATIONS_MASK = $._encodeBitString; }
    return _cached_encoder_for_BioAPI_OPERATIONS_MASK(value, elGetter);
}


/* eslint-enable */
