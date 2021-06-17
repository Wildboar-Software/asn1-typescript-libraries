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

/* START_OF_SYMBOL_DEFINITION SmUserInfoSent */
/**
 * @summary SmUserInfoSent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SmUserInfoSent  ::=  CHOICE {
 *   nothingSent      NULL,
 *   informationSent  GraphicString
 * }
 * ```
 */
export type SmUserInfoSent =
    | { nothingSent: NULL } /* CHOICE_ALT_ROOT */
    | { informationSent: GraphicString } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION SmUserInfoSent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SmUserInfoSent */
let _cached_decoder_for_SmUserInfoSent: $.ASN1Decoder<SmUserInfoSent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SmUserInfoSent */

/* START_OF_SYMBOL_DEFINITION _decode_SmUserInfoSent */
/**
 * @summary Decodes an ASN.1 element into a(n) SmUserInfoSent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SmUserInfoSent} The decoded data structure.
 */
export function _decode_SmUserInfoSent(el: _Element) {
    if (!_cached_decoder_for_SmUserInfoSent) {
        _cached_decoder_for_SmUserInfoSent = $._decode_inextensible_choice<SmUserInfoSent>(
            {
                'UNIVERSAL 5': ['nothingSent', $._decodeNull],
                'UNIVERSAL 25': ['informationSent', $._decodeGraphicString],
            }
        );
    }
    return _cached_decoder_for_SmUserInfoSent(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SmUserInfoSent */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SmUserInfoSent */
let _cached_encoder_for_SmUserInfoSent: $.ASN1Encoder<SmUserInfoSent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SmUserInfoSent */

/* START_OF_SYMBOL_DEFINITION _encode_SmUserInfoSent */
/**
 * @summary Encodes a(n) SmUserInfoSent into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SmUserInfoSent, encoded as an ASN.1 Element.
 */
export function _encode_SmUserInfoSent(
    value: SmUserInfoSent,
    elGetter: $.ASN1Encoder<SmUserInfoSent>
) {
    if (!_cached_encoder_for_SmUserInfoSent) {
        _cached_encoder_for_SmUserInfoSent = $._encode_choice<SmUserInfoSent>(
            {
                nothingSent: $._encodeNull,
                informationSent: $._encodeGraphicString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_SmUserInfoSent(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SmUserInfoSent */

/* eslint-enable */
