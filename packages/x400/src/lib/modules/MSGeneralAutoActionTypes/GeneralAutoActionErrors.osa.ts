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
import * as $ from 'asn1-ts/dist/functional.mjs';
import { AUTO_ACTION_ERROR } from '../MSAbstractService/AUTO-ACTION-ERROR.oca.js';
export { AUTO_ACTION_ERROR } from '../MSAbstractService/AUTO-ACTION-ERROR.oca.js';
import { auto_alert_error } from '../MSGeneralAutoActionTypes/auto-alert-error.oa.js';
export { auto_alert_error } from '../MSGeneralAutoActionTypes/auto-alert-error.oa.js';
import { modify_error } from '../MSAbstractService/modify-error.oa.js';
export { modify_error } from '../MSAbstractService/modify-error.oa.js';
import { service_error } from '../MSAbstractService/service-error.oa.js';
export { service_error } from '../MSAbstractService/service-error.oa.js';
import { security_error } from '../MTSAbstractService/security-error.oa.js';
export { security_error } from '../MTSAbstractService/security-error.oa.js';
import { message_group_error } from '../MSAbstractService/message-group-error.oa.js';
export { message_group_error } from '../MSAbstractService/message-group-error.oa.js';

/* START_OF_SYMBOL_DEFINITION GeneralAutoActionErrors */
/**
 * @summary GeneralAutoActionErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralAutoActionErrors AUTO-ACTION-ERROR ::= {auto-alert-error | modify-error | service-error | security-error |
 *    message-group-error, ... -- For future extension additions --}
 * ```
 *
 * @constant
 * @type {AUTO_ACTION_ERROR[]}
 *
 */
export const GeneralAutoActionErrors: AUTO_ACTION_ERROR[] = [
    auto_alert_error,
    modify_error,
    service_error,
    security_error,
    message_group_error,
];
/* END_OF_SYMBOL_DEFINITION GeneralAutoActionErrors */

/* eslint-enable */
