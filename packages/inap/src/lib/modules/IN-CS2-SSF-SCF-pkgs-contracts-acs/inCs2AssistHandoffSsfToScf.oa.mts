/* eslint-disable */
import { srf_scfActivationOfAssistPackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/srf-scfActivationOfAssistPackage.oa.mjs";
// export { srf_scfActivationOfAssistPackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/srf-scfActivationOfAssistPackage.oa.mjs";
import { activityTestPackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/activityTestPackage.oa.mjs";
// export { activityTestPackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/activityTestPackage.oa.mjs";
import { billingPackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/billingPackage.oa.mjs";
// export { billingPackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/billingPackage.oa.mjs";
import { callHandlingPackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/callHandlingPackage.oa.mjs";
// export { callHandlingPackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/callHandlingPackage.oa.mjs";
import { cancelPackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/cancelPackage.oa.mjs";
// export { cancelPackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/cancelPackage.oa.mjs";
import { chargingPackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/chargingPackage.oa.mjs";
// export { chargingPackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/chargingPackage.oa.mjs";
import { genericDisconnectResourcePackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/genericDisconnectResourcePackage.oa.mjs";
// export { genericDisconnectResourcePackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/genericDisconnectResourcePackage.oa.mjs";
import { nonAssistedConnectionEstablishmentPackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/nonAssistedConnectionEstablishmentPackage.oa.mjs";
// export { nonAssistedConnectionEstablishmentPackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/nonAssistedConnectionEstablishmentPackage.oa.mjs";
import { specializedResourceControlPackage } from "../IN-CS2-SCF-SRF-pkgs-contracts-acs/specializedResourceControlPackage.oa.mjs";
// export { specializedResourceControlPackage } from "../IN-CS2-SCF-SRF-pkgs-contracts-acs/specializedResourceControlPackage.oa.mjs";
import { scriptControlPackage } from "../IN-CS2-SCF-SRF-pkgs-contracts-acs/scriptControlPackage.oa.mjs";
// export { scriptControlPackage } from "../IN-CS2-SCF-SRF-pkgs-contracts-acs/scriptControlPackage.oa.mjs";
import { messageControlPackage } from "../IN-CS2-SCF-SRF-pkgs-contracts-acs/messageControlPackage.oa.mjs";
// export { messageControlPackage } from "../IN-CS2-SCF-SRF-pkgs-contracts-acs/messageControlPackage.oa.mjs";
import { statusReportingPackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/statusReportingPackage.oa.mjs";
// export { statusReportingPackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/statusReportingPackage.oa.mjs";
import { timerPackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/timerPackage.oa.mjs";
// export { timerPackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/timerPackage.oa.mjs";
import { id_inCs2AssistHandoffSsfToScf } from "../IN-CS2-object-identifiers/id-inCs2AssistHandoffSsfToScf.va.mjs";
// export { id_inCs2AssistHandoffSsfToScf } from "../IN-CS2-object-identifiers/id-inCs2AssistHandoffSsfToScf.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary inCs2AssistHandoffSsfToScf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inCs2AssistHandoffSsfToScf CONTRACT ::= {
 *   -- dialogue initiated by SSF with AssistRequestInstructions
 *   INITIATOR CONSUMER OF
 *     {srf-scfActivationOfAssistPackage}
 *   RESPONDER CONSUMER OF
 *     {activityTestPackage | billingPackage |
 *       callHandlingPackage |
 *       cancelPackage |
 *       chargingPackage |
 *       genericDisconnectResourcePackage |
 *       nonAssistedConnectionEstablishmentPackage |
 *       specializedResourceControlPackage |
 *       scriptControlPackage |
 *       messageControlPackage |
 *       statusReportingPackage |
 *       timerPackage}
 *   ID                     id-inCs2AssistHandoffSsfToScf
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const inCs2AssistHandoffSsfToScf: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&InitiatorConsumerOf": [ srf_scfActivationOfAssistPackage, ] /* OBJECT_FIELD_SETTING */,
    "&InitiatorSupplierOf": [ activityTestPackage, billingPackage, callHandlingPackage, cancelPackage, chargingPackage, genericDisconnectResourcePackage, nonAssistedConnectionEstablishmentPackage, specializedResourceControlPackage, scriptControlPackage, messageControlPackage, statusReportingPackage, timerPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_inCs2AssistHandoffSsfToScf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
