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
 * Information object `auto_correlate_reports`. The Auto-correlate-reports auto-action
 * enables the MS-user to instruct the MS to correlate, automatically, delivered- report
 * entries of the Delivery entry-class with the submitted messages and probes to which
 * they are related. The auto- action also records each successful invocation of the
 * MS-cancel-deferred-delivery abstract-operation. See ITU-T X.413 (1999), §13.3.
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
