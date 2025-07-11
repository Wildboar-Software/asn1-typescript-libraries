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
    AutoSubmitted,
    _enum_for_AutoSubmitted,
    _decode_AutoSubmitted,
    _encode_AutoSubmitted,
} from '../IPMSHeadingExtensions/AutoSubmitted.ta.mjs';
import { integerMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { id_hat_auto_submitted } from '../IPMSObjectIdentifiers/id-hat-auto-submitted.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary auto_submitted
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * auto-submitted X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   AutoSubmitted,
 *   EQUALITY MATCHING-RULE  integerMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-hat-auto-submitted
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<AutoSubmitted>}
 * @implements {X413ATTRIBUTE<AutoSubmitted>}
 */
export const auto_submitted: X413ATTRIBUTE<AutoSubmitted> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_AutoSubmitted,
    },
    encoderFor: {
        '&Type': _encode_AutoSubmitted,
    },
    '&equalityMatch': integerMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_auto_submitted /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
