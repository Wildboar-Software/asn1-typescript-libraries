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
    TestIndicatorField,
    _decode_TestIndicatorField,
    _encode_TestIndicatorField,
} from '../EDIMSInformationObjects/TestIndicatorField.ta.mjs';
import { booleanMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/booleanMatch.oa.mjs';
import { id_rat_test_indicator_for_this_recipient } from '../EDIMSObjectIdentifiers/id-rat-test-indicator-for-this-recipient.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary test_indicator_for_this_recipient
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * test-indicator-for-this-recipient X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   TestIndicatorField,
 *   EQUALITY MATCHING-RULE  booleanMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-rat-test-indicator-for-this-recipient
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<TestIndicatorField>}
 * @implements {X413ATTRIBUTE<TestIndicatorField>}
 */
export const test_indicator_for_this_recipient: X413ATTRIBUTE<TestIndicatorField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_TestIndicatorField,
    },
    encoderFor: {
        '&Type': _encode_TestIndicatorField,
    },
    '&equalityMatch': booleanMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_rat_test_indicator_for_this_recipient /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
