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
    PerRecipientReport,
    _decode_PerRecipientReport,
    _encode_PerRecipientReport,
} from '../MSGeneralAttributeTypes/PerRecipientReport.ta.mjs';
import { id_att_ac_uncorrelated_report_list } from '../MSObjectIdentifiers/id-att-ac-uncorrelated-report-list.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary ms_ac_uncorrelated_report_list
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-ac-uncorrelated-report-list X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  PerRecipientReport,
 *   NUMERATION             multi-valued,
 *   ID                     id-att-ac-uncorrelated-report-list
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<PerRecipientReport>}
 * @implements {X413ATTRIBUTE<PerRecipientReport>}
 */
export const ms_ac_uncorrelated_report_list: X413ATTRIBUTE<PerRecipientReport> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_PerRecipientReport,
    },
    encoderFor: {
        '&Type': _encode_PerRecipientReport,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_ac_uncorrelated_report_list /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
