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
    OriginatorField,
    _decode_OriginatorField,
    _encode_OriginatorField,
} from '../IPMSInformationObjects/OriginatorField.ta.mjs';
import { oRDescriptorMatch } from '../IPMSMessageStoreAttributes/oRDescriptorMatch.oa.mjs';
import { oRDescriptorElementsMatch } from '../IPMSMessageStoreAttributes/oRDescriptorElementsMatch.oa.mjs';
import { oRDescriptorSingleElementMatch } from '../IPMSMessageStoreAttributes/oRDescriptorSingleElementMatch.oa.mjs';
import { oRDescriptorSubstringElementsMatch } from '../IPMSMessageStoreAttributes/oRDescriptorSubstringElementsMatch.oa.mjs';
import { id_hat_originator } from '../IPMSObjectIdentifiers/id-hat-originator.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary originator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * originator X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   OriginatorField,
 *   EQUALITY MATCHING-RULE  oRDescriptorMatch,
 *   OTHER MATCHING-RULES
 *     {oRDescriptorElementsMatch | oRDescriptorSingleElementMatch |
 *       oRDescriptorSubstringElementsMatch, ...},
 *   NUMERATION              single-valued,
 *   ID                      id-hat-originator
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<OriginatorField>}
 * @implements {X413ATTRIBUTE<OriginatorField>}
 */
export const originator: X413ATTRIBUTE<OriginatorField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_OriginatorField,
    },
    encoderFor: {
        '&Type': _encode_OriginatorField,
    },
    '&equalityMatch': oRDescriptorMatch /* OBJECT_FIELD_SETTING */,
    '&OtherMatches': [
        oRDescriptorElementsMatch,
        oRDescriptorSingleElementMatch,
        oRDescriptorSubstringElementsMatch,
    ] /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_originator /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
