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

/* START_OF_SYMBOL_DEFINITION _enum_for_Termination */
/**
 * @summary Termination
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Termination  ::=  ENUMERATED {basic(1), prearranged(2)}
 * ```@enum {number}
 */
export enum _enum_for_Termination {
    basic = 1,
    prearranged = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_Termination */

/* START_OF_SYMBOL_DEFINITION Termination */
/**
 * @summary Termination
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Termination  ::=  ENUMERATED {basic(1), prearranged(2)}
 * ```@enum {number}
 */
export type Termination = _enum_for_Termination;
/* END_OF_SYMBOL_DEFINITION Termination */

/* START_OF_SYMBOL_DEFINITION Termination */
/**
 * @summary Termination
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Termination  ::=  ENUMERATED {basic(1), prearranged(2)}
 * ```@enum {number}
 */
export const Termination = _enum_for_Termination;
/* END_OF_SYMBOL_DEFINITION Termination */

/* START_OF_SYMBOL_DEFINITION Termination_basic */
/**
 * @summary Termination_basic
 * @constant
 * @type {number}
 */
export const Termination_basic: Termination =
    Termination.basic; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Termination_basic */

/* START_OF_SYMBOL_DEFINITION basic */
/**
 * @summary basic
 * @constant
 * @type {number}
 */
export const basic: Termination =
    Termination.basic; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION basic */

/* START_OF_SYMBOL_DEFINITION Termination_prearranged */
/**
 * @summary Termination_prearranged
 * @constant
 * @type {number}
 */
export const Termination_prearranged: Termination =
    Termination.prearranged; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Termination_prearranged */

/* START_OF_SYMBOL_DEFINITION prearranged */
/**
 * @summary prearranged
 * @constant
 * @type {number}
 */
export const prearranged: Termination =
    Termination.prearranged; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION prearranged */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Termination */
let _cached_decoder_for_Termination: $.ASN1Decoder<Termination> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Termination */

/* START_OF_SYMBOL_DEFINITION _decode_Termination */
/**
 * @summary Decodes an ASN.1 element into a(n) Termination
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Termination} The decoded data structure.
 */
export function _decode_Termination(el: _Element) {
    if (!_cached_decoder_for_Termination) {
        _cached_decoder_for_Termination = $._decodeEnumerated;
    }
    return _cached_decoder_for_Termination(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Termination */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Termination */
let _cached_encoder_for_Termination: $.ASN1Encoder<Termination> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Termination */

/* START_OF_SYMBOL_DEFINITION _encode_Termination */
/**
 * @summary Encodes a(n) Termination into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Termination, encoded as an ASN.1 Element.
 */
export function _encode_Termination(
    value: Termination,
    elGetter: $.ASN1Encoder<Termination>
) {
    if (!_cached_encoder_for_Termination) {
        _cached_encoder_for_Termination = $._encodeEnumerated;
    }
    return _cached_encoder_for_Termination(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Termination */

/* eslint-enable */
