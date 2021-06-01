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

/* START_OF_SYMBOL_DEFINITION VideotexSyntax */
/**
 * @summary VideotexSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VideotexSyntax  ::=  INTEGER {
 *   ids(0), data-syntax1(1), data-syntax2(2), data-syntax3(3)}
 * ```
 */
export type VideotexSyntax = INTEGER;
/* END_OF_SYMBOL_DEFINITION VideotexSyntax */

/* START_OF_SYMBOL_DEFINITION VideotexSyntax_ids */
/**
 * @summary VideotexSyntax_ids
 * @constant
 * @type {number}
 */
export const VideotexSyntax_ids: VideotexSyntax = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION VideotexSyntax_ids */

/* START_OF_SYMBOL_DEFINITION ids */
/**
 * @summary VideotexSyntax_ids
 * @constant
 * @type {number}
 */
export const ids: VideotexSyntax = VideotexSyntax_ids; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ids */

/* START_OF_SYMBOL_DEFINITION VideotexSyntax_data_syntax1 */
/**
 * @summary VideotexSyntax_data_syntax1
 * @constant
 * @type {number}
 */
export const VideotexSyntax_data_syntax1: VideotexSyntax = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION VideotexSyntax_data_syntax1 */

/* START_OF_SYMBOL_DEFINITION data_syntax1 */
/**
 * @summary VideotexSyntax_data_syntax1
 * @constant
 * @type {number}
 */
export const data_syntax1: VideotexSyntax = VideotexSyntax_data_syntax1; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION data_syntax1 */

/* START_OF_SYMBOL_DEFINITION VideotexSyntax_data_syntax2 */
/**
 * @summary VideotexSyntax_data_syntax2
 * @constant
 * @type {number}
 */
export const VideotexSyntax_data_syntax2: VideotexSyntax = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION VideotexSyntax_data_syntax2 */

/* START_OF_SYMBOL_DEFINITION data_syntax2 */
/**
 * @summary VideotexSyntax_data_syntax2
 * @constant
 * @type {number}
 */
export const data_syntax2: VideotexSyntax = VideotexSyntax_data_syntax2; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION data_syntax2 */

/* START_OF_SYMBOL_DEFINITION VideotexSyntax_data_syntax3 */
/**
 * @summary VideotexSyntax_data_syntax3
 * @constant
 * @type {number}
 */
export const VideotexSyntax_data_syntax3: VideotexSyntax = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION VideotexSyntax_data_syntax3 */

/* START_OF_SYMBOL_DEFINITION data_syntax3 */
/**
 * @summary VideotexSyntax_data_syntax3
 * @constant
 * @type {number}
 */
export const data_syntax3: VideotexSyntax = VideotexSyntax_data_syntax3; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION data_syntax3 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_VideotexSyntax */
let _cached_decoder_for_VideotexSyntax: $.ASN1Decoder<VideotexSyntax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_VideotexSyntax */

/* START_OF_SYMBOL_DEFINITION _decode_VideotexSyntax */
/**
 * @summary Decodes an ASN.1 element into a(n) VideotexSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {VideotexSyntax} The decoded data structure.
 */
export function _decode_VideotexSyntax(el: _Element) {
    if (!_cached_decoder_for_VideotexSyntax) {
        _cached_decoder_for_VideotexSyntax = $._decodeInteger;
    }
    return _cached_decoder_for_VideotexSyntax(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_VideotexSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_VideotexSyntax */
let _cached_encoder_for_VideotexSyntax: $.ASN1Encoder<VideotexSyntax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_VideotexSyntax */

/* START_OF_SYMBOL_DEFINITION _encode_VideotexSyntax */
/**
 * @summary Encodes a(n) VideotexSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VideotexSyntax, encoded as an ASN.1 Element.
 */
export function _encode_VideotexSyntax(
    value: VideotexSyntax,
    elGetter: $.ASN1Encoder<VideotexSyntax>
) {
    if (!_cached_encoder_for_VideotexSyntax) {
        _cached_encoder_for_VideotexSyntax = $._encodeInteger;
    }
    return _cached_encoder_for_VideotexSyntax(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_VideotexSyntax */

/* eslint-enable */
