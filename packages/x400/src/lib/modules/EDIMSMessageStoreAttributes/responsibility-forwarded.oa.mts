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
    ResponsibilityForwarded,
    _decode_ResponsibilityForwarded,
    _encode_ResponsibilityForwarded,
} from '../EDIMSInformationObjects/ResponsibilityForwarded.ta.mjs';
import { booleanMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { id_hat_responsibility_forwarded } from '../EDIMSObjectIdentifiers/id-hat-responsibility-forwarded.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary responsibility_forwarded
 * @description
 *
 * Information object `responsibility_forwarded`. The Responsibility Forwarded field is
 * used to indicate whether Responsibility was forwarded. Absence of this field shall be
 * interpreted as the value FALSE. See ITU-T X.435 (1999), §8.2.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * responsibility-forwarded X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   ResponsibilityForwarded,
 *   EQUALITY MATCHING-RULE  booleanMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-hat-responsibility-forwarded
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ResponsibilityForwarded>}
 * @implements {X413ATTRIBUTE<ResponsibilityForwarded>}
 */
export const responsibility_forwarded: X413ATTRIBUTE<ResponsibilityForwarded> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ResponsibilityForwarded,
    },
    encoderFor: {
        '&Type': _encode_ResponsibilityForwarded,
    },
    '&equalityMatch': booleanMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_responsibility_forwarded /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
