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
import { RoleSpecCertIdentifierSyntax, _decode_RoleSpecCertIdentifierSyntax, _encode_RoleSpecCertIdentifierSyntax } from "../AttributeCertificateDefinitions/RoleSpecCertIdentifierSyntax.ta.mjs";
// export { RoleSpecCertIdentifierSyntax, _decode_RoleSpecCertIdentifierSyntax, _encode_RoleSpecCertIdentifierSyntax } from "../AttributeCertificateDefinitions/RoleSpecCertIdentifierSyntax.ta.mjs";
import { id_mr_roleSpecCertIdMatch } from "../AttributeCertificateDefinitions/id-mr-roleSpecCertIdMatch.va.mjs";
// export { id_mr_roleSpecCertIdMatch } from "../AttributeCertificateDefinitions/id-mr-roleSpecCertIdMatch.va.mjs";


/**
 * @summary roleSpecCertIdMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * roleSpecCertIdMatch MATCHING-RULE ::= {
 *   SYNTAX  RoleSpecCertIdentifierSyntax
 *   ID      id-mr-roleSpecCertIdMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE<RoleSpecCertIdentifierSyntax>}
 * @implements {MATCHING_RULE<RoleSpecCertIdentifierSyntax>}
 */
export
const roleSpecCertIdMatch: MATCHING_RULE<RoleSpecCertIdentifierSyntax> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_RoleSpecCertIdentifierSyntax,
    },
    encoderFor: {
        "&AssertionType": _encode_RoleSpecCertIdentifierSyntax,
    },
    "&id": id_mr_roleSpecCertIdMatch /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
