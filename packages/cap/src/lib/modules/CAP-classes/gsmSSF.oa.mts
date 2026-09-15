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
import { capSsfToScfGeneric } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/capSsfToScfGeneric.oa.mjs";
// export { capSsfToScfGeneric } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/capSsfToScfGeneric.oa.mjs";
import { capAssistHandoffssfToScf } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/capAssistHandoffssfToScf.oa.mjs";
// export { capAssistHandoffssfToScf } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/capAssistHandoffssfToScf.oa.mjs";
import { capScfToSsfGeneric } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/capScfToSsfGeneric.oa.mjs";
// export { capScfToSsfGeneric } from "../CAP-gsmSSF-gsmSCF-pkgs-contracts-acs/capScfToSsfGeneric.oa.mjs";
import { id_rosObject_gsmSSF } from "../CAP-object-identifiers/id-rosObject-gsmSSF.va.mjs";
// export { id_rosObject_gsmSSF } from "../CAP-object-identifiers/id-rosObject-gsmSSF.va.mjs";


/**
 * @summary gsmSSF
 * @description
 *
 * gsmSSF ROS object. INITIATES `capSsfToScfGeneric` and
 * `capAssistHandoffssfToScf`; RESPONDS `capScfToSsfGeneric`. Rel-6 uses
 * the Rel-6 CONTRACT definitions of those names.
 * (3GPP TS 29.078 V19.0.0 clause 5.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gsmSSF ROS-OBJECT-CLASS ::= {
 *     INITIATES    {capSsfToScfGeneric|
 *         capAssistHandoffssfToScf}
 *     RESPONDS    {capScfToSsfGeneric}
 *     ID        id-rosObject-gsmSSF}
 * ```
 * 
 * @constant
 * @type {ROS_OBJECT_CLASS}
 * @implements {ROS_OBJECT_CLASS}
 */
export
const gsmSSF: ROS_OBJECT_CLASS = {
    class: "ROS-OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Initiates": [ capSsfToScfGeneric, capAssistHandoffssfToScf, ] /* OBJECT_FIELD_SETTING */,
    "&Responds": [ capScfToSsfGeneric, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_rosObject_gsmSSF /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
