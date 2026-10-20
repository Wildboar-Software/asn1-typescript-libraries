/* eslint-disable */
import { triggerManagementPackage } from "../IN-SSF-SCF-pkgs-contracts-acs/triggerManagementPackage.oa.mjs";
// export { triggerManagementPackage } from "../IN-SSF-SCF-pkgs-contracts-acs/triggerManagementPackage.oa.mjs";
import { id_inScfToSsfTriggerManagement } from "../IN-object-identifiers/id-inScfToSsfTriggerManagement.va.mjs";
// export { id_inScfToSsfTriggerManagement } from "../IN-object-identifiers/id-inScfToSsfTriggerManagement.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary inScfToSsfTriggerManagement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inScfToSsfTriggerManagement CONTRACT ::= {
 *   -- dialogue initiated by SCF with the trigger management operations CreateOrRemoveTriggerData or ManageTriggerData
 *   --The inScfToSsfTriggerManagement contract expresses the form of the service in which the SCF,
 *   -- a ROS-object of class scf, initiates the Trigger Management related contract
 *   -- A ROS-object of class ssf, in the context of a separate contract, responds to this initiation.
 *   INITIATOR CONSUMER OF
 *     {triggerManagementPackage}
 *   ID                     id-inScfToSsfTriggerManagement
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const inScfToSsfTriggerManagement: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&InitiatorConsumerOf": [ triggerManagementPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_inScfToSsfTriggerManagement /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
