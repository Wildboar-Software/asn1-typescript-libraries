/* eslint-disable */
import { scf_scfConnectionPackage } from "../IN-SCF-SCF-pkgs-contracts-acs/scf-scfConnectionPackage.oa.mjs";
// export { scf_scfConnectionPackage } from "../IN-SCF-SCF-pkgs-contracts-acs/scf-scfConnectionPackage.oa.mjs";
import { activityTestPackage } from "../IN-SSF-SCF-pkgs-contracts-acs/activityTestPackage.oa.mjs";
// export { activityTestPackage } from "../IN-SSF-SCF-pkgs-contracts-acs/activityTestPackage.oa.mjs";
import { handlingInformationPackage } from "../IN-SCF-SCF-pkgs-contracts-acs/handlingInformationPackage.oa.mjs";
// export { handlingInformationPackage } from "../IN-SCF-SCF-pkgs-contracts-acs/handlingInformationPackage.oa.mjs";
import { transferStsiPackage } from "../IN-SCF-SCF-pkgs-contracts-acs/transferStsiPackage.oa.mjs";
// export { transferStsiPackage } from "../IN-SCF-SCF-pkgs-contracts-acs/transferStsiPackage.oa.mjs";
import { chargingInformationPackage } from "../IN-SCF-SCF-pkgs-contracts-acs/chargingInformationPackage.oa.mjs";
// export { chargingInformationPackage } from "../IN-SCF-SCF-pkgs-contracts-acs/chargingInformationPackage.oa.mjs";
import { networkCapabilityPackage } from "../IN-SCF-SCF-pkgs-contracts-acs/networkCapabilityPackage.oa.mjs";
// export { networkCapabilityPackage } from "../IN-SCF-SCF-pkgs-contracts-acs/networkCapabilityPackage.oa.mjs";
import { notificationPackage } from "../IN-SCF-SCF-pkgs-contracts-acs/notificationPackage.oa.mjs";
// export { notificationPackage } from "../IN-SCF-SCF-pkgs-contracts-acs/notificationPackage.oa.mjs";
import { userInformationPackage } from "../IN-SCF-SCF-pkgs-contracts-acs/userInformationPackage.oa.mjs";
// export { userInformationPackage } from "../IN-SCF-SCF-pkgs-contracts-acs/userInformationPackage.oa.mjs";
import { id_contract_scfc_scfs } from "../IN-object-identifiers/id-contract-scfc-scfs.va.mjs";
// export { id_contract_scfc_scfs } from "../IN-object-identifiers/id-contract-scfc-scfs.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary scfc_scfsContract
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scfc-scfsContract CONTRACT ::= {
 *   CONNECTION             scf-scfConnectionPackage
 *   INITIATOR CONSUMER OF
 *     {activityTestPackage | handlingInformationPackage |
 *       transferStsiPackage}
 *   RESPONDER CONSUMER OF
 *     {activityTestPackage | chargingInformationPackage |
 *       networkCapabilityPackage | notificationPackage |
 *       transferStsiPackage |
 *       userInformationPackage}
 *   ID                     id-contract-scfc-scfs
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const scfc_scfsContract: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&connection": scf_scfConnectionPackage /* OBJECT_FIELD_SETTING */,
    "&InitiatorConsumerOf": [ activityTestPackage, handlingInformationPackage, transferStsiPackage, ] /* OBJECT_FIELD_SETTING */,
    "&InitiatorSupplierOf": [ activityTestPackage, chargingInformationPackage, networkCapabilityPackage, notificationPackage, transferStsiPackage, userInformationPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_contract_scfc_scfs /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
