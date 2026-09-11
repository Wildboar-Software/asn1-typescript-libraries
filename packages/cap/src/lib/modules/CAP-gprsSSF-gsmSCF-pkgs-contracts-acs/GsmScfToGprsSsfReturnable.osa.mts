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
import { furnishChargingInformationGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/furnishChargingInformationGPRS.oa.mjs";
import { releaseGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/releaseGPRS.oa.mjs";
import { requestReportGPRSEvent } from "../CAP-gprsSSF-gsmSCF-ops-args/requestReportGPRSEvent.oa.mjs";
import { sendChargingInformationGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/sendChargingInformationGPRS.oa.mjs";
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { activityTestGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/activityTestGPRS.oa.mjs";
// export { activityTestGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/activityTestGPRS.oa.mjs";
import { applyChargingGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/applyChargingGPRS.oa.mjs";
// export { applyChargingGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/applyChargingGPRS.oa.mjs";
import { cancelGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/cancelGPRS.oa.mjs";
// export { cancelGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/cancelGPRS.oa.mjs";
// export { cAPSpecificBoundSet } from "../CAP-classes/cAPSpecificBoundSet.oa.mjs";


/**
 * @summary GsmScfToGprsSsfReturnable
 * @description
 * 
 * Operations that may be returned in the gsmSCF-to-gprsSSF `TCMessage`:
 * `activityTestGPRS`, `applyChargingGPRS`, `cancelGPRS`,
 * `furnishChargingInformationGPRS`, `releaseGPRS`, `requestReportGPRSEvent`,
 * `sendChargingInformationGPRS`. Bound set `cAPSpecificBoundSet` on the
 * parameterized operations. (3GPP TS 29.078 V19.0.0 clause 8.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GsmScfToGprsSsfReturnable OPERATION ::= {
 *     activityTestGPRS |
 *     applyChargingGPRS |
 *     cancelGPRS |
 *     furnishChargingInformationGPRS {cAPSpecificBoundSet} |
 *     releaseGPRS {cAPSpecificBoundSet} |
 *     requestReportGPRSEvent {cAPSpecificBoundSet} |
 *     sendChargingInformationGPRS {cAPSpecificBoundSet}}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const GsmScfToGprsSsfReturnable: (OPERATION)[] = [ activityTestGPRS, applyChargingGPRS, cancelGPRS, furnishChargingInformationGPRS, releaseGPRS, requestReportGPRSEvent, sendChargingInformationGPRS, ];

/* eslint-enable */
