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
import {
    AutoActionType,
    _decode_AutoActionType,
    _encode_AutoActionType,
} from '../MSAbstractService/AutoActionType.ta';
export {
    AutoActionType,
    _decode_AutoActionType,
    _encode_AutoActionType,
} from '../MSAbstractService/AutoActionType.ta';
import { AUTO_ACTION_ERROR } from '../MSAbstractService/AUTO-ACTION-ERROR.oca';
export { AUTO_ACTION_ERROR } from '../MSAbstractService/AUTO-ACTION-ERROR.oca';
import {
    AutoModifyRegistrationParameter,
    _decode_AutoModifyRegistrationParameter,
    _encode_AutoModifyRegistrationParameter,
} from '../MSGeneralAutoActionTypes/AutoModifyRegistrationParameter.ta';
export {
    AutoModifyRegistrationParameter,
    _decode_AutoModifyRegistrationParameter,
    _encode_AutoModifyRegistrationParameter,
} from '../MSGeneralAutoActionTypes/AutoModifyRegistrationParameter.ta';
import { security_error } from '../MTSAbstractService/security-error.oa';
export { security_error } from '../MTSAbstractService/security-error.oa';
import { service_error } from '../MSAbstractService/service-error.oa';
export { service_error } from '../MSAbstractService/service-error.oa';
import { modify_error } from '../MSAbstractService/modify-error.oa';
export { modify_error } from '../MSAbstractService/modify-error.oa';
import { message_group_error } from '../MSAbstractService/message-group-error.oa';
export { message_group_error } from '../MSAbstractService/message-group-error.oa';
import { id_act_auto_modify } from '../MSObjectIdentifiers/id-act-auto-modify.va';
export { id_act_auto_modify } from '../MSObjectIdentifiers/id-act-auto-modify.va';
import { AUTO_ACTION } from '../MSAbstractService/AUTO-ACTION.oca';
export { AUTO_ACTION } from '../MSAbstractService/AUTO-ACTION.oca';

/* START_OF_SYMBOL_DEFINITION auto_modify */
/**
 * @summary auto_modify
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * auto-modify AUTO-ACTION ::= {
 *   REGISTRATION PARAMETER IS  AutoModifyRegistrationParameter
 *   ERRORS
 *     {security-error | service-error | modify-error | message-group-error}
 *   IDENTIFIED BY              id-act-auto-modify
 * }
 * ```
 *
 * @constant
 * @type {AUTO_ACTION<AutoModifyRegistrationParameter>}
 * @implements {AUTO_ACTION<AutoModifyRegistrationParameter>}
 */
export const auto_modify: AUTO_ACTION<AutoModifyRegistrationParameter> = {
    class: 'AUTO-ACTION',
    decoderFor: {
        '&RegistrationParameter': _decode_AutoModifyRegistrationParameter,
    },
    encoderFor: {
        '&RegistrationParameter': _encode_AutoModifyRegistrationParameter,
    },
    '&Errors': [
        security_error,
        service_error,
        modify_error,
        message_group_error,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_act_auto_modify /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&RegistrationParameter': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION auto_modify */

/* eslint-enable */
