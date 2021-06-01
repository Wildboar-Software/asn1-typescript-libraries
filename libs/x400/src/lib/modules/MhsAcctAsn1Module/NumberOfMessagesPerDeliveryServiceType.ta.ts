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

/* START_OF_SYMBOL_DEFINITION NumberOfMessagesPerDeliveryServiceType */
/**
 * @summary NumberOfMessagesPerDeliveryServiceType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NumberOfMessagesPerDeliveryServiceType  ::=  SET OF INTEGER
 * ```
 */
export type NumberOfMessagesPerDeliveryServiceType = INTEGER[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION NumberOfMessagesPerDeliveryServiceType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NumberOfMessagesPerDeliveryServiceType */
let _cached_decoder_for_NumberOfMessagesPerDeliveryServiceType: $.ASN1Decoder<NumberOfMessagesPerDeliveryServiceType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NumberOfMessagesPerDeliveryServiceType */

/* START_OF_SYMBOL_DEFINITION _decode_NumberOfMessagesPerDeliveryServiceType */
/**
 * @summary Decodes an ASN.1 element into a(n) NumberOfMessagesPerDeliveryServiceType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NumberOfMessagesPerDeliveryServiceType} The decoded data structure.
 */
export function _decode_NumberOfMessagesPerDeliveryServiceType(el: _Element) {
    if (!_cached_decoder_for_NumberOfMessagesPerDeliveryServiceType) {
        _cached_decoder_for_NumberOfMessagesPerDeliveryServiceType = $._decodeSetOf<INTEGER>(
            () => $._decodeInteger
        );
    }
    return _cached_decoder_for_NumberOfMessagesPerDeliveryServiceType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NumberOfMessagesPerDeliveryServiceType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NumberOfMessagesPerDeliveryServiceType */
let _cached_encoder_for_NumberOfMessagesPerDeliveryServiceType: $.ASN1Encoder<NumberOfMessagesPerDeliveryServiceType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NumberOfMessagesPerDeliveryServiceType */

/* START_OF_SYMBOL_DEFINITION _encode_NumberOfMessagesPerDeliveryServiceType */
/**
 * @summary Encodes a(n) NumberOfMessagesPerDeliveryServiceType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumberOfMessagesPerDeliveryServiceType, encoded as an ASN.1 Element.
 */
export function _encode_NumberOfMessagesPerDeliveryServiceType(
    value: NumberOfMessagesPerDeliveryServiceType,
    elGetter: $.ASN1Encoder<NumberOfMessagesPerDeliveryServiceType>
) {
    if (!_cached_encoder_for_NumberOfMessagesPerDeliveryServiceType) {
        _cached_encoder_for_NumberOfMessagesPerDeliveryServiceType = $._encodeSetOf<INTEGER>(
            () => $._encodeInteger,
            $.BER
        );
    }
    return _cached_encoder_for_NumberOfMessagesPerDeliveryServiceType(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_NumberOfMessagesPerDeliveryServiceType */

/* eslint-enable */
