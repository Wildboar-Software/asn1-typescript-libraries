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

/* START_OF_SYMBOL_DEFINITION LocalIPMIdentifier */
/**
 * @summary LocalIPMIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LocalIPMIdentifier  ::=  PrintableString(SIZE (0..ub-local-ipm-identifier))
 * ```
 */
export type LocalIPMIdentifier = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION LocalIPMIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LocalIPMIdentifier */
let _cached_decoder_for_LocalIPMIdentifier: $.ASN1Decoder<LocalIPMIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LocalIPMIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_LocalIPMIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) LocalIPMIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LocalIPMIdentifier} The decoded data structure.
 */
export function _decode_LocalIPMIdentifier(el: _Element) {
    if (!_cached_decoder_for_LocalIPMIdentifier) {
        _cached_decoder_for_LocalIPMIdentifier = $._decodePrintableString;
    }
    return _cached_decoder_for_LocalIPMIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LocalIPMIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LocalIPMIdentifier */
let _cached_encoder_for_LocalIPMIdentifier: $.ASN1Encoder<LocalIPMIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LocalIPMIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_LocalIPMIdentifier */
/**
 * @summary Encodes a(n) LocalIPMIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocalIPMIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_LocalIPMIdentifier(
    value: LocalIPMIdentifier,
    elGetter: $.ASN1Encoder<LocalIPMIdentifier>
) {
    if (!_cached_encoder_for_LocalIPMIdentifier) {
        _cached_encoder_for_LocalIPMIdentifier = $._encodePrintableString;
    }
    return _cached_encoder_for_LocalIPMIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LocalIPMIdentifier */

/* eslint-enable */
