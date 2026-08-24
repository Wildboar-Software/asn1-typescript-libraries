/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import {
    _decode_AutoActionType,
    _encode_AutoActionType,
} from '../MSAbstractService/AutoActionType.ta.mjs';
import {
    AutoModifyRegistrationParameter,
    _decode_AutoModifyRegistrationParameter,
    _encode_AutoModifyRegistrationParameter,
} from '../MSGeneralAutoActionTypes/AutoModifyRegistrationParameter.ta.mjs';
import { security_error } from '../MTSAbstractService/security-error.oa.mjs';
import { service_error } from '../MSAbstractService/service-error.oa.mjs';
import { modify_error } from '../MSAbstractService/modify-error.oa.mjs';
import { message_group_error } from '../MSAbstractService/message-group-error.oa.mjs';
import { id_act_auto_modify } from '../MSObjectIdentifiers/id-act-auto-modify.va.mjs';
import { type AUTO_ACTION } from '../MSAbstractService/AUTO-ACTION.oca.mjs';
/**
 * @summary auto_modify
 * @description
 *
 * Information object `auto_modify`. The Auto-modify auto-action enables the MS-user to
 * instruct the MS to apply modifications automatically to the attributes of an entry
 * provided that the entry satisfies given criteria. The auto-action is performed
 * whenever an entry of the Stored-message or Message-log entry-classes is created, i.e.,
 * when a message or report is delivered, or when a draft message is stored, or when a
 * message or probe is submitted… See ITU-T X.413 (1999), §13.2.
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

/* eslint-enable */
