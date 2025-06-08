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

/* START_OF_SYMBOL_DEFINITION LoopbackError */
/**
 * @summary LoopbackError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LoopbackError  ::=  CHOICE {errorBitNo  INTEGER,
 *                           percent     REAL
 * }
 * ```
 */
export type LoopbackError =
    | { errorBitNo: INTEGER } /* CHOICE_ALT_ROOT */
    | { percent: REAL } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION LoopbackError */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LoopbackError */
let _cached_decoder_for_LoopbackError: $.ASN1Decoder<LoopbackError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LoopbackError */

/* START_OF_SYMBOL_DEFINITION _decode_LoopbackError */
/**
 * @summary Decodes an ASN.1 element into a(n) LoopbackError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LoopbackError} The decoded data structure.
 */
export function _decode_LoopbackError(el: _Element) {
    if (!_cached_decoder_for_LoopbackError) {
        _cached_decoder_for_LoopbackError = $._decode_inextensible_choice<LoopbackError>(
            {
                'UNIVERSAL 2': ['errorBitNo', $._decodeInteger],
                'UNIVERSAL 9': ['percent', $._decodeReal],
            }
        );
    }
    return _cached_decoder_for_LoopbackError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LoopbackError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LoopbackError */
let _cached_encoder_for_LoopbackError: $.ASN1Encoder<LoopbackError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LoopbackError */

/* START_OF_SYMBOL_DEFINITION _encode_LoopbackError */
/**
 * @summary Encodes a(n) LoopbackError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LoopbackError, encoded as an ASN.1 Element.
 */
export function _encode_LoopbackError(
    value: LoopbackError,
    elGetter: $.ASN1Encoder<LoopbackError>
) {
    if (!_cached_encoder_for_LoopbackError) {
        _cached_encoder_for_LoopbackError = $._encode_choice<LoopbackError>(
            {
                errorBitNo: $._encodeInteger,
                percent: $._encodeReal,
            },
            $.BER
        );
    }
    return _cached_encoder_for_LoopbackError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LoopbackError */

/* eslint-enable */
