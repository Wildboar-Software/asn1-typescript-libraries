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
    DialoguePDU,
    _decode_DialoguePDU,
    _encode_DialoguePDU,
} from '../DialoguePDUs/DialoguePDU.ta';
export {
    DialoguePDU,
    _decode_DialoguePDU,
    _encode_DialoguePDU,
} from '../DialoguePDUs/DialoguePDU.ta';
import { dialogue_as_id } from '../DialoguePDUs/dialogue-as-id.va';
export { dialogue_as_id } from '../DialoguePDUs/dialogue-as-id.va';

/* START_OF_SYMBOL_DEFINITION dialogue_abstract_syntax */
/**
 * @summary dialogue_abstract_syntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dialogue-abstract-syntax ABSTRACT-SYNTAX ::= {
 *   DialoguePDU
 *   IDENTIFIED BY  dialogue-as-id
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_SYNTAX<DialoguePDU>}
 * @implements {ABSTRACT_SYNTAX<DialoguePDU>}
 */
export const dialogue_abstract_syntax: ABSTRACT_SYNTAX<DialoguePDU> = {
    class: 'ABSTRACT-SYNTAX',
    decoderFor: {
        '&Type': _decode_DialoguePDU,
    },
    encoderFor: {
        '&Type': _encode_DialoguePDU,
    },
    '&id': dialogue_as_id /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&property': undefined,
};
/* END_OF_SYMBOL_DEFINITION dialogue_abstract_syntax */

/* eslint-enable */
