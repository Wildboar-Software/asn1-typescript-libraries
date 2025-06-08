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

/* START_OF_SYMBOL_DEFINITION SelectClock */
/**
 * @summary SelectClock
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SelectClock  ::=  INTEGER(0..255)
 * ```
 */
export type SelectClock = INTEGER;
/* END_OF_SYMBOL_DEFINITION SelectClock */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SelectClock */
let _cached_decoder_for_SelectClock: $.ASN1Decoder<SelectClock> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SelectClock */

/* START_OF_SYMBOL_DEFINITION _decode_SelectClock */
/**
 * @summary Decodes an ASN.1 element into a(n) SelectClock
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SelectClock} The decoded data structure.
 */
export function _decode_SelectClock(el: _Element) {
    if (!_cached_decoder_for_SelectClock) {
        _cached_decoder_for_SelectClock = $._decodeInteger;
    }
    return _cached_decoder_for_SelectClock(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SelectClock */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SelectClock */
let _cached_encoder_for_SelectClock: $.ASN1Encoder<SelectClock> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SelectClock */

/* START_OF_SYMBOL_DEFINITION _encode_SelectClock */
/**
 * @summary Encodes a(n) SelectClock into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SelectClock, encoded as an ASN.1 Element.
 */
export function _encode_SelectClock(
    value: SelectClock,
    elGetter: $.ASN1Encoder<SelectClock>
) {
    if (!_cached_encoder_for_SelectClock) {
        _cached_encoder_for_SelectClock = $._encodeInteger;
    }
    return _cached_encoder_for_SelectClock(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SelectClock */

/* eslint-enable */
