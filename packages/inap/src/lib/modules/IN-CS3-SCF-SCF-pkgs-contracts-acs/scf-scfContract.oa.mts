/* eslint-disable */
import { scf_scfConnectionPackage } from "../IN-CS3-SCF-SCF-pkgs-contracts-acs/scf-scfConnectionPackage.oa.mjs";
// export { scf_scfConnectionPackage } from "../IN-CS3-SCF-SCF-pkgs-contracts-acs/scf-scfConnectionPackage.oa.mjs";
import { activityTestPackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/activityTestPackage.oa.mjs";
// export { activityTestPackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/activityTestPackage.oa.mjs";
import { handlingInformationPackage } from "../IN-CS3-SCF-SCF-pkgs-contracts-acs/handlingInformationPackage.oa.mjs";
// export { handlingInformationPackage } from "../IN-CS3-SCF-SCF-pkgs-contracts-acs/handlingInformationPackage.oa.mjs";
import { transferStsiPackage } from "../IN-CS3-SCF-SCF-pkgs-contracts-acs/transferStsiPackage.oa.mjs";
// export { transferStsiPackage } from "../IN-CS3-SCF-SCF-pkgs-contracts-acs/transferStsiPackage.oa.mjs";
import { chargingInformationPackage } from "../IN-CS3-SCF-SCF-pkgs-contracts-acs/chargingInformationPackage.oa.mjs";
// export { chargingInformationPackage } from "../IN-CS3-SCF-SCF-pkgs-contracts-acs/chargingInformationPackage.oa.mjs";
import { networkCapabilityPackage } from "../IN-CS3-SCF-SCF-pkgs-contracts-acs/networkCapabilityPackage.oa.mjs";
// export { networkCapabilityPackage } from "../IN-CS3-SCF-SCF-pkgs-contracts-acs/networkCapabilityPackage.oa.mjs";
import { notificationPackage } from "../IN-CS3-SCF-SCF-pkgs-contracts-acs/notificationPackage.oa.mjs";
// export { notificationPackage } from "../IN-CS3-SCF-SCF-pkgs-contracts-acs/notificationPackage.oa.mjs";
import { userInformationPackage } from "../IN-CS3-SCF-SCF-pkgs-contracts-acs/userInformationPackage.oa.mjs";
// export { userInformationPackage } from "../IN-CS3-SCF-SCF-pkgs-contracts-acs/userInformationPackage.oa.mjs";
import { id_contract_scf_scf } from "../IN-CS3-object-identifiers/id-contract-scf-scf.va.mjs";
// export { id_contract_scf_scf } from "../IN-CS3-object-identifiers/id-contract-scf-scf.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary scf_scfContract
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scf-scfContract CONTRACT ::= {
 *   CONNECTION             scf-scfConnectionPackage
 *   INITIATOR CONSUMER OF
 *     {activityTestPackage | handlingInformationPackage |
 *       transferStsiPackage}
 *   RESPONDER CONSUMER OF
 *     {activityTestPackage | chargingInformationPackage |
 *       networkCapabilityPackage | notificationPackage |
 *       userInformationPackage |
 *       transferStsiPackage}
 *   ID                     id-contract-scf-scf
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const scf_scfContract: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&connection": scf_scfConnectionPackage /* OBJECT_FIELD_SETTING */,
    "&InitiatorConsumerOf": [ activityTestPackage, handlingInformationPackage, transferStsiPackage, ] /* OBJECT_FIELD_SETTING */,
    "&InitiatorSupplierOf": [ activityTestPackage, chargingInformationPackage, networkCapabilityPackage, notificationPackage, userInformationPackage, transferStsiPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_contract_scf_scf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
