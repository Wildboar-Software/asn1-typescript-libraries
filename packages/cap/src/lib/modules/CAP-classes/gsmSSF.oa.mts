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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ROS_OBJECT_CLASS } from "../Remote-Operations-Information-Objects/ROS-OBJECT-CLASS.oca.mjs";
import { type CONTRACT } from "../Remote-Operations-Information-Objects/CONTRACT.oca.mjs";
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
