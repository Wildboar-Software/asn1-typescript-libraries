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
    PerRecipientReportDeliveryFields,
    _decode_PerRecipientReportDeliveryFields,
    _encode_PerRecipientReportDeliveryFields,
} from '../MTSAbstractService/PerRecipientReportDeliveryFields.ta.mjs';
import { id_att_per_recipient_report_delivery_fields } from '../MSObjectIdentifiers/id-att-per-recipient-report-delivery-fields.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary mt_per_recipient_report_delivery_fields
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-per-recipient-report-delivery-fields X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  PerRecipientReportDeliveryFields,
 *   NUMERATION             multi-valued,
 *   ID                     id-att-per-recipient-report-delivery-fields
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<PerRecipientReportDeliveryFields>}
 * @implements {X413ATTRIBUTE<PerRecipientReportDeliveryFields>}
 */
export const mt_per_recipient_report_delivery_fields: X413ATTRIBUTE<PerRecipientReportDeliveryFields> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_PerRecipientReportDeliveryFields,
    },
    encoderFor: {
        '&Type': _encode_PerRecipientReportDeliveryFields,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_per_recipient_report_delivery_fields /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
