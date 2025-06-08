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

/* START_OF_SYMBOL_DEFINITION _enum_for_Directionality */
/**
 * @summary Directionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Directionality  ::=  ENUMERATED {unidirectional(0), bidirectional(1)}
 * ```@enum {number}
 */
export enum _enum_for_Directionality {
    unidirectional = 0,
    bidirectional = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_Directionality */

/* START_OF_SYMBOL_DEFINITION Directionality */
/**
 * @summary Directionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Directionality  ::=  ENUMERATED {unidirectional(0), bidirectional(1)}
 * ```@enum {number}
 */
export type Directionality = _enum_for_Directionality;
/* END_OF_SYMBOL_DEFINITION Directionality */

/* START_OF_SYMBOL_DEFINITION Directionality */
/**
 * @summary Directionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Directionality  ::=  ENUMERATED {unidirectional(0), bidirectional(1)}
 * ```@enum {number}
 */
export const Directionality = _enum_for_Directionality;
/* END_OF_SYMBOL_DEFINITION Directionality */

/* START_OF_SYMBOL_DEFINITION Directionality_unidirectional */
/**
 * @summary Directionality_unidirectional
 * @constant
 * @type {number}
 */
export const Directionality_unidirectional: Directionality =
    Directionality.unidirectional; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Directionality_unidirectional */

/* START_OF_SYMBOL_DEFINITION unidirectional */
/**
 * @summary unidirectional
 * @constant
 * @type {number}
 */
export const unidirectional: Directionality =
    Directionality.unidirectional; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unidirectional */

/* START_OF_SYMBOL_DEFINITION Directionality_bidirectional */
/**
 * @summary Directionality_bidirectional
 * @constant
 * @type {number}
 */
export const Directionality_bidirectional: Directionality =
    Directionality.bidirectional; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Directionality_bidirectional */

/* START_OF_SYMBOL_DEFINITION bidirectional */
/**
 * @summary bidirectional
 * @constant
 * @type {number}
 */
export const bidirectional: Directionality =
    Directionality.bidirectional; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION bidirectional */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Directionality */
let _cached_decoder_for_Directionality: $.ASN1Decoder<Directionality> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Directionality */

/* START_OF_SYMBOL_DEFINITION _decode_Directionality */
/**
 * @summary Decodes an ASN.1 element into a(n) Directionality
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Directionality} The decoded data structure.
 */
export function _decode_Directionality(el: _Element) {
    if (!_cached_decoder_for_Directionality) {
        _cached_decoder_for_Directionality = $._decodeEnumerated;
    }
    return _cached_decoder_for_Directionality(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Directionality */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Directionality */
let _cached_encoder_for_Directionality: $.ASN1Encoder<Directionality> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Directionality */

/* START_OF_SYMBOL_DEFINITION _encode_Directionality */
/**
 * @summary Encodes a(n) Directionality into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Directionality, encoded as an ASN.1 Element.
 */
export function _encode_Directionality(
    value: Directionality,
    elGetter: $.ASN1Encoder<Directionality>
) {
    if (!_cached_encoder_for_Directionality) {
        _cached_encoder_for_Directionality = $._encodeEnumerated;
    }
    return _cached_encoder_for_Directionality(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Directionality */

/* eslint-enable */
