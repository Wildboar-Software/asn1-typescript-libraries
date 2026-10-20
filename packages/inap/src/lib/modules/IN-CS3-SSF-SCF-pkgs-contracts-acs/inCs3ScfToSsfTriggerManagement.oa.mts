/* eslint-disable */
import { triggerManagementPackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/triggerManagementPackage.oa.mjs";
// export { triggerManagementPackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/triggerManagementPackage.oa.mjs";
import { id_inCs3ScfToSsfTriggerManagement } from "../IN-CS3-object-identifiers/id-inCs3ScfToSsfTriggerManagement.va.mjs";
// export { id_inCs3ScfToSsfTriggerManagement } from "../IN-CS3-object-identifiers/id-inCs3ScfToSsfTriggerManagement.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary inCs3ScfToSsfTriggerManagement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inCs3ScfToSsfTriggerManagement CONTRACT ::= {
 *   -- dialogue initiated by SCF with the trigger management operations CreateOrRemoveTriggerData or ManageTriggerData
 *   --The inCs3ScfToSsfTriggerManagement contract expresses the form of the service in which the SCF,
 *   -- a ROS-object of class scf, initiates the Trigger Management related contract
 *   -- A ROS-object of class ssf, in the context of a separate contract, responds to this initiation.
 *   INITIATOR CONSUMER OF
 *     {triggerManagementPackage}
 *   ID                     id-inCs3ScfToSsfTriggerManagement
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const inCs3ScfToSsfTriggerManagement: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&InitiatorConsumerOf": [ triggerManagementPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_inCs3ScfToSsfTriggerManagement /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
