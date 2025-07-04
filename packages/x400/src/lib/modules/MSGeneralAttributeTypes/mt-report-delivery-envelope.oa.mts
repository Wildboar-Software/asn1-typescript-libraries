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
    ReportDeliveryEnvelope,
    _decode_ReportDeliveryEnvelope,
    _encode_ReportDeliveryEnvelope,
} from '../MTSAbstractService/ReportDeliveryEnvelope.ta.mjs';
import { id_att_report_delivery_envelope } from '../MSObjectIdentifiers/id-att-report-delivery-envelope.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary mt_report_delivery_envelope
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-report-delivery-envelope X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  ReportDeliveryEnvelope,
 *   NUMERATION             single-valued,
 *   ID                     id-att-report-delivery-envelope
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ReportDeliveryEnvelope>}
 * @implements {X413ATTRIBUTE<ReportDeliveryEnvelope>}
 */
export const mt_report_delivery_envelope: X413ATTRIBUTE<ReportDeliveryEnvelope> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ReportDeliveryEnvelope,
    },
    encoderFor: {
        '&Type': _encode_ReportDeliveryEnvelope,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_report_delivery_envelope /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
