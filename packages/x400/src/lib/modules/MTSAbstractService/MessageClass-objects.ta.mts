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

/* START_OF_SYMBOL_DEFINITION _enum_for_MessageClass_objects */
export enum _enum_for_MessageClass_objects {
    messages = 0,
    reports = 1,
    both = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_MessageClass_objects */

/* START_OF_SYMBOL_DEFINITION MessageClass_objects */
/**
 * @summary MessageClass_objects
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageClass-objects ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type MessageClass_objects = _enum_for_MessageClass_objects | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION MessageClass_objects */

/* START_OF_SYMBOL_DEFINITION MessageClass_objects_messages */
/**
 * @summary MessageClass_objects_messages
 * @constant
 * @type {number}
 */
export const MessageClass_objects_messages: MessageClass_objects = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION MessageClass_objects_messages */

/* START_OF_SYMBOL_DEFINITION messages */
/**
 * @summary messages
 * @constant
 * @type {number}
 */
export const messages: MessageClass_objects = MessageClass_objects_messages; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION messages */

/* START_OF_SYMBOL_DEFINITION MessageClass_objects_reports */
/**
 * @summary MessageClass_objects_reports
 * @constant
 * @type {number}
 */
export const MessageClass_objects_reports: MessageClass_objects = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION MessageClass_objects_reports */

/* START_OF_SYMBOL_DEFINITION reports */
/**
 * @summary reports
 * @constant
 * @type {number}
 */
export const reports: MessageClass_objects = MessageClass_objects_reports; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION reports */

/* START_OF_SYMBOL_DEFINITION MessageClass_objects_both */
/**
 * @summary MessageClass_objects_both
 * @constant
 * @type {number}
 */
export const MessageClass_objects_both: MessageClass_objects = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION MessageClass_objects_both */

/* START_OF_SYMBOL_DEFINITION both */
/**
 * @summary both
 * @constant
 * @type {number}
 */
export const both: MessageClass_objects = MessageClass_objects_both; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION both */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageClass_objects */
let _cached_decoder_for_MessageClass_objects: $.ASN1Decoder<MessageClass_objects> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageClass_objects */

/* START_OF_SYMBOL_DEFINITION _decode_MessageClass_objects */
/**
 * @summary Decodes an ASN.1 element into a(n) MessageClass_objects
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageClass_objects} The decoded data structure.
 */
export function _decode_MessageClass_objects(el: _Element) {
    if (!_cached_decoder_for_MessageClass_objects) {
        _cached_decoder_for_MessageClass_objects = $._decodeEnumerated;
    }
    return _cached_decoder_for_MessageClass_objects(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MessageClass_objects */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageClass_objects */
let _cached_encoder_for_MessageClass_objects: $.ASN1Encoder<MessageClass_objects> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageClass_objects */

/* START_OF_SYMBOL_DEFINITION _encode_MessageClass_objects */
/**
 * @summary Encodes a(n) MessageClass_objects into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageClass_objects, encoded as an ASN.1 Element.
 */
export function _encode_MessageClass_objects(
    value: MessageClass_objects,
    elGetter: $.ASN1Encoder<MessageClass_objects>
) {
    if (!_cached_encoder_for_MessageClass_objects) {
        _cached_encoder_for_MessageClass_objects = $._encodeEnumerated;
    }
    return _cached_encoder_for_MessageClass_objects(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MessageClass_objects */

/* eslint-enable */
