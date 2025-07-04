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
import * as $ from '@wildboar/asn1/functional';
import {
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta.mjs';
import {
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.mjs';
import {
    AutoAlertErrorIndication,
    _decode_AutoAlertErrorIndication,
    _encode_AutoAlertErrorIndication,
} from '../MSGeneralAutoActionTypes/AutoAlertErrorIndication.ta.mjs';
import { id_aae_auto_alert_error } from '../MSObjectIdentifiers/id-aae-auto-alert-error.va.mjs';
import { AUTO_ACTION_ERROR } from '../MSAbstractService/AUTO-ACTION-ERROR.oca.mjs';
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

/* eslint-enable */
