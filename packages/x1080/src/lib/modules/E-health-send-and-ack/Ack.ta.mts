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
import {
    Ack_error,
    _decode_Ack_error,
    _encode_Ack_error,
} from '../E-health-send-and-ack/Ack-error.ta.mjs';
export {
    Ack_error,
    _decode_Ack_error,
    _encode_Ack_error,
} from '../E-health-send-and-ack/Ack-error.ta.mjs';

/* START_OF_SYMBOL_DEFINITION Ack */
/**
 * @summary Ack
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Ack  ::=  CHOICE {
 *   ok     NULL,
 *   error
 *     SEQUENCE {code       ERROR.&code({Simple-Message-Errors}),
 *               parameter  ERROR.&Parameter({Simple-Message-Errors}{@.code})
 *   }
 * }
 * ```
 */
export type Ack =
    | { ok: NULL } /* CHOICE_ALT_ROOT */
    | { error: Ack_error } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Ack */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Ack */
let _cached_decoder_for_Ack: $.ASN1Decoder<Ack> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Ack */

/* START_OF_SYMBOL_DEFINITION _decode_Ack */
/**
 * @summary Decodes an ASN.1 element into a(n) Ack
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Ack} The decoded data structure.
 */
export function _decode_Ack(el: _Element) {
    if (!_cached_decoder_for_Ack) {
        _cached_decoder_for_Ack = $._decode_inextensible_choice<Ack>({
            'CONTEXT 0': ['ok', $._decodeNull],
            'CONTEXT 1': ['error', _decode_Ack_error],
        });
    }
    return _cached_decoder_for_Ack(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Ack */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Ack */
let _cached_encoder_for_Ack: $.ASN1Encoder<Ack> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Ack */

/* START_OF_SYMBOL_DEFINITION _encode_Ack */
/**
 * @summary Encodes a(n) Ack into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ack, encoded as an ASN.1 Element.
 */
export function _encode_Ack(value: Ack, elGetter: $.ASN1Encoder<Ack>) {
    if (!_cached_encoder_for_Ack) {
        _cached_encoder_for_Ack = $._encode_choice<Ack>(
            {
                ok: $._encodeNull,
                error: _encode_Ack_error,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Ack(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Ack */

/* eslint-enable */
