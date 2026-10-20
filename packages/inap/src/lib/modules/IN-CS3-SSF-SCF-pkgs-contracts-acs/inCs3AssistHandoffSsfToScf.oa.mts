/* eslint-disable */
import { activityTestPackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/activityTestPackage.oa.mjs";
// export { activityTestPackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/activityTestPackage.oa.mjs";
import { srf_scfActivationOfAssistPackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/srf-scfActivationOfAssistPackage.oa.mjs";
// export { srf_scfActivationOfAssistPackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/srf-scfActivationOfAssistPackage.oa.mjs";
import { billingPackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/billingPackage.oa.mjs";
// export { billingPackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/billingPackage.oa.mjs";
import { callHandlingPackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/callHandlingPackage.oa.mjs";
// export { callHandlingPackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/callHandlingPackage.oa.mjs";
import { cancelPackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/cancelPackage.oa.mjs";
// export { cancelPackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/cancelPackage.oa.mjs";
import { chargingPackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/chargingPackage.oa.mjs";
// export { chargingPackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/chargingPackage.oa.mjs";
import { signallingControlPackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/signallingControlPackage.oa.mjs";
// export { signallingControlPackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/signallingControlPackage.oa.mjs";
import { genericDisconnectResourcePackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/genericDisconnectResourcePackage.oa.mjs";
// export { genericDisconnectResourcePackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/genericDisconnectResourcePackage.oa.mjs";
import { nonAssistedConnectionEstablishmentPackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/nonAssistedConnectionEstablishmentPackage.oa.mjs";
// export { nonAssistedConnectionEstablishmentPackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/nonAssistedConnectionEstablishmentPackage.oa.mjs";
import { specializedResourceControlPackage } from "../IN-CS3-SCF-SRF-pkgs-contracts-acs/specializedResourceControlPackage.oa.mjs";
// export { specializedResourceControlPackage } from "../IN-CS3-SCF-SRF-pkgs-contracts-acs/specializedResourceControlPackage.oa.mjs";
import { scriptControlPackage } from "../IN-CS3-SCF-SRF-pkgs-contracts-acs/scriptControlPackage.oa.mjs";
// export { scriptControlPackage } from "../IN-CS3-SCF-SRF-pkgs-contracts-acs/scriptControlPackage.oa.mjs";
import { messageControlPackage } from "../IN-CS3-SCF-SRF-pkgs-contracts-acs/messageControlPackage.oa.mjs";
// export { messageControlPackage } from "../IN-CS3-SCF-SRF-pkgs-contracts-acs/messageControlPackage.oa.mjs";
import { statusReportingPackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/statusReportingPackage.oa.mjs";
// export { statusReportingPackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/statusReportingPackage.oa.mjs";
import { timerPackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/timerPackage.oa.mjs";
// export { timerPackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/timerPackage.oa.mjs";
import { id_inCs3AssistHandoffSsfToScf } from "../IN-CS3-object-identifiers/id-inCs3AssistHandoffSsfToScf.va.mjs";
// export { id_inCs3AssistHandoffSsfToScf } from "../IN-CS3-object-identifiers/id-inCs3AssistHandoffSsfToScf.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary inCs3AssistHandoffSsfToScf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inCs3AssistHandoffSsfToScf CONTRACT ::= {
 *   -- dialogue initiated by SSF with AssistRequestInstructions
 *   --The inCs3AssistHandoffSsfToScf contract expresses the form of the service in which the SSF,
 *   -- a ROS-object of class ssf, initiates the Assist or Hand-off contract.
 *   --A ROS-object of class scf, responds to this contract.
 *   INITIATOR CONSUMER OF
 *     {activityTestPackage |
 *       srf-scfActivationOfAssistPackage}
 *   RESPONDER CONSUMER OF
 *     {activityTestPackage | billingPackage |
 *       callHandlingPackage | cancelPackage
 *       | chargingPackage |
 *       signallingControlPackage |
 *       genericDisconnectResourcePackage |
 *       nonAssistedConnectionEstablishmentPackage |
 *       specializedResourceControlPackage |
 *       scriptControlPackage |
 *       messageControlPackage |
 *       statusReportingPackage |
 *       timerPackage}
 *   ID                     id-inCs3AssistHandoffSsfToScf
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const inCs3AssistHandoffSsfToScf: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&InitiatorConsumerOf": [ activityTestPackage, srf_scfActivationOfAssistPackage, ] /* OBJECT_FIELD_SETTING */,
    "&InitiatorSupplierOf": [ activityTestPackage, billingPackage, callHandlingPackage, cancelPackage, chargingPackage, signallingControlPackage, genericDisconnectResourcePackage, nonAssistedConnectionEstablishmentPackage, specializedResourceControlPackage, scriptControlPackage, messageControlPackage, statusReportingPackage, timerPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_inCs3AssistHandoffSsfToScf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
