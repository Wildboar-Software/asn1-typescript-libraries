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

/* START_OF_SYMBOL_DEFINITION LastUpdateTime */
/**
 * @summary LastUpdateTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LastUpdateTime  ::=  GeneralizedTime
 * ```
 */
export type LastUpdateTime = GeneralizedTime; // GeneralizedTime
/* END_OF_SYMBOL_DEFINITION LastUpdateTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LastUpdateTime */
let _cached_decoder_for_LastUpdateTime: $.ASN1Decoder<LastUpdateTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LastUpdateTime */

/* START_OF_SYMBOL_DEFINITION _decode_LastUpdateTime */
/**
 * @summary Decodes an ASN.1 element into a(n) LastUpdateTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LastUpdateTime} The decoded data structure.
 */
export function _decode_LastUpdateTime(el: _Element) {
    if (!_cached_decoder_for_LastUpdateTime) {
        _cached_decoder_for_LastUpdateTime = $._decodeGeneralizedTime;
    }
    return _cached_decoder_for_LastUpdateTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LastUpdateTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LastUpdateTime */
let _cached_encoder_for_LastUpdateTime: $.ASN1Encoder<LastUpdateTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LastUpdateTime */

/* START_OF_SYMBOL_DEFINITION _encode_LastUpdateTime */
/**
 * @summary Encodes a(n) LastUpdateTime into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LastUpdateTime, encoded as an ASN.1 Element.
 */
export function _encode_LastUpdateTime(
    value: LastUpdateTime,
    elGetter: $.ASN1Encoder<LastUpdateTime>
) {
    if (!_cached_encoder_for_LastUpdateTime) {
        _cached_encoder_for_LastUpdateTime = $._encodeGeneralizedTime;
    }
    return _cached_encoder_for_LastUpdateTime(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LastUpdateTime */

/* eslint-enable */
