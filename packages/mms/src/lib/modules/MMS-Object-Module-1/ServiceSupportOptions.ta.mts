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
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceSupportOptions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceSupportOptions  ::=  BIT STRING {
 *     status                               (0),
 *     getNameList                          (1),
 *     identify                             (2),
 *     rename                               (3),
 *     read                                 (4),
 *     write                                (5),
 *     getVariableAccessAttributes          (6),
 *     defineNamedVariable                  (7),
 *     -- bit 8 is reserved for use of a service defined in annex E
 *     defineScatteredAccess                (8),
 *     -- bit 9 is reserved for use of a service defined in annex E
 *     getScatteredAccessAttributes         (9),
 *     deleteVariableAccess                 (10),
 *     defineNamedVariableList              (11),
 *     getNamedVariableListAttributes       (12),
 *     deleteNamedVariableList              (13),
 *     defineNamedType                      (14),
 *     getNamedTypeAttributes               (15),
 *     deleteNamedType                      (16),
 *     input                                (17),
 *     output                               (18),
 *     takeControl                          (19),
 *     relinquishControl                    (20),
 *     defineSemaphore                      (21),
 *     deleteSemaphore                      (22),
 *     reportSemaphoreStatus                (23),
 *     reportPoolSemaphoreStatus            (24),
 *     reportSemaphoreEntryStatus           (25),
 *     initiateDownloadSequence             (26),
 *     downloadSegment                      (27),
 *     terminateDownloadSequence            (28),
 *     initiateUploadSequence               (29),
 *     uploadSegment                        (30),
 *     terminateUploadSequence              (31),
 *     requestDomainDownload                (32),
 *     requestDomainUpload                  (33),
 *     loadDomainContent                    (34),
 *     storeDomainContent                   (35),
 *     deleteDomain                         (36),
 *     getDomainAttributes                  (37),
 *     createProgramInvocation              (38),
 *     deleteProgramInvocation              (39),
 *     start                                (40),
 *     stop                                 (41),
 *     resume                               (42),
 *     reset                                (43),
 *     kill                                 (44),
 *     getProgramInvocationAttributes       (45),
 *     obtainFile                           (46),
 *     defineEventCondition                 (47),
 *     deleteEventCondition                 (48),
 *     getEventConditionAttributes          (49),
 *     reportEventConditionStatus           (50),
 *     alterEventConditionMonitoring        (51),
 *     triggerEvent                         (52),
 *     defineEventAction                    (53),
 *     deleteEventAction                    (54),
 *     getEventActionAttributes             (55),
 *     reportEventActionStatus              (56),
 *     defineEventEnrollment                (57),
 *     deleteEventEnrollment                (58),
 *     alterEventEnrollment                 (59),
 *     reportEventEnrollmentStatus          (60),
 *     getEventEnrollmentAttributes         (61),
 *     acknowledgeEventNotification         (62),
 *     getAlarmSummary                      (63),
 *     getAlarmEnrollmentSummary            (64),
 *     readJournal                          (65),
 *     writeJournal                         (66),
 *     initializeJournal                    (67),
 *     reportJournalStatus                  (68),
 *     createJournal                        (69),
 *     deleteJournal                        (70),
 *     getCapabilityList                    (71),
 *     -- bit 72 is reserved for use of a service defined in annex D
 *     fileOpen                             (72),
 *     -- bit 73 is reserved for use of a service defined in annex D
 *     fileRead                             (73),
 *     -- bit 74 is reserved for use of a service defined in annex D
 *     fileClose                            (74),
 *     -- bit 75 is reserved for use of a service defined in annex D
 *     fileRename                           (75),
 *     -- bit 76 is reserved for use of a service defined in annex D
 *     fileDelete                           (76),
 *     -- bit 77 is reserved for use of a service defined in annex D
 *     fileDirectory                        (77),
 *     unsolicitedStatus                    (78),
 *     informationReport                    (79),
 *     eventNotification                    (80),
 *     attachToEventCondition               (81),
 *     attachToSemaphore                    (82),
 *     conclude                             (83),
 *     cancel                               (84),
 *     getDataExchangeAttributes            (85),
 *         -- Shall not appear in minor version one
 *     exchangeData                         (86),
 *         -- Shall not appear in minor version one
 *     defineAccessControlList              (87),
 *         -- Shall not appear in minor version one or two
 *     getAccessControlListAttributes       (88),
 *         -- Shall not appear in minor version one or two
 *     reportAccessControlledObjects        (89),
 *         -- Shall not appear in minor version one or two
 *     deleteAccessControlList              (90),
 *         -- Shall not appear in minor version one or two
 *     alterAccessControl                   (91),
 *         -- Shall not appear in minor version one or two
 *     reconfigureProgramInvocation         (92)
 * } (SIZE(93))
 * ```
 */
export
type ServiceSupportOptions = BIT_STRING;

/**
 * @summary ServiceSupportOptions_status
 * @constant
 */
export
const ServiceSupportOptions_status: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary status
 * @constant
 */
export
const status: number = ServiceSupportOptions_status; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_getNameList
 * @constant
 */
export
const ServiceSupportOptions_getNameList: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary getNameList
 * @constant
 */
export
const getNameList: number = ServiceSupportOptions_getNameList; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_identify
 * @constant
 */
export
const ServiceSupportOptions_identify: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary identify
 * @constant
 */
export
const identify: number = ServiceSupportOptions_identify; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_rename
 * @constant
 */
export
const ServiceSupportOptions_rename: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary rename
 * @constant
 */
export
const rename: number = ServiceSupportOptions_rename; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_read
 * @constant
 */
export
const ServiceSupportOptions_read: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary read
 * @constant
 */
export
const read: number = ServiceSupportOptions_read; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_write
 * @constant
 */
export
const ServiceSupportOptions_write: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary write
 * @constant
 */
export
const write: number = ServiceSupportOptions_write; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_getVariableAccessAttributes
 * @constant
 */
export
const ServiceSupportOptions_getVariableAccessAttributes: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary getVariableAccessAttributes
 * @constant
 */
export
const getVariableAccessAttributes: number = ServiceSupportOptions_getVariableAccessAttributes; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_defineNamedVariable
 * @constant
 */
export
const ServiceSupportOptions_defineNamedVariable: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary defineNamedVariable
 * @constant
 */
export
const defineNamedVariable: number = ServiceSupportOptions_defineNamedVariable; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_defineScatteredAccess
 * @constant
 */
export
const ServiceSupportOptions_defineScatteredAccess: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary defineScatteredAccess
 * @constant
 */
export
const defineScatteredAccess: number = ServiceSupportOptions_defineScatteredAccess; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_getScatteredAccessAttributes
 * @constant
 */
export
const ServiceSupportOptions_getScatteredAccessAttributes: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary getScatteredAccessAttributes
 * @constant
 */
export
const getScatteredAccessAttributes: number = ServiceSupportOptions_getScatteredAccessAttributes; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_deleteVariableAccess
 * @constant
 */
export
const ServiceSupportOptions_deleteVariableAccess: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary deleteVariableAccess
 * @constant
 */
export
const deleteVariableAccess: number = ServiceSupportOptions_deleteVariableAccess; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_defineNamedVariableList
 * @constant
 */
export
const ServiceSupportOptions_defineNamedVariableList: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary defineNamedVariableList
 * @constant
 */
export
const defineNamedVariableList: number = ServiceSupportOptions_defineNamedVariableList; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_getNamedVariableListAttributes
 * @constant
 */
export
const ServiceSupportOptions_getNamedVariableListAttributes: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary getNamedVariableListAttributes
 * @constant
 */
export
const getNamedVariableListAttributes: number = ServiceSupportOptions_getNamedVariableListAttributes; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_deleteNamedVariableList
 * @constant
 */
export
const ServiceSupportOptions_deleteNamedVariableList: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary deleteNamedVariableList
 * @constant
 */
export
const deleteNamedVariableList: number = ServiceSupportOptions_deleteNamedVariableList; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_defineNamedType
 * @constant
 */
export
const ServiceSupportOptions_defineNamedType: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary defineNamedType
 * @constant
 */
export
const defineNamedType: number = ServiceSupportOptions_defineNamedType; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_getNamedTypeAttributes
 * @constant
 */
export
const ServiceSupportOptions_getNamedTypeAttributes: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary getNamedTypeAttributes
 * @constant
 */
export
const getNamedTypeAttributes: number = ServiceSupportOptions_getNamedTypeAttributes; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_deleteNamedType
 * @constant
 */
export
const ServiceSupportOptions_deleteNamedType: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary deleteNamedType
 * @constant
 */
export
const deleteNamedType: number = ServiceSupportOptions_deleteNamedType; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_input
 * @constant
 */
export
const ServiceSupportOptions_input: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary input
 * @constant
 */
export
const input: number = ServiceSupportOptions_input; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_output
 * @constant
 */
export
const ServiceSupportOptions_output: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary output
 * @constant
 */
export
const output: number = ServiceSupportOptions_output; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_takeControl
 * @constant
 */
export
const ServiceSupportOptions_takeControl: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary takeControl
 * @constant
 */
export
const takeControl: number = ServiceSupportOptions_takeControl; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_relinquishControl
 * @constant
 */
export
const ServiceSupportOptions_relinquishControl: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary relinquishControl
 * @constant
 */
export
const relinquishControl: number = ServiceSupportOptions_relinquishControl; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_defineSemaphore
 * @constant
 */
export
const ServiceSupportOptions_defineSemaphore: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary defineSemaphore
 * @constant
 */
export
const defineSemaphore: number = ServiceSupportOptions_defineSemaphore; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_deleteSemaphore
 * @constant
 */
export
const ServiceSupportOptions_deleteSemaphore: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary deleteSemaphore
 * @constant
 */
export
const deleteSemaphore: number = ServiceSupportOptions_deleteSemaphore; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_reportSemaphoreStatus
 * @constant
 */
export
const ServiceSupportOptions_reportSemaphoreStatus: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary reportSemaphoreStatus
 * @constant
 */
export
const reportSemaphoreStatus: number = ServiceSupportOptions_reportSemaphoreStatus; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_reportPoolSemaphoreStatus
 * @constant
 */
export
const ServiceSupportOptions_reportPoolSemaphoreStatus: number = 24; /* LONG_NAMED_BIT */

/**
 * @summary reportPoolSemaphoreStatus
 * @constant
 */
export
const reportPoolSemaphoreStatus: number = ServiceSupportOptions_reportPoolSemaphoreStatus; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_reportSemaphoreEntryStatus
 * @constant
 */
export
const ServiceSupportOptions_reportSemaphoreEntryStatus: number = 25; /* LONG_NAMED_BIT */

/**
 * @summary reportSemaphoreEntryStatus
 * @constant
 */
export
const reportSemaphoreEntryStatus: number = ServiceSupportOptions_reportSemaphoreEntryStatus; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_initiateDownloadSequence
 * @constant
 */
export
const ServiceSupportOptions_initiateDownloadSequence: number = 26; /* LONG_NAMED_BIT */

/**
 * @summary initiateDownloadSequence
 * @constant
 */
export
const initiateDownloadSequence: number = ServiceSupportOptions_initiateDownloadSequence; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_downloadSegment
 * @constant
 */
export
const ServiceSupportOptions_downloadSegment: number = 27; /* LONG_NAMED_BIT */

/**
 * @summary downloadSegment
 * @constant
 */
export
const downloadSegment: number = ServiceSupportOptions_downloadSegment; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_terminateDownloadSequence
 * @constant
 */
export
const ServiceSupportOptions_terminateDownloadSequence: number = 28; /* LONG_NAMED_BIT */

/**
 * @summary terminateDownloadSequence
 * @constant
 */
export
const terminateDownloadSequence: number = ServiceSupportOptions_terminateDownloadSequence; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_initiateUploadSequence
 * @constant
 */
export
const ServiceSupportOptions_initiateUploadSequence: number = 29; /* LONG_NAMED_BIT */

/**
 * @summary initiateUploadSequence
 * @constant
 */
export
const initiateUploadSequence: number = ServiceSupportOptions_initiateUploadSequence; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_uploadSegment
 * @constant
 */
export
const ServiceSupportOptions_uploadSegment: number = 30; /* LONG_NAMED_BIT */

/**
 * @summary uploadSegment
 * @constant
 */
export
const uploadSegment: number = ServiceSupportOptions_uploadSegment; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_terminateUploadSequence
 * @constant
 */
export
const ServiceSupportOptions_terminateUploadSequence: number = 31; /* LONG_NAMED_BIT */

/**
 * @summary terminateUploadSequence
 * @constant
 */
export
const terminateUploadSequence: number = ServiceSupportOptions_terminateUploadSequence; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_requestDomainDownload
 * @constant
 */
export
const ServiceSupportOptions_requestDomainDownload: number = 32; /* LONG_NAMED_BIT */

/**
 * @summary requestDomainDownload
 * @constant
 */
export
const requestDomainDownload: number = ServiceSupportOptions_requestDomainDownload; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_requestDomainUpload
 * @constant
 */
export
const ServiceSupportOptions_requestDomainUpload: number = 33; /* LONG_NAMED_BIT */

/**
 * @summary requestDomainUpload
 * @constant
 */
export
const requestDomainUpload: number = ServiceSupportOptions_requestDomainUpload; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_loadDomainContent
 * @constant
 */
export
const ServiceSupportOptions_loadDomainContent: number = 34; /* LONG_NAMED_BIT */

/**
 * @summary loadDomainContent
 * @constant
 */
export
const loadDomainContent: number = ServiceSupportOptions_loadDomainContent; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_storeDomainContent
 * @constant
 */
export
const ServiceSupportOptions_storeDomainContent: number = 35; /* LONG_NAMED_BIT */

/**
 * @summary storeDomainContent
 * @constant
 */
export
const storeDomainContent: number = ServiceSupportOptions_storeDomainContent; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_deleteDomain
 * @constant
 */
export
const ServiceSupportOptions_deleteDomain: number = 36; /* LONG_NAMED_BIT */

/**
 * @summary deleteDomain
 * @constant
 */
export
const deleteDomain: number = ServiceSupportOptions_deleteDomain; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_getDomainAttributes
 * @constant
 */
export
const ServiceSupportOptions_getDomainAttributes: number = 37; /* LONG_NAMED_BIT */

/**
 * @summary getDomainAttributes
 * @constant
 */
export
const getDomainAttributes: number = ServiceSupportOptions_getDomainAttributes; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_createProgramInvocation
 * @constant
 */
export
const ServiceSupportOptions_createProgramInvocation: number = 38; /* LONG_NAMED_BIT */

/**
 * @summary createProgramInvocation
 * @constant
 */
export
const createProgramInvocation: number = ServiceSupportOptions_createProgramInvocation; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_deleteProgramInvocation
 * @constant
 */
export
const ServiceSupportOptions_deleteProgramInvocation: number = 39; /* LONG_NAMED_BIT */

/**
 * @summary deleteProgramInvocation
 * @constant
 */
export
const deleteProgramInvocation: number = ServiceSupportOptions_deleteProgramInvocation; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_start
 * @constant
 */
export
const ServiceSupportOptions_start: number = 40; /* LONG_NAMED_BIT */

/**
 * @summary start
 * @constant
 */
export
const start: number = ServiceSupportOptions_start; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_stop
 * @constant
 */
export
const ServiceSupportOptions_stop: number = 41; /* LONG_NAMED_BIT */

/**
 * @summary stop
 * @constant
 */
export
const stop: number = ServiceSupportOptions_stop; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_resume
 * @constant
 */
export
const ServiceSupportOptions_resume: number = 42; /* LONG_NAMED_BIT */

/**
 * @summary resume
 * @constant
 */
export
const resume: number = ServiceSupportOptions_resume; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_reset
 * @constant
 */
export
const ServiceSupportOptions_reset: number = 43; /* LONG_NAMED_BIT */

/**
 * @summary reset
 * @constant
 */
export
const reset: number = ServiceSupportOptions_reset; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_kill
 * @constant
 */
export
const ServiceSupportOptions_kill: number = 44; /* LONG_NAMED_BIT */

/**
 * @summary kill
 * @constant
 */
export
const kill: number = ServiceSupportOptions_kill; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_getProgramInvocationAttributes
 * @constant
 */
export
const ServiceSupportOptions_getProgramInvocationAttributes: number = 45; /* LONG_NAMED_BIT */

/**
 * @summary getProgramInvocationAttributes
 * @constant
 */
export
const getProgramInvocationAttributes: number = ServiceSupportOptions_getProgramInvocationAttributes; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_obtainFile
 * @constant
 */
export
const ServiceSupportOptions_obtainFile: number = 46; /* LONG_NAMED_BIT */

/**
 * @summary obtainFile
 * @constant
 */
export
const obtainFile: number = ServiceSupportOptions_obtainFile; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_defineEventCondition
 * @constant
 */
export
const ServiceSupportOptions_defineEventCondition: number = 47; /* LONG_NAMED_BIT */

/**
 * @summary defineEventCondition
 * @constant
 */
export
const defineEventCondition: number = ServiceSupportOptions_defineEventCondition; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_deleteEventCondition
 * @constant
 */
export
const ServiceSupportOptions_deleteEventCondition: number = 48; /* LONG_NAMED_BIT */

/**
 * @summary deleteEventCondition
 * @constant
 */
export
const deleteEventCondition: number = ServiceSupportOptions_deleteEventCondition; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_getEventConditionAttributes
 * @constant
 */
export
const ServiceSupportOptions_getEventConditionAttributes: number = 49; /* LONG_NAMED_BIT */

/**
 * @summary getEventConditionAttributes
 * @constant
 */
export
const getEventConditionAttributes: number = ServiceSupportOptions_getEventConditionAttributes; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_reportEventConditionStatus
 * @constant
 */
export
const ServiceSupportOptions_reportEventConditionStatus: number = 50; /* LONG_NAMED_BIT */

/**
 * @summary reportEventConditionStatus
 * @constant
 */
export
const reportEventConditionStatus: number = ServiceSupportOptions_reportEventConditionStatus; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_alterEventConditionMonitoring
 * @constant
 */
export
const ServiceSupportOptions_alterEventConditionMonitoring: number = 51; /* LONG_NAMED_BIT */

/**
 * @summary alterEventConditionMonitoring
 * @constant
 */
export
const alterEventConditionMonitoring: number = ServiceSupportOptions_alterEventConditionMonitoring; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_triggerEvent
 * @constant
 */
export
const ServiceSupportOptions_triggerEvent: number = 52; /* LONG_NAMED_BIT */

/**
 * @summary triggerEvent
 * @constant
 */
export
const triggerEvent: number = ServiceSupportOptions_triggerEvent; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_defineEventAction
 * @constant
 */
export
const ServiceSupportOptions_defineEventAction: number = 53; /* LONG_NAMED_BIT */

/**
 * @summary defineEventAction
 * @constant
 */
export
const defineEventAction: number = ServiceSupportOptions_defineEventAction; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_deleteEventAction
 * @constant
 */
export
const ServiceSupportOptions_deleteEventAction: number = 54; /* LONG_NAMED_BIT */

/**
 * @summary deleteEventAction
 * @constant
 */
export
const deleteEventAction: number = ServiceSupportOptions_deleteEventAction; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_getEventActionAttributes
 * @constant
 */
export
const ServiceSupportOptions_getEventActionAttributes: number = 55; /* LONG_NAMED_BIT */

/**
 * @summary getEventActionAttributes
 * @constant
 */
export
const getEventActionAttributes: number = ServiceSupportOptions_getEventActionAttributes; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_reportEventActionStatus
 * @constant
 */
export
const ServiceSupportOptions_reportEventActionStatus: number = 56; /* LONG_NAMED_BIT */

/**
 * @summary reportEventActionStatus
 * @constant
 */
export
const reportEventActionStatus: number = ServiceSupportOptions_reportEventActionStatus; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_defineEventEnrollment
 * @constant
 */
export
const ServiceSupportOptions_defineEventEnrollment: number = 57; /* LONG_NAMED_BIT */

/**
 * @summary defineEventEnrollment
 * @constant
 */
export
const defineEventEnrollment: number = ServiceSupportOptions_defineEventEnrollment; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_deleteEventEnrollment
 * @constant
 */
export
const ServiceSupportOptions_deleteEventEnrollment: number = 58; /* LONG_NAMED_BIT */

/**
 * @summary deleteEventEnrollment
 * @constant
 */
export
const deleteEventEnrollment: number = ServiceSupportOptions_deleteEventEnrollment; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_alterEventEnrollment
 * @constant
 */
export
const ServiceSupportOptions_alterEventEnrollment: number = 59; /* LONG_NAMED_BIT */

/**
 * @summary alterEventEnrollment
 * @constant
 */
export
const alterEventEnrollment: number = ServiceSupportOptions_alterEventEnrollment; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_reportEventEnrollmentStatus
 * @constant
 */
export
const ServiceSupportOptions_reportEventEnrollmentStatus: number = 60; /* LONG_NAMED_BIT */

/**
 * @summary reportEventEnrollmentStatus
 * @constant
 */
export
const reportEventEnrollmentStatus: number = ServiceSupportOptions_reportEventEnrollmentStatus; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_getEventEnrollmentAttributes
 * @constant
 */
export
const ServiceSupportOptions_getEventEnrollmentAttributes: number = 61; /* LONG_NAMED_BIT */

/**
 * @summary getEventEnrollmentAttributes
 * @constant
 */
export
const getEventEnrollmentAttributes: number = ServiceSupportOptions_getEventEnrollmentAttributes; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_acknowledgeEventNotification
 * @constant
 */
export
const ServiceSupportOptions_acknowledgeEventNotification: number = 62; /* LONG_NAMED_BIT */

/**
 * @summary acknowledgeEventNotification
 * @constant
 */
export
const acknowledgeEventNotification: number = ServiceSupportOptions_acknowledgeEventNotification; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_getAlarmSummary
 * @constant
 */
export
const ServiceSupportOptions_getAlarmSummary: number = 63; /* LONG_NAMED_BIT */

/**
 * @summary getAlarmSummary
 * @constant
 */
export
const getAlarmSummary: number = ServiceSupportOptions_getAlarmSummary; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_getAlarmEnrollmentSummary
 * @constant
 */
export
const ServiceSupportOptions_getAlarmEnrollmentSummary: number = 64; /* LONG_NAMED_BIT */

/**
 * @summary getAlarmEnrollmentSummary
 * @constant
 */
export
const getAlarmEnrollmentSummary: number = ServiceSupportOptions_getAlarmEnrollmentSummary; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_readJournal
 * @constant
 */
export
const ServiceSupportOptions_readJournal: number = 65; /* LONG_NAMED_BIT */

/**
 * @summary readJournal
 * @constant
 */
export
const readJournal: number = ServiceSupportOptions_readJournal; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_writeJournal
 * @constant
 */
export
const ServiceSupportOptions_writeJournal: number = 66; /* LONG_NAMED_BIT */

/**
 * @summary writeJournal
 * @constant
 */
export
const writeJournal: number = ServiceSupportOptions_writeJournal; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_initializeJournal
 * @constant
 */
export
const ServiceSupportOptions_initializeJournal: number = 67; /* LONG_NAMED_BIT */

/**
 * @summary initializeJournal
 * @constant
 */
export
const initializeJournal: number = ServiceSupportOptions_initializeJournal; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_reportJournalStatus
 * @constant
 */
export
const ServiceSupportOptions_reportJournalStatus: number = 68; /* LONG_NAMED_BIT */

/**
 * @summary reportJournalStatus
 * @constant
 */
export
const reportJournalStatus: number = ServiceSupportOptions_reportJournalStatus; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_createJournal
 * @constant
 */
export
const ServiceSupportOptions_createJournal: number = 69; /* LONG_NAMED_BIT */

/**
 * @summary createJournal
 * @constant
 */
export
const createJournal: number = ServiceSupportOptions_createJournal; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_deleteJournal
 * @constant
 */
export
const ServiceSupportOptions_deleteJournal: number = 70; /* LONG_NAMED_BIT */

/**
 * @summary deleteJournal
 * @constant
 */
export
const deleteJournal: number = ServiceSupportOptions_deleteJournal; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_getCapabilityList
 * @constant
 */
export
const ServiceSupportOptions_getCapabilityList: number = 71; /* LONG_NAMED_BIT */

/**
 * @summary getCapabilityList
 * @constant
 */
export
const getCapabilityList: number = ServiceSupportOptions_getCapabilityList; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_fileOpen
 * @constant
 */
export
const ServiceSupportOptions_fileOpen: number = 72; /* LONG_NAMED_BIT */

/**
 * @summary fileOpen
 * @constant
 */
export
const fileOpen: number = ServiceSupportOptions_fileOpen; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_fileRead
 * @constant
 */
export
const ServiceSupportOptions_fileRead: number = 73; /* LONG_NAMED_BIT */

/**
 * @summary fileRead
 * @constant
 */
export
const fileRead: number = ServiceSupportOptions_fileRead; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_fileClose
 * @constant
 */
export
const ServiceSupportOptions_fileClose: number = 74; /* LONG_NAMED_BIT */

/**
 * @summary fileClose
 * @constant
 */
export
const fileClose: number = ServiceSupportOptions_fileClose; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_fileRename
 * @constant
 */
export
const ServiceSupportOptions_fileRename: number = 75; /* LONG_NAMED_BIT */

/**
 * @summary fileRename
 * @constant
 */
export
const fileRename: number = ServiceSupportOptions_fileRename; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_fileDelete
 * @constant
 */
export
const ServiceSupportOptions_fileDelete: number = 76; /* LONG_NAMED_BIT */

/**
 * @summary fileDelete
 * @constant
 */
export
const fileDelete: number = ServiceSupportOptions_fileDelete; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_fileDirectory
 * @constant
 */
export
const ServiceSupportOptions_fileDirectory: number = 77; /* LONG_NAMED_BIT */

/**
 * @summary fileDirectory
 * @constant
 */
export
const fileDirectory: number = ServiceSupportOptions_fileDirectory; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_unsolicitedStatus
 * @constant
 */
export
const ServiceSupportOptions_unsolicitedStatus: number = 78; /* LONG_NAMED_BIT */

/**
 * @summary unsolicitedStatus
 * @constant
 */
export
const unsolicitedStatus: number = ServiceSupportOptions_unsolicitedStatus; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_informationReport
 * @constant
 */
export
const ServiceSupportOptions_informationReport: number = 79; /* LONG_NAMED_BIT */

/**
 * @summary informationReport
 * @constant
 */
export
const informationReport: number = ServiceSupportOptions_informationReport; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_eventNotification
 * @constant
 */
export
const ServiceSupportOptions_eventNotification: number = 80; /* LONG_NAMED_BIT */

/**
 * @summary eventNotification
 * @constant
 */
export
const eventNotification: number = ServiceSupportOptions_eventNotification; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_attachToEventCondition
 * @constant
 */
export
const ServiceSupportOptions_attachToEventCondition: number = 81; /* LONG_NAMED_BIT */

/**
 * @summary attachToEventCondition
 * @constant
 */
export
const attachToEventCondition: number = ServiceSupportOptions_attachToEventCondition; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_attachToSemaphore
 * @constant
 */
export
const ServiceSupportOptions_attachToSemaphore: number = 82; /* LONG_NAMED_BIT */

/**
 * @summary attachToSemaphore
 * @constant
 */
export
const attachToSemaphore: number = ServiceSupportOptions_attachToSemaphore; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_conclude
 * @constant
 */
export
const ServiceSupportOptions_conclude: number = 83; /* LONG_NAMED_BIT */

/**
 * @summary conclude
 * @constant
 */
export
const conclude: number = ServiceSupportOptions_conclude; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_cancel
 * @constant
 */
export
const ServiceSupportOptions_cancel: number = 84; /* LONG_NAMED_BIT */

/**
 * @summary cancel
 * @constant
 */
export
const cancel: number = ServiceSupportOptions_cancel; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_getDataExchangeAttributes
 * @constant
 */
export
const ServiceSupportOptions_getDataExchangeAttributes: number = 85; /* LONG_NAMED_BIT */

/**
 * @summary getDataExchangeAttributes
 * @constant
 */
export
const getDataExchangeAttributes: number = ServiceSupportOptions_getDataExchangeAttributes; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_exchangeData
 * @constant
 */
export
const ServiceSupportOptions_exchangeData: number = 86; /* LONG_NAMED_BIT */

/**
 * @summary exchangeData
 * @constant
 */
export
const exchangeData: number = ServiceSupportOptions_exchangeData; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_defineAccessControlList
 * @constant
 */
export
const ServiceSupportOptions_defineAccessControlList: number = 87; /* LONG_NAMED_BIT */

/**
 * @summary defineAccessControlList
 * @constant
 */
export
const defineAccessControlList: number = ServiceSupportOptions_defineAccessControlList; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_getAccessControlListAttributes
 * @constant
 */
export
const ServiceSupportOptions_getAccessControlListAttributes: number = 88; /* LONG_NAMED_BIT */

/**
 * @summary getAccessControlListAttributes
 * @constant
 */
export
const getAccessControlListAttributes: number = ServiceSupportOptions_getAccessControlListAttributes; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_reportAccessControlledObjects
 * @constant
 */
export
const ServiceSupportOptions_reportAccessControlledObjects: number = 89; /* LONG_NAMED_BIT */

/**
 * @summary reportAccessControlledObjects
 * @constant
 */
export
const reportAccessControlledObjects: number = ServiceSupportOptions_reportAccessControlledObjects; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_deleteAccessControlList
 * @constant
 */
export
const ServiceSupportOptions_deleteAccessControlList: number = 90; /* LONG_NAMED_BIT */

/**
 * @summary deleteAccessControlList
 * @constant
 */
export
const deleteAccessControlList: number = ServiceSupportOptions_deleteAccessControlList; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_alterAccessControl
 * @constant
 */
export
const ServiceSupportOptions_alterAccessControl: number = 91; /* LONG_NAMED_BIT */

/**
 * @summary alterAccessControl
 * @constant
 */
export
const alterAccessControl: number = ServiceSupportOptions_alterAccessControl; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceSupportOptions_reconfigureProgramInvocation
 * @constant
 */
export
const ServiceSupportOptions_reconfigureProgramInvocation: number = 92; /* LONG_NAMED_BIT */

/**
 * @summary reconfigureProgramInvocation
 * @constant
 */
export
const reconfigureProgramInvocation: number = ServiceSupportOptions_reconfigureProgramInvocation; /* SHORT_NAMED_BIT */
export const _decode_ServiceSupportOptions = (el: _Element): ServiceSupportOptions => {
    const value = $._decodeBitString(el);
    if (value.length !== 93) {
        throw new ASN1SizeError("ServiceSupportOptions violates SIZE constraint");
    }
    return value;
};
export const _encode_ServiceSupportOptions = $._encodeBitString;


/* eslint-enable */
