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

/* START_OF_SYMBOL_DEFINITION MessageSize */
/**
 * @summary MessageSize
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageSize  ::=  INTEGER
 * ```
 */
export type MessageSize = INTEGER;
/* END_OF_SYMBOL_DEFINITION MessageSize */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageSize */
let _cached_decoder_for_MessageSize: $.ASN1Decoder<MessageSize> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageSize */

/* START_OF_SYMBOL_DEFINITION _decode_MessageSize */
/**
 * @summary Decodes an ASN.1 element into a(n) MessageSize
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageSize} The decoded data structure.
 */
export function _decode_MessageSize(el: _Element) {
    if (!_cached_decoder_for_MessageSize) {
        _cached_decoder_for_MessageSize = $._decodeInteger;
    }
    return _cached_decoder_for_MessageSize(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MessageSize */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageSize */
let _cached_encoder_for_MessageSize: $.ASN1Encoder<MessageSize> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageSize */

/* START_OF_SYMBOL_DEFINITION _encode_MessageSize */
/**
 * @summary Encodes a(n) MessageSize into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageSize, encoded as an ASN.1 Element.
 */
export function _encode_MessageSize(
    value: MessageSize,
    elGetter: $.ASN1Encoder<MessageSize>
) {
    if (!_cached_encoder_for_MessageSize) {
        _cached_encoder_for_MessageSize = $._encodeInteger;
    }
    return _cached_encoder_for_MessageSize(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MessageSize */

/* eslint-enable */
