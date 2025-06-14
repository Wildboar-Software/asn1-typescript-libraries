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
    AutoForwardedField,
    _decode_AutoForwardedField,
    _encode_AutoForwardedField,
} from '../IPMSInformationObjects/AutoForwardedField.ta.mjs';
import { booleanMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/booleanMatch.oa.mjs';
import { id_hat_auto_forwarded } from '../IPMSObjectIdentifiers/id-hat-auto-forwarded.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION auto_forwarded */
/**
 * @summary auto_forwarded
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * auto-forwarded X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   AutoForwardedField,
 *   EQUALITY MATCHING-RULE  booleanMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-hat-auto-forwarded
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<AutoForwardedField>}
 * @implements {X413ATTRIBUTE<AutoForwardedField>}
 */
export const auto_forwarded: X413ATTRIBUTE<AutoForwardedField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_AutoForwardedField,
    },
    encoderFor: {
        '&Type': _encode_AutoForwardedField,
    },
    '&equalityMatch': booleanMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_auto_forwarded /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION auto_forwarded */

/* eslint-enable */
