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
import { SignedTestReport, _decode_SignedTestReport, _encode_SignedTestReport } from "../MachineReadableBiometricTestingAndReportingTestReport/SignedTestReport.ta.mjs";
// export { SignedTestReport, _decode_SignedTestReport, _encode_SignedTestReport } from "../MachineReadableBiometricTestingAndReportingTestReport/SignedTestReport.ta.mjs";
import { id_signedTestReport } from "../MachineReadableBiometricTestingAndReportingTestReport/id-signedTestReport.va.mjs";
// export { id_signedTestReport } from "../MachineReadableBiometricTestingAndReportingTestReport/id-signedTestReport.va.mjs";
import { type CONTENT_TYPE } from "../CryptographicMessageSyntax-2009/CONTENT-TYPE.oca.mjs";


/**
 * @summary signedTestReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * signedTestReport CONTENT-TYPE ::= {
 *     SignedTestReport
 *     IDENTIFIED BY id-signedTestReport
 * }
 * ```
 * 
 * @constant
 * @type {CONTENT_TYPE<SignedTestReport>}
 * @implements {CONTENT_TYPE<SignedTestReport>}
 */
export
const signedTestReport: CONTENT_TYPE<SignedTestReport> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_SignedTestReport,
    },
    encoderFor: {
        "&Type": _encode_SignedTestReport,
    },
    "&id": id_signedTestReport /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
