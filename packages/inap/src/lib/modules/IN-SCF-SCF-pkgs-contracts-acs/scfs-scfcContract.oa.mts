/* eslint-disable */
import { scf_scfConnectionPackage } from "../IN-SCF-SCF-pkgs-contracts-acs/scf-scfConnectionPackage.oa.mjs";
// export { scf_scfConnectionPackage } from "../IN-SCF-SCF-pkgs-contracts-acs/scf-scfConnectionPackage.oa.mjs";
import { activityTestPackage } from "../IN-SSF-SCF-pkgs-contracts-acs/activityTestPackage.oa.mjs";
// export { activityTestPackage } from "../IN-SSF-SCF-pkgs-contracts-acs/activityTestPackage.oa.mjs";
import { chargingInformationPackage } from "../IN-SCF-SCF-pkgs-contracts-acs/chargingInformationPackage.oa.mjs";
// export { chargingInformationPackage } from "../IN-SCF-SCF-pkgs-contracts-acs/chargingInformationPackage.oa.mjs";
import { initiateCallPackage } from "../IN-SCF-SCF-pkgs-contracts-acs/initiateCallPackage.oa.mjs";
// export { initiateCallPackage } from "../IN-SCF-SCF-pkgs-contracts-acs/initiateCallPackage.oa.mjs";
import { networkCapabilityPackage } from "../IN-SCF-SCF-pkgs-contracts-acs/networkCapabilityPackage.oa.mjs";
// export { networkCapabilityPackage } from "../IN-SCF-SCF-pkgs-contracts-acs/networkCapabilityPackage.oa.mjs";
import { notificationPackage } from "../IN-SCF-SCF-pkgs-contracts-acs/notificationPackage.oa.mjs";
// export { notificationPackage } from "../IN-SCF-SCF-pkgs-contracts-acs/notificationPackage.oa.mjs";
import { transferStsiPackage } from "../IN-SCF-SCF-pkgs-contracts-acs/transferStsiPackage.oa.mjs";
// export { transferStsiPackage } from "../IN-SCF-SCF-pkgs-contracts-acs/transferStsiPackage.oa.mjs";
import { userInformationPackage } from "../IN-SCF-SCF-pkgs-contracts-acs/userInformationPackage.oa.mjs";
// export { userInformationPackage } from "../IN-SCF-SCF-pkgs-contracts-acs/userInformationPackage.oa.mjs";
import { handlingInformationPackage } from "../IN-SCF-SCF-pkgs-contracts-acs/handlingInformationPackage.oa.mjs";
// export { handlingInformationPackage } from "../IN-SCF-SCF-pkgs-contracts-acs/handlingInformationPackage.oa.mjs";
import { id_contract_scfs_scfc } from "../IN-object-identifiers/id-contract-scfs-scfc.va.mjs";
// export { id_contract_scfs_scfc } from "../IN-object-identifiers/id-contract-scfs-scfc.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary scfs_scfcContract
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scfs-scfcContract CONTRACT ::= {
 *   CONNECTION             scf-scfConnectionPackage
 *   INITIATOR CONSUMER OF
 *     {activityTestPackage | chargingInformationPackage |
 *       initiateCallPackage | networkCapabilityPackage |
 *       notificationPackage | transferStsiPackage |
 *       userInformationPackage}
 *   RESPONDER CONSUMER OF
 *     {activityTestPackage | handlingInformationPackage |
 *       transferStsiPackage}
 *   ID                     id-contract-scfs-scfc
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const scfs_scfcContract: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&connection": scf_scfConnectionPackage /* OBJECT_FIELD_SETTING */,
    "&InitiatorConsumerOf": [ activityTestPackage, chargingInformationPackage, initiateCallPackage, networkCapabilityPackage, notificationPackage, transferStsiPackage, userInformationPackage, ] /* OBJECT_FIELD_SETTING */,
    "&InitiatorSupplierOf": [ activityTestPackage, handlingInformationPackage, transferStsiPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_contract_scfs_scfc /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
