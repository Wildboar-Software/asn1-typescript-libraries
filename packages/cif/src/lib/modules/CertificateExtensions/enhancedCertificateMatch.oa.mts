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
import { EnhancedCertificateAssertion, _decode_EnhancedCertificateAssertion, _encode_EnhancedCertificateAssertion } from "../CertificateExtensions/EnhancedCertificateAssertion.ta.mjs";
// export { EnhancedCertificateAssertion, _decode_EnhancedCertificateAssertion, _encode_EnhancedCertificateAssertion } from "../CertificateExtensions/EnhancedCertificateAssertion.ta.mjs";
import { id_mr_enhancedCertificateMatch } from "../CertificateExtensions/id-mr-enhancedCertificateMatch.va.mjs";
// export { id_mr_enhancedCertificateMatch } from "../CertificateExtensions/id-mr-enhancedCertificateMatch.va.mjs";


/**
 * @summary enhancedCertificateMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * enhancedCertificateMatch MATCHING-RULE ::= {
 *   SYNTAX  EnhancedCertificateAssertion
 *   ID      id-mr-enhancedCertificateMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE<EnhancedCertificateAssertion>}
 * @implements {MATCHING_RULE<EnhancedCertificateAssertion>}
 */
export
const enhancedCertificateMatch: MATCHING_RULE<EnhancedCertificateAssertion> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_EnhancedCertificateAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_EnhancedCertificateAssertion,
    },
    "&id": id_mr_enhancedCertificateMatch /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
