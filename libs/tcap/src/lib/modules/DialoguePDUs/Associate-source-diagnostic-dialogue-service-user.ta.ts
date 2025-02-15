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

/* START_OF_SYMBOL_DEFINITION Associate_source_diagnostic_dialogue_service_user */
/**
 * @summary Associate_source_diagnostic_dialogue_service_user
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Associate-source-diagnostic-dialogue-service-user ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Associate_source_diagnostic_dialogue_service_user = INTEGER;
/* END_OF_SYMBOL_DEFINITION Associate_source_diagnostic_dialogue_service_user */

/* START_OF_SYMBOL_DEFINITION Associate_source_diagnostic_dialogue_service_user_null_ */
/**
 * @summary Associate_source_diagnostic_dialogue_service_user_null_
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_dialogue_service_user_null_: Associate_source_diagnostic_dialogue_service_user = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Associate_source_diagnostic_dialogue_service_user_null_ */

/* START_OF_SYMBOL_DEFINITION null_ */
/**
 * @summary Associate_source_diagnostic_dialogue_service_user_null_
 * @constant
 * @type {number}
 */
export const null_: Associate_source_diagnostic_dialogue_service_user = Associate_source_diagnostic_dialogue_service_user_null_; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION null_ */

/* START_OF_SYMBOL_DEFINITION Associate_source_diagnostic_dialogue_service_user_no_reason_given */
/**
 * @summary Associate_source_diagnostic_dialogue_service_user_no_reason_given
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_dialogue_service_user_no_reason_given: Associate_source_diagnostic_dialogue_service_user = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Associate_source_diagnostic_dialogue_service_user_no_reason_given */

/* START_OF_SYMBOL_DEFINITION no_reason_given */
/**
 * @summary Associate_source_diagnostic_dialogue_service_user_no_reason_given
 * @constant
 * @type {number}
 */
export const no_reason_given: Associate_source_diagnostic_dialogue_service_user = Associate_source_diagnostic_dialogue_service_user_no_reason_given; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION no_reason_given */

/* START_OF_SYMBOL_DEFINITION Associate_source_diagnostic_dialogue_service_user_application_context_name_not_supported */
/**
 * @summary Associate_source_diagnostic_dialogue_service_user_application_context_name_not_supported
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_dialogue_service_user_application_context_name_not_supported: Associate_source_diagnostic_dialogue_service_user = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Associate_source_diagnostic_dialogue_service_user_application_context_name_not_supported */

/* START_OF_SYMBOL_DEFINITION application_context_name_not_supported */
/**
 * @summary Associate_source_diagnostic_dialogue_service_user_application_context_name_not_supported
 * @constant
 * @type {number}
 */
export const application_context_name_not_supported: Associate_source_diagnostic_dialogue_service_user = Associate_source_diagnostic_dialogue_service_user_application_context_name_not_supported; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION application_context_name_not_supported */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Associate_source_diagnostic_dialogue_service_user */
let _cached_decoder_for_Associate_source_diagnostic_dialogue_service_user: $.ASN1Decoder<Associate_source_diagnostic_dialogue_service_user> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Associate_source_diagnostic_dialogue_service_user */

/* START_OF_SYMBOL_DEFINITION _decode_Associate_source_diagnostic_dialogue_service_user */
/**
 * @summary Decodes an ASN.1 element into a(n) Associate_source_diagnostic_dialogue_service_user
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Associate_source_diagnostic_dialogue_service_user} The decoded data structure.
 */
export function _decode_Associate_source_diagnostic_dialogue_service_user(
    el: _Element
) {
    if (
        !_cached_decoder_for_Associate_source_diagnostic_dialogue_service_user
    ) {
        _cached_decoder_for_Associate_source_diagnostic_dialogue_service_user =
            $._decodeInteger;
    }
    return _cached_decoder_for_Associate_source_diagnostic_dialogue_service_user(
        el
    );
}
/* END_OF_SYMBOL_DEFINITION _decode_Associate_source_diagnostic_dialogue_service_user */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Associate_source_diagnostic_dialogue_service_user */
let _cached_encoder_for_Associate_source_diagnostic_dialogue_service_user: $.ASN1Encoder<Associate_source_diagnostic_dialogue_service_user> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Associate_source_diagnostic_dialogue_service_user */

/* START_OF_SYMBOL_DEFINITION _encode_Associate_source_diagnostic_dialogue_service_user */
/**
 * @summary Encodes a(n) Associate_source_diagnostic_dialogue_service_user into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Associate_source_diagnostic_dialogue_service_user, encoded as an ASN.1 Element.
 */
export function _encode_Associate_source_diagnostic_dialogue_service_user(
    value: Associate_source_diagnostic_dialogue_service_user,
    elGetter: $.ASN1Encoder<Associate_source_diagnostic_dialogue_service_user>
) {
    if (
        !_cached_encoder_for_Associate_source_diagnostic_dialogue_service_user
    ) {
        _cached_encoder_for_Associate_source_diagnostic_dialogue_service_user =
            $._encodeInteger;
    }
    return _cached_encoder_for_Associate_source_diagnostic_dialogue_service_user(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_Associate_source_diagnostic_dialogue_service_user */

/* eslint-enable */
