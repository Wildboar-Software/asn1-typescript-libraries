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
    ResponsibilityPassingAllowedField,
    _decode_ResponsibilityPassingAllowedField,
    _encode_ResponsibilityPassingAllowedField,
} from '../EDIMSInformationObjects/ResponsibilityPassingAllowedField.ta.mjs';
import { booleanMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { id_rat_responsibility_passing_allowed_for_this_recipient } from '../EDIMSObjectIdentifiers/id-rat-responsibility-passing-allowed-for-this-recipient.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary responsibility_passing_allowed_for_this_recipient
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * responsibility-passing-allowed-for-this-recipient X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   ResponsibilityPassingAllowedField,
 *   EQUALITY MATCHING-RULE  booleanMatch,
 *   NUMERATION              single-valued,
 *   ID
 *     id-rat-responsibility-passing-allowed-for-this-recipient
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ResponsibilityPassingAllowedField>}
 * @implements {X413ATTRIBUTE<ResponsibilityPassingAllowedField>}
 */
export const responsibility_passing_allowed_for_this_recipient: X413ATTRIBUTE<ResponsibilityPassingAllowedField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ResponsibilityPassingAllowedField,
    },
    encoderFor: {
        '&Type': _encode_ResponsibilityPassingAllowedField,
    },
    '&equalityMatch': booleanMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_rat_responsibility_passing_allowed_for_this_recipient /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
