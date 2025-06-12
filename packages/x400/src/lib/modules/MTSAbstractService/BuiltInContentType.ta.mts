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

/* START_OF_SYMBOL_DEFINITION BuiltInContentType */
/**
 * @summary BuiltInContentType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BuiltInContentType  ::=  [APPLICATION 6]  INTEGER {
 *   unidentified(0),
 *   external(1), -- identified by the object-identifier of the EXTERNAL content
 *   interpersonal-messaging-1984(2), interpersonal-messaging-1988(22),
 *   edi-messaging(35), voice-messaging(40)}(0..ub-built-in-content-type)
 * ```
 */
export type BuiltInContentType = INTEGER;
/* END_OF_SYMBOL_DEFINITION BuiltInContentType */

/* START_OF_SYMBOL_DEFINITION BuiltInContentType_unidentified */
/**
 * @summary BuiltInContentType_unidentified
 * @constant
 * @type {number}
 */
export const BuiltInContentType_unidentified: BuiltInContentType = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION BuiltInContentType_unidentified */

/* START_OF_SYMBOL_DEFINITION unidentified */
/**
 * @summary BuiltInContentType_unidentified
 * @constant
 * @type {number}
 */
export const unidentified: BuiltInContentType = BuiltInContentType_unidentified; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unidentified */

/* START_OF_SYMBOL_DEFINITION BuiltInContentType_external */
/**
 * @summary BuiltInContentType_external
 * @constant
 * @type {number}
 */
export const BuiltInContentType_external: BuiltInContentType = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION BuiltInContentType_external */

/* START_OF_SYMBOL_DEFINITION external */
/**
 * @summary BuiltInContentType_external
 * @constant
 * @type {number}
 */
export const external: BuiltInContentType = BuiltInContentType_external; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION external */

/* START_OF_SYMBOL_DEFINITION BuiltInContentType_interpersonal_messaging_1984 */
/**
 * @summary BuiltInContentType_interpersonal_messaging_1984
 * @constant
 * @type {number}
 */
export const BuiltInContentType_interpersonal_messaging_1984: BuiltInContentType = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION BuiltInContentType_interpersonal_messaging_1984 */

/* START_OF_SYMBOL_DEFINITION interpersonal_messaging_1984 */
/**
 * @summary BuiltInContentType_interpersonal_messaging_1984
 * @constant
 * @type {number}
 */
export const interpersonal_messaging_1984: BuiltInContentType = BuiltInContentType_interpersonal_messaging_1984; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION interpersonal_messaging_1984 */

/* START_OF_SYMBOL_DEFINITION BuiltInContentType_interpersonal_messaging_1988 */
/**
 * @summary BuiltInContentType_interpersonal_messaging_1988
 * @constant
 * @type {number}
 */
export const BuiltInContentType_interpersonal_messaging_1988: BuiltInContentType = 22; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION BuiltInContentType_interpersonal_messaging_1988 */

/* START_OF_SYMBOL_DEFINITION interpersonal_messaging_1988 */
/**
 * @summary BuiltInContentType_interpersonal_messaging_1988
 * @constant
 * @type {number}
 */
export const interpersonal_messaging_1988: BuiltInContentType = BuiltInContentType_interpersonal_messaging_1988; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION interpersonal_messaging_1988 */

/* START_OF_SYMBOL_DEFINITION BuiltInContentType_edi_messaging */
/**
 * @summary BuiltInContentType_edi_messaging
 * @constant
 * @type {number}
 */
export const BuiltInContentType_edi_messaging: BuiltInContentType = 35; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION BuiltInContentType_edi_messaging */

/* START_OF_SYMBOL_DEFINITION edi_messaging */
/**
 * @summary BuiltInContentType_edi_messaging
 * @constant
 * @type {number}
 */
export const edi_messaging: BuiltInContentType = BuiltInContentType_edi_messaging; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION edi_messaging */

/* START_OF_SYMBOL_DEFINITION BuiltInContentType_voice_messaging */
/**
 * @summary BuiltInContentType_voice_messaging
 * @constant
 * @type {number}
 */
export const BuiltInContentType_voice_messaging: BuiltInContentType = 40; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION BuiltInContentType_voice_messaging */

/* START_OF_SYMBOL_DEFINITION voice_messaging */
/**
 * @summary BuiltInContentType_voice_messaging
 * @constant
 * @type {number}
 */
export const voice_messaging: BuiltInContentType = BuiltInContentType_voice_messaging; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION voice_messaging */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BuiltInContentType */
let _cached_decoder_for_BuiltInContentType: $.ASN1Decoder<BuiltInContentType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BuiltInContentType */

/* START_OF_SYMBOL_DEFINITION _decode_BuiltInContentType */
/**
 * @summary Decodes an ASN.1 element into a(n) BuiltInContentType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BuiltInContentType} The decoded data structure.
 */
export function _decode_BuiltInContentType(el: _Element) {
    if (!_cached_decoder_for_BuiltInContentType) {
        _cached_decoder_for_BuiltInContentType = $._decode_implicit<BuiltInContentType>(
            () => $._decodeInteger
        );
    }
    return _cached_decoder_for_BuiltInContentType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BuiltInContentType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BuiltInContentType */
let _cached_encoder_for_BuiltInContentType: $.ASN1Encoder<BuiltInContentType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BuiltInContentType */

/* START_OF_SYMBOL_DEFINITION _encode_BuiltInContentType */
/**
 * @summary Encodes a(n) BuiltInContentType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BuiltInContentType, encoded as an ASN.1 Element.
 */
export function _encode_BuiltInContentType(
    value: BuiltInContentType,
    elGetter: $.ASN1Encoder<BuiltInContentType>
) {
    if (!_cached_encoder_for_BuiltInContentType) {
        _cached_encoder_for_BuiltInContentType = $._encode_implicit(
            _TagClass.application,
            6,
            () => $._encodeInteger,
            $.BER
        );
    }
    return _cached_encoder_for_BuiltInContentType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BuiltInContentType */

/* eslint-enable */
