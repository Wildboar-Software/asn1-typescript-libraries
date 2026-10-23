/* eslint-disable */
import { statusReportingPackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/statusReportingPackage.oa.mjs";
// export { statusReportingPackage } from "../IN-CS3-SSF-SCF-pkgs-contracts-acs/statusReportingPackage.oa.mjs";
import { id_inCs3ScfToSsfStatusReporting } from "../IN-CS3-object-identifiers/id-inCs3ScfToSsfStatusReporting.va.mjs";
// export { id_inCs3ScfToSsfStatusReporting } from "../IN-CS3-object-identifiers/id-inCs3ScfToSsfStatusReporting.va.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";


/**
 * @summary inCs3ScfToSsfStatusReporting
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inCs3ScfToSsfStatusReporting CONTRACT ::= {
 *   -- dialogue initiated by SCF with StatusReporting Operations
 *   --The inCs3ScfToSsfStatusReporting contract expresses the form of the service
 *   --in which the SCF, a ROS-object of class scf, initiates the Status Reporting related contract.
 *   --A ROS-object of class ssf, responds to this contract.
 *   INITIATOR CONSUMER OF
 *     {statusReportingPackage}
 *   ID                     id-inCs3ScfToSsfStatusReporting
 * }
 * ```
 * 
 * @constant
 * @type {CONTRACT}
 * @implements {CONTRACT}
 */
export
const inCs3ScfToSsfStatusReporting: CONTRACT = {
    class: "CONTRACT",
    decoderFor: {
    },
    encoderFor: {
    },
    "&InitiatorConsumerOf": [ statusReportingPackage, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_inCs3ScfToSsfStatusReporting /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
