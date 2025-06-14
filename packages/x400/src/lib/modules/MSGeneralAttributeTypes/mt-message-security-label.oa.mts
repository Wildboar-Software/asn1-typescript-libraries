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
    MessageSecurityLabel,
    _decode_MessageSecurityLabel,
    _encode_MessageSecurityLabel,
} from '../MTSAbstractService/MessageSecurityLabel.ta.mjs';
import { id_att_message_security_label } from '../MSObjectIdentifiers/id-att-message-security-label.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION mt_message_security_label */
/**
 * @summary mt_message_security_label
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-message-security-label X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  MessageSecurityLabel,
 *   NUMERATION             single-valued,
 *   ID                     id-att-message-security-label
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<MessageSecurityLabel>}
 * @implements {X413ATTRIBUTE<MessageSecurityLabel>}
 */
export const mt_message_security_label: X413ATTRIBUTE<MessageSecurityLabel> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_MessageSecurityLabel,
    },
    encoderFor: {
        '&Type': _encode_MessageSecurityLabel,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_message_security_label /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION mt_message_security_label */

/* eslint-enable */
