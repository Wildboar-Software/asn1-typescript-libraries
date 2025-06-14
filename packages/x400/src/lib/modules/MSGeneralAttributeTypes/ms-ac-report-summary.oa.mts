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
} from 'asn1-ts';
import {
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import {
    ReportSummary,
    _enum_for_ReportSummary,
    _decode_ReportSummary,
    _encode_ReportSummary,
} from '../MSGeneralAttributeTypes/ReportSummary.ta.mjs';
import { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa.mjs';
import { integerOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerOrderingMatch.oa.mjs';
import { id_att_ac_report_summary } from '../MSObjectIdentifiers/id-att-ac-report-summary.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION ms_ac_report_summary */
/**
 * @summary ms_ac_report_summary
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-ac-report-summary X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   ReportSummary,
 *   EQUALITY MATCHING-RULE  integerMatch,
 *   ORDERING MATCHING-RULE  integerOrderingMatch,
 *   NUMERATION              multi-valued,
 *   ID                      id-att-ac-report-summary
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ReportSummary>}
 * @implements {X413ATTRIBUTE<ReportSummary>}
 */
export const ms_ac_report_summary: X413ATTRIBUTE<ReportSummary> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ReportSummary,
    },
    encoderFor: {
        '&Type': _encode_ReportSummary,
    },
    '&equalityMatch': integerMatch /* OBJECT_FIELD_SETTING */,
    '&orderingMatch': integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_ac_report_summary /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ms_ac_report_summary */

/* eslint-enable */
