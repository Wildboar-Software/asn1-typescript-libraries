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
    MessageData,
    _decode_MessageData,
    _encode_MessageData,
} from '../IPMSInformationObjects/MessageData.ta.mjs';
import { id_bat_message_data } from '../IPMSObjectIdentifiers/id-bat-message-data.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary message_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * message-data X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  MessageData,
 *   NUMERATION             multi-valued,
 *   ID                     id-bat-message-data
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<MessageData>}
 * @implements {X413ATTRIBUTE<MessageData>}
 */
export const message_data: X413ATTRIBUTE<MessageData> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_MessageData,
    },
    encoderFor: {
        '&Type': _encode_MessageData,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_bat_message_data /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
