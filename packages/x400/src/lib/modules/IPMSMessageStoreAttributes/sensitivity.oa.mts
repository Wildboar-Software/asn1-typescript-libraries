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
    SensitivityField,
    _enum_for_SensitivityField,
    _decode_SensitivityField,
    _encode_SensitivityField,
} from '../IPMSInformationObjects/SensitivityField.ta.mjs';
import { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa.mjs';
import { integerOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerOrderingMatch.oa.mjs';
import { id_hat_sensitivity } from '../IPMSObjectIdentifiers/id-hat-sensitivity.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary sensitivity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sensitivity X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   SensitivityField,
 *   EQUALITY MATCHING-RULE  integerMatch,
 *   ORDERING MATCHING-RULE
 *     integerOrderingMatch, -- not defined for 1988 Application Contexts
 *
 *   NUMERATION              single-valued,
 *   ID                      id-hat-sensitivity
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<SensitivityField>}
 * @implements {X413ATTRIBUTE<SensitivityField>}
 */
export const sensitivity: X413ATTRIBUTE<SensitivityField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_SensitivityField,
    },
    encoderFor: {
        '&Type': _encode_SensitivityField,
    },
    '&equalityMatch': integerMatch /* OBJECT_FIELD_SETTING */,
    '&orderingMatch': integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_sensitivity /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
