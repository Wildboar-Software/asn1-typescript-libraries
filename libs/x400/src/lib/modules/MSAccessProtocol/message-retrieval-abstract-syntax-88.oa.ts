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
    MessageRetrievalPDUs88,
    _decode_MessageRetrievalPDUs88,
    _encode_MessageRetrievalPDUs88,
} from '../MSAccessProtocol/MessageRetrievalPDUs88.ta';
export {
    MessageRetrievalPDUs88,
    _decode_MessageRetrievalPDUs88,
    _encode_MessageRetrievalPDUs88,
} from '../MSAccessProtocol/MessageRetrievalPDUs88.ta';
import { id_as_mrse_88 } from '../MHSProtocolObjectIdentifiers/id-as-mrse-88.va';
export { id_as_mrse_88 } from '../MHSProtocolObjectIdentifiers/id-as-mrse-88.va';

/* START_OF_SYMBOL_DEFINITION message_retrieval_abstract_syntax_88 */
/**
 * @summary message_retrieval_abstract_syntax_88
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * message-retrieval-abstract-syntax-88 ABSTRACT-SYNTAX ::= {
 *   MessageRetrievalPDUs88
 *   IDENTIFIED BY  id-as-mrse-88
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_SYNTAX<MessageRetrievalPDUs88>}
 * @implements {ABSTRACT_SYNTAX<MessageRetrievalPDUs88>}
 */
export const message_retrieval_abstract_syntax_88: ABSTRACT_SYNTAX<MessageRetrievalPDUs88> = {
    class: 'ABSTRACT-SYNTAX',
    decoderFor: {
        '&Type': _decode_MessageRetrievalPDUs88,
    },
    encoderFor: {
        '&Type': _encode_MessageRetrievalPDUs88,
    },
    '&id': id_as_mrse_88 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&property': undefined,
};
/* END_OF_SYMBOL_DEFINITION message_retrieval_abstract_syntax_88 */

/* eslint-enable */
