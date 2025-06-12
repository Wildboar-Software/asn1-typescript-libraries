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
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.js';
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.js';
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.js';
export { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.js';
import {
    ReportSummary,
    _enum_for_ReportSummary,
    ReportSummary_no_report_requested /* IMPORTED_LONG_ENUMERATION_ITEM */,
    no_report_requested /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ReportSummary_no_report_received /* IMPORTED_LONG_ENUMERATION_ITEM */,
    no_report_received /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ReportSummary_report_outstanding /* IMPORTED_LONG_ENUMERATION_ITEM */,
    report_outstanding /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ReportSummary_delivery_cancelled /* IMPORTED_LONG_ENUMERATION_ITEM */,
    delivery_cancelled /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ReportSummary_delivery_report_from_another_recipient /* IMPORTED_LONG_ENUMERATION_ITEM */,
    delivery_report_from_another_recipient /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ReportSummary_non_delivery_report_from_another_recipient /* IMPORTED_LONG_ENUMERATION_ITEM */,
    non_delivery_report_from_another_recipient /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ReportSummary_delivery_report_from_intended_recipient /* IMPORTED_LONG_ENUMERATION_ITEM */,
    delivery_report_from_intended_recipient /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ReportSummary_non_delivery_report_from_intended_recipient /* IMPORTED_LONG_ENUMERATION_ITEM */,
    non_delivery_report_from_intended_recipient /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ReportSummary,
    _encode_ReportSummary,
} from '../MSGeneralAttributeTypes/ReportSummary.ta.js';
export {
    ReportSummary,
    _enum_for_ReportSummary,
    ReportSummary_no_report_requested /* IMPORTED_LONG_ENUMERATION_ITEM */,
    no_report_requested /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ReportSummary_no_report_received /* IMPORTED_LONG_ENUMERATION_ITEM */,
    no_report_received /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ReportSummary_report_outstanding /* IMPORTED_LONG_ENUMERATION_ITEM */,
    report_outstanding /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ReportSummary_delivery_cancelled /* IMPORTED_LONG_ENUMERATION_ITEM */,
    delivery_cancelled /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ReportSummary_delivery_report_from_another_recipient /* IMPORTED_LONG_ENUMERATION_ITEM */,
    delivery_report_from_another_recipient /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ReportSummary_non_delivery_report_from_another_recipient /* IMPORTED_LONG_ENUMERATION_ITEM */,
    non_delivery_report_from_another_recipient /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ReportSummary_delivery_report_from_intended_recipient /* IMPORTED_LONG_ENUMERATION_ITEM */,
    delivery_report_from_intended_recipient /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ReportSummary_non_delivery_report_from_intended_recipient /* IMPORTED_LONG_ENUMERATION_ITEM */,
    non_delivery_report_from_intended_recipient /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ReportSummary,
    _encode_ReportSummary,
} from '../MSGeneralAttributeTypes/ReportSummary.ta.js';
import { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa.js';
export { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa.js';
import { integerOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerOrderingMatch.oa.js';
export { integerOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerOrderingMatch.oa.js';
import { id_att_ac_report_summary } from '../MSObjectIdentifiers/id-att-ac-report-summary.va.js';
export { id_att_ac_report_summary } from '../MSObjectIdentifiers/id-att-ac-report-summary.va.js';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.js';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.js';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.js";

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
