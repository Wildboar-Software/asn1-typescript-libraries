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

/* START_OF_SYMBOL_DEFINITION ClockDrift */
/**
 * @summary ClockDrift
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClockDrift  ::=  REAL
 * ```
 */
export type ClockDrift = REAL; // RealType
/* END_OF_SYMBOL_DEFINITION ClockDrift */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ClockDrift */
let _cached_decoder_for_ClockDrift: $.ASN1Decoder<ClockDrift> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ClockDrift */

/* START_OF_SYMBOL_DEFINITION _decode_ClockDrift */
/**
 * @summary Decodes an ASN.1 element into a(n) ClockDrift
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ClockDrift} The decoded data structure.
 */
export function _decode_ClockDrift(el: _Element) {
    if (!_cached_decoder_for_ClockDrift) {
        _cached_decoder_for_ClockDrift = $._decodeReal;
    }
    return _cached_decoder_for_ClockDrift(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ClockDrift */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ClockDrift */
let _cached_encoder_for_ClockDrift: $.ASN1Encoder<ClockDrift> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ClockDrift */

/* START_OF_SYMBOL_DEFINITION _encode_ClockDrift */
/**
 * @summary Encodes a(n) ClockDrift into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClockDrift, encoded as an ASN.1 Element.
 */
export function _encode_ClockDrift(
    value: ClockDrift,
    elGetter: $.ASN1Encoder<ClockDrift>
) {
    if (!_cached_encoder_for_ClockDrift) {
        _cached_encoder_for_ClockDrift = $._encodeReal;
    }
    return _cached_encoder_for_ClockDrift(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ClockDrift */

/* eslint-enable */
