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
    ProbeSubmissionEnvelope,
    _decode_ProbeSubmissionEnvelope,
    _encode_ProbeSubmissionEnvelope,
} from '../MTSAbstractService/ProbeSubmissionEnvelope.ta.mjs';
import { id_att_probe_submission_envelope } from '../MSObjectIdentifiers/id-att-probe-submission-envelope.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary mt_probe_submission_envelope
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-probe-submission-envelope X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  ProbeSubmissionEnvelope,
 *   NUMERATION             single-valued,
 *   ID                     id-att-probe-submission-envelope
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ProbeSubmissionEnvelope>}
 * @implements {X413ATTRIBUTE<ProbeSubmissionEnvelope>}
 */
export const mt_probe_submission_envelope: X413ATTRIBUTE<ProbeSubmissionEnvelope> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ProbeSubmissionEnvelope,
    },
    encoderFor: {
        '&Type': _encode_ProbeSubmissionEnvelope,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_probe_submission_envelope /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
