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

/* START_OF_SYMBOL_DEFINITION SchemeName */
/**
 * @summary SchemeName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SchemeName  ::=  CHOICE {
 *   string   ISO646String,
 *   oid      OBJECT IDENTIFIER,
 *   ... }
 * ```
 */
export type SchemeName =
    | { string_: ISO646String } /* CHOICE_ALT_ROOT */
    | { oid: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION SchemeName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SchemeName */
let _cached_decoder_for_SchemeName: $.ASN1Decoder<SchemeName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SchemeName */

/* START_OF_SYMBOL_DEFINITION _decode_SchemeName */
/**
 * @summary Decodes an ASN.1 element into a(n) SchemeName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SchemeName} The decoded data structure.
 */
export function _decode_SchemeName(el: _Element) {
    if (!_cached_decoder_for_SchemeName) {
        _cached_decoder_for_SchemeName = $._decode_extensible_choice<SchemeName>(
            {
                'CONTEXT 0': ['string_', $._decodeISO646String],
                'CONTEXT 1': ['oid', $._decodeObjectIdentifier],
            }
        );
    }
    return _cached_decoder_for_SchemeName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SchemeName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SchemeName */
let _cached_encoder_for_SchemeName: $.ASN1Encoder<SchemeName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SchemeName */

/* START_OF_SYMBOL_DEFINITION _encode_SchemeName */
/**
 * @summary Encodes a(n) SchemeName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SchemeName, encoded as an ASN.1 Element.
 */
export function _encode_SchemeName(
    value: SchemeName,
    elGetter: $.ASN1Encoder<SchemeName>
) {
    if (!_cached_encoder_for_SchemeName) {
        _cached_encoder_for_SchemeName = $._encode_choice<SchemeName>(
            {
                string_: $._encodeISO646String,
                oid: $._encodeObjectIdentifier,
            },
            $.BER
        );
    }
    return _cached_encoder_for_SchemeName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SchemeName */

/* eslint-enable */
