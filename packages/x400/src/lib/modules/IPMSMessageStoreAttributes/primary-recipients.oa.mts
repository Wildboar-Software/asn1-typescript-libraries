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
    PrimaryRecipientsSubfield,
    _decode_PrimaryRecipientsSubfield,
    _encode_PrimaryRecipientsSubfield,
} from '../IPMSInformationObjects/PrimaryRecipientsSubfield.ta.mjs';
import { recipientSpecifierMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierMatch.oa.mjs';
import { recipientSpecifierElementsMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierElementsMatch.oa.mjs';
import { recipientSpecifierSubstringElementsMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierSubstringElementsMatch.oa.mjs';
import { recipientSpecifierSingleElementMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierSingleElementMatch.oa.mjs';
import { id_hat_primary_recipients } from '../IPMSObjectIdentifiers/id-hat-primary-recipients.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary primary_recipients
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * primary-recipients X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   PrimaryRecipientsSubfield,
 *   EQUALITY MATCHING-RULE  recipientSpecifierMatch,
 *   OTHER MATCHING-RULES
 *     {recipientSpecifierElementsMatch | recipientSpecifierSubstringElementsMatch
 *       | recipientSpecifierSingleElementMatch, ...},
 *   NUMERATION              multi-valued,
 *   ID                      id-hat-primary-recipients
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<PrimaryRecipientsSubfield>}
 * @implements {X413ATTRIBUTE<PrimaryRecipientsSubfield>}
 */
export const primary_recipients: X413ATTRIBUTE<PrimaryRecipientsSubfield> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_PrimaryRecipientsSubfield,
    },
    encoderFor: {
        '&Type': _encode_PrimaryRecipientsSubfield,
    },
    '&equalityMatch': recipientSpecifierMatch /* OBJECT_FIELD_SETTING */,
    '&OtherMatches': [
        recipientSpecifierElementsMatch,
        recipientSpecifierSubstringElementsMatch,
        recipientSpecifierSingleElementMatch,
    ] /* OBJECT_FIELD_SETTING */,
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_primary_recipients /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
