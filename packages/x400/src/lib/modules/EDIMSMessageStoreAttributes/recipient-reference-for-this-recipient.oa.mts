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
    RecipientReferenceField,
    _decode_RecipientReferenceField,
    _encode_RecipientReferenceField,
} from '../EDIMSInformationObjects/RecipientReferenceField.ta.mjs';
import { id_rat_recipient_reference_for_this_recipient } from '../EDIMSObjectIdentifiers/id-rat-recipient-reference-for-this-recipient.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION recipient_reference_for_this_recipient */
/**
 * @summary recipient_reference_for_this_recipient
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * recipient-reference-for-this-recipient X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  RecipientReferenceField,
 *
 *   -- EQUALITY MATCHING-RULE   rule not defined
 *   NUMERATION             single-valued,
 *   ID                     id-rat-recipient-reference-for-this-recipient
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<RecipientReferenceField>}
 * @implements {X413ATTRIBUTE<RecipientReferenceField>}
 */
export const recipient_reference_for_this_recipient: X413ATTRIBUTE<RecipientReferenceField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_RecipientReferenceField,
    },
    encoderFor: {
        '&Type': _encode_RecipientReferenceField,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_rat_recipient_reference_for_this_recipient /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION recipient_reference_for_this_recipient */

/* eslint-enable */
