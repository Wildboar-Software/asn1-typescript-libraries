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
    MessageParameters,
    _decode_MessageParameters,
    _encode_MessageParameters,
} from '../EDIMSInformationObjects/MessageParameters.ta.mjs';
import { id_bat_message_parameters } from '../EDIMSObjectIdentifiers/id-bat-message-parameters.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary message_parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * message-parameters X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  MessageParameters,
 *   NUMERATION             single-valued,
 *   ID                     id-bat-message-parameters
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<MessageParameters>}
 * @implements {X413ATTRIBUTE<MessageParameters>}
 */
export const message_parameters: X413ATTRIBUTE<MessageParameters> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_MessageParameters,
    },
    encoderFor: {
        '&Type': _encode_MessageParameters,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_bat_message_parameters /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
