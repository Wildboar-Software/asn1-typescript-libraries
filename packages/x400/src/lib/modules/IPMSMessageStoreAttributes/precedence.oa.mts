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
    Precedence,
    _decode_Precedence,
    _encode_Precedence,
} from '../IPMSHeadingExtensions/Precedence.ta.mjs';
import { integerMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { id_hat_precedence } from '../IPMSObjectIdentifiers/id-hat-precedence.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary precedence
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * precedence X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   Precedence,
 *   EQUALITY MATCHING-RULE  integerMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-hat-precedence
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<Precedence>}
 * @implements {X413ATTRIBUTE<Precedence>}
 */
export const precedence: X413ATTRIBUTE<Precedence> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_Precedence,
    },
    encoderFor: {
        '&Type': _encode_Precedence,
    },
    '&equalityMatch': integerMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_precedence /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
