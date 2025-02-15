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

/* START_OF_SYMBOL_DEFINITION _enum_for_Repertoire */
/**
 * @summary Repertoire
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Repertoire  ::=  ENUMERATED {ita2(2), ia5(5)}
 * ```@enum {number}
 */
export enum _enum_for_Repertoire {
    ita2 = 2,
    ia5 = 5,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_Repertoire */

/* START_OF_SYMBOL_DEFINITION Repertoire */
/**
 * @summary Repertoire
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Repertoire  ::=  ENUMERATED {ita2(2), ia5(5)}
 * ```@enum {number}
 */
export type Repertoire = _enum_for_Repertoire;
/* END_OF_SYMBOL_DEFINITION Repertoire */

/* START_OF_SYMBOL_DEFINITION Repertoire */
/**
 * @summary Repertoire
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Repertoire  ::=  ENUMERATED {ita2(2), ia5(5)}
 * ```@enum {number}
 */
export const Repertoire = _enum_for_Repertoire;
/* END_OF_SYMBOL_DEFINITION Repertoire */

/* START_OF_SYMBOL_DEFINITION Repertoire_ita2 */
/**
 * @summary Repertoire_ita2
 * @constant
 * @type {number}
 */
export const Repertoire_ita2: Repertoire =
    Repertoire.ita2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Repertoire_ita2 */

/* START_OF_SYMBOL_DEFINITION ita2 */
/**
 * @summary ita2
 * @constant
 * @type {number}
 */
export const ita2: Repertoire =
    Repertoire.ita2; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ita2 */

/* START_OF_SYMBOL_DEFINITION Repertoire_ia5 */
/**
 * @summary Repertoire_ia5
 * @constant
 * @type {number}
 */
export const Repertoire_ia5: Repertoire =
    Repertoire.ia5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Repertoire_ia5 */

/* START_OF_SYMBOL_DEFINITION ia5 */
/**
 * @summary ia5
 * @constant
 * @type {number}
 */
export const ia5: Repertoire =
    Repertoire.ia5; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ia5 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Repertoire */
let _cached_decoder_for_Repertoire: $.ASN1Decoder<Repertoire> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Repertoire */

/* START_OF_SYMBOL_DEFINITION _decode_Repertoire */
/**
 * @summary Decodes an ASN.1 element into a(n) Repertoire
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Repertoire} The decoded data structure.
 */
export function _decode_Repertoire(el: _Element) {
    if (!_cached_decoder_for_Repertoire) {
        _cached_decoder_for_Repertoire = $._decodeEnumerated;
    }
    return _cached_decoder_for_Repertoire(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Repertoire */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Repertoire */
let _cached_encoder_for_Repertoire: $.ASN1Encoder<Repertoire> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Repertoire */

/* START_OF_SYMBOL_DEFINITION _encode_Repertoire */
/**
 * @summary Encodes a(n) Repertoire into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Repertoire, encoded as an ASN.1 Element.
 */
export function _encode_Repertoire(
    value: Repertoire,
    elGetter: $.ASN1Encoder<Repertoire>
) {
    if (!_cached_encoder_for_Repertoire) {
        _cached_encoder_for_Repertoire = $._encodeEnumerated;
    }
    return _cached_encoder_for_Repertoire(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Repertoire */

/* eslint-enable */
