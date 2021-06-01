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

/* START_OF_SYMBOL_DEFINITION RefusalReason */
/**
 * @summary RefusalReason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RefusalReason  ::=  INTEGER {
 *   facility-unavailable(0), facility-not-subscribed(1),
 *   parameter-unacceptable(2)}(0..ub-integer-options)
 * ```
 */
export type RefusalReason = INTEGER;
/* END_OF_SYMBOL_DEFINITION RefusalReason */

/* START_OF_SYMBOL_DEFINITION RefusalReason_facility_unavailable */
/**
 * @summary RefusalReason_facility_unavailable
 * @constant
 * @type {number}
 */
export const RefusalReason_facility_unavailable: RefusalReason = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RefusalReason_facility_unavailable */

/* START_OF_SYMBOL_DEFINITION facility_unavailable */
/**
 * @summary RefusalReason_facility_unavailable
 * @constant
 * @type {number}
 */
export const facility_unavailable: RefusalReason = RefusalReason_facility_unavailable; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION facility_unavailable */

/* START_OF_SYMBOL_DEFINITION RefusalReason_facility_not_subscribed */
/**
 * @summary RefusalReason_facility_not_subscribed
 * @constant
 * @type {number}
 */
export const RefusalReason_facility_not_subscribed: RefusalReason = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RefusalReason_facility_not_subscribed */

/* START_OF_SYMBOL_DEFINITION facility_not_subscribed */
/**
 * @summary RefusalReason_facility_not_subscribed
 * @constant
 * @type {number}
 */
export const facility_not_subscribed: RefusalReason = RefusalReason_facility_not_subscribed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION facility_not_subscribed */

/* START_OF_SYMBOL_DEFINITION RefusalReason_parameter_unacceptable */
/**
 * @summary RefusalReason_parameter_unacceptable
 * @constant
 * @type {number}
 */
export const RefusalReason_parameter_unacceptable: RefusalReason = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RefusalReason_parameter_unacceptable */

/* START_OF_SYMBOL_DEFINITION parameter_unacceptable */
/**
 * @summary RefusalReason_parameter_unacceptable
 * @constant
 * @type {number}
 */
export const parameter_unacceptable: RefusalReason = RefusalReason_parameter_unacceptable; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION parameter_unacceptable */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RefusalReason */
let _cached_decoder_for_RefusalReason: $.ASN1Decoder<RefusalReason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RefusalReason */

/* START_OF_SYMBOL_DEFINITION _decode_RefusalReason */
/**
 * @summary Decodes an ASN.1 element into a(n) RefusalReason
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RefusalReason} The decoded data structure.
 */
export function _decode_RefusalReason(el: _Element) {
    if (!_cached_decoder_for_RefusalReason) {
        _cached_decoder_for_RefusalReason = $._decodeInteger;
    }
    return _cached_decoder_for_RefusalReason(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RefusalReason */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RefusalReason */
let _cached_encoder_for_RefusalReason: $.ASN1Encoder<RefusalReason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RefusalReason */

/* START_OF_SYMBOL_DEFINITION _encode_RefusalReason */
/**
 * @summary Encodes a(n) RefusalReason into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RefusalReason, encoded as an ASN.1 Element.
 */
export function _encode_RefusalReason(
    value: RefusalReason,
    elGetter: $.ASN1Encoder<RefusalReason>
) {
    if (!_cached_encoder_for_RefusalReason) {
        _cached_encoder_for_RefusalReason = $._encodeInteger;
    }
    return _cached_encoder_for_RefusalReason(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RefusalReason */

/* eslint-enable */
