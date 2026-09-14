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
import { CertificatePairAssertion, _decode_CertificatePairAssertion, _encode_CertificatePairAssertion } from "../CertificateExtensions/CertificatePairAssertion.ta.mjs";
// export { CertificatePairAssertion, _decode_CertificatePairAssertion, _encode_CertificatePairAssertion } from "../CertificateExtensions/CertificatePairAssertion.ta.mjs";
import { certPairAssertion } from "../CertificateExtensions/certPairAssertion.oa.mjs";
// export { certPairAssertion } from "../CertificateExtensions/certPairAssertion.oa.mjs";
import { id_mr_certificatePairMatch } from "../CertificateExtensions/id-mr-certificatePairMatch.va.mjs";
// export { id_mr_certificatePairMatch } from "../CertificateExtensions/id-mr-certificatePairMatch.va.mjs";


/**
 * @summary certificatePairMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * certificatePairMatch MATCHING-RULE ::= {
 *   SYNTAX       CertificatePairAssertion
 *   LDAP-SYNTAX  certPairAssertion.&id
 *   LDAP-NAME    {"certificatePairMatch"}
 *   LDAP-DESC    "X.509 Certificate Pair Match"
 *   ID           id-mr-certificatePairMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE<CertificatePairAssertion>}
 * @implements {MATCHING_RULE<CertificatePairAssertion>}
 */
export
const certificatePairMatch: MATCHING_RULE<CertificatePairAssertion> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_CertificatePairAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_CertificatePairAssertion,
    },
    "&ldapSyntax": certPairAssertion["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "certificatePairMatch" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "X.509 Certificate Pair Match" /* OBJECT_FIELD_SETTING */,
    "&id": id_mr_certificatePairMatch /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
