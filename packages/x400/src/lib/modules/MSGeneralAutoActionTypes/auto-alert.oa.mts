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
import {
    AutoActionType,
    _decode_AutoActionType,
    _encode_AutoActionType,
} from '../MSAbstractService/AutoActionType.ta.mjs';
export {
    AutoActionType,
    _decode_AutoActionType,
    _encode_AutoActionType,
} from '../MSAbstractService/AutoActionType.ta.mjs';
import { AUTO_ACTION_ERROR } from '../MSAbstractService/AUTO-ACTION-ERROR.oca.mjs';
export { AUTO_ACTION_ERROR } from '../MSAbstractService/AUTO-ACTION-ERROR.oca.mjs';
import {
    AutoAlertRegistrationParameter,
    _decode_AutoAlertRegistrationParameter,
    _encode_AutoAlertRegistrationParameter,
} from '../MSGeneralAutoActionTypes/AutoAlertRegistrationParameter.ta.mjs';
export {
    AutoAlertRegistrationParameter,
    _decode_AutoAlertRegistrationParameter,
    _encode_AutoAlertRegistrationParameter,
} from '../MSGeneralAutoActionTypes/AutoAlertRegistrationParameter.ta.mjs';
import { auto_alert_error } from '../MSGeneralAutoActionTypes/auto-alert-error.oa.mjs';
export { auto_alert_error } from '../MSGeneralAutoActionTypes/auto-alert-error.oa.mjs';
import { id_act_auto_alert } from '../MSObjectIdentifiers/id-act-auto-alert.va.mjs';
export { id_act_auto_alert } from '../MSObjectIdentifiers/id-act-auto-alert.va.mjs';
import { AUTO_ACTION } from '../MSAbstractService/AUTO-ACTION.oca.mjs';
export { AUTO_ACTION } from '../MSAbstractService/AUTO-ACTION.oca.mjs';

/* START_OF_SYMBOL_DEFINITION auto_alert */
/**
 * @summary auto_alert
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * auto-alert AUTO-ACTION ::= {
 *   REGISTRATION PARAMETER IS  AutoAlertRegistrationParameter
 *   ERRORS                     {auto-alert-error}
 *   IDENTIFIED BY              id-act-auto-alert
 * }
 * ```
 *
 * @constant
 * @type {AUTO_ACTION<AutoAlertRegistrationParameter>}
 * @implements {AUTO_ACTION<AutoAlertRegistrationParameter>}
 */
export const auto_alert: AUTO_ACTION<AutoAlertRegistrationParameter> = {
    class: 'AUTO-ACTION',
    decoderFor: {
        '&RegistrationParameter': _decode_AutoAlertRegistrationParameter,
    },
    encoderFor: {
        '&RegistrationParameter': _encode_AutoAlertRegistrationParameter,
    },
    '&Errors': [auto_alert_error] /* OBJECT_FIELD_SETTING */,
    '&id': id_act_auto_alert /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&RegistrationParameter': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION auto_alert */

/* eslint-enable */
