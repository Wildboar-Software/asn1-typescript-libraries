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
import { type AUTO_ACTION_ERROR } from '../MSAbstractService/AUTO-ACTION-ERROR.oca.mjs';
import { auto_alert_error } from '../MSGeneralAutoActionTypes/auto-alert-error.oa.mjs';
import { modify_error } from '../MSAbstractService/modify-error.oa.mjs';
import { service_error } from '../MSAbstractService/service-error.oa.mjs';
import { security_error } from '../MTSAbstractService/security-error.oa.mjs';
import { message_group_error } from '../MSAbstractService/message-group-error.oa.mjs';
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

/* eslint-enable */
