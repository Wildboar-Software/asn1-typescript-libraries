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
    RecipientExtensionsSubField,
    _decode_RecipientExtensionsSubField,
    _encode_RecipientExtensionsSubField,
} from '../EDIMSInformationObjects/RecipientExtensionsSubField.ta.mjs';
import { id_rat_recipient_extensions_for_this_recipient } from '../EDIMSObjectIdentifiers/id-rat-recipient-extensions-for-this-recipient.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION recipient_extensions_for_this_recipient */
/**
 * @summary recipient_extensions_for_this_recipient
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * recipient-extensions-for-this-recipient X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  RecipientExtensionsSubField,
 *
 *   -- EQUALITY MATCHING-RULE   rule not defined
 *   NUMERATION             multi-valued,
 *   ID                     id-rat-recipient-extensions-for-this-recipient
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<RecipientExtensionsSubField>}
 * @implements {X413ATTRIBUTE<RecipientExtensionsSubField>}
 */
export const recipient_extensions_for_this_recipient: X413ATTRIBUTE<RecipientExtensionsSubField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_RecipientExtensionsSubField,
    },
    encoderFor: {
        '&Type': _encode_RecipientExtensionsSubField,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_rat_recipient_extensions_for_this_recipient /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION recipient_extensions_for_this_recipient */

/* eslint-enable */
