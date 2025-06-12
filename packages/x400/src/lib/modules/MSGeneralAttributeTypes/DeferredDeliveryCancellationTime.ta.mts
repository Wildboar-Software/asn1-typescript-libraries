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

/* START_OF_SYMBOL_DEFINITION DeferredDeliveryCancellationTime */
/**
 * @summary DeferredDeliveryCancellationTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeferredDeliveryCancellationTime  ::=  UTCTime
 * ```
 */
export type DeferredDeliveryCancellationTime = UTCTime; // UTCTime
/* END_OF_SYMBOL_DEFINITION DeferredDeliveryCancellationTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeferredDeliveryCancellationTime */
let _cached_decoder_for_DeferredDeliveryCancellationTime: $.ASN1Decoder<DeferredDeliveryCancellationTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeferredDeliveryCancellationTime */

/* START_OF_SYMBOL_DEFINITION _decode_DeferredDeliveryCancellationTime */
/**
 * @summary Decodes an ASN.1 element into a(n) DeferredDeliveryCancellationTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeferredDeliveryCancellationTime} The decoded data structure.
 */
export function _decode_DeferredDeliveryCancellationTime(el: _Element) {
    if (!_cached_decoder_for_DeferredDeliveryCancellationTime) {
        _cached_decoder_for_DeferredDeliveryCancellationTime = $._decodeUTCTime;
    }
    return _cached_decoder_for_DeferredDeliveryCancellationTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeferredDeliveryCancellationTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeferredDeliveryCancellationTime */
let _cached_encoder_for_DeferredDeliveryCancellationTime: $.ASN1Encoder<DeferredDeliveryCancellationTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeferredDeliveryCancellationTime */

/* START_OF_SYMBOL_DEFINITION _encode_DeferredDeliveryCancellationTime */
/**
 * @summary Encodes a(n) DeferredDeliveryCancellationTime into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeferredDeliveryCancellationTime, encoded as an ASN.1 Element.
 */
export function _encode_DeferredDeliveryCancellationTime(
    value: DeferredDeliveryCancellationTime,
    elGetter: $.ASN1Encoder<DeferredDeliveryCancellationTime>
) {
    if (!_cached_encoder_for_DeferredDeliveryCancellationTime) {
        _cached_encoder_for_DeferredDeliveryCancellationTime = $._encodeUTCTime;
    }
    return _cached_encoder_for_DeferredDeliveryCancellationTime(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_DeferredDeliveryCancellationTime */

/* eslint-enable */
