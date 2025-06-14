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
    MessageParameters,
    _decode_MessageParameters,
    _encode_MessageParameters,
} from '../IPMSInformationObjects/MessageParameters.ta.mjs';
import { id_bat_message_parameters } from '../IPMSObjectIdentifiers/id-bat-message-parameters.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION message_parameters */
/**
 * @summary message_parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * message-parameters X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  MessageParameters,
 *   NUMERATION             multi-valued,
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
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_bat_message_parameters /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION message_parameters */

/* eslint-enable */
