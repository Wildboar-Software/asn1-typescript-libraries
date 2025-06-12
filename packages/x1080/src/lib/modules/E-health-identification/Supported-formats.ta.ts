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

/* START_OF_SYMBOL_DEFINITION Supported_formats */
/**
 * @summary Supported_formats
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Supported-formats  ::=  CHOICE {
 *   oids  SEQUENCE OF OBJECT IDENTIFIER,
 *   ... }
 * ```
 */
export type Supported_formats =
    | { oids: OBJECT_IDENTIFIER[] } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION Supported_formats */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Supported_formats */
let _cached_decoder_for_Supported_formats: $.ASN1Decoder<Supported_formats> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Supported_formats */

/* START_OF_SYMBOL_DEFINITION _decode_Supported_formats */
/**
 * @summary Decodes an ASN.1 element into a(n) Supported_formats
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Supported_formats} The decoded data structure.
 */
export function _decode_Supported_formats(el: _Element) {
    if (!_cached_decoder_for_Supported_formats) {
        _cached_decoder_for_Supported_formats = $._decode_extensible_choice<Supported_formats>(
            {
                'CONTEXT 0': [
                    'oids',
                    $._decodeSequenceOf<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_Supported_formats(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Supported_formats */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Supported_formats */
let _cached_encoder_for_Supported_formats: $.ASN1Encoder<Supported_formats> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Supported_formats */

/* START_OF_SYMBOL_DEFINITION _encode_Supported_formats */
/**
 * @summary Encodes a(n) Supported_formats into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Supported_formats, encoded as an ASN.1 Element.
 */
export function _encode_Supported_formats(
    value: Supported_formats,
    elGetter: $.ASN1Encoder<Supported_formats>
) {
    if (!_cached_encoder_for_Supported_formats) {
        _cached_encoder_for_Supported_formats = $._encode_choice<Supported_formats>(
            {
                oids: $._encodeSequenceOf<OBJECT_IDENTIFIER>(
                    () => $._encodeObjectIdentifier,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_Supported_formats(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Supported_formats */

/* eslint-enable */
