/* eslint-disable */
import { cancelPackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/cancelPackage.oa.mjs";
// export { cancelPackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/cancelPackage.oa.mjs";
import { statusReportingPackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/statusReportingPackage.oa.mjs";
// export { statusReportingPackage } from "../IN-CS2-SSF-SCF-pkgs-contracts-acs/statusReportingPackage.oa.mjs";
import { id_inCs2ScfToSsfStatusReporting } from "../IN-CS2-object-identifiers/id-inCs2ScfToSsfStatusReporting.va.mjs";
// export { id_inCs2ScfToSsfStatusReporting } from "../IN-CS2-object-identifiers/id-inCs2ScfToSsfStatusReporting.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary inCs2ScfToSsfStatusReporting
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inCs2ScfToSsfStatusReporting CONTRACT ::= {
 *   -- dialogue initiated by SCF with StatusReporting Operations
 *   INITIATOR CONSUMER OF
 *     {cancelPackage |
 *       statusReportingPackage}
 *   ID                     id-inCs2ScfToSsfStatusReporting
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const inCs2ScfToSsfStatusReporting: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&InitiatorConsumerOf": [ cancelPackage, statusReportingPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_inCs2ScfToSsfStatusReporting /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
