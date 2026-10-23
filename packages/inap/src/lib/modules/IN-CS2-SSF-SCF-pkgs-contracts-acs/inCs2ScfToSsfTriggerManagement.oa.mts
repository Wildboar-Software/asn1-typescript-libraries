/* eslint-disable */
import { triggerManagementPackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/triggerManagementPackage.oa.mjs";
// export { triggerManagementPackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/triggerManagementPackage.oa.mjs";
import { id_inCs2ScfToSsfTriggerManagement } from "../IN-CS2-object-identifiers/id-inCs2ScfToSsfTriggerManagement.va.mjs";
// export { id_inCs2ScfToSsfTriggerManagement } from "../IN-CS2-object-identifiers/id-inCs2ScfToSsfTriggerManagement.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary inCs2ScfToSsfTriggerManagement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inCs2ScfToSsfTriggerManagement CONTRACT ::= {
 *   -- dialogue initiated by SCF with Manage Trigger Data
 *   INITIATOR CONSUMER OF  {triggerManagementPackage}
 *   ID                     id-inCs2ScfToSsfTriggerManagement
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const inCs2ScfToSsfTriggerManagement: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&InitiatorConsumerOf": [ triggerManagementPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_inCs2ScfToSsfTriggerManagement /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
