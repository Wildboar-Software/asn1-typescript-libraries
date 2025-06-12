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
    ExtensionType,
    _decode_ExtensionType,
    _encode_ExtensionType,
} from '../MTSAbstractService/ExtensionType.ta.js';
export {
    ExtensionType,
    _decode_ExtensionType,
    _encode_ExtensionType,
} from '../MTSAbstractService/ExtensionType.ta.js';
import {
    Criticality,
    Criticality_for_submission /* IMPORTED_LONG_NAMED_BIT */,
    for_submission /* IMPORTED_SHORT_NAMED_BIT */,
    Criticality_for_transfer /* IMPORTED_LONG_NAMED_BIT */,
    for_transfer /* IMPORTED_SHORT_NAMED_BIT */,
    Criticality_for_delivery /* IMPORTED_LONG_NAMED_BIT */,
    for_delivery /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta.js';
export {
    Criticality,
    Criticality_for_submission /* IMPORTED_LONG_NAMED_BIT */,
    for_submission /* IMPORTED_SHORT_NAMED_BIT */,
    Criticality_for_transfer /* IMPORTED_LONG_NAMED_BIT */,
    for_transfer /* IMPORTED_SHORT_NAMED_BIT */,
    Criticality_for_delivery /* IMPORTED_LONG_NAMED_BIT */,
    for_delivery /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta.js';
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
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.js';
export { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.js';

/* START_OF_SYMBOL_DEFINITION message_token */
/**
 * @summary message_token
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * message-token EXTENSION ::= {
 *   MessageToken,
 *   RECOMMENDED CRITICALITY  {for-delivery},
 *   IDENTIFIED BY            standard-extension:16
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<MessageToken>}
 * @implements {EXTENSION<MessageToken>}
 */
export const message_token: EXTENSION<MessageToken> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_MessageToken,
    },
    encoderFor: {
        '&Type': _encode_MessageToken,
    },
    '&recommended': (() => {
        const _ret = new Uint8ClampedArray(Math.max(0, 1, 2));
        _ret[Criticality_for_delivery] = TRUE_BIT;
        return _ret;
    })() /* OBJECT_FIELD_SETTING */,
    '&id': {
        standard_extension: 16,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION message_token */

/* eslint-enable */
