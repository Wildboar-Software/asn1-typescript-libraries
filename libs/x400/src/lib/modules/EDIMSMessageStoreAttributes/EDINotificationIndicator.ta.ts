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

/* START_OF_SYMBOL_DEFINITION _enum_for_EDINotificationIndicator */
/**
 * @summary EDINotificationIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDINotificationIndicator  ::=  ENUMERATED {
 *   no-notification-sent(0), pn-sent(1), nn-sent(2), fn-sent(3)}
 * ```@enum {number}
 */
export enum _enum_for_EDINotificationIndicator {
    no_notification_sent = 0,
    pn_sent = 1,
    nn_sent = 2,
    fn_sent = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_EDINotificationIndicator */

/* START_OF_SYMBOL_DEFINITION EDINotificationIndicator */
/**
 * @summary EDINotificationIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDINotificationIndicator  ::=  ENUMERATED {
 *   no-notification-sent(0), pn-sent(1), nn-sent(2), fn-sent(3)}
 * ```@enum {number}
 */
export type EDINotificationIndicator = _enum_for_EDINotificationIndicator;
/* END_OF_SYMBOL_DEFINITION EDINotificationIndicator */

/* START_OF_SYMBOL_DEFINITION EDINotificationIndicator */
/**
 * @summary EDINotificationIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDINotificationIndicator  ::=  ENUMERATED {
 *   no-notification-sent(0), pn-sent(1), nn-sent(2), fn-sent(3)}
 * ```@enum {number}
 */
export const EDINotificationIndicator = _enum_for_EDINotificationIndicator;
/* END_OF_SYMBOL_DEFINITION EDINotificationIndicator */

/* START_OF_SYMBOL_DEFINITION EDINotificationIndicator_no_notification_sent */
/**
 * @summary EDINotificationIndicator_no_notification_sent
 * @constant
 * @type {number}
 */
export const EDINotificationIndicator_no_notification_sent: EDINotificationIndicator =
    EDINotificationIndicator.no_notification_sent; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EDINotificationIndicator_no_notification_sent */

/* START_OF_SYMBOL_DEFINITION no_notification_sent */
/**
 * @summary no_notification_sent
 * @constant
 * @type {number}
 */
export const no_notification_sent: EDINotificationIndicator =
    EDINotificationIndicator.no_notification_sent; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION no_notification_sent */

/* START_OF_SYMBOL_DEFINITION EDINotificationIndicator_pn_sent */
/**
 * @summary EDINotificationIndicator_pn_sent
 * @constant
 * @type {number}
 */
export const EDINotificationIndicator_pn_sent: EDINotificationIndicator =
    EDINotificationIndicator.pn_sent; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EDINotificationIndicator_pn_sent */

/* START_OF_SYMBOL_DEFINITION pn_sent */
/**
 * @summary pn_sent
 * @constant
 * @type {number}
 */
export const pn_sent: EDINotificationIndicator =
    EDINotificationIndicator.pn_sent; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION pn_sent */

/* START_OF_SYMBOL_DEFINITION EDINotificationIndicator_nn_sent */
/**
 * @summary EDINotificationIndicator_nn_sent
 * @constant
 * @type {number}
 */
export const EDINotificationIndicator_nn_sent: EDINotificationIndicator =
    EDINotificationIndicator.nn_sent; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EDINotificationIndicator_nn_sent */

/* START_OF_SYMBOL_DEFINITION nn_sent */
/**
 * @summary nn_sent
 * @constant
 * @type {number}
 */
export const nn_sent: EDINotificationIndicator =
    EDINotificationIndicator.nn_sent; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION nn_sent */

/* START_OF_SYMBOL_DEFINITION EDINotificationIndicator_fn_sent */
/**
 * @summary EDINotificationIndicator_fn_sent
 * @constant
 * @type {number}
 */
export const EDINotificationIndicator_fn_sent: EDINotificationIndicator =
    EDINotificationIndicator.fn_sent; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EDINotificationIndicator_fn_sent */

/* START_OF_SYMBOL_DEFINITION fn_sent */
/**
 * @summary fn_sent
 * @constant
 * @type {number}
 */
export const fn_sent: EDINotificationIndicator =
    EDINotificationIndicator.fn_sent; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION fn_sent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EDINotificationIndicator */
let _cached_decoder_for_EDINotificationIndicator: $.ASN1Decoder<EDINotificationIndicator> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EDINotificationIndicator */

/* START_OF_SYMBOL_DEFINITION _decode_EDINotificationIndicator */
/**
 * @summary Decodes an ASN.1 element into a(n) EDINotificationIndicator
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDINotificationIndicator} The decoded data structure.
 */
export function _decode_EDINotificationIndicator(el: _Element) {
    if (!_cached_decoder_for_EDINotificationIndicator) {
        _cached_decoder_for_EDINotificationIndicator = $._decodeEnumerated;
    }
    return _cached_decoder_for_EDINotificationIndicator(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EDINotificationIndicator */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EDINotificationIndicator */
let _cached_encoder_for_EDINotificationIndicator: $.ASN1Encoder<EDINotificationIndicator> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EDINotificationIndicator */

/* START_OF_SYMBOL_DEFINITION _encode_EDINotificationIndicator */
/**
 * @summary Encodes a(n) EDINotificationIndicator into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDINotificationIndicator, encoded as an ASN.1 Element.
 */
export function _encode_EDINotificationIndicator(
    value: EDINotificationIndicator,
    elGetter: $.ASN1Encoder<EDINotificationIndicator>
) {
    if (!_cached_encoder_for_EDINotificationIndicator) {
        _cached_encoder_for_EDINotificationIndicator = $._encodeEnumerated;
    }
    return _cached_encoder_for_EDINotificationIndicator(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EDINotificationIndicator */

/* eslint-enable */
