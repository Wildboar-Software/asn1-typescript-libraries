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
import { gsmSRF_gsmSCF_contract } from "../CAP-gsmSCF-gsmSRF-pkgs-contracts-acs/gsmSRF-gsmSCF-contract.oa.mjs";
// export { gsmSRF_gsmSCF_contract } from "../CAP-gsmSCF-gsmSRF-pkgs-contracts-acs/gsmSRF-gsmSCF-contract.oa.mjs";
import { id_rosObject_gsmSRF } from "../CAP-object-identifiers/id-rosObject-gsmSRF.va.mjs";
// export { id_rosObject_gsmSRF } from "../CAP-object-identifiers/id-rosObject-gsmSRF.va.mjs";


/**
 * @summary gsmSRF
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gsmSRF ROS-OBJECT-CLASS ::= {
 *     INITIATES    {gsmSRF-gsmSCF-contract}
 *     ID        id-rosObject-gsmSRF}
 * ```
 * 
 * @constant
 * @type {ROS_OBJECT_CLASS}
 * @implements {ROS_OBJECT_CLASS}
 */
export
const gsmSRF: ROS_OBJECT_CLASS = {
    class: "ROS-OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Initiates": [ gsmSRF_gsmSCF_contract, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_rosObject_gsmSRF /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
