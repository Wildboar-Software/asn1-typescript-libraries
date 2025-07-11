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
import { id_act_auto_correlate_reports } from '../MSObjectIdentifiers/id-act-auto-correlate-reports.va.mjs';
import { type AUTO_ACTION } from '../MSAbstractService/AUTO-ACTION.oca.mjs';
/**
 * @summary auto_correlate_reports
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * auto-correlate-reports AUTO-ACTION ::= {
 *   IDENTIFIED BY  id-act-auto-correlate-reports
 * }
 * ```
 *
 * @constant
 * @type {AUTO_ACTION}
 * @implements {AUTO_ACTION}
 */
export const auto_correlate_reports: AUTO_ACTION = {
    class: 'AUTO-ACTION',
    decoderFor: {
        '&RegistrationParameter': undefined,
    },
    encoderFor: {
        '&RegistrationParameter': undefined,
    },
    '&id': id_act_auto_correlate_reports /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&RegistrationParameter': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
