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

/* START_OF_SYMBOL_DEFINITION PollInterval */
/**
 * @summary PollInterval
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PollInterval  ::=  INTEGER(0..MAX)
 * ```
 */
export type PollInterval = INTEGER;
/* END_OF_SYMBOL_DEFINITION PollInterval */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PollInterval */
let _cached_decoder_for_PollInterval: $.ASN1Decoder<PollInterval> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PollInterval */

/* START_OF_SYMBOL_DEFINITION _decode_PollInterval */
/**
 * @summary Decodes an ASN.1 element into a(n) PollInterval
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PollInterval} The decoded data structure.
 */
export function _decode_PollInterval(el: _Element) {
    if (!_cached_decoder_for_PollInterval) {
        _cached_decoder_for_PollInterval = $._decodeInteger;
    }
    return _cached_decoder_for_PollInterval(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PollInterval */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PollInterval */
let _cached_encoder_for_PollInterval: $.ASN1Encoder<PollInterval> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PollInterval */

/* START_OF_SYMBOL_DEFINITION _encode_PollInterval */
/**
 * @summary Encodes a(n) PollInterval into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PollInterval, encoded as an ASN.1 Element.
 */
export function _encode_PollInterval(
    value: PollInterval,
    elGetter: $.ASN1Encoder<PollInterval>
) {
    if (!_cached_encoder_for_PollInterval) {
        _cached_encoder_for_PollInterval = $._encodeInteger;
    }
    return _cached_encoder_for_PollInterval(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PollInterval */

/* eslint-enable */
