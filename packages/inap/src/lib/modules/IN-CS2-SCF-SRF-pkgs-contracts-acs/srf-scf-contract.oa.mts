/* eslint-disable */
import { emptyConnectionPackage } from "../IN-CS2-classes/emptyConnectionPackage.oa.mjs";
// export { emptyConnectionPackage } from "../IN-CS2-classes/emptyConnectionPackage.oa.mjs";
import { srf_scfActivationOfAssistPackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/srf-scfActivationOfAssistPackage.oa.mjs";
// export { srf_scfActivationOfAssistPackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/srf-scfActivationOfAssistPackage.oa.mjs";
import { specializedResourceControlPackage } from "../IN-CS2-SCF-SRF-pkgs-contracts-acs/specializedResourceControlPackage.oa.mjs";
// export { specializedResourceControlPackage } from "../IN-CS2-SCF-SRF-pkgs-contracts-acs/specializedResourceControlPackage.oa.mjs";
import { srf_scfCancelPackage } from "../IN-CS2-SCF-SRF-pkgs-contracts-acs/srf-scfCancelPackage.oa.mjs";
// export { srf_scfCancelPackage } from "../IN-CS2-SCF-SRF-pkgs-contracts-acs/srf-scfCancelPackage.oa.mjs";
import { scriptControlPackage } from "../IN-CS2-SCF-SRF-pkgs-contracts-acs/scriptControlPackage.oa.mjs";
// export { scriptControlPackage } from "../IN-CS2-SCF-SRF-pkgs-contracts-acs/scriptControlPackage.oa.mjs";
import { messageControlPackage } from "../IN-CS2-SCF-SRF-pkgs-contracts-acs/messageControlPackage.oa.mjs";
// export { messageControlPackage } from "../IN-CS2-SCF-SRF-pkgs-contracts-acs/messageControlPackage.oa.mjs";
import { id_contract_srf_scf } from "../IN-CS2-object-identifiers/id-contract-srf-scf.va.mjs";
// export { id_contract_srf_scf } from "../IN-CS2-object-identifiers/id-contract-srf-scf.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary srf_scf_contract
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * srf-scf-contract CONTRACT ::= {
 *   CONNECTION             emptyConnectionPackage
 *   INITIATOR CONSUMER OF
 *     {srf-scfActivationOfAssistPackage}
 *   RESPONDER CONSUMER OF
 *     {specializedResourceControlPackage |
 *       srf-scfCancelPackage |
 *       scriptControlPackage |
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
    "&connection": emptyConnectionPackage /* OBJECT_FIELD_SETTING */,
    "&InitiatorConsumerOf": [ srf_scfActivationOfAssistPackage, ] /* OBJECT_FIELD_SETTING */,
    "&InitiatorSupplierOf": [ specializedResourceControlPackage, srf_scfCancelPackage, scriptControlPackage, messageControlPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_contract_srf_scf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
