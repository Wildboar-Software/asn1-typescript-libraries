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
    PerRecipientProbeSubmissionFields,
    _decode_PerRecipientProbeSubmissionFields,
    _encode_PerRecipientProbeSubmissionFields,
} from '../MTSAbstractService/PerRecipientProbeSubmissionFields.ta.mjs';
import { id_att_per_recipient_probe_submission_fields } from '../MSObjectIdentifiers/id-att-per-recipient-probe-submission-fields.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary mt_per_recipient_probe_submission_fields
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-per-recipient-probe-submission-fields X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  PerRecipientProbeSubmissionFields,
 *   NUMERATION             multi-valued,
 *   ID                     id-att-per-recipient-probe-submission-fields
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<PerRecipientProbeSubmissionFields>}
 * @implements {X413ATTRIBUTE<PerRecipientProbeSubmissionFields>}
 */
export const mt_per_recipient_probe_submission_fields: X413ATTRIBUTE<PerRecipientProbeSubmissionFields> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_PerRecipientProbeSubmissionFields,
    },
    encoderFor: {
        '&Type': _encode_PerRecipientProbeSubmissionFields,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_per_recipient_probe_submission_fields /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
