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

/* START_OF_SYMBOL_DEFINITION ContentCorrelator */
/**
 * @summary ContentCorrelator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentCorrelator  ::=  CHOICE {ia5text  IA5String,
 *                               octets   OCTET STRING
 * }
 * ```
 */
export type ContentCorrelator =
    | { ia5text: IA5String } /* CHOICE_ALT_ROOT */
    | { octets: OCTET_STRING } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ContentCorrelator */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ContentCorrelator */
let _cached_decoder_for_ContentCorrelator: $.ASN1Decoder<ContentCorrelator> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ContentCorrelator */

/* START_OF_SYMBOL_DEFINITION _decode_ContentCorrelator */
/**
 * @summary Decodes an ASN.1 element into a(n) ContentCorrelator
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContentCorrelator} The decoded data structure.
 */
export function _decode_ContentCorrelator(el: _Element) {
    if (!_cached_decoder_for_ContentCorrelator) {
        _cached_decoder_for_ContentCorrelator = $._decode_inextensible_choice<ContentCorrelator>(
            {
                'UNIVERSAL 22': ['ia5text', $._decodeIA5String],
                'UNIVERSAL 4': ['octets', $._decodeOctetString],
            }
        );
    }
    return _cached_decoder_for_ContentCorrelator(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ContentCorrelator */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ContentCorrelator */
let _cached_encoder_for_ContentCorrelator: $.ASN1Encoder<ContentCorrelator> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ContentCorrelator */

/* START_OF_SYMBOL_DEFINITION _encode_ContentCorrelator */
/**
 * @summary Encodes a(n) ContentCorrelator into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentCorrelator, encoded as an ASN.1 Element.
 */
export function _encode_ContentCorrelator(
    value: ContentCorrelator,
    elGetter: $.ASN1Encoder<ContentCorrelator>
) {
    if (!_cached_encoder_for_ContentCorrelator) {
        _cached_encoder_for_ContentCorrelator = $._encode_choice<ContentCorrelator>(
            {
                ia5text: $._encodeIA5String,
                octets: $._encodeOctetString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ContentCorrelator(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ContentCorrelator */

/* eslint-enable */
