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

/* START_OF_SYMBOL_DEFINITION NNUAMSBasicCodeField */
/**
 * @summary NNUAMSBasicCodeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NNUAMSBasicCodeField  ::=  INTEGER {
 *   unspecified(0),
 *   cannot-deliver-to-user(1), -- the EDI Interchange can not be passed on to the
 *
 *   -- user
 *   delivery-timeout(2), -- the EDI Interchange could not be passed on to the
 *
 *   -- user within a specified time limit
 *   message-discarded(3), -- the UA/MS discarded the message before handoff to
 *
 *   -- user
 *   subscription-terminated(4), -- recipient's subscription terminated after delivery
 *
 *   -- but before handoff to user
 *   forwarding-error(5), -- EDI Forwarding was attempted, but failed
 *   security-error(6) -- security error
 *
 *
 * -- physical delivery errors indicated by "cannot-deliver-to-user"
 * }(0..ub-reason-code)
 * ```
 */
export type NNUAMSBasicCodeField = INTEGER;
/* END_OF_SYMBOL_DEFINITION NNUAMSBasicCodeField */

/* START_OF_SYMBOL_DEFINITION NNUAMSBasicCodeField_unspecified */
/**
 * @summary NNUAMSBasicCodeField_unspecified
 * @constant
 * @type {number}
 */
export const NNUAMSBasicCodeField_unspecified: NNUAMSBasicCodeField = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSBasicCodeField_unspecified */

/* START_OF_SYMBOL_DEFINITION unspecified */
/**
 * @summary NNUAMSBasicCodeField_unspecified
 * @constant
 * @type {number}
 */
export const unspecified: NNUAMSBasicCodeField = NNUAMSBasicCodeField_unspecified; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unspecified */

/* START_OF_SYMBOL_DEFINITION NNUAMSBasicCodeField_cannot_deliver_to_user */
/**
 * @summary NNUAMSBasicCodeField_cannot_deliver_to_user
 * @constant
 * @type {number}
 */
export const NNUAMSBasicCodeField_cannot_deliver_to_user: NNUAMSBasicCodeField = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSBasicCodeField_cannot_deliver_to_user */

/* START_OF_SYMBOL_DEFINITION cannot_deliver_to_user */
/**
 * @summary NNUAMSBasicCodeField_cannot_deliver_to_user
 * @constant
 * @type {number}
 */
export const cannot_deliver_to_user: NNUAMSBasicCodeField = NNUAMSBasicCodeField_cannot_deliver_to_user; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION cannot_deliver_to_user */

/* START_OF_SYMBOL_DEFINITION NNUAMSBasicCodeField_delivery_timeout */
/**
 * @summary NNUAMSBasicCodeField_delivery_timeout
 * @constant
 * @type {number}
 */
export const NNUAMSBasicCodeField_delivery_timeout: NNUAMSBasicCodeField = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSBasicCodeField_delivery_timeout */

/* START_OF_SYMBOL_DEFINITION delivery_timeout */
/**
 * @summary NNUAMSBasicCodeField_delivery_timeout
 * @constant
 * @type {number}
 */
export const delivery_timeout: NNUAMSBasicCodeField = NNUAMSBasicCodeField_delivery_timeout; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION delivery_timeout */

/* START_OF_SYMBOL_DEFINITION NNUAMSBasicCodeField_message_discarded */
/**
 * @summary NNUAMSBasicCodeField_message_discarded
 * @constant
 * @type {number}
 */
export const NNUAMSBasicCodeField_message_discarded: NNUAMSBasicCodeField = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSBasicCodeField_message_discarded */

/* START_OF_SYMBOL_DEFINITION message_discarded */
/**
 * @summary NNUAMSBasicCodeField_message_discarded
 * @constant
 * @type {number}
 */
export const message_discarded: NNUAMSBasicCodeField = NNUAMSBasicCodeField_message_discarded; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION message_discarded */

/* START_OF_SYMBOL_DEFINITION NNUAMSBasicCodeField_subscription_terminated */
/**
 * @summary NNUAMSBasicCodeField_subscription_terminated
 * @constant
 * @type {number}
 */
export const NNUAMSBasicCodeField_subscription_terminated: NNUAMSBasicCodeField = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSBasicCodeField_subscription_terminated */

/* START_OF_SYMBOL_DEFINITION subscription_terminated */
/**
 * @summary NNUAMSBasicCodeField_subscription_terminated
 * @constant
 * @type {number}
 */
export const subscription_terminated: NNUAMSBasicCodeField = NNUAMSBasicCodeField_subscription_terminated; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION subscription_terminated */

/* START_OF_SYMBOL_DEFINITION NNUAMSBasicCodeField_forwarding_error */
/**
 * @summary NNUAMSBasicCodeField_forwarding_error
 * @constant
 * @type {number}
 */
export const NNUAMSBasicCodeField_forwarding_error: NNUAMSBasicCodeField = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSBasicCodeField_forwarding_error */

/* START_OF_SYMBOL_DEFINITION forwarding_error */
/**
 * @summary NNUAMSBasicCodeField_forwarding_error
 * @constant
 * @type {number}
 */
export const forwarding_error: NNUAMSBasicCodeField = NNUAMSBasicCodeField_forwarding_error; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION forwarding_error */

/* START_OF_SYMBOL_DEFINITION NNUAMSBasicCodeField_security_error */
/**
 * @summary NNUAMSBasicCodeField_security_error
 * @constant
 * @type {number}
 */
export const NNUAMSBasicCodeField_security_error: NNUAMSBasicCodeField = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NNUAMSBasicCodeField_security_error */

/* START_OF_SYMBOL_DEFINITION security_error */
/**
 * @summary NNUAMSBasicCodeField_security_error
 * @constant
 * @type {number}
 */
export const security_error: NNUAMSBasicCodeField = NNUAMSBasicCodeField_security_error; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION security_error */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NNUAMSBasicCodeField */
let _cached_decoder_for_NNUAMSBasicCodeField: $.ASN1Decoder<NNUAMSBasicCodeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NNUAMSBasicCodeField */

/* START_OF_SYMBOL_DEFINITION _decode_NNUAMSBasicCodeField */
/**
 * @summary Decodes an ASN.1 element into a(n) NNUAMSBasicCodeField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NNUAMSBasicCodeField} The decoded data structure.
 */
export function _decode_NNUAMSBasicCodeField(el: _Element) {
    if (!_cached_decoder_for_NNUAMSBasicCodeField) {
        _cached_decoder_for_NNUAMSBasicCodeField = $._decodeInteger;
    }
    return _cached_decoder_for_NNUAMSBasicCodeField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NNUAMSBasicCodeField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NNUAMSBasicCodeField */
let _cached_encoder_for_NNUAMSBasicCodeField: $.ASN1Encoder<NNUAMSBasicCodeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NNUAMSBasicCodeField */

/* START_OF_SYMBOL_DEFINITION _encode_NNUAMSBasicCodeField */
/**
 * @summary Encodes a(n) NNUAMSBasicCodeField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NNUAMSBasicCodeField, encoded as an ASN.1 Element.
 */
export function _encode_NNUAMSBasicCodeField(
    value: NNUAMSBasicCodeField,
    elGetter: $.ASN1Encoder<NNUAMSBasicCodeField>
) {
    if (!_cached_encoder_for_NNUAMSBasicCodeField) {
        _cached_encoder_for_NNUAMSBasicCodeField = $._encodeInteger;
    }
    return _cached_encoder_for_NNUAMSBasicCodeField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NNUAMSBasicCodeField */

/* eslint-enable */
