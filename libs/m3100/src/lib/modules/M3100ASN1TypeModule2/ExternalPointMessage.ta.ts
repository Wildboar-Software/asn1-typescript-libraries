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

/* START_OF_SYMBOL_DEFINITION ExternalPointMessage */
/**
 * @summary ExternalPointMessage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExternalPointMessage  ::=  GraphicString
 * ```
 */
export type ExternalPointMessage = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION ExternalPointMessage */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExternalPointMessage */
let _cached_decoder_for_ExternalPointMessage: $.ASN1Decoder<ExternalPointMessage> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExternalPointMessage */

/* START_OF_SYMBOL_DEFINITION _decode_ExternalPointMessage */
/**
 * @summary Decodes an ASN.1 element into a(n) ExternalPointMessage
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExternalPointMessage} The decoded data structure.
 */
export function _decode_ExternalPointMessage(el: _Element) {
    if (!_cached_decoder_for_ExternalPointMessage) {
        _cached_decoder_for_ExternalPointMessage = $._decodeGraphicString;
    }
    return _cached_decoder_for_ExternalPointMessage(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExternalPointMessage */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExternalPointMessage */
let _cached_encoder_for_ExternalPointMessage: $.ASN1Encoder<ExternalPointMessage> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExternalPointMessage */

/* START_OF_SYMBOL_DEFINITION _encode_ExternalPointMessage */
/**
 * @summary Encodes a(n) ExternalPointMessage into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExternalPointMessage, encoded as an ASN.1 Element.
 */
export function _encode_ExternalPointMessage(
    value: ExternalPointMessage,
    elGetter: $.ASN1Encoder<ExternalPointMessage>
) {
    if (!_cached_encoder_for_ExternalPointMessage) {
        _cached_encoder_for_ExternalPointMessage = $._encodeGraphicString;
    }
    return _cached_encoder_for_ExternalPointMessage(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExternalPointMessage */

/* eslint-enable */
