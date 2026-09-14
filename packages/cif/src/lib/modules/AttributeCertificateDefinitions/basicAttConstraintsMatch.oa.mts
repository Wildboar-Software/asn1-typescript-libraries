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
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
import { BasicAttConstraintsSyntax, _decode_BasicAttConstraintsSyntax, _encode_BasicAttConstraintsSyntax } from "../AttributeCertificateDefinitions/BasicAttConstraintsSyntax.ta.mjs";
// export { BasicAttConstraintsSyntax, _decode_BasicAttConstraintsSyntax, _encode_BasicAttConstraintsSyntax } from "../AttributeCertificateDefinitions/BasicAttConstraintsSyntax.ta.mjs";
import { id_mr_basicAttConstraintsMatch } from "../AttributeCertificateDefinitions/id-mr-basicAttConstraintsMatch.va.mjs";
// export { id_mr_basicAttConstraintsMatch } from "../AttributeCertificateDefinitions/id-mr-basicAttConstraintsMatch.va.mjs";


/**
 * @summary basicAttConstraintsMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * basicAttConstraintsMatch MATCHING-RULE ::= {
 *   SYNTAX  BasicAttConstraintsSyntax
 *   ID      id-mr-basicAttConstraintsMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE<BasicAttConstraintsSyntax>}
 * @implements {MATCHING_RULE<BasicAttConstraintsSyntax>}
 */
export
const basicAttConstraintsMatch: MATCHING_RULE<BasicAttConstraintsSyntax> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_BasicAttConstraintsSyntax,
    },
    encoderFor: {
        "&AssertionType": _encode_BasicAttConstraintsSyntax,
    },
    "&id": id_mr_basicAttConstraintsMatch /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
