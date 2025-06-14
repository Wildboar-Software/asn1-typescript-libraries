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
    MessageData,
    _decode_MessageData,
    _encode_MessageData,
} from '../EDIMSInformationObjects/MessageData.ta.mjs';
import { id_bat_message_data } from '../EDIMSObjectIdentifiers/id-bat-message-data.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION message_data */
/**
 * @summary message_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * message-data X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  MessageData,
 *   NUMERATION             single-valued,
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
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_bat_message_data /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION message_data */

/* eslint-enable */
