/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { applyCharging } from "../CAP-gsmSSF-gsmSCF-ops-args/applyCharging.oa.mjs";
import { applyChargingReport } from "../CAP-gsmSSF-gsmSCF-ops-args/applyChargingReport.oa.mjs";
import { callInformationReport } from "../CAP-gsmSSF-gsmSCF-ops-args/callInformationReport.oa.mjs";
import { callInformationRequest } from "../CAP-gsmSSF-gsmSCF-ops-args/callInformationRequest.oa.mjs";
import { cancel } from "../CAP-gsmSSF-gsmSCF-ops-args/cancel.oa.mjs";
import { connect } from "../CAP-gsmSSF-gsmSCF-ops-args/connect.oa.mjs";
import { connectToResource } from "../CAP-gsmSSF-gsmSCF-ops-args/connectToResource.oa.mjs";
import { disconnectForwardConnectionWithArgument } from "../CAP-gsmSSF-gsmSCF-ops-args/disconnectForwardConnectionWithArgument.oa.mjs";
import { disconnectLeg } from "../CAP-gsmSSF-gsmSCF-ops-args/disconnectLeg.oa.mjs";
import { entityReleased } from "../CAP-gsmSSF-gsmSCF-ops-args/entityReleased.oa.mjs";
import { establishTemporaryConnection } from "../CAP-gsmSSF-gsmSCF-ops-args/establishTemporaryConnection.oa.mjs";
import { eventReportBCSM } from "../CAP-gsmSSF-gsmSCF-ops-args/eventReportBCSM.oa.mjs";
import { furnishChargingInformation } from "../CAP-gsmSSF-gsmSCF-ops-args/furnishChargingInformation.oa.mjs";
import { initiateCallAttempt } from "../CAP-gsmSSF-gsmSCF-ops-args/initiateCallAttempt.oa.mjs";
import { moveLeg } from "../CAP-gsmSSF-gsmSCF-ops-args/moveLeg.oa.mjs";
import { requestReportBCSMEvent } from "../CAP-gsmSSF-gsmSCF-ops-args/requestReportBCSMEvent.oa.mjs";
import { resetTimer } from "../CAP-gsmSSF-gsmSCF-ops-args/resetTimer.oa.mjs";
import { sendChargingInformation } from "../CAP-gsmSSF-gsmSCF-ops-args/sendChargingInformation.oa.mjs";
import { splitLeg } from "../CAP-gsmSSF-gsmSCF-ops-args/splitLeg.oa.mjs";
import { playAnnouncement } from "../CAP-gsmSCF-gsmSRF-ops-args/playAnnouncement.oa.mjs";
import { playTone } from "../CAP-gsmSSF-gsmSCF-ops-args/playTone.oa.mjs";
import { promptAndCollectUserInformation } from "../CAP-gsmSCF-gsmSRF-ops-args/promptAndCollectUserInformation.oa.mjs";
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { activityTest } from "../CAP-gsmSSF-gsmSCF-ops-args/activityTest.oa.mjs";
// export { activityTest } from "../CAP-gsmSSF-gsmSCF-ops-args/activityTest.oa.mjs";
// export { cAPSpecificBoundSet } from "../CAP-classes/cAPSpecificBoundSet.oa.mjs";
import { disconnectForwardConnection } from "../CAP-gsmSSF-gsmSCF-ops-args/disconnectForwardConnection.oa.mjs";
// export { disconnectForwardConnection } from "../CAP-gsmSSF-gsmSCF-ops-args/disconnectForwardConnection.oa.mjs";
import { specializedResourceReport } from "../CAP-gsmSCF-gsmSRF-ops-args/specializedResourceReport.oa.mjs";
// export { specializedResourceReport } from "../CAP-gsmSCF-gsmSRF-ops-args/specializedResourceReport.oa.mjs";


/**
 * @summary ScfToSsfGenericReturnable
 * @description
 * 
 * Operations that may be returned in the gsmSCF-to-gsmSSF generic CS
 * `TCMessage`: `activityTest`, `applyCharging`, `applyChargingReport`,
 * `callInformationReport`, `callInformationRequest`, `cancel`, `connect`,
 * `connectToResource`, `disconnectForwardConnection`,
 * `disconnectForwardConnectionWithArgument`, `disconnectLeg`, `entityReleased`,
 * `establishTemporaryConnection`, `eventReportBCSM`,
 * `furnishChargingInformation`, `initiateCallAttempt`, `moveLeg`,
 * `requestReportBCSMEvent`, `resetTimer`, `sendChargingInformation`,
 * `splitLeg`, `playAnnouncement`, `playTone`,
 * `promptAndCollectUserInformation`, `specializedResourceReport`. Bound set
 * `cAPSpecificBoundSet`. Rel-6 imports version8(7) operations from
 * CAP-gsmSSF-gsmSCF-ops-args and CAP-gsmSCF-gsmSRF-ops-args.
 * (3GPP TS 29.078 V19.0.0 clause 6.1.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScfToSsfGenericReturnable OPERATION ::= {
 *     activityTest |
 *     applyCharging {cAPSpecificBoundSet} |
 *     applyChargingReport {cAPSpecificBoundSet} |
 *     callInformationReport {cAPSpecificBoundSet} |
 *     callInformationRequest {cAPSpecificBoundSet} |
 *     cancel {cAPSpecificBoundSet} |
 *     connect {cAPSpecificBoundSet} |
 *     connectToResource {cAPSpecificBoundSet} |
 *     disconnectForwardConnection |
 *     disconnectForwardConnectionWithArgument {cAPSpecificBoundSet} |
 *     disconnectLeg {cAPSpecificBoundSet} |
 *     entityReleased {cAPSpecificBoundSet} |
 *     establishTemporaryConnection {cAPSpecificBoundSet} |
 *     eventReportBCSM {cAPSpecificBoundSet} |
 *     furnishChargingInformation {cAPSpecificBoundSet} |
 *     initiateCallAttempt {cAPSpecificBoundSet} |
 *     moveLeg {cAPSpecificBoundSet} |
 *     requestReportBCSMEvent {cAPSpecificBoundSet} |
 *     resetTimer {cAPSpecificBoundSet} |
 *     sendChargingInformation {cAPSpecificBoundSet} |
 *     splitLeg {cAPSpecificBoundSet} |
 *     playAnnouncement {cAPSpecificBoundSet} |
 *     playTone {cAPSpecificBoundSet} |
 *     promptAndCollectUserInformation {cAPSpecificBoundSet} |
 *     specializedResourceReport
 *     }
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const ScfToSsfGenericReturnable: (OPERATION)[] = [ activityTest, applyCharging, applyChargingReport, callInformationReport, callInformationRequest, cancel, connect, connectToResource, disconnectForwardConnection, disconnectForwardConnectionWithArgument, disconnectLeg, entityReleased, establishTemporaryConnection, eventReportBCSM, furnishChargingInformation, initiateCallAttempt, moveLeg, requestReportBCSMEvent, resetTimer, sendChargingInformation, splitLeg, playAnnouncement, playTone, promptAndCollectUserInformation, specializedResourceReport, ];

/* eslint-enable */
