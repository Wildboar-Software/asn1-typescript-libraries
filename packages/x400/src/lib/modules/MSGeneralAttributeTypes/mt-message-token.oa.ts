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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.js';
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.js';
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.js';
export { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.js';
import {
    MessageToken,
    _decode_MessageToken,
    _encode_MessageToken,
} from '../MTSAbstractService/MessageToken.ta.js';
export {
    MessageToken,
    _decode_MessageToken,
    _encode_MessageToken,
} from '../MTSAbstractService/MessageToken.ta.js';
import { id_att_message_token } from '../MSObjectIdentifiers/id-att-message-token.va.js';
export { id_att_message_token } from '../MSObjectIdentifiers/id-att-message-token.va.js';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.js';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.js';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.js";


/* START_OF_SYMBOL_DEFINITION mt_message_token */
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
/* END_OF_SYMBOL_DEFINITION mt_message_token */

/* eslint-enable */
