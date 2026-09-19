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
 * @summary CauseRadioNetwork
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseRadioNetwork  ::=  ENUMERATED
 * {
 *     unspecified(1),
 *     txnrelocoverallExpiry(2),
 *     successfulHandover(3),
 *     releaseDueToNGRANGeneratedReason(4),
 *     releaseDueTo5gcGeneratedReason(5),
 *     handoverCancelled(6),
 *     partialHandover(7),
 *     hoFailureInTarget5GCNGRANNodeOrTargetSystem(8),
 *     hoTargetNotAllowed(9),
 *     tNGRelocOverallExpiry(10),
 *     tNGRelocPrepExpiry(11),
 *     cellNotAvailable(12),
 *     unknownTargetID(13),
 *     noRadioResourcesAvailableInTargetCell(14),
 *     unknownLocalUENGAPID(15),
 *     inconsistentRemoteUENGAPID(16),
 *     handoverDesirableForRadioReason(17),
 *     timeCriticalHandover(18),
 *     resourceOptimisationHandover(19),
 *     reduceLoadInServingCell(20),
 *     userInactivity(21),
 *     radioConnectionWithUELost(22),
 *     radioResourcesNotAvailable(23),
 *     invalidQoSCombination(24),
 *     failureInRadioInterfaceProcedure(25),
 *     interactionWithOtherProcedure(26),
 *     unknownPDUSessionID(27),
 *     multiplePDUSessionIDInstances(29),
 *     multipleQoSFlowIDInstances(30),
 *     encryptionAndOrIntegrityProtectionAlgorithmsNotSupported(31),
 *     nGIntraSystemHandoverTriggered(32),
 *     nGInterSystemHandoverTriggered(33),
 *     xNHandoverTriggered(34),
 *     notSupported5QIValue(35),
 *     uEContextTransfer(36),
 *     iMSVoiceeEPSFallbackOrRATFallbackTriggered(37),
 *     uPIntegrityProtectioNotPossible(38),
 *     uPConfidentialityProtectionNotPossible(39),
 *     sliceNotSupported(40),
 *     uEInRRCInactiveStateNotReachable(41),
 *     redirection(42),
 *     resourcesNotAvailableForTheSlice(43),
 *     uEMaxIntegrityProtectedDataRateReason(44),
 *     releaseDueToCNDetectedMobility(45),
 *     n26InterfaceNotAvailable(46),
 *     releaseDueToPreemption(47),
 *     multipleLocationReportingReferenceIDInstances(48),
 *     rSNNotAvailableForTheUP(49),
 *     nPMAccessDenied(50),
 *     cAGOnlyAccessDenied(51),
 *     insufficientUECapabilities(52)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CauseRadioNetwork {
    unspecified = 1,
    txnrelocoverallExpiry = 2,
    successfulHandover = 3,
    releaseDueToNGRANGeneratedReason = 4,
    releaseDueTo5gcGeneratedReason = 5,
    handoverCancelled = 6,
    partialHandover = 7,
    hoFailureInTarget5GCNGRANNodeOrTargetSystem = 8,
    hoTargetNotAllowed = 9,
    tNGRelocOverallExpiry = 10,
    tNGRelocPrepExpiry = 11,
    cellNotAvailable = 12,
    unknownTargetID = 13,
    noRadioResourcesAvailableInTargetCell = 14,
    unknownLocalUENGAPID = 15,
    inconsistentRemoteUENGAPID = 16,
    handoverDesirableForRadioReason = 17,
    timeCriticalHandover = 18,
    resourceOptimisationHandover = 19,
    reduceLoadInServingCell = 20,
    userInactivity = 21,
    radioConnectionWithUELost = 22,
    radioResourcesNotAvailable = 23,
    invalidQoSCombination = 24,
    failureInRadioInterfaceProcedure = 25,
    interactionWithOtherProcedure = 26,
    unknownPDUSessionID = 27,
    multiplePDUSessionIDInstances = 29,
    multipleQoSFlowIDInstances = 30,
    encryptionAndOrIntegrityProtectionAlgorithmsNotSupported = 31,
    nGIntraSystemHandoverTriggered = 32,
    nGInterSystemHandoverTriggered = 33,
    xNHandoverTriggered = 34,
    notSupported5QIValue = 35,
    uEContextTransfer = 36,
    iMSVoiceeEPSFallbackOrRATFallbackTriggered = 37,
    uPIntegrityProtectioNotPossible = 38,
    uPConfidentialityProtectionNotPossible = 39,
    sliceNotSupported = 40,
    uEInRRCInactiveStateNotReachable = 41,
    redirection = 42,
    resourcesNotAvailableForTheSlice = 43,
    uEMaxIntegrityProtectedDataRateReason = 44,
    releaseDueToCNDetectedMobility = 45,
    n26InterfaceNotAvailable = 46,
    releaseDueToPreemption = 47,
    multipleLocationReportingReferenceIDInstances = 48,
    rSNNotAvailableForTheUP = 49,
    nPMAccessDenied = 50,
    cAGOnlyAccessDenied = 51,
    insufficientUECapabilities = 52,
}

/**
 * @summary CauseRadioNetwork
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseRadioNetwork  ::=  ENUMERATED
 * {
 *     unspecified(1),
 *     txnrelocoverallExpiry(2),
 *     successfulHandover(3),
 *     releaseDueToNGRANGeneratedReason(4),
 *     releaseDueTo5gcGeneratedReason(5),
 *     handoverCancelled(6),
 *     partialHandover(7),
 *     hoFailureInTarget5GCNGRANNodeOrTargetSystem(8),
 *     hoTargetNotAllowed(9),
 *     tNGRelocOverallExpiry(10),
 *     tNGRelocPrepExpiry(11),
 *     cellNotAvailable(12),
 *     unknownTargetID(13),
 *     noRadioResourcesAvailableInTargetCell(14),
 *     unknownLocalUENGAPID(15),
 *     inconsistentRemoteUENGAPID(16),
 *     handoverDesirableForRadioReason(17),
 *     timeCriticalHandover(18),
 *     resourceOptimisationHandover(19),
 *     reduceLoadInServingCell(20),
 *     userInactivity(21),
 *     radioConnectionWithUELost(22),
 *     radioResourcesNotAvailable(23),
 *     invalidQoSCombination(24),
 *     failureInRadioInterfaceProcedure(25),
 *     interactionWithOtherProcedure(26),
 *     unknownPDUSessionID(27),
 *     multiplePDUSessionIDInstances(29),
 *     multipleQoSFlowIDInstances(30),
 *     encryptionAndOrIntegrityProtectionAlgorithmsNotSupported(31),
 *     nGIntraSystemHandoverTriggered(32),
 *     nGInterSystemHandoverTriggered(33),
 *     xNHandoverTriggered(34),
 *     notSupported5QIValue(35),
 *     uEContextTransfer(36),
 *     iMSVoiceeEPSFallbackOrRATFallbackTriggered(37),
 *     uPIntegrityProtectioNotPossible(38),
 *     uPConfidentialityProtectionNotPossible(39),
 *     sliceNotSupported(40),
 *     uEInRRCInactiveStateNotReachable(41),
 *     redirection(42),
 *     resourcesNotAvailableForTheSlice(43),
 *     uEMaxIntegrityProtectedDataRateReason(44),
 *     releaseDueToCNDetectedMobility(45),
 *     n26InterfaceNotAvailable(46),
 *     releaseDueToPreemption(47),
 *     multipleLocationReportingReferenceIDInstances(48),
 *     rSNNotAvailableForTheUP(49),
 *     nPMAccessDenied(50),
 *     cAGOnlyAccessDenied(51),
 *     insufficientUECapabilities(52)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CauseRadioNetwork = _enum_for_CauseRadioNetwork;

/**
 * @summary CauseRadioNetwork
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseRadioNetwork  ::=  ENUMERATED
 * {
 *     unspecified(1),
 *     txnrelocoverallExpiry(2),
 *     successfulHandover(3),
 *     releaseDueToNGRANGeneratedReason(4),
 *     releaseDueTo5gcGeneratedReason(5),
 *     handoverCancelled(6),
 *     partialHandover(7),
 *     hoFailureInTarget5GCNGRANNodeOrTargetSystem(8),
 *     hoTargetNotAllowed(9),
 *     tNGRelocOverallExpiry(10),
 *     tNGRelocPrepExpiry(11),
 *     cellNotAvailable(12),
 *     unknownTargetID(13),
 *     noRadioResourcesAvailableInTargetCell(14),
 *     unknownLocalUENGAPID(15),
 *     inconsistentRemoteUENGAPID(16),
 *     handoverDesirableForRadioReason(17),
 *     timeCriticalHandover(18),
 *     resourceOptimisationHandover(19),
 *     reduceLoadInServingCell(20),
 *     userInactivity(21),
 *     radioConnectionWithUELost(22),
 *     radioResourcesNotAvailable(23),
 *     invalidQoSCombination(24),
 *     failureInRadioInterfaceProcedure(25),
 *     interactionWithOtherProcedure(26),
 *     unknownPDUSessionID(27),
 *     multiplePDUSessionIDInstances(29),
 *     multipleQoSFlowIDInstances(30),
 *     encryptionAndOrIntegrityProtectionAlgorithmsNotSupported(31),
 *     nGIntraSystemHandoverTriggered(32),
 *     nGInterSystemHandoverTriggered(33),
 *     xNHandoverTriggered(34),
 *     notSupported5QIValue(35),
 *     uEContextTransfer(36),
 *     iMSVoiceeEPSFallbackOrRATFallbackTriggered(37),
 *     uPIntegrityProtectioNotPossible(38),
 *     uPConfidentialityProtectionNotPossible(39),
 *     sliceNotSupported(40),
 *     uEInRRCInactiveStateNotReachable(41),
 *     redirection(42),
 *     resourcesNotAvailableForTheSlice(43),
 *     uEMaxIntegrityProtectedDataRateReason(44),
 *     releaseDueToCNDetectedMobility(45),
 *     n26InterfaceNotAvailable(46),
 *     releaseDueToPreemption(47),
 *     multipleLocationReportingReferenceIDInstances(48),
 *     rSNNotAvailableForTheUP(49),
 *     nPMAccessDenied(50),
 *     cAGOnlyAccessDenied(51),
 *     insufficientUECapabilities(52)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const CauseRadioNetwork = _enum_for_CauseRadioNetwork;

/**
 * @summary CauseRadioNetwork_unspecified
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_unspecified: CauseRadioNetwork = CauseRadioNetwork.unspecified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unspecified
 * @constant
 * @type {number}
 */
export
const unspecified: CauseRadioNetwork = CauseRadioNetwork.unspecified; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_txnrelocoverallExpiry
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_txnrelocoverallExpiry: CauseRadioNetwork = CauseRadioNetwork.txnrelocoverallExpiry; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary txnrelocoverallExpiry
 * @constant
 * @type {number}
 */
export
const txnrelocoverallExpiry: CauseRadioNetwork = CauseRadioNetwork.txnrelocoverallExpiry; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_successfulHandover
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_successfulHandover: CauseRadioNetwork = CauseRadioNetwork.successfulHandover; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary successfulHandover
 * @constant
 * @type {number}
 */
export
const successfulHandover: CauseRadioNetwork = CauseRadioNetwork.successfulHandover; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_releaseDueToNGRANGeneratedReason
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_releaseDueToNGRANGeneratedReason: CauseRadioNetwork = CauseRadioNetwork.releaseDueToNGRANGeneratedReason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary releaseDueToNGRANGeneratedReason
 * @constant
 * @type {number}
 */
export
const releaseDueToNGRANGeneratedReason: CauseRadioNetwork = CauseRadioNetwork.releaseDueToNGRANGeneratedReason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_releaseDueTo5gcGeneratedReason
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_releaseDueTo5gcGeneratedReason: CauseRadioNetwork = CauseRadioNetwork.releaseDueTo5gcGeneratedReason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary releaseDueTo5gcGeneratedReason
 * @constant
 * @type {number}
 */
export
const releaseDueTo5gcGeneratedReason: CauseRadioNetwork = CauseRadioNetwork.releaseDueTo5gcGeneratedReason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_handoverCancelled
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_handoverCancelled: CauseRadioNetwork = CauseRadioNetwork.handoverCancelled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary handoverCancelled
 * @constant
 * @type {number}
 */
export
const handoverCancelled: CauseRadioNetwork = CauseRadioNetwork.handoverCancelled; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_partialHandover
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_partialHandover: CauseRadioNetwork = CauseRadioNetwork.partialHandover; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary partialHandover
 * @constant
 * @type {number}
 */
export
const partialHandover: CauseRadioNetwork = CauseRadioNetwork.partialHandover; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_hoFailureInTarget5GCNGRANNodeOrTargetSystem
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_hoFailureInTarget5GCNGRANNodeOrTargetSystem: CauseRadioNetwork = CauseRadioNetwork.hoFailureInTarget5GCNGRANNodeOrTargetSystem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hoFailureInTarget5GCNGRANNodeOrTargetSystem
 * @constant
 * @type {number}
 */
export
const hoFailureInTarget5GCNGRANNodeOrTargetSystem: CauseRadioNetwork = CauseRadioNetwork.hoFailureInTarget5GCNGRANNodeOrTargetSystem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_hoTargetNotAllowed
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_hoTargetNotAllowed: CauseRadioNetwork = CauseRadioNetwork.hoTargetNotAllowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hoTargetNotAllowed
 * @constant
 * @type {number}
 */
export
const hoTargetNotAllowed: CauseRadioNetwork = CauseRadioNetwork.hoTargetNotAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_tNGRelocOverallExpiry
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_tNGRelocOverallExpiry: CauseRadioNetwork = CauseRadioNetwork.tNGRelocOverallExpiry; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tNGRelocOverallExpiry
 * @constant
 * @type {number}
 */
export
const tNGRelocOverallExpiry: CauseRadioNetwork = CauseRadioNetwork.tNGRelocOverallExpiry; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_tNGRelocPrepExpiry
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_tNGRelocPrepExpiry: CauseRadioNetwork = CauseRadioNetwork.tNGRelocPrepExpiry; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tNGRelocPrepExpiry
 * @constant
 * @type {number}
 */
export
const tNGRelocPrepExpiry: CauseRadioNetwork = CauseRadioNetwork.tNGRelocPrepExpiry; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_cellNotAvailable
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_cellNotAvailable: CauseRadioNetwork = CauseRadioNetwork.cellNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cellNotAvailable
 * @constant
 * @type {number}
 */
export
const cellNotAvailable: CauseRadioNetwork = CauseRadioNetwork.cellNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_unknownTargetID
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_unknownTargetID: CauseRadioNetwork = CauseRadioNetwork.unknownTargetID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownTargetID
 * @constant
 * @type {number}
 */
export
const unknownTargetID: CauseRadioNetwork = CauseRadioNetwork.unknownTargetID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_noRadioResourcesAvailableInTargetCell
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_noRadioResourcesAvailableInTargetCell: CauseRadioNetwork = CauseRadioNetwork.noRadioResourcesAvailableInTargetCell; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noRadioResourcesAvailableInTargetCell
 * @constant
 * @type {number}
 */
export
const noRadioResourcesAvailableInTargetCell: CauseRadioNetwork = CauseRadioNetwork.noRadioResourcesAvailableInTargetCell; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_unknownLocalUENGAPID
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_unknownLocalUENGAPID: CauseRadioNetwork = CauseRadioNetwork.unknownLocalUENGAPID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownLocalUENGAPID
 * @constant
 * @type {number}
 */
export
const unknownLocalUENGAPID: CauseRadioNetwork = CauseRadioNetwork.unknownLocalUENGAPID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_inconsistentRemoteUENGAPID
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_inconsistentRemoteUENGAPID: CauseRadioNetwork = CauseRadioNetwork.inconsistentRemoteUENGAPID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inconsistentRemoteUENGAPID
 * @constant
 * @type {number}
 */
export
const inconsistentRemoteUENGAPID: CauseRadioNetwork = CauseRadioNetwork.inconsistentRemoteUENGAPID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_handoverDesirableForRadioReason
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_handoverDesirableForRadioReason: CauseRadioNetwork = CauseRadioNetwork.handoverDesirableForRadioReason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary handoverDesirableForRadioReason
 * @constant
 * @type {number}
 */
export
const handoverDesirableForRadioReason: CauseRadioNetwork = CauseRadioNetwork.handoverDesirableForRadioReason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_timeCriticalHandover
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_timeCriticalHandover: CauseRadioNetwork = CauseRadioNetwork.timeCriticalHandover; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeCriticalHandover
 * @constant
 * @type {number}
 */
export
const timeCriticalHandover: CauseRadioNetwork = CauseRadioNetwork.timeCriticalHandover; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_resourceOptimisationHandover
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_resourceOptimisationHandover: CauseRadioNetwork = CauseRadioNetwork.resourceOptimisationHandover; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resourceOptimisationHandover
 * @constant
 * @type {number}
 */
export
const resourceOptimisationHandover: CauseRadioNetwork = CauseRadioNetwork.resourceOptimisationHandover; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_reduceLoadInServingCell
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_reduceLoadInServingCell: CauseRadioNetwork = CauseRadioNetwork.reduceLoadInServingCell; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reduceLoadInServingCell
 * @constant
 * @type {number}
 */
export
const reduceLoadInServingCell: CauseRadioNetwork = CauseRadioNetwork.reduceLoadInServingCell; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_userInactivity
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_userInactivity: CauseRadioNetwork = CauseRadioNetwork.userInactivity; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userInactivity
 * @constant
 * @type {number}
 */
export
const userInactivity: CauseRadioNetwork = CauseRadioNetwork.userInactivity; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_radioConnectionWithUELost
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_radioConnectionWithUELost: CauseRadioNetwork = CauseRadioNetwork.radioConnectionWithUELost; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary radioConnectionWithUELost
 * @constant
 * @type {number}
 */
export
const radioConnectionWithUELost: CauseRadioNetwork = CauseRadioNetwork.radioConnectionWithUELost; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_radioResourcesNotAvailable
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_radioResourcesNotAvailable: CauseRadioNetwork = CauseRadioNetwork.radioResourcesNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary radioResourcesNotAvailable
 * @constant
 * @type {number}
 */
export
const radioResourcesNotAvailable: CauseRadioNetwork = CauseRadioNetwork.radioResourcesNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_invalidQoSCombination
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_invalidQoSCombination: CauseRadioNetwork = CauseRadioNetwork.invalidQoSCombination; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidQoSCombination
 * @constant
 * @type {number}
 */
export
const invalidQoSCombination: CauseRadioNetwork = CauseRadioNetwork.invalidQoSCombination; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_failureInRadioInterfaceProcedure
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_failureInRadioInterfaceProcedure: CauseRadioNetwork = CauseRadioNetwork.failureInRadioInterfaceProcedure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary failureInRadioInterfaceProcedure
 * @constant
 * @type {number}
 */
export
const failureInRadioInterfaceProcedure: CauseRadioNetwork = CauseRadioNetwork.failureInRadioInterfaceProcedure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_interactionWithOtherProcedure
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_interactionWithOtherProcedure: CauseRadioNetwork = CauseRadioNetwork.interactionWithOtherProcedure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interactionWithOtherProcedure
 * @constant
 * @type {number}
 */
export
const interactionWithOtherProcedure: CauseRadioNetwork = CauseRadioNetwork.interactionWithOtherProcedure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_unknownPDUSessionID
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_unknownPDUSessionID: CauseRadioNetwork = CauseRadioNetwork.unknownPDUSessionID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownPDUSessionID
 * @constant
 * @type {number}
 */
export
const unknownPDUSessionID: CauseRadioNetwork = CauseRadioNetwork.unknownPDUSessionID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_multiplePDUSessionIDInstances
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_multiplePDUSessionIDInstances: CauseRadioNetwork = CauseRadioNetwork.multiplePDUSessionIDInstances; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multiplePDUSessionIDInstances
 * @constant
 * @type {number}
 */
export
const multiplePDUSessionIDInstances: CauseRadioNetwork = CauseRadioNetwork.multiplePDUSessionIDInstances; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_multipleQoSFlowIDInstances
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_multipleQoSFlowIDInstances: CauseRadioNetwork = CauseRadioNetwork.multipleQoSFlowIDInstances; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multipleQoSFlowIDInstances
 * @constant
 * @type {number}
 */
export
const multipleQoSFlowIDInstances: CauseRadioNetwork = CauseRadioNetwork.multipleQoSFlowIDInstances; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_encryptionAndOrIntegrityProtectionAlgorithmsNotSupported
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_encryptionAndOrIntegrityProtectionAlgorithmsNotSupported: CauseRadioNetwork = CauseRadioNetwork.encryptionAndOrIntegrityProtectionAlgorithmsNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary encryptionAndOrIntegrityProtectionAlgorithmsNotSupported
 * @constant
 * @type {number}
 */
export
const encryptionAndOrIntegrityProtectionAlgorithmsNotSupported: CauseRadioNetwork = CauseRadioNetwork.encryptionAndOrIntegrityProtectionAlgorithmsNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_nGIntraSystemHandoverTriggered
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_nGIntraSystemHandoverTriggered: CauseRadioNetwork = CauseRadioNetwork.nGIntraSystemHandoverTriggered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nGIntraSystemHandoverTriggered
 * @constant
 * @type {number}
 */
export
const nGIntraSystemHandoverTriggered: CauseRadioNetwork = CauseRadioNetwork.nGIntraSystemHandoverTriggered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_nGInterSystemHandoverTriggered
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_nGInterSystemHandoverTriggered: CauseRadioNetwork = CauseRadioNetwork.nGInterSystemHandoverTriggered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nGInterSystemHandoverTriggered
 * @constant
 * @type {number}
 */
export
const nGInterSystemHandoverTriggered: CauseRadioNetwork = CauseRadioNetwork.nGInterSystemHandoverTriggered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_xNHandoverTriggered
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_xNHandoverTriggered: CauseRadioNetwork = CauseRadioNetwork.xNHandoverTriggered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary xNHandoverTriggered
 * @constant
 * @type {number}
 */
export
const xNHandoverTriggered: CauseRadioNetwork = CauseRadioNetwork.xNHandoverTriggered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_notSupported5QIValue
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_notSupported5QIValue: CauseRadioNetwork = CauseRadioNetwork.notSupported5QIValue; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notSupported5QIValue
 * @constant
 * @type {number}
 */
export
const notSupported5QIValue: CauseRadioNetwork = CauseRadioNetwork.notSupported5QIValue; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_uEContextTransfer
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_uEContextTransfer: CauseRadioNetwork = CauseRadioNetwork.uEContextTransfer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEContextTransfer
 * @constant
 * @type {number}
 */
export
const uEContextTransfer: CauseRadioNetwork = CauseRadioNetwork.uEContextTransfer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_iMSVoiceeEPSFallbackOrRATFallbackTriggered
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_iMSVoiceeEPSFallbackOrRATFallbackTriggered: CauseRadioNetwork = CauseRadioNetwork.iMSVoiceeEPSFallbackOrRATFallbackTriggered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iMSVoiceeEPSFallbackOrRATFallbackTriggered
 * @constant
 * @type {number}
 */
export
const iMSVoiceeEPSFallbackOrRATFallbackTriggered: CauseRadioNetwork = CauseRadioNetwork.iMSVoiceeEPSFallbackOrRATFallbackTriggered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_uPIntegrityProtectioNotPossible
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_uPIntegrityProtectioNotPossible: CauseRadioNetwork = CauseRadioNetwork.uPIntegrityProtectioNotPossible; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uPIntegrityProtectioNotPossible
 * @constant
 * @type {number}
 */
export
const uPIntegrityProtectioNotPossible: CauseRadioNetwork = CauseRadioNetwork.uPIntegrityProtectioNotPossible; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_uPConfidentialityProtectionNotPossible
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_uPConfidentialityProtectionNotPossible: CauseRadioNetwork = CauseRadioNetwork.uPConfidentialityProtectionNotPossible; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uPConfidentialityProtectionNotPossible
 * @constant
 * @type {number}
 */
export
const uPConfidentialityProtectionNotPossible: CauseRadioNetwork = CauseRadioNetwork.uPConfidentialityProtectionNotPossible; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_sliceNotSupported
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_sliceNotSupported: CauseRadioNetwork = CauseRadioNetwork.sliceNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sliceNotSupported
 * @constant
 * @type {number}
 */
export
const sliceNotSupported: CauseRadioNetwork = CauseRadioNetwork.sliceNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_uEInRRCInactiveStateNotReachable
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_uEInRRCInactiveStateNotReachable: CauseRadioNetwork = CauseRadioNetwork.uEInRRCInactiveStateNotReachable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEInRRCInactiveStateNotReachable
 * @constant
 * @type {number}
 */
export
const uEInRRCInactiveStateNotReachable: CauseRadioNetwork = CauseRadioNetwork.uEInRRCInactiveStateNotReachable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_redirection
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_redirection: CauseRadioNetwork = CauseRadioNetwork.redirection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary redirection
 * @constant
 * @type {number}
 */
export
const redirection: CauseRadioNetwork = CauseRadioNetwork.redirection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_resourcesNotAvailableForTheSlice
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_resourcesNotAvailableForTheSlice: CauseRadioNetwork = CauseRadioNetwork.resourcesNotAvailableForTheSlice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resourcesNotAvailableForTheSlice
 * @constant
 * @type {number}
 */
export
const resourcesNotAvailableForTheSlice: CauseRadioNetwork = CauseRadioNetwork.resourcesNotAvailableForTheSlice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_uEMaxIntegrityProtectedDataRateReason
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_uEMaxIntegrityProtectedDataRateReason: CauseRadioNetwork = CauseRadioNetwork.uEMaxIntegrityProtectedDataRateReason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEMaxIntegrityProtectedDataRateReason
 * @constant
 * @type {number}
 */
export
const uEMaxIntegrityProtectedDataRateReason: CauseRadioNetwork = CauseRadioNetwork.uEMaxIntegrityProtectedDataRateReason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_releaseDueToCNDetectedMobility
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_releaseDueToCNDetectedMobility: CauseRadioNetwork = CauseRadioNetwork.releaseDueToCNDetectedMobility; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary releaseDueToCNDetectedMobility
 * @constant
 * @type {number}
 */
export
const releaseDueToCNDetectedMobility: CauseRadioNetwork = CauseRadioNetwork.releaseDueToCNDetectedMobility; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_n26InterfaceNotAvailable
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_n26InterfaceNotAvailable: CauseRadioNetwork = CauseRadioNetwork.n26InterfaceNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary n26InterfaceNotAvailable
 * @constant
 * @type {number}
 */
export
const n26InterfaceNotAvailable: CauseRadioNetwork = CauseRadioNetwork.n26InterfaceNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_releaseDueToPreemption
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_releaseDueToPreemption: CauseRadioNetwork = CauseRadioNetwork.releaseDueToPreemption; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary releaseDueToPreemption
 * @constant
 * @type {number}
 */
export
const releaseDueToPreemption: CauseRadioNetwork = CauseRadioNetwork.releaseDueToPreemption; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_multipleLocationReportingReferenceIDInstances
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_multipleLocationReportingReferenceIDInstances: CauseRadioNetwork = CauseRadioNetwork.multipleLocationReportingReferenceIDInstances; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multipleLocationReportingReferenceIDInstances
 * @constant
 * @type {number}
 */
export
const multipleLocationReportingReferenceIDInstances: CauseRadioNetwork = CauseRadioNetwork.multipleLocationReportingReferenceIDInstances; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_rSNNotAvailableForTheUP
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_rSNNotAvailableForTheUP: CauseRadioNetwork = CauseRadioNetwork.rSNNotAvailableForTheUP; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rSNNotAvailableForTheUP
 * @constant
 * @type {number}
 */
export
const rSNNotAvailableForTheUP: CauseRadioNetwork = CauseRadioNetwork.rSNNotAvailableForTheUP; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_nPMAccessDenied
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_nPMAccessDenied: CauseRadioNetwork = CauseRadioNetwork.nPMAccessDenied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nPMAccessDenied
 * @constant
 * @type {number}
 */
export
const nPMAccessDenied: CauseRadioNetwork = CauseRadioNetwork.nPMAccessDenied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_cAGOnlyAccessDenied
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_cAGOnlyAccessDenied: CauseRadioNetwork = CauseRadioNetwork.cAGOnlyAccessDenied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cAGOnlyAccessDenied
 * @constant
 * @type {number}
 */
export
const cAGOnlyAccessDenied: CauseRadioNetwork = CauseRadioNetwork.cAGOnlyAccessDenied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_insufficientUECapabilities
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_insufficientUECapabilities: CauseRadioNetwork = CauseRadioNetwork.insufficientUECapabilities; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary insufficientUECapabilities
 * @constant
 * @type {number}
 */
export
const insufficientUECapabilities: CauseRadioNetwork = CauseRadioNetwork.insufficientUECapabilities; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_CauseRadioNetwork: $.ASN1Decoder<CauseRadioNetwork> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CauseRadioNetwork
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CauseRadioNetwork (el: _Element): CauseRadioNetwork {
    if (!_cached_decoder_for_CauseRadioNetwork) { _cached_decoder_for_CauseRadioNetwork = $._decodeEnumerated; }
    return _cached_decoder_for_CauseRadioNetwork(el);
}

let _cached_encoder_for_CauseRadioNetwork: $.ASN1Encoder<CauseRadioNetwork> | null = null;

/**
 * @summary Encodes a(n) CauseRadioNetwork into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CauseRadioNetwork, encoded as an ASN.1 Element.
 */
export
function _encode_CauseRadioNetwork (value: CauseRadioNetwork, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CauseRadioNetwork) { _cached_encoder_for_CauseRadioNetwork = $._encodeEnumerated; }
    return _cached_encoder_for_CauseRadioNetwork(value, elGetter);
}


/* eslint-enable */
