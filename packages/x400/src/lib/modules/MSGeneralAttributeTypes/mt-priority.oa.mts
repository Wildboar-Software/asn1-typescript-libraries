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
    Priority,
    _decode_Priority,
    _encode_Priority,
} from '../MTSAbstractService/Priority.ta.mjs';
import { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa.mjs';
import { integerOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerOrderingMatch.oa.mjs';
import { id_att_priority } from '../MSObjectIdentifiers/id-att-priority.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary mt_priority
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-priority X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   Priority,
 *   EQUALITY MATCHING-RULE  integerMatch,
 *   ORDERING MATCHING-RULE
 *     integerOrderingMatch, -- rule not defined in 1988 Application Contexts
 *
 *   NUMERATION              single-valued,
 *   ID                      id-att-priority
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<Priority>}
 * @implements {X413ATTRIBUTE<Priority>}
 */
export const mt_priority: X413ATTRIBUTE<Priority> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_Priority,
    },
    encoderFor: {
        '&Type': _encode_Priority,
    },
    '&equalityMatch': integerMatch /* OBJECT_FIELD_SETTING */,
    '&orderingMatch': integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_priority /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
