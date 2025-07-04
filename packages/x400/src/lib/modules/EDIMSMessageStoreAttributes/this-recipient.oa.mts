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
    RecipientField,
    _decode_RecipientField,
    _encode_RecipientField,
} from '../EDIMSInformationObjects/RecipientField.ta.mjs';
import { oRNameMatch } from '../MSMatchingRules/oRNameMatch.oa.mjs';
import { id_rat_this_recipient } from '../EDIMSObjectIdentifiers/id-rat-this-recipient.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary this_recipient
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * this-recipient X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   RecipientField,
 *   EQUALITY MATCHING-RULE  oRNameMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-rat-this-recipient
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<RecipientField>}
 * @implements {X413ATTRIBUTE<RecipientField>}
 */
export const this_recipient: X413ATTRIBUTE<RecipientField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_RecipientField,
    },
    encoderFor: {
        '&Type': _encode_RecipientField,
    },
    '&equalityMatch': oRNameMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_rat_this_recipient /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
