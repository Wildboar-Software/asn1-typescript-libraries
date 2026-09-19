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
import { PolicyMappingsSyntax, _decode_PolicyMappingsSyntax, _encode_PolicyMappingsSyntax } from "../CertificateExtensions/PolicyMappingsSyntax.ta.mjs";
// export { PolicyMappingsSyntax, _decode_PolicyMappingsSyntax, _encode_PolicyMappingsSyntax } from "../CertificateExtensions/PolicyMappingsSyntax.ta.mjs";
import { id_ce_policyMappings } from "../CertificateExtensions/id-ce-policyMappings.va.mjs";
// export { id_ce_policyMappings } from "../CertificateExtensions/id-ce-policyMappings.va.mjs";
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";


/**
 * @summary policyMappings
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * policyMappings EXTENSION ::= {
 *   SYNTAX         PolicyMappingsSyntax
 *   IDENTIFIED BY  id-ce-policyMappings }
 * ```
 * 
 * @constant
 * @type {EXTENSION<PolicyMappingsSyntax>}
 * @implements {EXTENSION<PolicyMappingsSyntax>}
 */
export
const policyMappings: EXTENSION<PolicyMappingsSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_PolicyMappingsSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_PolicyMappingsSyntax,
    },
    "&id": id_ce_policyMappings /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
