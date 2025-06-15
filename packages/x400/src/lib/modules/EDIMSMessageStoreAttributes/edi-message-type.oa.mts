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
    EDIMessageTypeFieldSubField,
    _decode_EDIMessageTypeFieldSubField,
    _encode_EDIMessageTypeFieldSubField,
} from '../EDIMSInformationObjects/EDIMessageTypeFieldSubField.ta.mjs';
import { mSStringMatch } from '../MSMatchingRules/mSStringMatch.oa.mjs';
import { id_hat_edi_message_type } from '../EDIMSObjectIdentifiers/id-hat-edi-message-type.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary edi_message_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * edi-message-type X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   EDIMessageTypeFieldSubField,
 *   EQUALITY MATCHING-RULE  mSStringMatch,
 *   NUMERATION              multi-valued,
 *   ID                      id-hat-edi-message-type
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<EDIMessageTypeFieldSubField>}
 * @implements {X413ATTRIBUTE<EDIMessageTypeFieldSubField>}
 */
export const edi_message_type: X413ATTRIBUTE<EDIMessageTypeFieldSubField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_EDIMessageTypeFieldSubField,
    },
    encoderFor: {
        '&Type': _encode_EDIMessageTypeFieldSubField,
    },
    '&equalityMatch': mSStringMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_edi_message_type /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
