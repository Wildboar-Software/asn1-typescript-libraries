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

/* START_OF_SYMBOL_DEFINITION ChannelNumber */
/**
 * @summary ChannelNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChannelNumber  ::=  INTEGER
 * ```
 */
export type ChannelNumber = INTEGER;
/* END_OF_SYMBOL_DEFINITION ChannelNumber */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ChannelNumber */
let _cached_decoder_for_ChannelNumber: $.ASN1Decoder<ChannelNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ChannelNumber */

/* START_OF_SYMBOL_DEFINITION _decode_ChannelNumber */
/**
 * @summary Decodes an ASN.1 element into a(n) ChannelNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ChannelNumber} The decoded data structure.
 */
export function _decode_ChannelNumber(el: _Element) {
    if (!_cached_decoder_for_ChannelNumber) {
        _cached_decoder_for_ChannelNumber = $._decodeInteger;
    }
    return _cached_decoder_for_ChannelNumber(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ChannelNumber */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ChannelNumber */
let _cached_encoder_for_ChannelNumber: $.ASN1Encoder<ChannelNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ChannelNumber */

/* START_OF_SYMBOL_DEFINITION _encode_ChannelNumber */
/**
 * @summary Encodes a(n) ChannelNumber into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChannelNumber, encoded as an ASN.1 Element.
 */
export function _encode_ChannelNumber(
    value: ChannelNumber,
    elGetter: $.ASN1Encoder<ChannelNumber>
) {
    if (!_cached_encoder_for_ChannelNumber) {
        _cached_encoder_for_ChannelNumber = $._encodeInteger;
    }
    return _cached_encoder_for_ChannelNumber(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ChannelNumber */

/* eslint-enable */
