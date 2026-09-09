/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { type ROS_OBJECT_CLASS } from "../Remote-Operations-Information-Objects/ROS-OBJECT-CLASS.oca.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";
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
