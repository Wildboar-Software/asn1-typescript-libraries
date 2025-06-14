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
    InterchangeRecipientField,
    _decode_InterchangeRecipientField,
    _encode_InterchangeRecipientField,
} from '../EDIMSInformationObjects/InterchangeRecipientField.ta.mjs';
import { id_rat_interchange_recipient_for_this_recipient } from '../EDIMSObjectIdentifiers/id-rat-interchange-recipient-for-this-recipient.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION interchange_recipient_for_this_recipient */
/**
 * @summary interchange_recipient_for_this_recipient
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * interchange-recipient-for-this-recipient X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  InterchangeRecipientField,
 *
 *   -- EQUALITY MATCHING-RULE   rule not defined
 *   NUMERATION             single-valued,
 *   ID                     id-rat-interchange-recipient-for-this-recipient
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<InterchangeRecipientField>}
 * @implements {X413ATTRIBUTE<InterchangeRecipientField>}
 */
export const interchange_recipient_for_this_recipient: X413ATTRIBUTE<InterchangeRecipientField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_InterchangeRecipientField,
    },
    encoderFor: {
        '&Type': _encode_InterchangeRecipientField,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_rat_interchange_recipient_for_this_recipient /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION interchange_recipient_for_this_recipient */

/* eslint-enable */
