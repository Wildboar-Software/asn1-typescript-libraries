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

/* START_OF_SYMBOL_DEFINITION Associate_source_diagnostic_dialogue_service_provider */
/**
 * @summary Associate_source_diagnostic_dialogue_service_provider
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Associate-source-diagnostic-dialogue-service-provider ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Associate_source_diagnostic_dialogue_service_provider = INTEGER;
/* END_OF_SYMBOL_DEFINITION Associate_source_diagnostic_dialogue_service_provider */

/* START_OF_SYMBOL_DEFINITION Associate_source_diagnostic_dialogue_service_provider_null_ */
/**
 * @summary Associate_source_diagnostic_dialogue_service_provider_null_
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_dialogue_service_provider_null_: Associate_source_diagnostic_dialogue_service_provider = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Associate_source_diagnostic_dialogue_service_provider_null_ */

/* START_OF_SYMBOL_DEFINITION null_ */
/**
 * @summary Associate_source_diagnostic_dialogue_service_provider_null_
 * @constant
 * @type {number}
 */
export const null_: Associate_source_diagnostic_dialogue_service_provider = Associate_source_diagnostic_dialogue_service_provider_null_; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION null_ */

/* START_OF_SYMBOL_DEFINITION Associate_source_diagnostic_dialogue_service_provider_no_reason_given */
/**
 * @summary Associate_source_diagnostic_dialogue_service_provider_no_reason_given
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_dialogue_service_provider_no_reason_given: Associate_source_diagnostic_dialogue_service_provider = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Associate_source_diagnostic_dialogue_service_provider_no_reason_given */

/* START_OF_SYMBOL_DEFINITION no_reason_given */
/**
 * @summary Associate_source_diagnostic_dialogue_service_provider_no_reason_given
 * @constant
 * @type {number}
 */
export const no_reason_given: Associate_source_diagnostic_dialogue_service_provider = Associate_source_diagnostic_dialogue_service_provider_no_reason_given; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION no_reason_given */

/* START_OF_SYMBOL_DEFINITION Associate_source_diagnostic_dialogue_service_provider_no_common_dialogue_portion */
/**
 * @summary Associate_source_diagnostic_dialogue_service_provider_no_common_dialogue_portion
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_dialogue_service_provider_no_common_dialogue_portion: Associate_source_diagnostic_dialogue_service_provider = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Associate_source_diagnostic_dialogue_service_provider_no_common_dialogue_portion */

/* START_OF_SYMBOL_DEFINITION no_common_dialogue_portion */
/**
 * @summary Associate_source_diagnostic_dialogue_service_provider_no_common_dialogue_portion
 * @constant
 * @type {number}
 */
export const no_common_dialogue_portion: Associate_source_diagnostic_dialogue_service_provider = Associate_source_diagnostic_dialogue_service_provider_no_common_dialogue_portion; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION no_common_dialogue_portion */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Associate_source_diagnostic_dialogue_service_provider */
let _cached_decoder_for_Associate_source_diagnostic_dialogue_service_provider: $.ASN1Decoder<Associate_source_diagnostic_dialogue_service_provider> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Associate_source_diagnostic_dialogue_service_provider */

/* START_OF_SYMBOL_DEFINITION _decode_Associate_source_diagnostic_dialogue_service_provider */
/**
 * @summary Decodes an ASN.1 element into a(n) Associate_source_diagnostic_dialogue_service_provider
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Associate_source_diagnostic_dialogue_service_provider} The decoded data structure.
 */
export function _decode_Associate_source_diagnostic_dialogue_service_provider(
    el: _Element
) {
    if (
        !_cached_decoder_for_Associate_source_diagnostic_dialogue_service_provider
    ) {
        _cached_decoder_for_Associate_source_diagnostic_dialogue_service_provider =
            $._decodeInteger;
    }
    return _cached_decoder_for_Associate_source_diagnostic_dialogue_service_provider(
        el
    );
}
/* END_OF_SYMBOL_DEFINITION _decode_Associate_source_diagnostic_dialogue_service_provider */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Associate_source_diagnostic_dialogue_service_provider */
let _cached_encoder_for_Associate_source_diagnostic_dialogue_service_provider: $.ASN1Encoder<Associate_source_diagnostic_dialogue_service_provider> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Associate_source_diagnostic_dialogue_service_provider */

/* START_OF_SYMBOL_DEFINITION _encode_Associate_source_diagnostic_dialogue_service_provider */
/**
 * @summary Encodes a(n) Associate_source_diagnostic_dialogue_service_provider into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Associate_source_diagnostic_dialogue_service_provider, encoded as an ASN.1 Element.
 */
export function _encode_Associate_source_diagnostic_dialogue_service_provider(
    value: Associate_source_diagnostic_dialogue_service_provider,
    elGetter: $.ASN1Encoder<Associate_source_diagnostic_dialogue_service_provider>
) {
    if (
        !_cached_encoder_for_Associate_source_diagnostic_dialogue_service_provider
    ) {
        _cached_encoder_for_Associate_source_diagnostic_dialogue_service_provider =
            $._encodeInteger;
    }
    return _cached_encoder_for_Associate_source_diagnostic_dialogue_service_provider(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_Associate_source_diagnostic_dialogue_service_provider */

/* eslint-enable */
