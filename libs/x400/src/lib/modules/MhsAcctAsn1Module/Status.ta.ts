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

/* START_OF_SYMBOL_DEFINITION Status */
/**
 * @summary Status
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Status  ::=  INTEGER {
 *   indirect-mIS-user-agreement-on-the-request(0),
 *   mis-provider-agreement-on-the-request(1), request-in-progress(2),
 *   request-processed(3)}
 * ```
 */
export type Status = INTEGER;
/* END_OF_SYMBOL_DEFINITION Status */

/* START_OF_SYMBOL_DEFINITION Status_indirect_mIS_user_agreement_on_the_request */
/**
 * @summary Status_indirect_mIS_user_agreement_on_the_request
 * @constant
 * @type {number}
 */
export const Status_indirect_mIS_user_agreement_on_the_request: Status = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Status_indirect_mIS_user_agreement_on_the_request */

/* START_OF_SYMBOL_DEFINITION indirect_mIS_user_agreement_on_the_request */
/**
 * @summary Status_indirect_mIS_user_agreement_on_the_request
 * @constant
 * @type {number}
 */
export const indirect_mIS_user_agreement_on_the_request: Status = Status_indirect_mIS_user_agreement_on_the_request; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION indirect_mIS_user_agreement_on_the_request */

/* START_OF_SYMBOL_DEFINITION Status_mis_provider_agreement_on_the_request */
/**
 * @summary Status_mis_provider_agreement_on_the_request
 * @constant
 * @type {number}
 */
export const Status_mis_provider_agreement_on_the_request: Status = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Status_mis_provider_agreement_on_the_request */

/* START_OF_SYMBOL_DEFINITION mis_provider_agreement_on_the_request */
/**
 * @summary Status_mis_provider_agreement_on_the_request
 * @constant
 * @type {number}
 */
export const mis_provider_agreement_on_the_request: Status = Status_mis_provider_agreement_on_the_request; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION mis_provider_agreement_on_the_request */

/* START_OF_SYMBOL_DEFINITION Status_request_in_progress */
/**
 * @summary Status_request_in_progress
 * @constant
 * @type {number}
 */
export const Status_request_in_progress: Status = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Status_request_in_progress */

/* START_OF_SYMBOL_DEFINITION request_in_progress */
/**
 * @summary Status_request_in_progress
 * @constant
 * @type {number}
 */
export const request_in_progress: Status = Status_request_in_progress; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION request_in_progress */

/* START_OF_SYMBOL_DEFINITION Status_request_processed */
/**
 * @summary Status_request_processed
 * @constant
 * @type {number}
 */
export const Status_request_processed: Status = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Status_request_processed */

/* START_OF_SYMBOL_DEFINITION request_processed */
/**
 * @summary Status_request_processed
 * @constant
 * @type {number}
 */
export const request_processed: Status = Status_request_processed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION request_processed */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Status */
let _cached_decoder_for_Status: $.ASN1Decoder<Status> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Status */

/* START_OF_SYMBOL_DEFINITION _decode_Status */
/**
 * @summary Decodes an ASN.1 element into a(n) Status
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Status} The decoded data structure.
 */
export function _decode_Status(el: _Element) {
    if (!_cached_decoder_for_Status) {
        _cached_decoder_for_Status = $._decodeInteger;
    }
    return _cached_decoder_for_Status(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Status */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Status */
let _cached_encoder_for_Status: $.ASN1Encoder<Status> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Status */

/* START_OF_SYMBOL_DEFINITION _encode_Status */
/**
 * @summary Encodes a(n) Status into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Status, encoded as an ASN.1 Element.
 */
export function _encode_Status(value: Status, elGetter: $.ASN1Encoder<Status>) {
    if (!_cached_encoder_for_Status) {
        _cached_encoder_for_Status = $._encodeInteger;
    }
    return _cached_encoder_for_Status(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Status */

/* eslint-enable */
