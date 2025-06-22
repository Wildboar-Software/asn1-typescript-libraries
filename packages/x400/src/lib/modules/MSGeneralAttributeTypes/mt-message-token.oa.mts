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
    MessageToken,
    _decode_MessageToken,
    _encode_MessageToken,
} from '../MTSAbstractService/MessageToken.ta.mjs';
import { id_att_message_token } from '../MSObjectIdentifiers/id-att-message-token.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";


/**
 * @summary mt_message_token
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-message-token X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  MessageToken,
 *   NUMERATION             single-valued,
 *   ID                     id-att-message-token
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<MessageToken>}
 * @implements {X413ATTRIBUTE<MessageToken>}
 */
export const mt_message_token: X413ATTRIBUTE<MessageToken> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_MessageToken,
    },
    encoderFor: {
        '&Type': _encode_MessageToken,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_message_token /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
