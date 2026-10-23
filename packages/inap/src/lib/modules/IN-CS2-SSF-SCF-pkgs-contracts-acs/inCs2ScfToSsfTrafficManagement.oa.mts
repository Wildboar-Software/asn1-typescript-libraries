/* eslint-disable */
import { trafficManagementPackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/trafficManagementPackage.oa.mjs";
// export { trafficManagementPackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/trafficManagementPackage.oa.mjs";
import { id_inCs2ScfToSsfTrafficManagement } from "../IN-CS2-object-identifiers/id-inCs2ScfToSsfTrafficManagement.va.mjs";
// export { id_inCs2ScfToSsfTrafficManagement } from "../IN-CS2-object-identifiers/id-inCs2ScfToSsfTrafficManagement.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary inCs2ScfToSsfTrafficManagement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inCs2ScfToSsfTrafficManagement CONTRACT ::= {
 *   -- dialogue initiated by SCF with CallGap
 *   INITIATOR CONSUMER OF  {trafficManagementPackage}
 *   ID                     id-inCs2ScfToSsfTrafficManagement
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const inCs2ScfToSsfTrafficManagement: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&InitiatorConsumerOf": [ trafficManagementPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_inCs2ScfToSsfTrafficManagement /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
