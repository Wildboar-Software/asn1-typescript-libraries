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

/* START_OF_SYMBOL_DEFINITION SelectionPriority */
/**
 * @summary SelectionPriority
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SelectionPriority  ::=  INTEGER(1..10)
 * ```
 */
export type SelectionPriority = INTEGER;
/* END_OF_SYMBOL_DEFINITION SelectionPriority */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SelectionPriority */
let _cached_decoder_for_SelectionPriority: $.ASN1Decoder<SelectionPriority> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SelectionPriority */

/* START_OF_SYMBOL_DEFINITION _decode_SelectionPriority */
/**
 * @summary Decodes an ASN.1 element into a(n) SelectionPriority
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SelectionPriority} The decoded data structure.
 */
export function _decode_SelectionPriority(el: _Element) {
    if (!_cached_decoder_for_SelectionPriority) {
        _cached_decoder_for_SelectionPriority = $._decodeInteger;
    }
    return _cached_decoder_for_SelectionPriority(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SelectionPriority */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SelectionPriority */
let _cached_encoder_for_SelectionPriority: $.ASN1Encoder<SelectionPriority> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SelectionPriority */

/* START_OF_SYMBOL_DEFINITION _encode_SelectionPriority */
/**
 * @summary Encodes a(n) SelectionPriority into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SelectionPriority, encoded as an ASN.1 Element.
 */
export function _encode_SelectionPriority(
    value: SelectionPriority,
    elGetter: $.ASN1Encoder<SelectionPriority>
) {
    if (!_cached_encoder_for_SelectionPriority) {
        _cached_encoder_for_SelectionPriority = $._encodeInteger;
    }
    return _cached_encoder_for_SelectionPriority(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SelectionPriority */

/* eslint-enable */
