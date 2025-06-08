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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca';
export { EXTENSION } from '../MTSAbstractService/EXTENSION.oca';
import { originating_MTA_certificate } from '../MTSAbstractService/originating-MTA-certificate.oa';
export { originating_MTA_certificate } from '../MTSAbstractService/originating-MTA-certificate.oa';
import { proof_of_submission } from '../MTSAbstractService/proof-of-submission.oa';
export { proof_of_submission } from '../MTSAbstractService/proof-of-submission.oa';
import { PrivateExtensions } from '../MTSAbstractService/PrivateExtensions.osa';
export { PrivateExtensions } from '../MTSAbstractService/PrivateExtensions.osa';

/* START_OF_SYMBOL_DEFINITION MessageSubmissionResultExtensions */
/**
 * @summary MessageSubmissionResultExtensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageSubmissionResultExtensions EXTENSION ::= {-- May contain the following extensions, private extensions, and future standardised extensions,
 *    -- at most one instance of each extension type:
 *    originating-MTA-certificate | proof-of-submission | PrivateExtensions,
 *    ...}
 * ```
 *
 * @constant
 * @type {EXTENSION[]}
 *
 */
export const MessageSubmissionResultExtensions: EXTENSION[] = [
    originating_MTA_certificate,
    proof_of_submission,
    ...PrivateExtensions,
];
/* END_OF_SYMBOL_DEFINITION MessageSubmissionResultExtensions */

/* eslint-enable */
