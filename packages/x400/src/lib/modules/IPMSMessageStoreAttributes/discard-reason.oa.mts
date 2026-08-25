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
    DiscardReasonField,
    _enum_for_DiscardReasonField,
    _decode_DiscardReasonField,
    _encode_DiscardReasonField,
} from '../IPMSInformationObjects/DiscardReasonField.ta.mjs';
import { integerMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { id_nat_discard_reason } from '../IPMSObjectIdentifiers/id-nat-discard-reason.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary discard_reason
 * @description
 *
 * The Discard Reason non-receipt field (C) indicates why the subject IPM was discarded
 * (subsequent to its delivery to the NRN's originator and prior to its receipt). See ITU-T
 * X.420 (1999), §8.2.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * discard-reason X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   DiscardReasonField,
 *   EQUALITY MATCHING-RULE  integerMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-nat-discard-reason
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<DiscardReasonField>}
 * @implements {X413ATTRIBUTE<DiscardReasonField>}
 */
export const discard_reason: X413ATTRIBUTE<DiscardReasonField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_DiscardReasonField,
    },
    encoderFor: {
        '&Type': _encode_DiscardReasonField,
    },
    '&equalityMatch': integerMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_nat_discard_reason /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
