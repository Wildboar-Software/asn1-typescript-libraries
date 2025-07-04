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
    AcknowledgmentModeField,
    _enum_for_AcknowledgmentModeField,
    _decode_AcknowledgmentModeField,
    _encode_AcknowledgmentModeField,
} from '../IPMSInformationObjects/AcknowledgmentModeField.ta.mjs';
import { integerMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { id_nat_acknowledgment_mode } from '../IPMSObjectIdentifiers/id-nat-acknowledgment-mode.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary acknowledgment_mode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * acknowledgment-mode X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   AcknowledgmentModeField,
 *   EQUALITY MATCHING-RULE  integerMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-nat-acknowledgment-mode
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<AcknowledgmentModeField>}
 * @implements {X413ATTRIBUTE<AcknowledgmentModeField>}
 */
export const acknowledgment_mode: X413ATTRIBUTE<AcknowledgmentModeField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_AcknowledgmentModeField,
    },
    encoderFor: {
        '&Type': _encode_AcknowledgmentModeField,
    },
    '&equalityMatch': integerMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_nat_acknowledgment_mode /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
