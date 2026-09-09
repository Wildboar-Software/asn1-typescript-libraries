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
import { connectGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/connectGPRS.oa.mjs";
import { entityReleasedGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/entityReleasedGPRS.oa.mjs";
import { furnishChargingInformationGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/furnishChargingInformationGPRS.oa.mjs";
import { initialDPGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/initialDPGPRS.oa.mjs";
import { releaseGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/releaseGPRS.oa.mjs";
import { requestReportGPRSEvent } from "../CAP-gprsSSF-gsmSCF-ops-args/requestReportGPRSEvent.oa.mjs";
import { sendChargingInformationGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/sendChargingInformationGPRS.oa.mjs";
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { activityTestGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/activityTestGPRS.oa.mjs";
// export { activityTestGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/activityTestGPRS.oa.mjs";
import { applyChargingGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/applyChargingGPRS.oa.mjs";
// export { applyChargingGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/applyChargingGPRS.oa.mjs";
import { applyChargingReportGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/applyChargingReportGPRS.oa.mjs";
// export { applyChargingReportGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/applyChargingReportGPRS.oa.mjs";
import { cancelGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/cancelGPRS.oa.mjs";
// export { cancelGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/cancelGPRS.oa.mjs";
// export { cAPSpecificBoundSet } from "../CAP-classes/cAPSpecificBoundSet.oa.mjs";
import { continueGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/continueGPRS.oa.mjs";
// export { continueGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/continueGPRS.oa.mjs";
import { resetTimerGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/resetTimerGPRS.oa.mjs";
// export { resetTimerGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/resetTimerGPRS.oa.mjs";


/**
 * @summary GprsSsfToGsmScfReturnable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GprsSsfToGsmScfReturnable OPERATION ::= {
 *     activityTestGPRS |
 *     applyChargingGPRS |
 *     applyChargingReportGPRS |
 *     cancelGPRS |
 *     connectGPRS {cAPSpecificBoundSet} |
 *     continueGPRS |
 *     entityReleasedGPRS {cAPSpecificBoundSet} |
 *     furnishChargingInformationGPRS {cAPSpecificBoundSet} |
 *     initialDPGPRS {cAPSpecificBoundSet} |
 *     releaseGPRS {cAPSpecificBoundSet} |
 *     requestReportGPRSEvent {cAPSpecificBoundSet} |
 *     resetTimerGPRS |
 *     sendChargingInformationGPRS {cAPSpecificBoundSet}}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const GprsSsfToGsmScfReturnable: (OPERATION)[] = [ activityTestGPRS, applyChargingGPRS, applyChargingReportGPRS, cancelGPRS, connectGPRS, continueGPRS, entityReleasedGPRS, furnishChargingInformationGPRS, initialDPGPRS, releaseGPRS, requestReportGPRSEvent, resetTimerGPRS, sendChargingInformationGPRS, ];

/* eslint-enable */
