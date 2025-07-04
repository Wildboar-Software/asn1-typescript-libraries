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
    RecipientCategory,
    _decode_RecipientCategory,
    _encode_RecipientCategory,
} from '../IPMSMessageStoreAttributes/RecipientCategory.ta.mjs';
import { integerMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { integerOrderingMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { id_cat_recipient_category } from '../IPMSObjectIdentifiers/id-cat-recipient-category.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary recipient_category
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * recipient-category X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   RecipientCategory,
 *   EQUALITY MATCHING-RULE  integerMatch,
 *   ORDERING MATCHING-RULE  integerOrderingMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-cat-recipient-category
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<RecipientCategory>}
 * @implements {X413ATTRIBUTE<RecipientCategory>}
 */
export const recipient_category: X413ATTRIBUTE<RecipientCategory> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_RecipientCategory,
    },
    encoderFor: {
        '&Type': _encode_RecipientCategory,
    },
    '&equalityMatch': integerMatch /* OBJECT_FIELD_SETTING */,
    '&orderingMatch': integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_cat_recipient_category /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
