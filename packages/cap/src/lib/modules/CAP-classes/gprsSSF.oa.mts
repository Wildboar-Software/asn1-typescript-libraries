/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { type ROS_OBJECT_CLASS } from "../Remote-Operations-Information-Objects/ROS-OBJECT-CLASS.oca.mjs";
import { capGprsSsfToScf } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/capGprsSsfToScf.oa.mjs";
// export { capGprsSsfToScf } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/capGprsSsfToScf.oa.mjs";
import { capGsmScfToGprsSsf } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/capGsmScfToGprsSsf.oa.mjs";
// export { capGsmScfToGprsSsf } from "../CAP-gprsSSF-gsmSCF-pkgs-contracts-acs/capGsmScfToGprsSsf.oa.mjs";
import { id_rosObject_gprsSSF } from "../CAP-object-identifiers/id-rosObject-gprsSSF.va.mjs";
// export { id_rosObject_gprsSSF } from "../CAP-object-identifiers/id-rosObject-gprsSSF.va.mjs";


/**
 * @summary gprsSSF
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gprsSSF ROS-OBJECT-CLASS ::= {
 *     INITIATES    {capGprsSsfToScf}
 *     RESPONDS    {capGsmScfToGprsSsf}
 *     ID        id-rosObject-gprsSSF}
 * ```
 * 
 * @constant
 * @type {ROS_OBJECT_CLASS}
 * @implements {ROS_OBJECT_CLASS}
 */
export
const gprsSSF: ROS_OBJECT_CLASS = {
    class: "ROS-OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Initiates": [ capGprsSsfToScf, ] /* OBJECT_FIELD_SETTING */,
    "&Responds": [ capGsmScfToGprsSsf, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_rosObject_gprsSSF /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
