/* eslint-disable */
import { srf_scfActivationOfAssistPackage } from "../IN-SSF-SCF-pkgs-contracts-acs/srf-scfActivationOfAssistPackage.oa.mjs";
// export { srf_scfActivationOfAssistPackage } from "../IN-SSF-SCF-pkgs-contracts-acs/srf-scfActivationOfAssistPackage.oa.mjs";
import { srfManagementPackage } from "../IN-SCF-SRF-pkgs-contracts-acs/srfManagementPackage.oa.mjs";
// export { srfManagementPackage } from "../IN-SCF-SRF-pkgs-contracts-acs/srfManagementPackage.oa.mjs";
import { specializedResourceControlPackage } from "../IN-SCF-SRF-pkgs-contracts-acs/specializedResourceControlPackage.oa.mjs";
// export { specializedResourceControlPackage } from "../IN-SCF-SRF-pkgs-contracts-acs/specializedResourceControlPackage.oa.mjs";
import { srf_scfCancelPackage } from "../IN-SCF-SRF-pkgs-contracts-acs/srf-scfCancelPackage.oa.mjs";
// export { srf_scfCancelPackage } from "../IN-SCF-SRF-pkgs-contracts-acs/srf-scfCancelPackage.oa.mjs";
import { scriptControlPackage } from "../IN-SCF-SRF-pkgs-contracts-acs/scriptControlPackage.oa.mjs";
// export { scriptControlPackage } from "../IN-SCF-SRF-pkgs-contracts-acs/scriptControlPackage.oa.mjs";
import { activityTestPackage } from "../IN-SSF-SCF-pkgs-contracts-acs/activityTestPackage.oa.mjs";
// export { activityTestPackage } from "../IN-SSF-SCF-pkgs-contracts-acs/activityTestPackage.oa.mjs";
import { messageControlPackage } from "../IN-SCF-SRF-pkgs-contracts-acs/messageControlPackage.oa.mjs";
// export { messageControlPackage } from "../IN-SCF-SRF-pkgs-contracts-acs/messageControlPackage.oa.mjs";
import { id_contract_srf_scf } from "../IN-object-identifiers/id-contract-srf-scf.va.mjs";
// export { id_contract_srf_scf } from "../IN-object-identifiers/id-contract-srf-scf.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary srf_scf_contract
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * srf-scf-contract CONTRACT ::= {
 *   INITIATOR CONSUMER OF
 *     {srf-scfActivationOfAssistPackage |
 *       srfManagementPackage}
 *   RESPONDER CONSUMER OF
 *     {specializedResourceControlPackage |
 *       srf-scfCancelPackage |
 *       scriptControlPackage |
 *       activityTestPackage |
 *       messageControlPackage}
 *   ID                     id-contract-srf-scf
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const srf_scf_contract: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&InitiatorConsumerOf": [ srf_scfActivationOfAssistPackage, srfManagementPackage, ] /* OBJECT_FIELD_SETTING */,
    "&InitiatorSupplierOf": [ specializedResourceControlPackage, srf_scfCancelPackage, scriptControlPackage, activityTestPackage, messageControlPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_contract_srf_scf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
