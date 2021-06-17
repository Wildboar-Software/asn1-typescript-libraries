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

/* START_OF_SYMBOL_DEFINITION _enum_for_RequestSource */
/**
 * @summary RequestSource
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestSource  ::=  ENUMERATED {local(0), remote(1)}
 * ```@enum {number}
 */
export enum _enum_for_RequestSource {
    local = 0,
    remote = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_RequestSource */

/* START_OF_SYMBOL_DEFINITION RequestSource */
/**
 * @summary RequestSource
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestSource  ::=  ENUMERATED {local(0), remote(1)}
 * ```@enum {number}
 */
export type RequestSource = _enum_for_RequestSource;
/* END_OF_SYMBOL_DEFINITION RequestSource */

/* START_OF_SYMBOL_DEFINITION RequestSource */
/**
 * @summary RequestSource
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestSource  ::=  ENUMERATED {local(0), remote(1)}
 * ```@enum {number}
 */
export const RequestSource = _enum_for_RequestSource;
/* END_OF_SYMBOL_DEFINITION RequestSource */

/* START_OF_SYMBOL_DEFINITION RequestSource_local */
/**
 * @summary RequestSource_local
 * @constant
 * @type {number}
 */
export const RequestSource_local: RequestSource =
    RequestSource.local; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RequestSource_local */

/* START_OF_SYMBOL_DEFINITION local */
/**
 * @summary local
 * @constant
 * @type {number}
 */
export const local: RequestSource =
    RequestSource.local; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION local */

/* START_OF_SYMBOL_DEFINITION RequestSource_remote */
/**
 * @summary RequestSource_remote
 * @constant
 * @type {number}
 */
export const RequestSource_remote: RequestSource =
    RequestSource.remote; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RequestSource_remote */

/* START_OF_SYMBOL_DEFINITION remote */
/**
 * @summary remote
 * @constant
 * @type {number}
 */
export const remote: RequestSource =
    RequestSource.remote; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION remote */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RequestSource */
let _cached_decoder_for_RequestSource: $.ASN1Decoder<RequestSource> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RequestSource */

/* START_OF_SYMBOL_DEFINITION _decode_RequestSource */
/**
 * @summary Decodes an ASN.1 element into a(n) RequestSource
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RequestSource} The decoded data structure.
 */
export function _decode_RequestSource(el: _Element) {
    if (!_cached_decoder_for_RequestSource) {
        _cached_decoder_for_RequestSource = $._decodeEnumerated;
    }
    return _cached_decoder_for_RequestSource(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RequestSource */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RequestSource */
let _cached_encoder_for_RequestSource: $.ASN1Encoder<RequestSource> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RequestSource */

/* START_OF_SYMBOL_DEFINITION _encode_RequestSource */
/**
 * @summary Encodes a(n) RequestSource into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestSource, encoded as an ASN.1 Element.
 */
export function _encode_RequestSource(
    value: RequestSource,
    elGetter: $.ASN1Encoder<RequestSource>
) {
    if (!_cached_encoder_for_RequestSource) {
        _cached_encoder_for_RequestSource = $._encodeEnumerated;
    }
    return _cached_encoder_for_RequestSource(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RequestSource */

/* eslint-enable */
