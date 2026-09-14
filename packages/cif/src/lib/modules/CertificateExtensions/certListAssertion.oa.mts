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
import { CertificateListAssertion, _decode_CertificateListAssertion, _encode_CertificateListAssertion } from "../CertificateExtensions/CertificateListAssertion.ta.mjs";
// export { CertificateListAssertion, _decode_CertificateListAssertion, _encode_CertificateListAssertion } from "../CertificateExtensions/CertificateListAssertion.ta.mjs";
import { id_ldx_certListAssertion } from "../CertificateExtensions/id-ldx-certListAssertion.va.mjs";
// export { id_ldx_certListAssertion } from "../CertificateExtensions/id-ldx-certListAssertion.va.mjs";
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";


/**
 * @summary certListAssertion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * certListAssertion SYNTAX-NAME ::= {
 *   LDAP-DESC         "X.509 Certificate List Assertion"
 *   DIRECTORY SYNTAX  CertificateListAssertion
 *   ID                id-ldx-certListAssertion }
 * ```
 * 
 * @constant
 * @type {SYNTAX_NAME<CertificateListAssertion>}
 * @implements {SYNTAX_NAME<CertificateListAssertion>}
 */
export
const certListAssertion: SYNTAX_NAME<CertificateListAssertion> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_CertificateListAssertion,
    },
    encoderFor: {
        "&Type": _encode_CertificateListAssertion,
    },
    "&ldapDesc": "X.509 Certificate List Assertion" /* OBJECT_FIELD_SETTING */,
    "&id": id_ldx_certListAssertion /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
