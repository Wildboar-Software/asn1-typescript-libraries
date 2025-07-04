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
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import {
    ReportLocation,
    _decode_ReportLocation,
    _encode_ReportLocation,
} from '../MSGeneralAttributeTypes/ReportLocation.ta.mjs';
import { id_att_ac_correlated_report_list } from '../MSObjectIdentifiers/id-att-ac-correlated-report-list.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary ms_ac_correlated_report_list
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-ac-correlated-report-list X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  ReportLocation,
 *   NUMERATION             multi-valued,
 *   ID                     id-att-ac-correlated-report-list
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ReportLocation>}
 * @implements {X413ATTRIBUTE<ReportLocation>}
 */
export const ms_ac_correlated_report_list: X413ATTRIBUTE<ReportLocation> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ReportLocation,
    },
    encoderFor: {
        '&Type': _encode_ReportLocation,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_ac_correlated_report_list /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
