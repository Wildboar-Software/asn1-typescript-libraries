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

/* START_OF_SYMBOL_DEFINITION CumLeapSeconds */
/**
 * @summary CumLeapSeconds
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CumLeapSeconds  ::=  INTEGER(0..255)
 * ```
 */
export type CumLeapSeconds = INTEGER;
/* END_OF_SYMBOL_DEFINITION CumLeapSeconds */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CumLeapSeconds */
let _cached_decoder_for_CumLeapSeconds: $.ASN1Decoder<CumLeapSeconds> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CumLeapSeconds */

/* START_OF_SYMBOL_DEFINITION _decode_CumLeapSeconds */
/**
 * @summary Decodes an ASN.1 element into a(n) CumLeapSeconds
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CumLeapSeconds} The decoded data structure.
 */
export function _decode_CumLeapSeconds(el: _Element) {
    if (!_cached_decoder_for_CumLeapSeconds) {
        _cached_decoder_for_CumLeapSeconds = $._decodeInteger;
    }
    return _cached_decoder_for_CumLeapSeconds(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CumLeapSeconds */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CumLeapSeconds */
let _cached_encoder_for_CumLeapSeconds: $.ASN1Encoder<CumLeapSeconds> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CumLeapSeconds */

/* START_OF_SYMBOL_DEFINITION _encode_CumLeapSeconds */
/**
 * @summary Encodes a(n) CumLeapSeconds into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CumLeapSeconds, encoded as an ASN.1 Element.
 */
export function _encode_CumLeapSeconds(
    value: CumLeapSeconds,
    elGetter: $.ASN1Encoder<CumLeapSeconds>
) {
    if (!_cached_encoder_for_CumLeapSeconds) {
        _cached_encoder_for_CumLeapSeconds = $._encodeInteger;
    }
    return _cached_encoder_for_CumLeapSeconds(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CumLeapSeconds */

/* eslint-enable */
