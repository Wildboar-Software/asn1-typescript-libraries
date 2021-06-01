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

/* START_OF_SYMBOL_DEFINITION EntryClass */
/**
 * @summary EntryClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EntryClass  ::=  INTEGER {
 *   delivery(0),
 *   -- 1994 extensions
 *   submission(1), draft(2), stored-message(3), delivery-log(4),
 *   submission-log(5), message-log(6), auto-action-log(7)}(0..ub-entry-classes)
 * ```
 */
export type EntryClass = INTEGER;
/* END_OF_SYMBOL_DEFINITION EntryClass */

/* START_OF_SYMBOL_DEFINITION EntryClass_delivery */
/**
 * @summary EntryClass_delivery
 * @constant
 * @type {number}
 */
export const EntryClass_delivery: EntryClass = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION EntryClass_delivery */

/* START_OF_SYMBOL_DEFINITION delivery */
/**
 * @summary EntryClass_delivery
 * @constant
 * @type {number}
 */
export const delivery: EntryClass = EntryClass_delivery; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION delivery */

/* START_OF_SYMBOL_DEFINITION EntryClass_submission */
/**
 * @summary EntryClass_submission
 * @constant
 * @type {number}
 */
export const EntryClass_submission: EntryClass = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION EntryClass_submission */

/* START_OF_SYMBOL_DEFINITION submission */
/**
 * @summary EntryClass_submission
 * @constant
 * @type {number}
 */
export const submission: EntryClass = EntryClass_submission; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION submission */

/* START_OF_SYMBOL_DEFINITION EntryClass_draft */
/**
 * @summary EntryClass_draft
 * @constant
 * @type {number}
 */
export const EntryClass_draft: EntryClass = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION EntryClass_draft */

/* START_OF_SYMBOL_DEFINITION draft */
/**
 * @summary EntryClass_draft
 * @constant
 * @type {number}
 */
export const draft: EntryClass = EntryClass_draft; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION draft */

/* START_OF_SYMBOL_DEFINITION EntryClass_stored_message */
/**
 * @summary EntryClass_stored_message
 * @constant
 * @type {number}
 */
export const EntryClass_stored_message: EntryClass = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION EntryClass_stored_message */

/* START_OF_SYMBOL_DEFINITION stored_message */
/**
 * @summary EntryClass_stored_message
 * @constant
 * @type {number}
 */
export const stored_message: EntryClass = EntryClass_stored_message; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION stored_message */

/* START_OF_SYMBOL_DEFINITION EntryClass_delivery_log */
/**
 * @summary EntryClass_delivery_log
 * @constant
 * @type {number}
 */
export const EntryClass_delivery_log: EntryClass = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION EntryClass_delivery_log */

/* START_OF_SYMBOL_DEFINITION delivery_log */
/**
 * @summary EntryClass_delivery_log
 * @constant
 * @type {number}
 */
export const delivery_log: EntryClass = EntryClass_delivery_log; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION delivery_log */

/* START_OF_SYMBOL_DEFINITION EntryClass_submission_log */
/**
 * @summary EntryClass_submission_log
 * @constant
 * @type {number}
 */
export const EntryClass_submission_log: EntryClass = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION EntryClass_submission_log */

/* START_OF_SYMBOL_DEFINITION submission_log */
/**
 * @summary EntryClass_submission_log
 * @constant
 * @type {number}
 */
export const submission_log: EntryClass = EntryClass_submission_log; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION submission_log */

/* START_OF_SYMBOL_DEFINITION EntryClass_message_log */
/**
 * @summary EntryClass_message_log
 * @constant
 * @type {number}
 */
export const EntryClass_message_log: EntryClass = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION EntryClass_message_log */

/* START_OF_SYMBOL_DEFINITION message_log */
/**
 * @summary EntryClass_message_log
 * @constant
 * @type {number}
 */
export const message_log: EntryClass = EntryClass_message_log; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION message_log */

/* START_OF_SYMBOL_DEFINITION EntryClass_auto_action_log */
/**
 * @summary EntryClass_auto_action_log
 * @constant
 * @type {number}
 */
export const EntryClass_auto_action_log: EntryClass = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION EntryClass_auto_action_log */

/* START_OF_SYMBOL_DEFINITION auto_action_log */
/**
 * @summary EntryClass_auto_action_log
 * @constant
 * @type {number}
 */
export const auto_action_log: EntryClass = EntryClass_auto_action_log; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION auto_action_log */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EntryClass */
let _cached_decoder_for_EntryClass: $.ASN1Decoder<EntryClass> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EntryClass */

/* START_OF_SYMBOL_DEFINITION _decode_EntryClass */
/**
 * @summary Decodes an ASN.1 element into a(n) EntryClass
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EntryClass} The decoded data structure.
 */
export function _decode_EntryClass(el: _Element) {
    if (!_cached_decoder_for_EntryClass) {
        _cached_decoder_for_EntryClass = $._decodeInteger;
    }
    return _cached_decoder_for_EntryClass(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EntryClass */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EntryClass */
let _cached_encoder_for_EntryClass: $.ASN1Encoder<EntryClass> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EntryClass */

/* START_OF_SYMBOL_DEFINITION _encode_EntryClass */
/**
 * @summary Encodes a(n) EntryClass into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryClass, encoded as an ASN.1 Element.
 */
export function _encode_EntryClass(
    value: EntryClass,
    elGetter: $.ASN1Encoder<EntryClass>
) {
    if (!_cached_encoder_for_EntryClass) {
        _cached_encoder_for_EntryClass = $._encodeInteger;
    }
    return _cached_encoder_for_EntryClass(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EntryClass */

/* eslint-enable */
