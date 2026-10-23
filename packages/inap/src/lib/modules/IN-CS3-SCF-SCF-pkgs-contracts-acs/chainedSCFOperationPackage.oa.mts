/* eslint-disable */
import { chainedHandlingInformationRequest } from "../IN-CS3-SCF-SCF-ops-args/chainedHandlingInformationRequest.oa.mjs";
// export { chainedHandlingInformationRequest } from "../IN-CS3-SCF-SCF-ops-args/chainedHandlingInformationRequest.oa.mjs";
import { chainedNotificationProvided } from "../IN-CS3-SCF-SCF-ops-args/chainedNotificationProvided.oa.mjs";
// export { chainedNotificationProvided } from "../IN-CS3-SCF-SCF-ops-args/chainedNotificationProvided.oa.mjs";
import { chainedConfirmedNotificationProvided } from "../IN-CS3-SCF-SCF-ops-args/chainedConfirmedNotificationProvided.oa.mjs";
// export { chainedConfirmedNotificationProvided } from "../IN-CS3-SCF-SCF-ops-args/chainedConfirmedNotificationProvided.oa.mjs";
import { chainedReportChargingInformation } from "../IN-CS3-SCF-SCF-ops-args/chainedReportChargingInformation.oa.mjs";
// export { chainedReportChargingInformation } from "../IN-CS3-SCF-SCF-ops-args/chainedReportChargingInformation.oa.mjs";
import { chainedConfirmedReportChargingInformation } from "../IN-CS3-SCF-SCF-ops-args/chainedConfirmedReportChargingInformation.oa.mjs";
// export { chainedConfirmedReportChargingInformation } from "../IN-CS3-SCF-SCF-ops-args/chainedConfirmedReportChargingInformation.oa.mjs";
import { chainedEstablishChargingRecord } from "../IN-CS3-SCF-SCF-ops-args/chainedEstablishChargingRecord.oa.mjs";
// export { chainedEstablishChargingRecord } from "../IN-CS3-SCF-SCF-ops-args/chainedEstablishChargingRecord.oa.mjs";
import { chainedHandlingInformationResult } from "../IN-CS3-SCF-SCF-ops-args/chainedHandlingInformationResult.oa.mjs";
// export { chainedHandlingInformationResult } from "../IN-CS3-SCF-SCF-ops-args/chainedHandlingInformationResult.oa.mjs";
import { chainedNetworkCapability } from "../IN-CS3-SCF-SCF-ops-args/chainedNetworkCapability.oa.mjs";
// export { chainedNetworkCapability } from "../IN-CS3-SCF-SCF-ops-args/chainedNetworkCapability.oa.mjs";
import { chainedProvideUserInformation } from "../IN-CS3-SCF-SCF-ops-args/chainedProvideUserInformation.oa.mjs";
// export { chainedProvideUserInformation } from "../IN-CS3-SCF-SCF-ops-args/chainedProvideUserInformation.oa.mjs";
import { chainedRunUserScript } from "../IN-CS3-SCF-SCF-ops-args/chainedRunUserScript.oa.mjs";
// export { chainedRunUserScript } from "../IN-CS3-SCF-SCF-ops-args/chainedRunUserScript.oa.mjs";
import { chainedRequestNotification } from "../IN-CS3-SCF-SCF-ops-args/chainedRequestNotification.oa.mjs";
// export { chainedRequestNotification } from "../IN-CS3-SCF-SCF-ops-args/chainedRequestNotification.oa.mjs";
import { id_package_chainedSCFOperations } from "../IN-CS3-object-identifiers/id-package-chainedSCFOperations.va.mjs";
// export { id_package_chainedSCFOperations } from "../IN-CS3-object-identifiers/id-package-chainedSCFOperations.va.mjs";
import { type OPERATION_PACKAGE } from "../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs";


/**
 * @summary chainedSCFOperationPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * chainedSCFOperationPackage OPERATION-PACKAGE ::= {
 *   CONSUMER INVOKES
 *     {chainedHandlingInformationRequest |
 *       chainedNotificationProvided |
 *       chainedConfirmedNotificationProvided |
 *       chainedReportChargingInformation |
 *       chainedConfirmedReportChargingInformation}
 *   SUPPLIER INVOKES
 *     {chainedEstablishChargingRecord |
 *       chainedHandlingInformationResult |
 *       chainedNetworkCapability |
 *       chainedProvideUserInformation |
 *       chainedRunUserScript |
 *       chainedRequestNotification}
 *   ID                id-package-chainedSCFOperations
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION_PACKAGE}
 * @implements {OPERATION_PACKAGE}
 */
export
const chainedSCFOperationPackage: OPERATION_PACKAGE = {
    class: "OPERATION-PACKAGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Supplier": [ chainedHandlingInformationRequest, chainedNotificationProvided, chainedConfirmedNotificationProvided, chainedReportChargingInformation, chainedConfirmedReportChargingInformation, ] /* OBJECT_FIELD_SETTING */,
    "&Consumer": [ chainedEstablishChargingRecord, chainedHandlingInformationResult, chainedNetworkCapability, chainedProvideUserInformation, chainedRunUserScript, chainedRequestNotification, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_package_chainedSCFOperations /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
