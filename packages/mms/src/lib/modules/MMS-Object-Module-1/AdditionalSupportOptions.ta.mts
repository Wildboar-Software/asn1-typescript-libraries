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
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AdditionalSupportOptions
 * @description
 * 
 * Extended services (csr/cspi)
 * negotiated at Initiate: VMDStop/Reset/Select/AlterPIAttributes and
 * Unit Control / Event Condition List services. SIZE(23).
 * ISO 9506-1:2003 §8.1.3.18, §8.2; ISO 9506-2:2003 Initiate PDUs.
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
 * @description
 *
 * csr: VMDStop service. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const AdditionalSupportOptions_vMDStop: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary vMDStop
 * @description
 *
 * csr: VMDStop service. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const vMDStop: number = AdditionalSupportOptions_vMDStop; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_vMDReset
 * @description
 *
 * csr: VMDReset service. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const AdditionalSupportOptions_vMDReset: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary vMDReset
 * @description
 *
 * csr: VMDReset service. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const vMDReset: number = AdditionalSupportOptions_vMDReset; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_select
 * @description
 *
 * csr: Select service. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const AdditionalSupportOptions_select: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary select
 * @description
 *
 * csr: Select service. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const select: number = AdditionalSupportOptions_select; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_alterProgramInvocationAttributes
 * @description
 *
 * csr: AlterProgramInvocationAttributes. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const AdditionalSupportOptions_alterProgramInvocationAttributes: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary alterProgramInvocationAttributes
 * @description
 *
 * csr: AlterProgramInvocationAttributes. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const alterProgramInvocationAttributes: number = AdditionalSupportOptions_alterProgramInvocationAttributes; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_initiateUnitControlLoad
 * @description
 *
 * cspi: InitiateUnitControlLoad. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const AdditionalSupportOptions_initiateUnitControlLoad: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary initiateUnitControlLoad
 * @description
 *
 * cspi: InitiateUnitControlLoad. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const initiateUnitControlLoad: number = AdditionalSupportOptions_initiateUnitControlLoad; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_unitControlLoadSegment
 * @description
 *
 * cspi: UnitControlLoadSegment. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const AdditionalSupportOptions_unitControlLoadSegment: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary unitControlLoadSegment
 * @description
 *
 * cspi: UnitControlLoadSegment. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const unitControlLoadSegment: number = AdditionalSupportOptions_unitControlLoadSegment; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_unitControlUpload
 * @description
 *
 * cspi: UnitControlUpload. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const AdditionalSupportOptions_unitControlUpload: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary unitControlUpload
 * @description
 *
 * cspi: UnitControlUpload. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const unitControlUpload: number = AdditionalSupportOptions_unitControlUpload; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_startUnitControl
 * @description
 *
 * cspi: StartUnitControl. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const AdditionalSupportOptions_startUnitControl: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary startUnitControl
 * @description
 *
 * cspi: StartUnitControl. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const startUnitControl: number = AdditionalSupportOptions_startUnitControl; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_stopUnitControl
 * @description
 *
 * cspi: StopUnitControl. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const AdditionalSupportOptions_stopUnitControl: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary stopUnitControl
 * @description
 *
 * cspi: StopUnitControl. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const stopUnitControl: number = AdditionalSupportOptions_stopUnitControl; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_createUnitControl
 * @description
 *
 * cspi: CreateUnitControl. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const AdditionalSupportOptions_createUnitControl: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary createUnitControl
 * @description
 *
 * cspi: CreateUnitControl. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const createUnitControl: number = AdditionalSupportOptions_createUnitControl; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_addToUnitControl
 * @description
 *
 * cspi: AddToUnitControl. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const AdditionalSupportOptions_addToUnitControl: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary addToUnitControl
 * @description
 *
 * cspi: AddToUnitControl. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const addToUnitControl: number = AdditionalSupportOptions_addToUnitControl; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_removeFromUnitControl
 * @description
 *
 * cspi: RemoveFromUnitControl. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const AdditionalSupportOptions_removeFromUnitControl: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary removeFromUnitControl
 * @description
 *
 * cspi: RemoveFromUnitControl. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const removeFromUnitControl: number = AdditionalSupportOptions_removeFromUnitControl; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_getUnitControlAttributes
 * @description
 *
 * cspi: GetUnitControlAttributes. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const AdditionalSupportOptions_getUnitControlAttributes: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary getUnitControlAttributes
 * @description
 *
 * cspi: GetUnitControlAttributes. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const getUnitControlAttributes: number = AdditionalSupportOptions_getUnitControlAttributes; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_loadUnitControlFromFile
 * @description
 *
 * cspi: LoadUnitControlFromFile. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const AdditionalSupportOptions_loadUnitControlFromFile: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary loadUnitControlFromFile
 * @description
 *
 * cspi: LoadUnitControlFromFile. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const loadUnitControlFromFile: number = AdditionalSupportOptions_loadUnitControlFromFile; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_storeUnitControlToFile
 * @description
 *
 * cspi: StoreUnitControlToFile. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const AdditionalSupportOptions_storeUnitControlToFile: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary storeUnitControlToFile
 * @description
 *
 * cspi: StoreUnitControlToFile. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const storeUnitControlToFile: number = AdditionalSupportOptions_storeUnitControlToFile; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_deleteUnitControl
 * @description
 *
 * cspi: DeleteUnitControl. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const AdditionalSupportOptions_deleteUnitControl: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary deleteUnitControl
 * @description
 *
 * cspi: DeleteUnitControl. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const deleteUnitControl: number = AdditionalSupportOptions_deleteUnitControl; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_defineEventConditionList
 * @description
 *
 * cspi: DefineEventConditionList. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const AdditionalSupportOptions_defineEventConditionList: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary defineEventConditionList
 * @description
 *
 * cspi: DefineEventConditionList. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const defineEventConditionList: number = AdditionalSupportOptions_defineEventConditionList; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_deleteEventConditionList
 * @description
 *
 * cspi: DeleteEventConditionList. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const AdditionalSupportOptions_deleteEventConditionList: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary deleteEventConditionList
 * @description
 *
 * cspi: DeleteEventConditionList. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const deleteEventConditionList: number = AdditionalSupportOptions_deleteEventConditionList; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_addEventConditionListReference
 * @description
 *
 * cspi: AddEventConditionListReference. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const AdditionalSupportOptions_addEventConditionListReference: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary addEventConditionListReference
 * @description
 *
 * cspi: AddEventConditionListReference. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const addEventConditionListReference: number = AdditionalSupportOptions_addEventConditionListReference; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_removeEventConditionListReference
 * @description
 *
 * cspi: RemoveEventConditionListReference. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const AdditionalSupportOptions_removeEventConditionListReference: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary removeEventConditionListReference
 * @description
 *
 * cspi: RemoveEventConditionListReference. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const removeEventConditionListReference: number = AdditionalSupportOptions_removeEventConditionListReference; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_getEventConditionListAttributes
 * @description
 *
 * cspi: GetEventConditionListAttributes. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const AdditionalSupportOptions_getEventConditionListAttributes: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary getEventConditionListAttributes
 * @description
 *
 * cspi: GetEventConditionListAttributes. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const getEventConditionListAttributes: number = AdditionalSupportOptions_getEventConditionListAttributes; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_reportEventConditionListStatus
 * @description
 *
 * cspi: ReportEventConditionListStatus. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const AdditionalSupportOptions_reportEventConditionListStatus: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary reportEventConditionListStatus
 * @description
 *
 * cspi: ReportEventConditionListStatus. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const reportEventConditionListStatus: number = AdditionalSupportOptions_reportEventConditionListStatus; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalSupportOptions_alterEventConditionListMonitoring
 * @description
 *
 * cspi: AlterEventConditionListMonitoring. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const AdditionalSupportOptions_alterEventConditionListMonitoring: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary alterEventConditionListMonitoring
 * @description
 *
 * cspi: AlterEventConditionListMonitoring. ISO 9506-1:2003 §8.1.3.18.
 *
 * @constant
 */
export
const alterEventConditionListMonitoring: number = AdditionalSupportOptions_alterEventConditionListMonitoring; /* SHORT_NAMED_BIT */
export const _decode_AdditionalSupportOptions = $._decodeBitString;
export const _encode_AdditionalSupportOptions = $._encodeBitString;


/* eslint-enable */
