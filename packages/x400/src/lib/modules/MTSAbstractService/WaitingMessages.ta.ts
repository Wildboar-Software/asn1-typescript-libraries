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

/* START_OF_SYMBOL_DEFINITION WaitingMessages */
/**
 * @summary WaitingMessages
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WaitingMessages  ::=  BIT STRING {
 *   long-content(0), low-priority(1), other-security-labels(2)
 * }(SIZE (0..ub-bit-options))
 * ```
 */
export type WaitingMessages = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION WaitingMessages */

/* START_OF_SYMBOL_DEFINITION WaitingMessages_long_content */
/**
 * @summary WaitingMessages_long_content
 * @constant
 */
export const WaitingMessages_long_content: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION WaitingMessages_long_content */

/* START_OF_SYMBOL_DEFINITION long_content */
/**
 * @summary long_content
 * @constant
 */
export const long_content: number = WaitingMessages_long_content; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION long_content */

/* START_OF_SYMBOL_DEFINITION WaitingMessages_low_priority */
/**
 * @summary WaitingMessages_low_priority
 * @constant
 */
export const WaitingMessages_low_priority: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION WaitingMessages_low_priority */

/* START_OF_SYMBOL_DEFINITION low_priority */
/**
 * @summary low_priority
 * @constant
 */
export const low_priority: number = WaitingMessages_low_priority; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION low_priority */

/* START_OF_SYMBOL_DEFINITION WaitingMessages_other_security_labels */
/**
 * @summary WaitingMessages_other_security_labels
 * @constant
 */
export const WaitingMessages_other_security_labels: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION WaitingMessages_other_security_labels */

/* START_OF_SYMBOL_DEFINITION other_security_labels */
/**
 * @summary other_security_labels
 * @constant
 */
export const other_security_labels: number = WaitingMessages_other_security_labels; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION other_security_labels */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_WaitingMessages */
let _cached_decoder_for_WaitingMessages: $.ASN1Decoder<WaitingMessages> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_WaitingMessages */

/* START_OF_SYMBOL_DEFINITION _decode_WaitingMessages */
/**
 * @summary Decodes an ASN.1 element into a(n) WaitingMessages
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WaitingMessages} The decoded data structure.
 */
export function _decode_WaitingMessages(el: _Element) {
    if (!_cached_decoder_for_WaitingMessages) {
        _cached_decoder_for_WaitingMessages = $._decodeBitString;
    }
    return _cached_decoder_for_WaitingMessages(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_WaitingMessages */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_WaitingMessages */
let _cached_encoder_for_WaitingMessages: $.ASN1Encoder<WaitingMessages> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_WaitingMessages */

/* START_OF_SYMBOL_DEFINITION _encode_WaitingMessages */
/**
 * @summary Encodes a(n) WaitingMessages into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WaitingMessages, encoded as an ASN.1 Element.
 */
export function _encode_WaitingMessages(
    value: WaitingMessages,
    elGetter: $.ASN1Encoder<WaitingMessages>
) {
    if (!_cached_encoder_for_WaitingMessages) {
        _cached_encoder_for_WaitingMessages = $._encodeBitString;
    }
    return _cached_encoder_for_WaitingMessages(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_WaitingMessages */

/* eslint-enable */
