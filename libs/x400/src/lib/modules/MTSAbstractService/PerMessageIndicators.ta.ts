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

/* START_OF_SYMBOL_DEFINITION PerMessageIndicators */
/**
 * @summary PerMessageIndicators
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerMessageIndicators  ::=  [APPLICATION 8]  BIT STRING {
 *   disclosure-of-other-recipients(0), -- disclosure-of-other-recipients-requested 'one',
 *
 *   -- disclosure-of-other-recipients-prohibited 'zero';
 *   -- ignored for Probe-submission
 *   implicit-conversion-prohibited(1), -- implicit-conversion-prohibited 'one',
 *
 *   -- implicit-conversion-allowed 'zero'
 *   alternate-recipient-allowed(2), -- alternate-recipient-allowed 'one',
 *
 *   -- alternate-recipient-prohibited 'zero'
 *   content-return-request(3), -- content-return-requested 'one',
 *
 *   -- content-return-not-requested 'zero';
 *   -- ignored for Probe-submission
 *   reserved(4), -- bit reserved by MOTIS 1986
 *   bit-5(5),
 *   bit-6(6), -- notification type-1 : bit 5 'zero' and bit 6 'one'
 *
 *   -- notification type-2 : bit 5 'one' and bit 6 'zero'
 *   -- notification type-3 : bit 5 'one' and bit 6 'one'
 *   -- the mapping between notification type 1, 2, 3
 *   -- and the content specific notification types are defined
 *   -- in relevant content specifications
 *   service-message(7) -- the message content is for service purposes;
 *
 *
 * -- it may be a notification related to a service message;
 * -- used only by bilateral agreement --}(SIZE (0..ub-bit-options))
 * ```
 */
export type PerMessageIndicators = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION PerMessageIndicators */

/* START_OF_SYMBOL_DEFINITION PerMessageIndicators_disclosure_of_other_recipients */
/**
 * @summary PerMessageIndicators_disclosure_of_other_recipients
 * @constant
 */
export const PerMessageIndicators_disclosure_of_other_recipients: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PerMessageIndicators_disclosure_of_other_recipients */

/* START_OF_SYMBOL_DEFINITION disclosure_of_other_recipients */
/**
 * @summary disclosure_of_other_recipients
 * @constant
 */
export const disclosure_of_other_recipients: number = PerMessageIndicators_disclosure_of_other_recipients; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION disclosure_of_other_recipients */

/* START_OF_SYMBOL_DEFINITION PerMessageIndicators_implicit_conversion_prohibited */
/**
 * @summary PerMessageIndicators_implicit_conversion_prohibited
 * @constant
 */
export const PerMessageIndicators_implicit_conversion_prohibited: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PerMessageIndicators_implicit_conversion_prohibited */

/* START_OF_SYMBOL_DEFINITION implicit_conversion_prohibited */
/**
 * @summary implicit_conversion_prohibited
 * @constant
 */
export const implicit_conversion_prohibited: number = PerMessageIndicators_implicit_conversion_prohibited; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION implicit_conversion_prohibited */

/* START_OF_SYMBOL_DEFINITION PerMessageIndicators_alternate_recipient_allowed */
/**
 * @summary PerMessageIndicators_alternate_recipient_allowed
 * @constant
 */
export const PerMessageIndicators_alternate_recipient_allowed: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PerMessageIndicators_alternate_recipient_allowed */

/* START_OF_SYMBOL_DEFINITION alternate_recipient_allowed */
/**
 * @summary alternate_recipient_allowed
 * @constant
 */
export const alternate_recipient_allowed: number = PerMessageIndicators_alternate_recipient_allowed; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION alternate_recipient_allowed */

/* START_OF_SYMBOL_DEFINITION PerMessageIndicators_content_return_request */
/**
 * @summary PerMessageIndicators_content_return_request
 * @constant
 */
export const PerMessageIndicators_content_return_request: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PerMessageIndicators_content_return_request */

/* START_OF_SYMBOL_DEFINITION content_return_request */
/**
 * @summary content_return_request
 * @constant
 */
export const content_return_request: number = PerMessageIndicators_content_return_request; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION content_return_request */

/* START_OF_SYMBOL_DEFINITION PerMessageIndicators_reserved */
/**
 * @summary PerMessageIndicators_reserved
 * @constant
 */
export const PerMessageIndicators_reserved: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PerMessageIndicators_reserved */

/* START_OF_SYMBOL_DEFINITION reserved */
/**
 * @summary reserved
 * @constant
 */
export const reserved: number = PerMessageIndicators_reserved; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION reserved */

/* START_OF_SYMBOL_DEFINITION PerMessageIndicators_bit_5 */
/**
 * @summary PerMessageIndicators_bit_5
 * @constant
 */
export const PerMessageIndicators_bit_5: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PerMessageIndicators_bit_5 */

/* START_OF_SYMBOL_DEFINITION bit_5 */
/**
 * @summary bit_5
 * @constant
 */
export const bit_5: number = PerMessageIndicators_bit_5; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION bit_5 */

/* START_OF_SYMBOL_DEFINITION PerMessageIndicators_bit_6 */
/**
 * @summary PerMessageIndicators_bit_6
 * @constant
 */
export const PerMessageIndicators_bit_6: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PerMessageIndicators_bit_6 */

/* START_OF_SYMBOL_DEFINITION bit_6 */
/**
 * @summary bit_6
 * @constant
 */
export const bit_6: number = PerMessageIndicators_bit_6; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION bit_6 */

/* START_OF_SYMBOL_DEFINITION PerMessageIndicators_service_message */
/**
 * @summary PerMessageIndicators_service_message
 * @constant
 */
export const PerMessageIndicators_service_message: number = 7; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PerMessageIndicators_service_message */

/* START_OF_SYMBOL_DEFINITION service_message */
/**
 * @summary service_message
 * @constant
 */
export const service_message: number = PerMessageIndicators_service_message; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION service_message */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PerMessageIndicators */
let _cached_decoder_for_PerMessageIndicators: $.ASN1Decoder<PerMessageIndicators> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PerMessageIndicators */

/* START_OF_SYMBOL_DEFINITION _decode_PerMessageIndicators */
/**
 * @summary Decodes an ASN.1 element into a(n) PerMessageIndicators
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PerMessageIndicators} The decoded data structure.
 */
export function _decode_PerMessageIndicators(el: _Element) {
    if (!_cached_decoder_for_PerMessageIndicators) {
        _cached_decoder_for_PerMessageIndicators = $._decode_implicit<PerMessageIndicators>(
            () => $._decodeBitString
        );
    }
    return _cached_decoder_for_PerMessageIndicators(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PerMessageIndicators */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PerMessageIndicators */
let _cached_encoder_for_PerMessageIndicators: $.ASN1Encoder<PerMessageIndicators> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PerMessageIndicators */

/* START_OF_SYMBOL_DEFINITION _encode_PerMessageIndicators */
/**
 * @summary Encodes a(n) PerMessageIndicators into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PerMessageIndicators, encoded as an ASN.1 Element.
 */
export function _encode_PerMessageIndicators(
    value: PerMessageIndicators,
    elGetter: $.ASN1Encoder<PerMessageIndicators>
) {
    if (!_cached_encoder_for_PerMessageIndicators) {
        _cached_encoder_for_PerMessageIndicators = $._encode_implicit(
            _TagClass.application,
            8,
            () => $._encodeBitString,
            $.BER
        );
    }
    return _cached_encoder_for_PerMessageIndicators(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PerMessageIndicators */

/* eslint-enable */
