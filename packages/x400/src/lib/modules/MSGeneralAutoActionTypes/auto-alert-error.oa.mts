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
    Priority,
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta.mjs';
export {
    Priority,
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta.mjs';
import {
    Code,
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.mjs';
export {
    Code,
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.mjs';
import {
    AutoAlertErrorIndication,
    _decode_AutoAlertErrorIndication,
    _encode_AutoAlertErrorIndication,
} from '../MSGeneralAutoActionTypes/AutoAlertErrorIndication.ta.mjs';
export {
    AutoAlertErrorIndication,
    _decode_AutoAlertErrorIndication,
    _encode_AutoAlertErrorIndication,
} from '../MSGeneralAutoActionTypes/AutoAlertErrorIndication.ta.mjs';
import { id_aae_auto_alert_error } from '../MSObjectIdentifiers/id-aae-auto-alert-error.va.mjs';
export { id_aae_auto_alert_error } from '../MSObjectIdentifiers/id-aae-auto-alert-error.va.mjs';
import { AUTO_ACTION_ERROR } from '../MSAbstractService/AUTO-ACTION-ERROR.oca.mjs';
export { AUTO_ACTION_ERROR } from '../MSAbstractService/AUTO-ACTION-ERROR.oca.mjs';

/* START_OF_SYMBOL_DEFINITION auto_alert_error */
/**
 * @summary auto_alert_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * auto-alert-error AUTO-ACTION-ERROR ::= {
 *   PARAMETER  SEQUENCE SIZE (1..ub-alert-addresses) OF AutoAlertErrorIndication
 *   CODE       global:id-aae-auto-alert-error
 * }
 * ```
 *
 * @constant
 * @type {AUTO_ACTION_ERROR<AutoAlertErrorIndication[]>}
 * @implements {AUTO_ACTION_ERROR<AutoAlertErrorIndication[]>}
 */
export const auto_alert_error: AUTO_ACTION_ERROR<AutoAlertErrorIndication[]> = {
    class: 'ERROR',
    decoderFor: {
        '&ParameterType': $._decodeSequenceOf<AutoAlertErrorIndication>(
            () => _decode_AutoAlertErrorIndication
        ),
    },
    encoderFor: {
        '&ParameterType': $._encodeSequenceOf<AutoAlertErrorIndication>(
            () => _encode_AutoAlertErrorIndication,
            $.BER
        ),
    },
    '&errorCode': {
        global: id_aae_auto_alert_error,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION auto_alert_error */

/* eslint-enable */
