/* eslint-disable */
import {
    TYPE_IDENTIFIER,
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
    MessageData,
    _decode_MessageData,
    _encode_MessageData,
} from '../IPMSInformationObjects/MessageData.ta.mjs';
import { id_et_message } from '../IPMSObjectIdentifiers/id-et-message.va.mjs';
/**
 * @summary message_body_part_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * message-body-part-data ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {TYPE_IDENTIFIER<MessageData>}
 * @implements {TYPE_IDENTIFIER<MessageData>}
 */
export const message_body_part_data: TYPE_IDENTIFIER<MessageData> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_MessageData,
    },
    encoderFor: {
        '&Type': _encode_MessageData,
    },
    '&id': id_et_message /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
