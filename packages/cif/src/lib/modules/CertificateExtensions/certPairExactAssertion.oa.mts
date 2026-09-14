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
import { CertificatePairExactAssertion, _decode_CertificatePairExactAssertion, _encode_CertificatePairExactAssertion } from "../CertificateExtensions/CertificatePairExactAssertion.ta.mjs";
// export { CertificatePairExactAssertion, _decode_CertificatePairExactAssertion, _encode_CertificatePairExactAssertion } from "../CertificateExtensions/CertificatePairExactAssertion.ta.mjs";
import { id_ldx_certPairExactAssertion } from "../CertificateExtensions/id-ldx-certPairExactAssertion.va.mjs";
// export { id_ldx_certPairExactAssertion } from "../CertificateExtensions/id-ldx-certPairExactAssertion.va.mjs";
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";


/**
 * @summary certPairExactAssertion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * certPairExactAssertion SYNTAX-NAME ::= {
 *   LDAP-DESC         "X.509 Certificate Pair Exact Assertion"
 *   DIRECTORY SYNTAX  CertificatePairExactAssertion
 *   ID                id-ldx-certPairExactAssertion }
 * ```
 * 
 * @constant
 * @type {SYNTAX_NAME<CertificatePairExactAssertion>}
 * @implements {SYNTAX_NAME<CertificatePairExactAssertion>}
 */
export
const certPairExactAssertion: SYNTAX_NAME<CertificatePairExactAssertion> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_CertificatePairExactAssertion,
    },
    encoderFor: {
        "&Type": _encode_CertificatePairExactAssertion,
    },
    "&ldapDesc": "X.509 Certificate Pair Exact Assertion" /* OBJECT_FIELD_SETTING */,
    "&id": id_ldx_certPairExactAssertion /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
