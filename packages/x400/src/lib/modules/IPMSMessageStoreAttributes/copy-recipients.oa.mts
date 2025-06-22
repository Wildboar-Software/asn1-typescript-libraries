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
    CopyRecipientsSubfield,
    _decode_CopyRecipientsSubfield,
    _encode_CopyRecipientsSubfield,
} from '../IPMSInformationObjects/CopyRecipientsSubfield.ta.mjs';
import { recipientSpecifierMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierMatch.oa.mjs';
import { recipientSpecifierElementsMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierElementsMatch.oa.mjs';
import { recipientSpecifierSubstringElementsMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierSubstringElementsMatch.oa.mjs';
import { recipientSpecifierSingleElementMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierSingleElementMatch.oa.mjs';
import { id_hat_copy_recipients } from '../IPMSObjectIdentifiers/id-hat-copy-recipients.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary copy_recipients
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * copy-recipients X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   CopyRecipientsSubfield,
 *   EQUALITY MATCHING-RULE  recipientSpecifierMatch,
 *   OTHER MATCHING-RULES
 *     {recipientSpecifierElementsMatch | recipientSpecifierSubstringElementsMatch
 *       | recipientSpecifierSingleElementMatch, ...},
 *   NUMERATION              multi-valued,
 *   ID                      id-hat-copy-recipients
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<CopyRecipientsSubfield>}
 * @implements {X413ATTRIBUTE<CopyRecipientsSubfield>}
 */
export const copy_recipients: X413ATTRIBUTE<CopyRecipientsSubfield> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_CopyRecipientsSubfield,
    },
    encoderFor: {
        '&Type': _encode_CopyRecipientsSubfield,
    },
    '&equalityMatch': recipientSpecifierMatch /* OBJECT_FIELD_SETTING */,
    '&OtherMatches': [
        recipientSpecifierElementsMatch,
        recipientSpecifierSubstringElementsMatch,
        recipientSpecifierSingleElementMatch,
    ] /* OBJECT_FIELD_SETTING */,
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_copy_recipients /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
