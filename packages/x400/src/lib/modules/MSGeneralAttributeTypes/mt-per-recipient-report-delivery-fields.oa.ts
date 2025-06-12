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
    PerRecipientReportDeliveryFields,
    _decode_PerRecipientReportDeliveryFields,
    _encode_PerRecipientReportDeliveryFields,
} from '../MTSAbstractService/PerRecipientReportDeliveryFields.ta.js';
export {
    PerRecipientReportDeliveryFields,
    _decode_PerRecipientReportDeliveryFields,
    _encode_PerRecipientReportDeliveryFields,
} from '../MTSAbstractService/PerRecipientReportDeliveryFields.ta.js';
import { id_att_per_recipient_report_delivery_fields } from '../MSObjectIdentifiers/id-att-per-recipient-report-delivery-fields.va.js';
export { id_att_per_recipient_report_delivery_fields } from '../MSObjectIdentifiers/id-att-per-recipient-report-delivery-fields.va.js';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.js';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.js';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.js";

/* START_OF_SYMBOL_DEFINITION mt_per_recipient_report_delivery_fields */
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
/* END_OF_SYMBOL_DEFINITION mt_per_recipient_report_delivery_fields */

/* eslint-enable */
