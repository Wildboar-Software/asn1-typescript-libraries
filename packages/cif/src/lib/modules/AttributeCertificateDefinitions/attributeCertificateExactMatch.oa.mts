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
import { AttributeCertificateExactAssertion, _decode_AttributeCertificateExactAssertion, _encode_AttributeCertificateExactAssertion } from "../AttributeCertificateDefinitions/AttributeCertificateExactAssertion.ta.mjs";
// export { AttributeCertificateExactAssertion, _decode_AttributeCertificateExactAssertion, _encode_AttributeCertificateExactAssertion } from "../AttributeCertificateDefinitions/AttributeCertificateExactAssertion.ta.mjs";
import { id_mr_attributeCertificateExactMatch } from "../AttributeCertificateDefinitions/id-mr-attributeCertificateExactMatch.va.mjs";
// export { id_mr_attributeCertificateExactMatch } from "../AttributeCertificateDefinitions/id-mr-attributeCertificateExactMatch.va.mjs";


/**
 * @summary attributeCertificateExactMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * attributeCertificateExactMatch MATCHING-RULE ::= {
 *   SYNTAX  AttributeCertificateExactAssertion
 *   ID      id-mr-attributeCertificateExactMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE<AttributeCertificateExactAssertion>}
 * @implements {MATCHING_RULE<AttributeCertificateExactAssertion>}
 */
export
const attributeCertificateExactMatch: MATCHING_RULE<AttributeCertificateExactAssertion> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_AttributeCertificateExactAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_AttributeCertificateExactAssertion,
    },
    "&id": id_mr_attributeCertificateExactMatch /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
