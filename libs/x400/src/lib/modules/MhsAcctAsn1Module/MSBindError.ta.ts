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

/* START_OF_SYMBOL_DEFINITION MSBindError */
/**
 * @summary MSBindError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MSBindError  ::=  INTEGER
 * ```
 */
export type MSBindError = INTEGER;
/* END_OF_SYMBOL_DEFINITION MSBindError */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MSBindError */
let _cached_decoder_for_MSBindError: $.ASN1Decoder<MSBindError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MSBindError */

/* START_OF_SYMBOL_DEFINITION _decode_MSBindError */
/**
 * @summary Decodes an ASN.1 element into a(n) MSBindError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MSBindError} The decoded data structure.
 */
export function _decode_MSBindError(el: _Element) {
    if (!_cached_decoder_for_MSBindError) {
        _cached_decoder_for_MSBindError = $._decodeInteger;
    }
    return _cached_decoder_for_MSBindError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MSBindError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MSBindError */
let _cached_encoder_for_MSBindError: $.ASN1Encoder<MSBindError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MSBindError */

/* START_OF_SYMBOL_DEFINITION _encode_MSBindError */
/**
 * @summary Encodes a(n) MSBindError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MSBindError, encoded as an ASN.1 Element.
 */
export function _encode_MSBindError(
    value: MSBindError,
    elGetter: $.ASN1Encoder<MSBindError>
) {
    if (!_cached_encoder_for_MSBindError) {
        _cached_encoder_for_MSBindError = $._encodeInteger;
    }
    return _cached_encoder_for_MSBindError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MSBindError */

/* eslint-enable */
