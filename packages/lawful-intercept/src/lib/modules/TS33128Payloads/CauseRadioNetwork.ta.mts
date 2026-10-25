/* eslint-disable */
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
const CauseRadioNetwork: typeof _enum_for_CauseRadioNetwork = _enum_for_CauseRadioNetwork;

/**
 * @summary CauseRadioNetwork_unspecified
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_unspecified: _enum_for_CauseRadioNetwork.unspecified = CauseRadioNetwork.unspecified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unspecified
 * @constant
 * @type {number}
 */
export
const unspecified: _enum_for_CauseRadioNetwork.unspecified = CauseRadioNetwork.unspecified; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_txnrelocoverallExpiry
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_txnrelocoverallExpiry: _enum_for_CauseRadioNetwork.txnrelocoverallExpiry = CauseRadioNetwork.txnrelocoverallExpiry; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary txnrelocoverallExpiry
 * @constant
 * @type {number}
 */
export
const txnrelocoverallExpiry: _enum_for_CauseRadioNetwork.txnrelocoverallExpiry = CauseRadioNetwork.txnrelocoverallExpiry; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_successfulHandover
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_successfulHandover: _enum_for_CauseRadioNetwork.successfulHandover = CauseRadioNetwork.successfulHandover; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary successfulHandover
 * @constant
 * @type {number}
 */
export
const successfulHandover: _enum_for_CauseRadioNetwork.successfulHandover = CauseRadioNetwork.successfulHandover; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_releaseDueToNGRANGeneratedReason
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_releaseDueToNGRANGeneratedReason: _enum_for_CauseRadioNetwork.releaseDueToNGRANGeneratedReason = CauseRadioNetwork.releaseDueToNGRANGeneratedReason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary releaseDueToNGRANGeneratedReason
 * @constant
 * @type {number}
 */
export
const releaseDueToNGRANGeneratedReason: _enum_for_CauseRadioNetwork.releaseDueToNGRANGeneratedReason = CauseRadioNetwork.releaseDueToNGRANGeneratedReason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_releaseDueTo5gcGeneratedReason
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_releaseDueTo5gcGeneratedReason: _enum_for_CauseRadioNetwork.releaseDueTo5gcGeneratedReason = CauseRadioNetwork.releaseDueTo5gcGeneratedReason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary releaseDueTo5gcGeneratedReason
 * @constant
 * @type {number}
 */
export
const releaseDueTo5gcGeneratedReason: _enum_for_CauseRadioNetwork.releaseDueTo5gcGeneratedReason = CauseRadioNetwork.releaseDueTo5gcGeneratedReason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_handoverCancelled
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_handoverCancelled: _enum_for_CauseRadioNetwork.handoverCancelled = CauseRadioNetwork.handoverCancelled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary handoverCancelled
 * @constant
 * @type {number}
 */
export
const handoverCancelled: _enum_for_CauseRadioNetwork.handoverCancelled = CauseRadioNetwork.handoverCancelled; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_partialHandover
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_partialHandover: _enum_for_CauseRadioNetwork.partialHandover = CauseRadioNetwork.partialHandover; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary partialHandover
 * @constant
 * @type {number}
 */
export
const partialHandover: _enum_for_CauseRadioNetwork.partialHandover = CauseRadioNetwork.partialHandover; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_hoFailureInTarget5GCNGRANNodeOrTargetSystem
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_hoFailureInTarget5GCNGRANNodeOrTargetSystem: _enum_for_CauseRadioNetwork.hoFailureInTarget5GCNGRANNodeOrTargetSystem = CauseRadioNetwork.hoFailureInTarget5GCNGRANNodeOrTargetSystem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hoFailureInTarget5GCNGRANNodeOrTargetSystem
 * @constant
 * @type {number}
 */
export
const hoFailureInTarget5GCNGRANNodeOrTargetSystem: _enum_for_CauseRadioNetwork.hoFailureInTarget5GCNGRANNodeOrTargetSystem = CauseRadioNetwork.hoFailureInTarget5GCNGRANNodeOrTargetSystem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_hoTargetNotAllowed
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_hoTargetNotAllowed: _enum_for_CauseRadioNetwork.hoTargetNotAllowed = CauseRadioNetwork.hoTargetNotAllowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hoTargetNotAllowed
 * @constant
 * @type {number}
 */
export
const hoTargetNotAllowed: _enum_for_CauseRadioNetwork.hoTargetNotAllowed = CauseRadioNetwork.hoTargetNotAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_tNGRelocOverallExpiry
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_tNGRelocOverallExpiry: _enum_for_CauseRadioNetwork.tNGRelocOverallExpiry = CauseRadioNetwork.tNGRelocOverallExpiry; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tNGRelocOverallExpiry
 * @constant
 * @type {number}
 */
export
const tNGRelocOverallExpiry: _enum_for_CauseRadioNetwork.tNGRelocOverallExpiry = CauseRadioNetwork.tNGRelocOverallExpiry; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_tNGRelocPrepExpiry
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_tNGRelocPrepExpiry: _enum_for_CauseRadioNetwork.tNGRelocPrepExpiry = CauseRadioNetwork.tNGRelocPrepExpiry; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tNGRelocPrepExpiry
 * @constant
 * @type {number}
 */
export
const tNGRelocPrepExpiry: _enum_for_CauseRadioNetwork.tNGRelocPrepExpiry = CauseRadioNetwork.tNGRelocPrepExpiry; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_cellNotAvailable
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_cellNotAvailable: _enum_for_CauseRadioNetwork.cellNotAvailable = CauseRadioNetwork.cellNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cellNotAvailable
 * @constant
 * @type {number}
 */
export
const cellNotAvailable: _enum_for_CauseRadioNetwork.cellNotAvailable = CauseRadioNetwork.cellNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_unknownTargetID
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_unknownTargetID: _enum_for_CauseRadioNetwork.unknownTargetID = CauseRadioNetwork.unknownTargetID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownTargetID
 * @constant
 * @type {number}
 */
export
const unknownTargetID: _enum_for_CauseRadioNetwork.unknownTargetID = CauseRadioNetwork.unknownTargetID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_noRadioResourcesAvailableInTargetCell
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_noRadioResourcesAvailableInTargetCell: _enum_for_CauseRadioNetwork.noRadioResourcesAvailableInTargetCell = CauseRadioNetwork.noRadioResourcesAvailableInTargetCell; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noRadioResourcesAvailableInTargetCell
 * @constant
 * @type {number}
 */
export
const noRadioResourcesAvailableInTargetCell: _enum_for_CauseRadioNetwork.noRadioResourcesAvailableInTargetCell = CauseRadioNetwork.noRadioResourcesAvailableInTargetCell; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_unknownLocalUENGAPID
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_unknownLocalUENGAPID: _enum_for_CauseRadioNetwork.unknownLocalUENGAPID = CauseRadioNetwork.unknownLocalUENGAPID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownLocalUENGAPID
 * @constant
 * @type {number}
 */
export
const unknownLocalUENGAPID: _enum_for_CauseRadioNetwork.unknownLocalUENGAPID = CauseRadioNetwork.unknownLocalUENGAPID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_inconsistentRemoteUENGAPID
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_inconsistentRemoteUENGAPID: _enum_for_CauseRadioNetwork.inconsistentRemoteUENGAPID = CauseRadioNetwork.inconsistentRemoteUENGAPID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inconsistentRemoteUENGAPID
 * @constant
 * @type {number}
 */
export
const inconsistentRemoteUENGAPID: _enum_for_CauseRadioNetwork.inconsistentRemoteUENGAPID = CauseRadioNetwork.inconsistentRemoteUENGAPID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_handoverDesirableForRadioReason
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_handoverDesirableForRadioReason: _enum_for_CauseRadioNetwork.handoverDesirableForRadioReason = CauseRadioNetwork.handoverDesirableForRadioReason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary handoverDesirableForRadioReason
 * @constant
 * @type {number}
 */
export
const handoverDesirableForRadioReason: _enum_for_CauseRadioNetwork.handoverDesirableForRadioReason = CauseRadioNetwork.handoverDesirableForRadioReason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_timeCriticalHandover
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_timeCriticalHandover: _enum_for_CauseRadioNetwork.timeCriticalHandover = CauseRadioNetwork.timeCriticalHandover; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeCriticalHandover
 * @constant
 * @type {number}
 */
export
const timeCriticalHandover: _enum_for_CauseRadioNetwork.timeCriticalHandover = CauseRadioNetwork.timeCriticalHandover; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_resourceOptimisationHandover
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_resourceOptimisationHandover: _enum_for_CauseRadioNetwork.resourceOptimisationHandover = CauseRadioNetwork.resourceOptimisationHandover; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resourceOptimisationHandover
 * @constant
 * @type {number}
 */
export
const resourceOptimisationHandover: _enum_for_CauseRadioNetwork.resourceOptimisationHandover = CauseRadioNetwork.resourceOptimisationHandover; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_reduceLoadInServingCell
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_reduceLoadInServingCell: _enum_for_CauseRadioNetwork.reduceLoadInServingCell = CauseRadioNetwork.reduceLoadInServingCell; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reduceLoadInServingCell
 * @constant
 * @type {number}
 */
export
const reduceLoadInServingCell: _enum_for_CauseRadioNetwork.reduceLoadInServingCell = CauseRadioNetwork.reduceLoadInServingCell; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_userInactivity
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_userInactivity: _enum_for_CauseRadioNetwork.userInactivity = CauseRadioNetwork.userInactivity; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userInactivity
 * @constant
 * @type {number}
 */
export
const userInactivity: _enum_for_CauseRadioNetwork.userInactivity = CauseRadioNetwork.userInactivity; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_radioConnectionWithUELost
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_radioConnectionWithUELost: _enum_for_CauseRadioNetwork.radioConnectionWithUELost = CauseRadioNetwork.radioConnectionWithUELost; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary radioConnectionWithUELost
 * @constant
 * @type {number}
 */
export
const radioConnectionWithUELost: _enum_for_CauseRadioNetwork.radioConnectionWithUELost = CauseRadioNetwork.radioConnectionWithUELost; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_radioResourcesNotAvailable
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_radioResourcesNotAvailable: _enum_for_CauseRadioNetwork.radioResourcesNotAvailable = CauseRadioNetwork.radioResourcesNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary radioResourcesNotAvailable
 * @constant
 * @type {number}
 */
export
const radioResourcesNotAvailable: _enum_for_CauseRadioNetwork.radioResourcesNotAvailable = CauseRadioNetwork.radioResourcesNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_invalidQoSCombination
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_invalidQoSCombination: _enum_for_CauseRadioNetwork.invalidQoSCombination = CauseRadioNetwork.invalidQoSCombination; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidQoSCombination
 * @constant
 * @type {number}
 */
export
const invalidQoSCombination: _enum_for_CauseRadioNetwork.invalidQoSCombination = CauseRadioNetwork.invalidQoSCombination; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_failureInRadioInterfaceProcedure
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_failureInRadioInterfaceProcedure: _enum_for_CauseRadioNetwork.failureInRadioInterfaceProcedure = CauseRadioNetwork.failureInRadioInterfaceProcedure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary failureInRadioInterfaceProcedure
 * @constant
 * @type {number}
 */
export
const failureInRadioInterfaceProcedure: _enum_for_CauseRadioNetwork.failureInRadioInterfaceProcedure = CauseRadioNetwork.failureInRadioInterfaceProcedure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_interactionWithOtherProcedure
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_interactionWithOtherProcedure: _enum_for_CauseRadioNetwork.interactionWithOtherProcedure = CauseRadioNetwork.interactionWithOtherProcedure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interactionWithOtherProcedure
 * @constant
 * @type {number}
 */
export
const interactionWithOtherProcedure: _enum_for_CauseRadioNetwork.interactionWithOtherProcedure = CauseRadioNetwork.interactionWithOtherProcedure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_unknownPDUSessionID
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_unknownPDUSessionID: _enum_for_CauseRadioNetwork.unknownPDUSessionID = CauseRadioNetwork.unknownPDUSessionID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownPDUSessionID
 * @constant
 * @type {number}
 */
export
const unknownPDUSessionID: _enum_for_CauseRadioNetwork.unknownPDUSessionID = CauseRadioNetwork.unknownPDUSessionID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_multiplePDUSessionIDInstances
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_multiplePDUSessionIDInstances: _enum_for_CauseRadioNetwork.multiplePDUSessionIDInstances = CauseRadioNetwork.multiplePDUSessionIDInstances; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multiplePDUSessionIDInstances
 * @constant
 * @type {number}
 */
export
const multiplePDUSessionIDInstances: _enum_for_CauseRadioNetwork.multiplePDUSessionIDInstances = CauseRadioNetwork.multiplePDUSessionIDInstances; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_multipleQoSFlowIDInstances
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_multipleQoSFlowIDInstances: _enum_for_CauseRadioNetwork.multipleQoSFlowIDInstances = CauseRadioNetwork.multipleQoSFlowIDInstances; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multipleQoSFlowIDInstances
 * @constant
 * @type {number}
 */
export
const multipleQoSFlowIDInstances: _enum_for_CauseRadioNetwork.multipleQoSFlowIDInstances = CauseRadioNetwork.multipleQoSFlowIDInstances; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_encryptionAndOrIntegrityProtectionAlgorithmsNotSupported
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_encryptionAndOrIntegrityProtectionAlgorithmsNotSupported: _enum_for_CauseRadioNetwork.encryptionAndOrIntegrityProtectionAlgorithmsNotSupported = CauseRadioNetwork.encryptionAndOrIntegrityProtectionAlgorithmsNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary encryptionAndOrIntegrityProtectionAlgorithmsNotSupported
 * @constant
 * @type {number}
 */
export
const encryptionAndOrIntegrityProtectionAlgorithmsNotSupported: _enum_for_CauseRadioNetwork.encryptionAndOrIntegrityProtectionAlgorithmsNotSupported = CauseRadioNetwork.encryptionAndOrIntegrityProtectionAlgorithmsNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_nGIntraSystemHandoverTriggered
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_nGIntraSystemHandoverTriggered: _enum_for_CauseRadioNetwork.nGIntraSystemHandoverTriggered = CauseRadioNetwork.nGIntraSystemHandoverTriggered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nGIntraSystemHandoverTriggered
 * @constant
 * @type {number}
 */
export
const nGIntraSystemHandoverTriggered: _enum_for_CauseRadioNetwork.nGIntraSystemHandoverTriggered = CauseRadioNetwork.nGIntraSystemHandoverTriggered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_nGInterSystemHandoverTriggered
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_nGInterSystemHandoverTriggered: _enum_for_CauseRadioNetwork.nGInterSystemHandoverTriggered = CauseRadioNetwork.nGInterSystemHandoverTriggered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nGInterSystemHandoverTriggered
 * @constant
 * @type {number}
 */
export
const nGInterSystemHandoverTriggered: _enum_for_CauseRadioNetwork.nGInterSystemHandoverTriggered = CauseRadioNetwork.nGInterSystemHandoverTriggered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_xNHandoverTriggered
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_xNHandoverTriggered: _enum_for_CauseRadioNetwork.xNHandoverTriggered = CauseRadioNetwork.xNHandoverTriggered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary xNHandoverTriggered
 * @constant
 * @type {number}
 */
export
const xNHandoverTriggered: _enum_for_CauseRadioNetwork.xNHandoverTriggered = CauseRadioNetwork.xNHandoverTriggered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_notSupported5QIValue
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_notSupported5QIValue: _enum_for_CauseRadioNetwork.notSupported5QIValue = CauseRadioNetwork.notSupported5QIValue; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notSupported5QIValue
 * @constant
 * @type {number}
 */
export
const notSupported5QIValue: _enum_for_CauseRadioNetwork.notSupported5QIValue = CauseRadioNetwork.notSupported5QIValue; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_uEContextTransfer
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_uEContextTransfer: _enum_for_CauseRadioNetwork.uEContextTransfer = CauseRadioNetwork.uEContextTransfer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEContextTransfer
 * @constant
 * @type {number}
 */
export
const uEContextTransfer: _enum_for_CauseRadioNetwork.uEContextTransfer = CauseRadioNetwork.uEContextTransfer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_iMSVoiceeEPSFallbackOrRATFallbackTriggered
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_iMSVoiceeEPSFallbackOrRATFallbackTriggered: _enum_for_CauseRadioNetwork.iMSVoiceeEPSFallbackOrRATFallbackTriggered = CauseRadioNetwork.iMSVoiceeEPSFallbackOrRATFallbackTriggered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iMSVoiceeEPSFallbackOrRATFallbackTriggered
 * @constant
 * @type {number}
 */
export
const iMSVoiceeEPSFallbackOrRATFallbackTriggered: _enum_for_CauseRadioNetwork.iMSVoiceeEPSFallbackOrRATFallbackTriggered = CauseRadioNetwork.iMSVoiceeEPSFallbackOrRATFallbackTriggered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_uPIntegrityProtectioNotPossible
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_uPIntegrityProtectioNotPossible: _enum_for_CauseRadioNetwork.uPIntegrityProtectioNotPossible = CauseRadioNetwork.uPIntegrityProtectioNotPossible; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uPIntegrityProtectioNotPossible
 * @constant
 * @type {number}
 */
export
const uPIntegrityProtectioNotPossible: _enum_for_CauseRadioNetwork.uPIntegrityProtectioNotPossible = CauseRadioNetwork.uPIntegrityProtectioNotPossible; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_uPConfidentialityProtectionNotPossible
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_uPConfidentialityProtectionNotPossible: _enum_for_CauseRadioNetwork.uPConfidentialityProtectionNotPossible = CauseRadioNetwork.uPConfidentialityProtectionNotPossible; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uPConfidentialityProtectionNotPossible
 * @constant
 * @type {number}
 */
export
const uPConfidentialityProtectionNotPossible: _enum_for_CauseRadioNetwork.uPConfidentialityProtectionNotPossible = CauseRadioNetwork.uPConfidentialityProtectionNotPossible; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_sliceNotSupported
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_sliceNotSupported: _enum_for_CauseRadioNetwork.sliceNotSupported = CauseRadioNetwork.sliceNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sliceNotSupported
 * @constant
 * @type {number}
 */
export
const sliceNotSupported: _enum_for_CauseRadioNetwork.sliceNotSupported = CauseRadioNetwork.sliceNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_uEInRRCInactiveStateNotReachable
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_uEInRRCInactiveStateNotReachable: _enum_for_CauseRadioNetwork.uEInRRCInactiveStateNotReachable = CauseRadioNetwork.uEInRRCInactiveStateNotReachable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEInRRCInactiveStateNotReachable
 * @constant
 * @type {number}
 */
export
const uEInRRCInactiveStateNotReachable: _enum_for_CauseRadioNetwork.uEInRRCInactiveStateNotReachable = CauseRadioNetwork.uEInRRCInactiveStateNotReachable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_redirection
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_redirection: _enum_for_CauseRadioNetwork.redirection = CauseRadioNetwork.redirection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary redirection
 * @constant
 * @type {number}
 */
export
const redirection: _enum_for_CauseRadioNetwork.redirection = CauseRadioNetwork.redirection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_resourcesNotAvailableForTheSlice
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_resourcesNotAvailableForTheSlice: _enum_for_CauseRadioNetwork.resourcesNotAvailableForTheSlice = CauseRadioNetwork.resourcesNotAvailableForTheSlice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resourcesNotAvailableForTheSlice
 * @constant
 * @type {number}
 */
export
const resourcesNotAvailableForTheSlice: _enum_for_CauseRadioNetwork.resourcesNotAvailableForTheSlice = CauseRadioNetwork.resourcesNotAvailableForTheSlice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_uEMaxIntegrityProtectedDataRateReason
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_uEMaxIntegrityProtectedDataRateReason: _enum_for_CauseRadioNetwork.uEMaxIntegrityProtectedDataRateReason = CauseRadioNetwork.uEMaxIntegrityProtectedDataRateReason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEMaxIntegrityProtectedDataRateReason
 * @constant
 * @type {number}
 */
export
const uEMaxIntegrityProtectedDataRateReason: _enum_for_CauseRadioNetwork.uEMaxIntegrityProtectedDataRateReason = CauseRadioNetwork.uEMaxIntegrityProtectedDataRateReason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_releaseDueToCNDetectedMobility
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_releaseDueToCNDetectedMobility: _enum_for_CauseRadioNetwork.releaseDueToCNDetectedMobility = CauseRadioNetwork.releaseDueToCNDetectedMobility; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary releaseDueToCNDetectedMobility
 * @constant
 * @type {number}
 */
export
const releaseDueToCNDetectedMobility: _enum_for_CauseRadioNetwork.releaseDueToCNDetectedMobility = CauseRadioNetwork.releaseDueToCNDetectedMobility; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_n26InterfaceNotAvailable
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_n26InterfaceNotAvailable: _enum_for_CauseRadioNetwork.n26InterfaceNotAvailable = CauseRadioNetwork.n26InterfaceNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary n26InterfaceNotAvailable
 * @constant
 * @type {number}
 */
export
const n26InterfaceNotAvailable: _enum_for_CauseRadioNetwork.n26InterfaceNotAvailable = CauseRadioNetwork.n26InterfaceNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_releaseDueToPreemption
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_releaseDueToPreemption: _enum_for_CauseRadioNetwork.releaseDueToPreemption = CauseRadioNetwork.releaseDueToPreemption; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary releaseDueToPreemption
 * @constant
 * @type {number}
 */
export
const releaseDueToPreemption: _enum_for_CauseRadioNetwork.releaseDueToPreemption = CauseRadioNetwork.releaseDueToPreemption; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_multipleLocationReportingReferenceIDInstances
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_multipleLocationReportingReferenceIDInstances: _enum_for_CauseRadioNetwork.multipleLocationReportingReferenceIDInstances = CauseRadioNetwork.multipleLocationReportingReferenceIDInstances; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multipleLocationReportingReferenceIDInstances
 * @constant
 * @type {number}
 */
export
const multipleLocationReportingReferenceIDInstances: _enum_for_CauseRadioNetwork.multipleLocationReportingReferenceIDInstances = CauseRadioNetwork.multipleLocationReportingReferenceIDInstances; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_rSNNotAvailableForTheUP
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_rSNNotAvailableForTheUP: _enum_for_CauseRadioNetwork.rSNNotAvailableForTheUP = CauseRadioNetwork.rSNNotAvailableForTheUP; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rSNNotAvailableForTheUP
 * @constant
 * @type {number}
 */
export
const rSNNotAvailableForTheUP: _enum_for_CauseRadioNetwork.rSNNotAvailableForTheUP = CauseRadioNetwork.rSNNotAvailableForTheUP; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_nPMAccessDenied
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_nPMAccessDenied: _enum_for_CauseRadioNetwork.nPMAccessDenied = CauseRadioNetwork.nPMAccessDenied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nPMAccessDenied
 * @constant
 * @type {number}
 */
export
const nPMAccessDenied: _enum_for_CauseRadioNetwork.nPMAccessDenied = CauseRadioNetwork.nPMAccessDenied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_cAGOnlyAccessDenied
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_cAGOnlyAccessDenied: _enum_for_CauseRadioNetwork.cAGOnlyAccessDenied = CauseRadioNetwork.cAGOnlyAccessDenied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cAGOnlyAccessDenied
 * @constant
 * @type {number}
 */
export
const cAGOnlyAccessDenied: _enum_for_CauseRadioNetwork.cAGOnlyAccessDenied = CauseRadioNetwork.cAGOnlyAccessDenied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseRadioNetwork_insufficientUECapabilities
 * @constant
 * @type {number}
 */
export
const CauseRadioNetwork_insufficientUECapabilities: _enum_for_CauseRadioNetwork.insufficientUECapabilities = CauseRadioNetwork.insufficientUECapabilities; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary insufficientUECapabilities
 * @constant
 * @type {number}
 */
export
const insufficientUECapabilities: _enum_for_CauseRadioNetwork.insufficientUECapabilities = CauseRadioNetwork.insufficientUECapabilities; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_CauseRadioNetwork: $.ASN1Decoder<CauseRadioNetwork> = $._decodeEnumerated;
export const _encode_CauseRadioNetwork: $.ASN1Encoder<CauseRadioNetwork> = $._encodeEnumerated;


/* eslint-enable */
