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
import { CertificateExactAssertion, _decode_CertificateExactAssertion, _encode_CertificateExactAssertion } from "../CertificateExtensions/CertificateExactAssertion.ta.mjs";
// export { CertificateExactAssertion, _decode_CertificateExactAssertion, _encode_CertificateExactAssertion } from "../CertificateExtensions/CertificateExactAssertion.ta.mjs";
import { id_ldx_certExactAssertion } from "../CertificateExtensions/id-ldx-certExactAssertion.va.mjs";
// export { id_ldx_certExactAssertion } from "../CertificateExtensions/id-ldx-certExactAssertion.va.mjs";
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";


/**
 * @summary certExactAssertion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * certExactAssertion SYNTAX-NAME ::= {
 *   LDAP-DESC         "X.509 Certificate Exact Assertion"
 *   DIRECTORY SYNTAX  CertificateExactAssertion
 *   ID                id-ldx-certExactAssertion }
 * ```
 * 
 * @constant
 * @type {SYNTAX_NAME<CertificateExactAssertion>}
 * @implements {SYNTAX_NAME<CertificateExactAssertion>}
 */
export
const certExactAssertion: SYNTAX_NAME<CertificateExactAssertion> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_CertificateExactAssertion,
    },
    encoderFor: {
        "&Type": _encode_CertificateExactAssertion,
    },
    "&ldapDesc": "X.509 Certificate Exact Assertion" /* OBJECT_FIELD_SETTING */,
    "&id": id_ldx_certExactAssertion /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
