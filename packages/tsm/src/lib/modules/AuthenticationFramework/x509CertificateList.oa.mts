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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { CertificateList, _decode_CertificateList, _encode_CertificateList } from "../AuthenticationFramework/CertificateList.ta.mjs";
// export { CertificateList, _decode_CertificateList, _encode_CertificateList } from "../AuthenticationFramework/CertificateList.ta.mjs";
import { id_lsx_x509CertificateList } from "../AuthenticationFramework/id-lsx-x509CertificateList.va.mjs";
// export { id_lsx_x509CertificateList } from "../AuthenticationFramework/id-lsx-x509CertificateList.va.mjs";
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";


/**
 * @summary x509CertificateList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * x509CertificateList SYNTAX-NAME ::= {
 *   LDAP-DESC         "X.509 Certificate List"
 *   DIRECTORY SYNTAX  CertificateList
 *   ID                id-lsx-x509CertificateList }
 * ```
 * 
 * @constant
 * @type {SYNTAX_NAME<CertificateList>}
 * @implements {SYNTAX_NAME<CertificateList>}
 */
export
const x509CertificateList: SYNTAX_NAME<CertificateList> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_CertificateList,
    },
    encoderFor: {
        "&Type": _encode_CertificateList,
    },
    "&ldapDesc": "X.509 Certificate List" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_x509CertificateList /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
