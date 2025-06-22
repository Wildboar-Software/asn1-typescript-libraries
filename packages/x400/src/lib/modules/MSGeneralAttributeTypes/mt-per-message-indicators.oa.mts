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
    PerMessageIndicators,
    _decode_PerMessageIndicators,
    _encode_PerMessageIndicators,
} from '../MTSAbstractService/PerMessageIndicators.ta.mjs';
import { bitStringMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/bitStringMatch.oa.mjs';
import { id_att_per_message_indicators } from '../MSObjectIdentifiers/id-att-per-message-indicators.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary mt_per_message_indicators
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-per-message-indicators X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   PerMessageIndicators,
 *   EQUALITY MATCHING-RULE  bitStringMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-att-per-message-indicators
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<PerMessageIndicators>}
 * @implements {X413ATTRIBUTE<PerMessageIndicators>}
 */
export const mt_per_message_indicators: X413ATTRIBUTE<PerMessageIndicators> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_PerMessageIndicators,
    },
    encoderFor: {
        '&Type': _encode_PerMessageIndicators,
    },
    '&equalityMatch': bitStringMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_per_message_indicators /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
