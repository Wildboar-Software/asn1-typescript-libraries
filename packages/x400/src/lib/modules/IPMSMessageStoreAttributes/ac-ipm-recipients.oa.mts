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
    ORDescriptor,
    _decode_ORDescriptor,
    _encode_ORDescriptor,
} from '../IPMSInformationObjects/ORDescriptor.ta.mjs';
import { oRDescriptorMatch } from '../IPMSMessageStoreAttributes/oRDescriptorMatch.oa.mjs';
import { oRDescriptorElementsMatch } from '../IPMSMessageStoreAttributes/oRDescriptorElementsMatch.oa.mjs';
import { oRDescriptorSingleElementMatch } from '../IPMSMessageStoreAttributes/oRDescriptorSingleElementMatch.oa.mjs';
import { oRDescriptorSubstringElementsMatch } from '../IPMSMessageStoreAttributes/oRDescriptorSubstringElementsMatch.oa.mjs';
import { id_cat_ipm_recipients } from '../IPMSObjectIdentifiers/id-cat-ipm-recipients.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary ac_ipm_recipients
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ac-ipm-recipients X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   ORDescriptor,
 *   EQUALITY MATCHING-RULE  oRDescriptorMatch,
 *   OTHER MATCHING-RULES
 *     {oRDescriptorElementsMatch | oRDescriptorSingleElementMatch |
 *       oRDescriptorSubstringElementsMatch, ...},
 *   NUMERATION              multi-valued,
 *   ID                      id-cat-ipm-recipients
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ORDescriptor>}
 * @implements {X413ATTRIBUTE<ORDescriptor>}
 */
export const ac_ipm_recipients: X413ATTRIBUTE<ORDescriptor> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ORDescriptor,
    },
    encoderFor: {
        '&Type': _encode_ORDescriptor,
    },
    '&equalityMatch': oRDescriptorMatch /* OBJECT_FIELD_SETTING */,
    '&OtherMatches': [
        oRDescriptorElementsMatch,
        oRDescriptorSingleElementMatch,
        oRDescriptorSubstringElementsMatch,
    ] /* OBJECT_FIELD_SETTING */,
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_cat_ipm_recipients /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
