/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta';
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta';
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca';
export { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca';
import {
    MessageData,
    _decode_MessageData,
    _encode_MessageData,
} from '../EDIMSInformationObjects/MessageData.ta';
export {
    MessageData,
    _decode_MessageData,
    _encode_MessageData,
} from '../EDIMSInformationObjects/MessageData.ta';
import { id_bat_message_data } from '../EDIMSObjectIdentifiers/id-bat-message-data.va';
export { id_bat_message_data } from '../EDIMSObjectIdentifiers/id-bat-message-data.va';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta";

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
