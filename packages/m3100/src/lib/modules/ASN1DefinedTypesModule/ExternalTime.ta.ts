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

/* START_OF_SYMBOL_DEFINITION ExternalTime */
/**
 * @summary ExternalTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExternalTime  ::=  GeneralizedTime
 * ```
 */
export type ExternalTime = GeneralizedTime; // GeneralizedTime
/* END_OF_SYMBOL_DEFINITION ExternalTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExternalTime */
let _cached_decoder_for_ExternalTime: $.ASN1Decoder<ExternalTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExternalTime */

/* START_OF_SYMBOL_DEFINITION _decode_ExternalTime */
/**
 * @summary Decodes an ASN.1 element into a(n) ExternalTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExternalTime} The decoded data structure.
 */
export function _decode_ExternalTime(el: _Element) {
    if (!_cached_decoder_for_ExternalTime) {
        _cached_decoder_for_ExternalTime = $._decodeGeneralizedTime;
    }
    return _cached_decoder_for_ExternalTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExternalTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExternalTime */
let _cached_encoder_for_ExternalTime: $.ASN1Encoder<ExternalTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExternalTime */

/* START_OF_SYMBOL_DEFINITION _encode_ExternalTime */
/**
 * @summary Encodes a(n) ExternalTime into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExternalTime, encoded as an ASN.1 Element.
 */
export function _encode_ExternalTime(
    value: ExternalTime,
    elGetter: $.ASN1Encoder<ExternalTime>
) {
    if (!_cached_encoder_for_ExternalTime) {
        _cached_encoder_for_ExternalTime = $._encodeGeneralizedTime;
    }
    return _cached_encoder_for_ExternalTime(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExternalTime */

/* eslint-enable */
