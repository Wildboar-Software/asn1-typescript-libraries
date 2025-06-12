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

/* START_OF_SYMBOL_DEFINITION Stratum */
/**
 * @summary Stratum
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Stratum  ::=  INTEGER(0..255)
 * ```
 */
export type Stratum = INTEGER;
/* END_OF_SYMBOL_DEFINITION Stratum */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Stratum */
let _cached_decoder_for_Stratum: $.ASN1Decoder<Stratum> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Stratum */

/* START_OF_SYMBOL_DEFINITION _decode_Stratum */
/**
 * @summary Decodes an ASN.1 element into a(n) Stratum
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Stratum} The decoded data structure.
 */
export function _decode_Stratum(el: _Element) {
    if (!_cached_decoder_for_Stratum) {
        _cached_decoder_for_Stratum = $._decodeInteger;
    }
    return _cached_decoder_for_Stratum(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Stratum */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Stratum */
let _cached_encoder_for_Stratum: $.ASN1Encoder<Stratum> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Stratum */

/* START_OF_SYMBOL_DEFINITION _encode_Stratum */
/**
 * @summary Encodes a(n) Stratum into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Stratum, encoded as an ASN.1 Element.
 */
export function _encode_Stratum(
    value: Stratum,
    elGetter: $.ASN1Encoder<Stratum>
) {
    if (!_cached_encoder_for_Stratum) {
        _cached_encoder_for_Stratum = $._encodeInteger;
    }
    return _cached_encoder_for_Stratum(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Stratum */

/* eslint-enable */
