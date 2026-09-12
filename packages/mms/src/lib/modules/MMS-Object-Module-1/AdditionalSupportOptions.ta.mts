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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AdditionalSupportOptions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalSupportOptions  ::=  BIT STRING {
 *     vMDStop                              (0),
 *     vMDReset                             (1),
 *     select                               (2),
 *     alterProgramInvocationAttributes     (3),
 *     initiateUnitControlLoad              (4),
 *     unitControlLoadSegment               (5),
 *     unitControlUpload                    (6),
 *     startUnitControl                     (7),
 *     stopUnitControl                      (8),
 *     createUnitControl                    (9),
 *     addToUnitControl                     (10),
 *     removeFromUnitControl                (11),
 *     getUnitControlAttributes             (12),
 *     loadUnitControlFromFile              (13),
 *     storeUnitControlToFile               (14),
 *     deleteUnitControl                    (15),
 *     defineEventConditionList             (16),
 *     deleteEventConditionList             (17),
 *     addEventConditionListReference       (18),
 *     removeEventConditionListReference    (19),
 *     getEventConditionListAttributes      (20),
 *     reportEventConditionListStatus       (21),
 *     alterEventConditionListMonitoring    (22)
 * } (SIZE(23))
 * ```
 */
export
type AdditionalSupportOptions = BIT_STRING;

/**
 * @summary AdditionalSupportOptions_vMDStop
 * @constant
 */
export
const AdditionalSupportOptions_vMDStop: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary vMDStop
 * @constant
 */
export
const vMDStop: number = AdditionalSupportOptions_vMDStop; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_vMDReset
 * @constant
 */
export
const AdditionalSupportOptions_vMDReset: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary vMDReset
 * @constant
 */
export
const vMDReset: number = AdditionalSupportOptions_vMDReset; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_select
 * @constant
 */
export
const AdditionalSupportOptions_select: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary select
 * @constant
 */
export
const select: number = AdditionalSupportOptions_select; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_alterProgramInvocationAttributes
 * @constant
 */
export
const AdditionalSupportOptions_alterProgramInvocationAttributes: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary alterProgramInvocationAttributes
 * @constant
 */
export
const alterProgramInvocationAttributes: number = AdditionalSupportOptions_alterProgramInvocationAttributes; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_initiateUnitControlLoad
 * @constant
 */
export
const AdditionalSupportOptions_initiateUnitControlLoad: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary initiateUnitControlLoad
 * @constant
 */
export
const initiateUnitControlLoad: number = AdditionalSupportOptions_initiateUnitControlLoad; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_unitControlLoadSegment
 * @constant
 */
export
const AdditionalSupportOptions_unitControlLoadSegment: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary unitControlLoadSegment
 * @constant
 */
export
const unitControlLoadSegment: number = AdditionalSupportOptions_unitControlLoadSegment; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_unitControlUpload
 * @constant
 */
export
const AdditionalSupportOptions_unitControlUpload: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary unitControlUpload
 * @constant
 */
export
const unitControlUpload: number = AdditionalSupportOptions_unitControlUpload; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_startUnitControl
 * @constant
 */
export
const AdditionalSupportOptions_startUnitControl: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary startUnitControl
 * @constant
 */
export
const startUnitControl: number = AdditionalSupportOptions_startUnitControl; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_stopUnitControl
 * @constant
 */
export
const AdditionalSupportOptions_stopUnitControl: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary stopUnitControl
 * @constant
 */
export
const stopUnitControl: number = AdditionalSupportOptions_stopUnitControl; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_createUnitControl
 * @constant
 */
export
const AdditionalSupportOptions_createUnitControl: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary createUnitControl
 * @constant
 */
export
const createUnitControl: number = AdditionalSupportOptions_createUnitControl; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_addToUnitControl
 * @constant
 */
export
const AdditionalSupportOptions_addToUnitControl: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary addToUnitControl
 * @constant
 */
export
const addToUnitControl: number = AdditionalSupportOptions_addToUnitControl; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_removeFromUnitControl
 * @constant
 */
export
const AdditionalSupportOptions_removeFromUnitControl: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary removeFromUnitControl
 * @constant
 */
export
const removeFromUnitControl: number = AdditionalSupportOptions_removeFromUnitControl; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_getUnitControlAttributes
 * @constant
 */
export
const AdditionalSupportOptions_getUnitControlAttributes: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary getUnitControlAttributes
 * @constant
 */
export
const getUnitControlAttributes: number = AdditionalSupportOptions_getUnitControlAttributes; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_loadUnitControlFromFile
 * @constant
 */
export
const AdditionalSupportOptions_loadUnitControlFromFile: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary loadUnitControlFromFile
 * @constant
 */
export
const loadUnitControlFromFile: number = AdditionalSupportOptions_loadUnitControlFromFile; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_storeUnitControlToFile
 * @constant
 */
export
const AdditionalSupportOptions_storeUnitControlToFile: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary storeUnitControlToFile
 * @constant
 */
export
const storeUnitControlToFile: number = AdditionalSupportOptions_storeUnitControlToFile; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_deleteUnitControl
 * @constant
 */
export
const AdditionalSupportOptions_deleteUnitControl: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary deleteUnitControl
 * @constant
 */
export
const deleteUnitControl: number = AdditionalSupportOptions_deleteUnitControl; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_defineEventConditionList
 * @constant
 */
export
const AdditionalSupportOptions_defineEventConditionList: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary defineEventConditionList
 * @constant
 */
export
const defineEventConditionList: number = AdditionalSupportOptions_defineEventConditionList; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_deleteEventConditionList
 * @constant
 */
export
const AdditionalSupportOptions_deleteEventConditionList: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary deleteEventConditionList
 * @constant
 */
export
const deleteEventConditionList: number = AdditionalSupportOptions_deleteEventConditionList; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_addEventConditionListReference
 * @constant
 */
export
const AdditionalSupportOptions_addEventConditionListReference: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary addEventConditionListReference
 * @constant
 */
export
const addEventConditionListReference: number = AdditionalSupportOptions_addEventConditionListReference; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_removeEventConditionListReference
 * @constant
 */
export
const AdditionalSupportOptions_removeEventConditionListReference: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary removeEventConditionListReference
 * @constant
 */
export
const removeEventConditionListReference: number = AdditionalSupportOptions_removeEventConditionListReference; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_getEventConditionListAttributes
 * @constant
 */
export
const AdditionalSupportOptions_getEventConditionListAttributes: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary getEventConditionListAttributes
 * @constant
 */
export
const getEventConditionListAttributes: number = AdditionalSupportOptions_getEventConditionListAttributes; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_reportEventConditionListStatus
 * @constant
 */
export
const AdditionalSupportOptions_reportEventConditionListStatus: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary reportEventConditionListStatus
 * @constant
 */
export
const reportEventConditionListStatus: number = AdditionalSupportOptions_reportEventConditionListStatus; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_alterEventConditionListMonitoring
 * @constant
 */
export
const AdditionalSupportOptions_alterEventConditionListMonitoring: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary alterEventConditionListMonitoring
 * @constant
 */
export
const alterEventConditionListMonitoring: number = AdditionalSupportOptions_alterEventConditionListMonitoring; /* SHORT_NAMED_BIT */

let _cached_decoder_for_AdditionalSupportOptions: $.ASN1Decoder<AdditionalSupportOptions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalSupportOptions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AdditionalSupportOptions (el: _Element): AdditionalSupportOptions {
    if (!_cached_decoder_for_AdditionalSupportOptions) { _cached_decoder_for_AdditionalSupportOptions = $._decodeBitString; }
    return _cached_decoder_for_AdditionalSupportOptions(el);
}

let _cached_encoder_for_AdditionalSupportOptions: $.ASN1Encoder<AdditionalSupportOptions> | null = null;

/**
 * @summary Encodes a(n) AdditionalSupportOptions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalSupportOptions, encoded as an ASN.1 Element.
 */
export
function _encode_AdditionalSupportOptions (value: AdditionalSupportOptions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AdditionalSupportOptions) { _cached_encoder_for_AdditionalSupportOptions = $._encodeBitString; }
    return _cached_encoder_for_AdditionalSupportOptions(value, elGetter);
}


/* eslint-enable */
