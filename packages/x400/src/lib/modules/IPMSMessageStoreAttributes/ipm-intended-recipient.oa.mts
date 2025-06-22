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
    IPMIntendedRecipientField,
    _decode_IPMIntendedRecipientField,
    _encode_IPMIntendedRecipientField,
} from '../IPMSInformationObjects/IPMIntendedRecipientField.ta.mjs';
import { oRDescriptorMatch } from '../IPMSMessageStoreAttributes/oRDescriptorMatch.oa.mjs';
import { oRDescriptorElementsMatch } from '../IPMSMessageStoreAttributes/oRDescriptorElementsMatch.oa.mjs';
import { oRDescriptorSingleElementMatch } from '../IPMSMessageStoreAttributes/oRDescriptorSingleElementMatch.oa.mjs';
import { oRDescriptorSubstringElementsMatch } from '../IPMSMessageStoreAttributes/oRDescriptorSubstringElementsMatch.oa.mjs';
import { id_nat_ipm_intended_recipient } from '../IPMSObjectIdentifiers/id-nat-ipm-intended-recipient.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary ipm_intended_recipient
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ipm-intended-recipient X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   IPMIntendedRecipientField,
 *   EQUALITY MATCHING-RULE  oRDescriptorMatch,
 *   OTHER MATCHING-RULES
 *     {oRDescriptorElementsMatch | oRDescriptorSingleElementMatch |
 *       oRDescriptorSubstringElementsMatch, ...},
 *   NUMERATION              single-valued,
 *   ID                      id-nat-ipm-intended-recipient
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<IPMIntendedRecipientField>}
 * @implements {X413ATTRIBUTE<IPMIntendedRecipientField>}
 */
export const ipm_intended_recipient: X413ATTRIBUTE<IPMIntendedRecipientField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_IPMIntendedRecipientField,
    },
    encoderFor: {
        '&Type': _encode_IPMIntendedRecipientField,
    },
    '&equalityMatch': oRDescriptorMatch /* OBJECT_FIELD_SETTING */,
    '&OtherMatches': [
        oRDescriptorElementsMatch,
        oRDescriptorSingleElementMatch,
        oRDescriptorSubstringElementsMatch,
    ] /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_nat_ipm_intended_recipient /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
