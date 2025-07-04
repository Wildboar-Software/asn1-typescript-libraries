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
    DateAndTimeOfPreparationField,
    _decode_DateAndTimeOfPreparationField,
    _encode_DateAndTimeOfPreparationField,
} from '../EDIMSInformationObjects/DateAndTimeOfPreparationField.ta.mjs';
import { uTCTimeMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { uTCTimeOrderingMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { id_hat_date_and_time_of_preparation } from '../EDIMSObjectIdentifiers/id-hat-date-and-time-of-preparation.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary date_and_time_of_preparation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * date-and-time-of-preparation X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   DateAndTimeOfPreparationField,
 *   EQUALITY MATCHING-RULE  uTCTimeMatch,
 *   ORDERING MATCHING-RULE
 *     uTCTimeOrderingMatch, -- rule not defined in version 1
 *
 *   NUMERATION              single-valued,
 *   ID                      id-hat-date-and-time-of-preparation
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<DateAndTimeOfPreparationField>}
 * @implements {X413ATTRIBUTE<DateAndTimeOfPreparationField>}
 */
export const date_and_time_of_preparation: X413ATTRIBUTE<DateAndTimeOfPreparationField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_DateAndTimeOfPreparationField,
    },
    encoderFor: {
        '&Type': _encode_DateAndTimeOfPreparationField,
    },
    '&equalityMatch': uTCTimeMatch /* OBJECT_FIELD_SETTING */,
    '&orderingMatch': uTCTimeOrderingMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_date_and_time_of_preparation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
