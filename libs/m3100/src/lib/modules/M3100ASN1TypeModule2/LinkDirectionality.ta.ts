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

/* START_OF_SYMBOL_DEFINITION _enum_for_LinkDirectionality */
/**
 * @summary LinkDirectionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LinkDirectionality  ::=  ENUMERATED {
 *   unidirectional(0), bidirectional(1), undefined(2)}
 * ```@enum {number}
 */
export enum _enum_for_LinkDirectionality {
    unidirectional = 0,
    bidirectional = 1,
    undefined = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_LinkDirectionality */

/* START_OF_SYMBOL_DEFINITION LinkDirectionality */
/**
 * @summary LinkDirectionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LinkDirectionality  ::=  ENUMERATED {
 *   unidirectional(0), bidirectional(1), undefined(2)}
 * ```@enum {number}
 */
export type LinkDirectionality = _enum_for_LinkDirectionality;
/* END_OF_SYMBOL_DEFINITION LinkDirectionality */

/* START_OF_SYMBOL_DEFINITION LinkDirectionality */
/**
 * @summary LinkDirectionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LinkDirectionality  ::=  ENUMERATED {
 *   unidirectional(0), bidirectional(1), undefined(2)}
 * ```@enum {number}
 */
export const LinkDirectionality = _enum_for_LinkDirectionality;
/* END_OF_SYMBOL_DEFINITION LinkDirectionality */

/* START_OF_SYMBOL_DEFINITION LinkDirectionality_unidirectional */
/**
 * @summary LinkDirectionality_unidirectional
 * @constant
 * @type {number}
 */
export const LinkDirectionality_unidirectional: LinkDirectionality =
    LinkDirectionality.unidirectional; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LinkDirectionality_unidirectional */

/* START_OF_SYMBOL_DEFINITION unidirectional */
/**
 * @summary unidirectional
 * @constant
 * @type {number}
 */
export const unidirectional: LinkDirectionality =
    LinkDirectionality.unidirectional; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unidirectional */

/* START_OF_SYMBOL_DEFINITION LinkDirectionality_bidirectional */
/**
 * @summary LinkDirectionality_bidirectional
 * @constant
 * @type {number}
 */
export const LinkDirectionality_bidirectional: LinkDirectionality =
    LinkDirectionality.bidirectional; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LinkDirectionality_bidirectional */

/* START_OF_SYMBOL_DEFINITION bidirectional */
/**
 * @summary bidirectional
 * @constant
 * @type {number}
 */
export const bidirectional: LinkDirectionality =
    LinkDirectionality.bidirectional; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION bidirectional */

/* START_OF_SYMBOL_DEFINITION LinkDirectionality_undefined */
/**
 * @summary LinkDirectionality_undefined
 * @constant
 * @type {number}
 */
export const LinkDirectionality_undefined: LinkDirectionality =
    LinkDirectionality.undefined; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LinkDirectionality_undefined */

/* START_OF_SYMBOL_DEFINITION undefined */
/**
 * @summary undefined
 * @constant
 * @type {number}
 */
export const undefined: LinkDirectionality =
    LinkDirectionality.undefined; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION undefined */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LinkDirectionality */
let _cached_decoder_for_LinkDirectionality: $.ASN1Decoder<LinkDirectionality> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LinkDirectionality */

/* START_OF_SYMBOL_DEFINITION _decode_LinkDirectionality */
/**
 * @summary Decodes an ASN.1 element into a(n) LinkDirectionality
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LinkDirectionality} The decoded data structure.
 */
export function _decode_LinkDirectionality(el: _Element) {
    if (!_cached_decoder_for_LinkDirectionality) {
        _cached_decoder_for_LinkDirectionality = $._decodeEnumerated;
    }
    return _cached_decoder_for_LinkDirectionality(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LinkDirectionality */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LinkDirectionality */
let _cached_encoder_for_LinkDirectionality: $.ASN1Encoder<LinkDirectionality> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LinkDirectionality */

/* START_OF_SYMBOL_DEFINITION _encode_LinkDirectionality */
/**
 * @summary Encodes a(n) LinkDirectionality into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LinkDirectionality, encoded as an ASN.1 Element.
 */
export function _encode_LinkDirectionality(
    value: LinkDirectionality,
    elGetter: $.ASN1Encoder<LinkDirectionality>
) {
    if (!_cached_encoder_for_LinkDirectionality) {
        _cached_encoder_for_LinkDirectionality = $._encodeEnumerated;
    }
    return _cached_encoder_for_LinkDirectionality(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LinkDirectionality */

/* eslint-enable */
